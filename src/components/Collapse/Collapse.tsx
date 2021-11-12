import React, { FC, useState } from "react";
import "./Collapse.scss";

export type CollapsePropsType = {
  children: React.ReactNode;
  toggle: React.ReactNode;
};

const Collapse: FC<CollapsePropsType> = ({ children, toggle }) => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };

  return (
    <div className="collapse">
      <div className="collapse-toggle" onClick={onClick}>
        {toggle}
      </div>

      {active && <div className="collapse-content">{children}</div>}
    </div>
  );
};

export default Collapse;
