import React from "react";

export type defaultProps = {
  /**
   * Additional class
   */
  className?: string;

  /**
   * Additional styles
   */
  style?: React.CSSProperties;

  /**
   * onPointerDown callback handler
   */
  onPointerDown?: (event?: React.PointerEvent) => void;

  /**
   * onPointerEnter callback handler
   */
  onPointerEnter?: (event?: React.PointerEvent) => void;

  /**
   * onPointerLeave callback handler
   */
  onPointerLeave?: (event?: React.PointerEvent) => void;

  /**
   * onPointerUp callback handler
   */
  onPointerUp?: (event?: React.PointerEvent) => void;

  /**
   * onPointerMove callback handler
   */
  onPointerMove?: (event?: React.PointerEvent) => void;

  /**
   * onFocus callback handler
   */
  onFocus?: (event?: React.FocusEvent) => void;

  /**
   * onBlur callback handler
   */
  onBlur?: (event?: React.FocusEvent) => void;
};