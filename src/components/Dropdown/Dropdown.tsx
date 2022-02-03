import React, { FC, useRef, useState } from "react";
import "./Dropdown.scss";
import { defaultProps } from "@utils/defaultProps";
import classNames from "classnames";
import { useClickOutside } from "@utils/hooks/useClickOutside";

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
  useClickOutside(dropdownItem, () => {
    setActive(false);
  });

  const onClick = () => {
    setActive(!active);
  };

  return (
    <div
      className={classNames("dropdown", { "dropdown-fullwidth": fullwidth })}
      onBlur={() => dismissible == "always" && setActive(false)}
      style={style}
    >
      <div
        className={classNames("dropdown-toggle", {
          "dropdown-fullwidth": fullwidth,
        })}
        onClick={onClick}
      >
        {toggle}
      </div>

      <div
        className={classNames("dropdown-transition", {
          "dropdown-transition-active": active,
        })}
      >
        <div
          ref={dropdownItem}
          className={classNames(
            "dropdown-item",
            { [`dropdown-item-direction_${direction}`]: true },
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

export default Dropdown;
