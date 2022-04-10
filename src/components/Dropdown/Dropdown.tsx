import React, { FC, useRef, useState } from "react";
import "./Dropdown.scss";
import { defaultProps } from "@utils/defaultProps";
import classNames from "classnames";
import { useClickAway } from "@utils/hooks/useClickAway";
import { asyncSleep } from "@utils/utils/utils";
import { CSSTransition } from "react-transition-group";

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

  onOpen?: () => void;

  onClose?: () => void;

  transition?: "fade" | "slide";
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
  onOpen,
  onClose,
  transition = "fade",
}) => {
  const [active, setActive] = useState(false);
  const dropdownItem = useRef<HTMLDivElement>(null);
  useClickAway(dropdownItem, () => {
    if (dismissible != "outside") {
      return;
    }

    setActive(false);

    if (onClose) {
      onClose();
    }
  });

  const onClick = () => {
    setActive(!active);

    if (onOpen) {
      onOpen();
    }
  };

  return (
    <div
      className={classNames("dropdown", { "dropdown-fullwidth": fullwidth })}
      onBlur={() => dismissible == "always" && setActive(false)}
      style={style}
      ref={dropdownItem}
    >
      <div
        className={classNames("dropdown-toggle", {
          "dropdown-fullwidth": fullwidth,
        })}
        onClick={onClick}
      >
        {toggle}
      </div>

      <CSSTransition
        in={active}
        timeout={500}
        unmountOnExit
        classNames={`dropdown-transition_${transition}`}
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
      </CSSTransition>
    </div>
  );
};

export default Dropdown;
