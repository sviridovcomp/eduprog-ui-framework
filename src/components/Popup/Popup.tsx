import useClickAway from "@utils/hooks/useClickAway";
import clsx from "clsx";
import React, { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../Dropdown/Dropdown.scss";

export type PopupProps = {
  open?: boolean;
  /**
   * Направление раскрытия popup
   */
  direction:
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "top-left"
    | "top-center"
    | "top-right";

  /**
   * Убрать стрелочку направления popup
   */
  clearly?: boolean;

  /**
   * Dropdown в полный размер родительского блока
   */
  fullwidth?: boolean;

  onClose?: () => void;

  contentStyle?: React.CSSProperties;

  contentClassName?: string;

  wrapperStyle?: React.CSSProperties;

  wrapperClassName?: string;

  rootStyle?: React.CSSProperties;

  rootClassName?: string;
};

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
