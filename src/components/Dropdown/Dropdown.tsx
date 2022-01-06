import React, { FC, useState } from "react";
import "./Dropdown.scss";
import classList from "@utils/classList/classList";

export type DropdownPropsType = {
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
   * Dropdown скрывается при клике прочие элементы
   */
  dismissible?: boolean;
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
  dismissible = true,
}) => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };

  return (
    <div
      className={classList(["dropdown", fullwidth ? "dropdown-fullwidth" : ""])}
      onBlur={() => dismissible && setActive(false)}
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
