import _ from "lodash";
import { useSwipeable } from "react-swipeable";
import { Transition } from "react-transition-group";
import usePreventScroll from "@utils/hooks/usePreventScroll";
import { TransitionStyles } from "./BottomDrawerStyles";
import clsx from "clsx";
import React, { FC, useRef, useState } from "react";
import "./BottomDrawer.scss";
import Backdrop from "@components/Backdrop/Backdrop";

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
    <Transition
      in={open}
      appear={true}
      timeout={{ appear: 0, enter: 0, exit: duration }}
      unmountOnExit
    >
      {(state) => (
        <div className="BottomDrawer" {...swipeHandlers}>
          <Backdrop open={open} onClick={onClose} />

          <div
            className="BottomDrawer-curtain"
            style={{
              ...(TransitionStyles as any)[state],
              ...getTransforms(),
            }}
          >
            <div className="BottomDrawer-handle" />

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
  );
};

export default BottomDrawer;
