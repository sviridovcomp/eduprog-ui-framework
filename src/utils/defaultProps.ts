/* eslint-disable @typescript-eslint/no-explicit-any */
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
  onPointerDown?: (event?: React.PointerEvent<any>) => void;

  /**
   * onPointerEnter callback handler
   */
  onPointerEnter?: (event?: React.PointerEvent<any>) => void;

  /**
   * onPointerLeave callback handler
   */
  onPointerLeave?: (event?: React.PointerEvent<any>) => void;

  /**
   * onPointerUp callback handler
   */
  onPointerUp?: (event?: React.PointerEvent<any>) => void;

  /**
   * onPointerMove callback handler
   */
  onPointerMove?: (event?: React.PointerEvent<any>) => void;

  /**
   * onFocus callback handler
   */
  onFocus?: (event?: React.FocusEvent<any>) => void;

  /**
   * onBlur callback handler
   */
  onBlur?: (event?: React.FocusEvent<any>) => void;

  /**
   * onKeyDown callback handler
   */
  onKeyDown?: (event?: React.KeyboardEvent<any>) => void;
};