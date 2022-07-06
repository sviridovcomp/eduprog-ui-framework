import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import "./Backdrop.scss";

export interface IBackdropProps {
  open: boolean;

  timeout?: number;

  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Backdrop: FC<IBackdropProps> = ({ open, timeout = 250, onClick }) => {
  return (
    <CSSTransition
      in={open}
      unmountOnExit
      timeout={timeout}
      classNames="impl-fade-transition"
      style={{ "--ep-impl-fade-animation": `${timeout}ms` }}
    >
      <div className="backdrop" onClick={onClick} />
    </CSSTransition>
  );
};

export default Backdrop;
