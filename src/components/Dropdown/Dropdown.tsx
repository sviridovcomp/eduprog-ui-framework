import React, { FC, useState } from "react";
import "./Dropdown.scss";

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
  direction?:
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "top-left"
    | "top-center"
    | "top-right";

  /**
   * Убрать стрелочку направления popup
   */
  clearly: boolean;

  /**
   * Dropdown в полный размер родительского блока
   */
  fullwidth: boolean;

  /**
   * Dropdown скрывается при клике прочие элементы
   */
  dismissible: boolean;
};

/**
 * Компонент для создания выпадающего списка
 */
const Dropdown: FC<DropdownPropsType> = ({
  children,
  toggle,
  direction,
  clearly = false,
  fullwidth = false,
  dismissible = true,
}) => {
  const [active, setActive] = useState(false);
  const dropdownTransitionClasses = [
    "dropdown-transition",
    active && "dropdown-transition-active",
  ];
  const dropdownItemClasses = [
    "dropdown-item",
    direction ? `dropdown-item-direction_${direction}` : '',
    clearly ? "dropdown-item-clearly" : '',
    fullwidth ? "dropdown-item-fullwidth" : '',
  ];
  const onClick = () => {
    setActive(!active);
  };

  return (
    <div className="dropdown" onBlur={() => dismissible && setActive(false)}>
      <div className="dropdown-toggle" onClick={onClick}>
        {toggle}
      </div>

      <div className={dropdownTransitionClasses.join(" ")}>
        <div className={dropdownItemClasses.join(" ")}>
          <div className="dropdown-item-content">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
