import React, { FC, useState } from "react";
import "./Dropdown.scss";

export type DropdownPropsType = {
  children: React.ReactNode;
  toggle: React.ReactNode;
  direction?:
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "top-left"
    | "top-center"
    | "top-right";
  clearly?: boolean;
  fullwidth?: boolean;
};

const Dropdown: FC<DropdownPropsType> = ({
  children,
  toggle,
  direction,
  clearly = false,
  fullwidth = false,
}) => {
  const [active, setActive] = useState(false);
  const dropdownTransitionClasses = [
    "dropdown-transition",
    active && "dropdown-transition-active",
  ];
  const dropdownItemClasses = [
    "dropdown-item",
    direction && `dropdown-item-direction_${direction}`,
    clearly && "dropdown-item-clearly",
    fullwidth && "dropdown-item-fullwidth",
  ];
  const onClick = () => {
    setActive(!active);
  };

  return (
    <div className="dropdown">
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
