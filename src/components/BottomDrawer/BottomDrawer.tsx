import _ from "lodash";
import { useSwipeable } from "react-swipeable";
import { Transition } from "react-transition-group";
import useKeyDown from "@utils/hooks/useKeyDown";
import usePreventScroll from "@utils/hooks/usePreventScroll";
import { BackdropStyles, TransitionStyles } from "./BottomDrawerStyles";
import useApplyBottomDrawerStyles from "./useApplyBottomDrawerStyles";
import { Key } from "ts-keycode-enum";
import clsx from "clsx";
import React, { FC, useRef, useState } from "react";

export interface IBottomDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
  hideScrollbars?: boolean;
  unmountOnExit?: boolean;
  mountOnEnter?: boolean;
  className?: string;
  backdropClassname?: string;
  children: React.ReactNode;
}

const BottomDrawer: FC<IBottomDrawerProps> = ({
  isVisible,
  children,
  onClose,
  unmountOnExit = true,
  mountOnEnter = true,
  duration = 250,
  hideScrollbars = false,
  className = "",
}) => {
  const classNames = useApplyBottomDrawerStyles(duration, hideScrollbars);
  const nodeRef = useRef(null);

  useKeyDown(onClose, Key.Escape, isVisible);
  usePreventScroll(isVisible, classNames.contentWrapper);

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
      console.log(deltaY);
      setDeltaY(deltaY);
    },
  });

  const getTransforms = (): React.CSSProperties | undefined => {
    if (currentDeltaY < 0) {
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
        in={isVisible}
        timeout={{ appear: 0, enter: 0, exit: duration }}
        unmountOnExit={unmountOnExit}
        mountOnEnter={mountOnEnter}
        nodeRef={nodeRef}
      >
        {(state) => (
          <div ref={nodeRef}>
            <div
              onClick={onClose}
              className={clsx(
                className && `${className}__backdrop`,
                classNames.backdrop
              )}
              // @ts-ignore
              style={BackdropStyles[state]}
            />
            <div
              className={clsx(className, classNames.drawer)}
              style={{
                ...(TransitionStyles as any)[state],
                ...getTransforms(),
              }}
            >
              <div
                {...swipeHandlers}
                className={clsx(
                  className && `${className}__handle-wrapper`,
                  classNames.handleWrapper
                )}
              >
                <div
                  className={clsx(
                    className && `${className}__handle`,
                    classNames.handle
                  )}
                />
              </div>
              <div
                className={clsx(
                  className && `${className}__content`,
                  classNames.contentWrapper
                )}
              >
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

export default BottomDrawer;
