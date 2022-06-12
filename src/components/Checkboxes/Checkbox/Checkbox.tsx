// @ts-ignore
import React, { FC, useEffect, useRef, useState, useId } from "react";
import "./Checkbox.scss";
import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";

export type CheckboxPropsType = defaultProps & {
  /**
   * Content to the right or left of the Checkbox
   */
  children?: React.ReactNode;

  /**
   * layout of `children`
   */
  position?: "left" | "right";

  /**
   * View
   */
  view: "base" | "primary" | "secondary" | "accent";

  /**
   * Controls the width of the checkbox. When 'available' it stretches the checkbox by the width of the parent
   */
  width?: "auto" | "available";

  /**
   * Inactive checkbox state: state when the checkbox is displayed but not available for user actions
   */
  disabled?: boolean;

  /**
   * Switch state: on or off
   */
  checked?: boolean;

  /**
   * Callback is called when the value of the checkbox changes
   */
  onChange?: () => void;

  /**
   * Automatic focus on checkbox
   */
  autoFocus?: boolean;

  style?: React.CSSProperties;

  wrapperStyle?: React.CSSProperties;
};

const Checkbox: FC<CheckboxPropsType> = ({
  children,
  position = "left",
  view = "base",
  width = "auto",
  disabled = false,
  checked = false,
  className = "",
  onChange,
  autoFocus,
  style,
  wrapperStyle,
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [pressed, setPressed] = useState(checked || false);
  const checkboxId = useId();
  const rootClasses = clsx(
    "checkbox-checkmark",

    { [`checkbox-fullwidth_${width}`]: width }
  );

  useEffect(() => {
    if (autoFocus && checkboxRef.current != null) {
      checkboxRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setPressed(checked || false);
  }, [checked]);

  const changing = (event: React.ChangeEvent) => {
    const checkbox = event.target as HTMLInputElement;

    setPressed(checkbox.checked);

    if (onChange) {
      onChange();
    }
  };

  return (
    <div
      className={clsx(
        "checkbox",
        { [`checkbox-fullwidth_${width}`]: width },
        ...className.split(" ")
      )}
    >
      <label
        style={wrapperStyle}
        className={clsx("checkbox-wrapper", {
          [`checkbox-fullwidth_${width}`]: width,
        })}
        htmlFor={`${checkboxId}-checkbox`}
      >
        {position === "left" && (
          <div className="checkbox-additional">{children}</div>
        )}

        <input
          type="checkbox"
          onChange={changing}
          disabled={disabled}
          checked={pressed}
          ref={checkboxRef}
          id={`${checkboxId}-checkbox`}
        />

        <span
          style={style}
          className={clsx("checkbox-fake", {
            [`checkbox-checkmark-view_${view}`]: view,
          })}
        >
          <span className={rootClasses}>
            <svg width="14" height="10" viewBox="0 0 14 10">
              <path d="M1.49 4.885l1.644-1.644 4.385 4.385L5.874 9.27 1.49 4.885zm4.384 1.096L11.356.5 13 2.144 7.519 7.626 5.874 5.98v.001z"></path>
            </svg>
          </span>
        </span>

        {position === "right" && (
          <div className="checkbox-additional">{children}</div>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
