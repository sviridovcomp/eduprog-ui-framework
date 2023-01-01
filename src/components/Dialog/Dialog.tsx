import React, { FC, useState } from "react";
import "./Dialog.scss";
import clsx from "clsx";
import { CSSTransition, Transition } from "react-transition-group";
import Backdrop from "@components/Backdrop/Backdrop";
import usePreventScroll from "@utils/hooks/usePreventScroll";
import Button from "@components/Button";
import CloseIcon from "@icons/Close";
import { useSwipeable } from "react-swipeable";
import debounce from "lodash/debounce";
import { TransitionStyles } from "@components/BottomDrawer/BottomDrawerStyles";

export type DialogPropsType = {
  /**
   * Headline
   */
  label?: string;

  /**
   * Size
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "fluid" | "page";

  /**
   * Makes the dialog visible
   */
  open?: boolean;

  /**
   * Event triggered by closing the dialog
   */
  onClose?: () => void;

  /**
   * Vertical alignment
   */
  verticalAlign?: "top" | "center" | "bottom";

  /**
   * Root Styles of dialog
   */
  rootStyle?: React.CSSProperties;

  /**
   * Root ClassName of dialog
   */
  rootClassName?: string;

  /*
   * Body Styles of dialog
   */
  bodyStyle?: React.CSSProperties;

  /**
   * Body ClassName of dialog
   */
  bodyClassName?: string;

  hasCloser?: boolean;

  children?: React.ReactNode;
};

/**
 * Component to creating dialog windows
 */
const Dialog: FC<DialogPropsType> = ({
  label,
  children,
  size = "md",
  open = false,
  onClose,
  verticalAlign = "bottom",
  rootStyle,
  rootClassName,
  hasCloser = true,
  bodyStyle,
  bodyClassName,
}) => {
  usePreventScroll(open, "dialog-body");

  const [currentDeltaY, setDeltaY] = useState(0);
  const swipeHandlers = useSwipeable({
    onSwipedDown: debounce(
      ({ velocity }) => {
        setDeltaY(0);

        if (velocity > 0.5) {
          onClose?.();
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
      timeout={{ appear: 0, enter: 0, exit: 200 }}
      unmountOnExit={true}
      mountOnEnter={true}
    >
      {(state) => (
        <CSSTransition
          unmountOnExit
          in={open}
          timeout={150}
          classNames={"impl-fade-transition"}
          style={{ "--ep-impl-fade-animation": "150ms", ...rootStyle }}
        >
          <div
            className={clsx("dialog", {
              [`dialog-align_${verticalAlign}`]: verticalAlign,
              rootClassName,
            })}
            {...swipeHandlers}
          >
            <Backdrop open={open} onClick={onClose} />

            <CSSTransition
              in={open}
              unmountOnExit
              timeout={150}
              classNames={"dialog-body-animation"}
            >
              <div
                className={clsx("dialog-body", {
                  [`dialog-body-size_${size}`]: size,
                  [`dialog-body-align_${verticalAlign}`]: verticalAlign,
                  bodyClassName,
                })}
                style={{
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  ...(TransitionStyles as any)[state],
                  ...getTransforms(),
                  ...bodyStyle,
                }}
              >
                {hasCloser && (
                  <div className="dialog-close">
                    <Button
                      view="raised"
                      className="dialog-close-button"
                      onClick={() => onClose && onClose()}
                    >
                      <CloseIcon />
                    </Button>
                  </div>
                )}
                <section className="dialog-header">
                  <h2 className="dialog-heading">{label}</h2>
                </section>
                <section className="dialog-content">{children}</section>
              </div>
            </CSSTransition>
          </div>
        </CSSTransition>
      )}
    </Transition>
  );
};

export default Dialog;
