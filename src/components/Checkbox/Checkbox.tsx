import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";
// @ts-ignore
import React, { FC, useId } from "react";
import "./Checkbox.scss";

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
   * View mode
   */
  view?: "default" | "primary" | "secondary" | "accent";

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

  checkboxFakeClassName?: string;
  checkboxFakeStyle?: React.CSSProperties;

  checkboxLabelClassName?: string;
  checkboxLabelStyle?: React.CSSProperties;
};

const Checkbox: FC<CheckboxPropsType> = ({
  children,
  view = "default",
  className,
  checked,
  onChange,
  disabled,
  checkboxFakeClassName,
  checkboxFakeStyle,
  checkboxLabelClassName,
  checkboxLabelStyle,
}) => {
  const checkboxId = useId();
  const labelbyId = `checkbox-${checkboxId}`;

  return (
    <div className={clsx("checkbox", { [`${view}`]: view }, className)}>
      <label
        style={checkboxLabelStyle}
        className={clsx("checkbox-label", checkboxLabelClassName)}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          id={labelbyId}
          className="checkbox-control"
        />
        <label
          className={clsx(
            "checkbox-fake",
            { [`${view}`]: view },
            checkboxFakeClassName
          )}
          htmlFor={labelbyId}
          style={checkboxFakeStyle}
        >
          <span
            className={clsx("checkbox-fake-checkbox", checkboxFakeClassName)}
          >
            <svg width="12px" height="10px" viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
          <span className="checkbox-fake-label">{children}</span>
        </label>
      </label>
    </div>
  );
};

export default Checkbox;
