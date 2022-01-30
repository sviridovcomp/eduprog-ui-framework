import React, { FC, useRef, useState } from "react";
import "./Dropdown.scss";
import classList from "@utils/classList/classList";
import { defaultProps } from "@utils/defaultProps";

export type DropdownPropsType = defaultProps & {
  /**
   * Дочерние элементы Dropdown
   */
  children: React.ReactNode;

  /**
   * Элемент триггер, по клику, на который открывается popup
   */
  toggle: React.ReactNode;

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

  /**
   * Когда dropdown закрывается
   */
  dismissible?: "always" | "toggle" | "outside";
};

/**
 * Компонент для создания выпадающего списка
 */
const Dropdown: FC<DropdownPropsType> = ({
  children,
  toggle,
  direction = "bottom-left",
  clearly = false,
  fullwidth = false,
  dismissible = "always",
  style,
}) => {
  const [active, setActive] = useState(false);
  const dropdownItem = useRef<HTMLDivElement>(null);
  const onClick = () => {
    setActive(!active);

    if (dismissible == "outside") {
      dropdownItem.current?.focus();
    }
  };

  return (
    <div
      className={classList(["dropdown", fullwidth ? "dropdown-fullwidth" : ""])}
      onBlur={() => dismissible == "always" && setActive(false)}
      style={style}
    >
      <div
        className={classList([
          "dropdown-toggle",
          fullwidth ? "dropdown-fullwidth" : "",
        ])}
        onClick={onClick}
      >
        {toggle}
      </div>

      <div
        className={classList([
          "dropdown-transition",
          active ? "dropdown-transition-active" : "",
        ])}
      >
        <div
          tabIndex={1}
          ref={dropdownItem}
          onBlur={() => dismissible == "outside" && setActive(false)}
          className={classList([
            "dropdown-item",
            direction ? `dropdown-item-direction_${direction}` : "",
            clearly ? "dropdown-item-clearly" : "",
            fullwidth ? "dropdown-fullwidth" : "",
          ])}
        >
          <div className="dropdown-item-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
