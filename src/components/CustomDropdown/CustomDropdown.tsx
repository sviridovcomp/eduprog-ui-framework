import { defaultProps } from "@utils/defaultProps";
import { useClickAway } from "@utils/hooks/useClickAway";
import classNames from "classnames";
import React, { FC, useRef } from "react";
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
}

const CustomDropdown: FC<CustomDropdownPropsType> = ({open = false, direction, clearly, fullwidth, children, onClose, style}) => {
    const dropdownRef = useRef(null);
    useClickAway(dropdownRef, () => {
        if (onClose) { 
            onClose();
        }
    });

    return (
        <div ref={dropdownRef} className="dropdown" style={style}>
            <div
        className={classNames("dropdown-transition", {
          "dropdown-transition-active": open,
        })}
      >
        <div
          className={classNames(
            "dropdown-item",
            { [`dropdown-item-direction_${direction}`]: direction },
            { "dropdown-item-clearly": clearly },
            { "dropdown-fullwidth": fullwidth }
          )}
        >
          <div className="dropdown-item-content">{children}</div>
        </div>
      </div>
      </div>
    );
};

export default CustomDropdown;