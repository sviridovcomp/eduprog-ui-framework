import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "./Backdrop.scss";

export interface IBackdropProps {
  open: boolean;
}

const Backdrop: FC<IBackdropProps> = ({ open }) => {
  return (
    <CSSTransition
      in={open}
      unmountOnExit
      timeout={400}
      classNames="backdrop-animation"
    >
      <div className="backdrop" />
    </CSSTransition>
  );
};

export default Backdrop;
