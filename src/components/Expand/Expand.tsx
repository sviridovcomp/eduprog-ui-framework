import React, { FC } from "react";
import "./Expand.scss";
import { CSSTransition } from "react-transition-group";

export type ExpandProps = {
  /**
   * Make the expand open
   */
  open?: boolean;

  /**
   * Transition when opening
   */
  transition?: "fade" | "slide";

  /**
   * Transition duration
   */
  duration?: number;
};

/**
 * Component to show expandable content
 */
const Expand: FC<ExpandProps> = ({
  children,
  open = false,
  transition = "fade",
  duration = 250,
}) => {
  return (
    <CSSTransition
      in={open}
      timeout={duration}
      unmountOnExit
      classNames={`collapse-transition_${transition}`}
    >
      <div className="collapse-content">{children}</div>
    </CSSTransition>
  );
};

export default Expand;
