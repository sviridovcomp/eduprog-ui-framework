import useClickAway from "@utils/hooks/useClickAway";
import clsx from "clsx";
import React, { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../Dropdown/Dropdown.scss";

export type PopupProps = {
  open?: boolean;
  /**
   * Direction
   */
  direction:
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "top-left"
    | "top-center"
    | "top-right";

  /**
   * Remove the arrow pointing in the direction of the popup
   */
  clearly?: boolean;

  /**
   * Popup to the full size of the parent block
   */
  fullwidth?: boolean;

  /**
   * onClose callback handler
   */
  onClose?: () => void;

  /**
   * Content styles
   */
  contentStyle?: React.CSSProperties;

  /**
   * Content className
   */
  contentClassName?: string;

  /**
   * Wrapper styles
   */
  wrapperStyle?: React.CSSProperties;

  /**
   * Wrapper className
   */
  wrapperClassName?: string;

  /**
   * Root styles
   */
  rootStyle?: React.CSSProperties;

  /**
   * Root className
   */
  rootClassName?: string;
};

/**
 * A Popup can be used to display some content on top of another.
 */
const Popup: FC<PopupProps> = ({
  open = false,
  direction,
  clearly,
  fullwidth,
  children,
  onClose,
  contentStyle,
  rootStyle,
  contentClassName,
  wrapperClassName,
  wrapperStyle,
  rootClassName,
}) => {
  const dropdownRef = useRef(null);
  useClickAway(dropdownRef, () => {
    if (onClose) {
      onClose();
    }
  });

  return (
    <div
      ref={dropdownRef}
      className={clsx(rootClassName, "dropdown")}
      style={rootStyle}
    >
      <CSSTransition
        in={open}
        timeout={250}
        unmountOnExit
        classNames="dropdown-transition_fade"
      >
        <div
          style={wrapperStyle}
          className={clsx(
            wrapperClassName,
            "dropdown-item",
            { [`dropdown-item-direction_${direction}`]: direction },
            { "dropdown-item-clearly": clearly },
            { "dropdown-fullwidth": fullwidth }
          )}
        >
          <div
            className={clsx(contentClassName, "dropdown-item-content")}
            style={contentStyle}
          >
            {children}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Popup;
