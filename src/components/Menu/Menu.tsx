import React, { FC, useRef, useState } from "react";
import "./Menu.scss";
import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";
import { useClickAway } from "@utils/hooks/useClickAway";
import { CSSTransition } from "react-transition-group";

export type MenuPropsType = defaultProps & {
  /**
   * Trigger element, on clicking on which a popup opens
   */
  toggle: React.ReactNode;

  /**
   * Direction of popup opening
   */
  direction:
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "top-left"
    | "top-center"
    | "top-right";

  /**
   * Remove the popup direction arrow
   */
  clearly?: boolean;

  /**
   * Dropdown to the full size of the parent unit
   */
  fullwidth?: boolean;

  /**
   * When the dropdown closes
   */
  dismissible?: "always" | "toggle" | "outside";

  onOpen?: () => void;

  onClose?: () => void;

  transition?: "fade" | "slide";

  contentStyle?: React.CSSProperties;

  rootClassNames?: string;
};

/**
 * Component for creating a drop-down list
 */
const Menu: FC<MenuPropsType> = ({
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
  contentStyle,
  rootClassNames,
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
      className={clsx(
        "dropdown",
        { "dropdown-fullwidth": fullwidth },
        rootClassNames
      )}
      onBlur={() => dismissible == "always" && setActive(false)}
      style={style}
      ref={dropdownItem}
    >
      <div
        className={clsx("dropdown-toggle", {
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
          className={clsx(
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

export default Menu;
