import debounce from "lodash/debounce";
import { useSwipeable } from "react-swipeable";
import { Transition } from "react-transition-group";
import usePreventScroll from "@utils/hooks/usePreventScroll";
import { TransitionStyles } from "./BottomDrawerStyles";
import clsx from "clsx";
import React, { FC, useState } from "react";
import "./BottomDrawer.scss";
import Backdrop from "@components/Backdrop/Backdrop";

export interface IBottomDrawerProps {
  /**
   * Is BottomDrawer visible
   */
  open: boolean;

  /**
   * onClose callback handler
   */
  onClose: () => void;

  /**
   * Animation duration in BottomDrawer
   */
  duration?: number;

  /**
   * Hide scrollbars
   */
  hideScrollbars?: boolean;
  unmountOnExit?: boolean;
  mountOnEnter?: boolean;
  className?: string;
  backdropClassname?: string;

  children?: React.ReactNode;
}

/**
 * This component creates a bottom curtain for mobile devices.
 */
const BottomDrawer: FC<IBottomDrawerProps> = ({
  open,
  children,
  onClose,
  unmountOnExit = true,
  mountOnEnter = true,
  duration = 250,
  hideScrollbars = false,
  className,
}) => {
  usePreventScroll(open, "BottomDrawer-content");

  const [currentDeltaY, setDeltaY] = useState(0);
  const swipeHandlers = useSwipeable({
    onSwipedDown: debounce(
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
        in={open}
        appear={true}
        timeout={{ appear: 0, enter: 0, exit: duration }}
        unmountOnExit={unmountOnExit}
        mountOnEnter={mountOnEnter}
      >
        {(state) => (
          <div className={clsx("BottomDrawer", className)} {...swipeHandlers}>
            <Backdrop open={open} onClick={onClose} />

            <div
              className="BottomDrawer-curtain"
              style={{
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    </>
  );
};

export default BottomDrawer;
