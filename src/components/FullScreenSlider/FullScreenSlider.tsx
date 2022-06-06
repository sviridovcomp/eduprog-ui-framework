import clsx from "clsx";
import _ from "lodash";
import React, { FC, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./FullScreenSlider.scss";

export interface IFullScreenSliderLayout {
  image: string;
}

export type FullScreenSliderProps = {
  open?: boolean;

  slides: IFullScreenSliderLayout[];
};

const FullScreenSlider: FC<FullScreenSliderProps> = ({
  open = false,
  slides,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [deltaX, setDeltaX] = useState(0);

  const getNextSlideIndex = () => {
    return Math.abs(slideIndex + 1) % slides.length;
  };

  const getPrevSlideIndex = () => {
    return Math.abs(slideIndex - 1) % slides.length;
  };

  const nextSlide = () => {
    setSlideIndex(getNextSlideIndex());
  };

  const prevSlide = () => {
    setSlideIndex(getPrevSlideIndex());
  };

  const swipeableHandlers = useSwipeable({
    onSwipedLeft: _.debounce(
      ({ velocity }) => {
        setDeltaX(0);

        if (velocity > 0.5) {
          nextSlide();
        }
      },
      500,
      { leading: true }
    ),
    onSwipedRight: _.debounce(
      ({ velocity }) => {
        setDeltaX(0);

        if (velocity > 0.5) {
          prevSlide();
        }
      },
      500,
      { leading: true }
    ),
    onSwiping: ({ deltaX }) => {
      setDeltaX(deltaX);
    },
  });

  useEffect(() => {
    console.log(deltaX);
  }, [deltaX]);

  return (
    <div className="FullScreenSlider">
      {open && (
        <>
          <div
            className="FullScreenSlider-wrapper"
            style={
              deltaX > 0
                ? {
                    background: `url(${
                      slides[getPrevSlideIndex()]
                    }) center center / cover no-repeat fixed`,
                  }
                : {
                    background: `url(${
                      slides[getNextSlideIndex()]
                    }) center center / cover no-repeat fixed`,
                  }
            }
          >
            <div
              className="FullScreenSlider-control"
              {...swipeableHandlers}
              style={{ transform: `translate3d(${deltaX}px, 0, 0)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  style={{ zIndex: slides.length - index }}
                  className={clsx(
                    "FullScreenSlider-content",
                    index == slideIndex && "FullScreenSlider-active"
                  )}
                >
                  <div
                    style={{
                      background: `url(${slide}) center center / cover no-repeat fixed`,
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FullScreenSlider;
