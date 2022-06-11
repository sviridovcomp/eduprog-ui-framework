import React, { FC, useState, useRef } from "react";
import "./Button.scss";
import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";

export type ButtonPropsType = defaultProps & {
  /**
   * View mode
   */
  view?:
    | "default"
    | "action"
    | "link"
    | "pseudo"
    | "clear"
    | "raised"
    | "accent";

  /**
   * Size
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * onClick event handler
   */
  onClick?: (event?: React.PointerEvent<HTMLButtonElement>) => void;

  /**
   * onPointerDown event handler
   */
  onPointerDown?: (event?: React.PointerEvent<HTMLButtonElement>) => void;

  /**
   * onPointerUp event handler
   */
  onPointerUp?: (event?: React.PointerEvent<HTMLButtonElement>) => void;

  /**
   * onPointerLeave event handler
   */
  onPointerLeave?: (event?: React.PointerEvent<HTMLButtonElement>) => void;

  /**
   * onBlur event handler
   */
  onBlur?: (event?: React.FocusEvent<HTMLButtonElement>) => void;
  /**
   * Button name in the DOM
   */
  name?: string;

  /**
   * Controls the width of the button. When 'available' it stretches the button by the width of the parent
   */
  width?: "auto" | "available";

  /**
   * Left additional content
   */
  contentLeft?: React.ReactNode;

  /**
   * Right additional content
   */
  contentRight?: React.ReactNode;

  /**
   * Button type
   */
  type?: "button" | "reset" | "submit";

  /**
   * Button label alignment by width
   */
  labelJustifyContent?: "center" | "space-around";

  /**
   * Button label alignment by height
   */
  labelAlignItems?: "center";

  /**
   * Inactive button state: state when the button is displayed but not available for user actions
   */
  disabled?: boolean;

  /**
   * Rounded button
   */
  rounded?: boolean;

  /**
   * Styling to visually highlight progress
   */
  progress?: boolean;

  /**
   * Button label styles
   */
  labelStyles?: React.CSSProperties;

  /**
   * Button label additional class
   */
  labelClassName?: string;
};

const Button: FC<ButtonPropsType> = ({
  children,
  view = "default",
  size = "md",
  onClick,
  onPointerUp,
  onPointerDown,
  onPointerLeave,
  onBlur,
  className = "",
  name,
  width = "default",
  contentLeft,
  contentRight,
  type = "button",
  labelJustifyContent = "center",
  labelAlignItems = "center",
  disabled = false,
  rounded = false,
  progress = false,
  style,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pressed, setPressed] = useState(false);

  const rootClasses = clsx(
    { [`${className}`]: className },
    "Button",
    { [`Button-view_${view}`]: view },
    { [`Button-size_${size}`]: size },
    { "Button-pressed": pressed },
    { [`Button-width_${width}`]: width },
    { "Button-disabled": disabled },
    { "Button-rounded": rounded },
    { "Button-progress": progress }
  );

  const pointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (navigator.userAgent.match(/safari/i)) {
      event.preventDefault();
    }

    setPressed(true);

    if (onPointerDown) {
      onPointerDown(event);
    }
  };

  const pointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    setPressed(false);

    if (onPointerUp) {
      onPointerUp(event);
    }
  };

  const pointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    setPressed(false);

    if (onPointerLeave) {
      onPointerLeave(event);
    }
  };

  const click = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (buttonRef.current != null) {
      buttonRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  const blur = (event: React.FocusEvent<HTMLButtonElement>) => {
    setPressed(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <button
      className={rootClasses}
      onPointerDown={pointerDown}
      onPointerUp={pointerUp}
      onPointerLeave={pointerLeave}
      onBlur={blur}
      onClick={click}
      name={name}
      type={type}
      disabled={disabled}
      style={style}
      ref={buttonRef}
    >
      <span
        className="Button-label"
        style={{
          justifyContent: labelJustifyContent,
        }}
      >
        <span className="Button-label_left">{contentLeft}</span>
        <span
          className="Button-label_center"
          style={{ display: "flex", alignItems: labelAlignItems }}
        >
          {children}
        </span>

        <span className="Button-label_right">{contentRight}</span>
      </span>
    </button>
  );
};

export default Button;
