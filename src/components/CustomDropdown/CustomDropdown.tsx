import { defaultProps } from "@utils/defaultProps";
import { useClickAway } from "@utils/hooks/useClickAway";
import classNames from "classnames";
import React, { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "../Dropdown/Dropdown.scss";

export type CustomDropdownPropsType = defaultProps & {
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
};

const CustomDropdown: FC<CustomDropdownPropsType> = ({
  open = false,
  direction,
  clearly,
  fullwidth,
  children,
  onClose,
  style,
  contentStyle,
}) => {
  const dropdownRef = useRef(null);
  useClickAway(dropdownRef, () => {
    if (onClose) {
      onClose();
    }
  });

  return (
    <div ref={dropdownRef} className="dropdown" style={style}>
      <CSSTransition
        in={open}
        timeout={250}
        unmountOnExit
        classNames="dropdown-transition_fade"
      >
        <div
          className={classNames(
            "dropdown-item",
            { [`dropdown-item-direction_${direction}`]: direction },
            { "dropdown-item-clearly": clearly },
            { "dropdown-fullwidth": fullwidth }
          )}
        >
          <div className="dropdown-item-content" style={contentStyle}>
            {children}
          </div>
        </div>
      </CSSTransition>
    </div>
  );
};

export default CustomDropdown;
