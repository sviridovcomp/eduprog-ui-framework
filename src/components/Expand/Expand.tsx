import React, { FC, useState } from "react";
import "./Expand.scss";
import { CSSTransition } from "react-transition-group";

export type CollapsePropsType = {
  children: React.ReactNode;
  open?: boolean;
  transition?: "fade" | "slide";
};

const Expand: FC<CollapsePropsType> = ({
  children,
  open = false,
  transition = "fade",
}) => {
  return (
    <CSSTransition
      in={open}
      timeout={300}
      unmountOnExit
      classNames={`collapse-transition_${transition}`}
    >
      <div className="collapse-content">{children}</div>
    </CSSTransition>
  );
};

export default Expand;
