import clsx from "clsx";
import _ from "lodash";
import React, { FC, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import "./FullScreenSlider.scss";

export type FullScreenSliderProps = {
  open?: boolean;

  slides: React.ReactNode[];
};

const FullScreenSlider: FC<FullScreenSliderProps> = ({
  open = false,
  slides,
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [deltaX, setDeltaX] = useState(0);

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1) % slides.length);
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
          {slides.map((slide, index) => (
            <div className="FullScreenSlider-wrapper" key={index}>
              <div
                className="FullScreenSlider-control"
                {...swipeableHandlers}
                style={{ transform: `translate3d(${deltaX}px, 0, 0)` }}
              >
                <div
                  className={clsx(
                    "FullScreenSlider-content",
                    index == slideIndex && "FullScreenSlider-active"
                  )}
                >
                  {slide}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FullScreenSlider;
