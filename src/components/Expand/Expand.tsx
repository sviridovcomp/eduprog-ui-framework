import React, { FC, useState } from "react";
import "./Expand.scss";
import classList from "../../utils/classList";

export type CollapsePropsType = {
  children: React.ReactNode;
  toggle: React.ReactNode;
  transition?: "fade" | "slide";
};

const Expand: FC<CollapsePropsType> = ({
  children,
  toggle,
  transition = "fade",
}) => {
  const [active, setActive] = useState(false);
  const collapseTransitionClasses = classList([
    "collapse-transition",
    transition ? `collapse-transition_${transition}` : "",
    active ? "collapse-transition-active" : "",
  ]);
  const onClick = () => {
    setActive(!active);
  };

  return (
    <div className="collapse">
      <div className="collapse-toggle" onClick={onClick}>
        {toggle}
      </div>

      {active && (
        <div className={collapseTransitionClasses}>
          <div className="collapse-content">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Expand;
