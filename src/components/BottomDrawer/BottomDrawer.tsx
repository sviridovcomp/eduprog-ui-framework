import _ from "lodash";
import { useSwipeable } from "react-swipeable";
import { Transition } from "react-transition-group";
import usePreventScroll from "@utils/hooks/usePreventScroll";
import { BackdropStyles, TransitionStyles } from "./BottomDrawerStyles";
import clsx from "clsx";
import React, { FC, useRef, useState } from "react";
import "./BottomDrawer.scss";

export interface IBottomDrawerProps {
  /**
   * Открыт ли BottomDrawer
   */
  open: boolean;

  /**
   * Колбэк, вызываемый при закрытии BottomDrawer
   */
  onClose: () => void;

  /**
   * Продолжительность анимация BottomDrawer
   */
  duration?: number;

  /**
   * Спрятать скроллбары
   */
  hideScrollbars?: boolean;
  unmountOnExit?: boolean;
  mountOnEnter?: boolean;
  className?: string;
  backdropClassname?: string;
}

const BottomDrawer: FC<IBottomDrawerProps> = ({
  open,
  children,
  onClose,
  unmountOnExit = true,
  mountOnEnter = true,
  duration = 250,
  hideScrollbars = false,
  className = "",
}) => {
  usePreventScroll(open, "BottomDrawer-content");

  const [currentDeltaY, setDeltaY] = useState(0);
  const swipeHandlers = useSwipeable({
    onSwipedDown: _.debounce(
      ({ velocity }) => {
        setDeltaY(0);

        if (velocity > 0.5) {
          onClose();
        }
      },
      500,
      { leading: true }
    ),
    onSwiping: ({ deltaY }) => {
      setDeltaY(deltaY);
    },
  });

  const getTransforms = (): React.CSSProperties | undefined => {
    if (currentDeltaY <= 0) {
      return undefined;
    }

    return {
      transform: `translate3d(0, ${currentDeltaY}px, 0)`,
      transition: "none",
    };
  };

  return (
    <>
      <Transition
        appear={true}
        in={open}
        timeout={{ appear: 0, enter: 0, exit: duration }}
        unmountOnExit={unmountOnExit}
        mountOnEnter={mountOnEnter}
      >
        {(state) => (
          <div className="BottomDrawer" {...swipeHandlers}>
            <div
              onClick={onClose}
              className={"BottomDrawer-backdrop"}
              // @ts-ignore
              style={BackdropStyles[state]}
            />

            <div
              className="BottomDrawer-curtain"
              style={{
                ...(TransitionStyles as any)[state],
                ...getTransforms(),
              }}
            >
              <div
                className="BottomDrawer-handle"
                // @ts-ignore
                style={BackdropStyles[state]}
              />

              <div
                className={clsx(
                  "BottomDrawer-content",
                  hideScrollbars && "BottomDrawer-content-hide-scrollbars"
                )}
              >
                <div className="BottomDrawer-content-inner">{children}</div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default BottomDrawer;
