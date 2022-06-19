import React, { FC, useEffect, useState } from "react";
import "./BaseInput.scss";
import clsx from "clsx";
import { defaultProps } from "@utils/defaultProps";

export interface ITextInputValidator {
  /**
   * Textfield must not be empty
   */
  notEmpty?: boolean;

  /**
   * Regex pattern the value must match to be valid
   */
  pattern?: RegExp;

  /**
   * Message to be displayed if textfield value is not correct
   */
  message?: string;
}

export type TextInputProps = defaultProps & {
  /**
   * Label for the textfield
   */
  label: string;

  /**
   * Maximum length (number of characters) of value
   */
  maxLength?: number;

  /**
   * Type of form control
   */
  inputType?: "text" | "tel" | "email" | "password" | "number" | "card";

  /**
   * Определяет маску для ввода значений
   */
  mask?: string;

  /**
   * The initial value of the control
   */
  defaultValue?: string;

  /**
   * onClick callback handler
   */
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;

  /**
   * onChange callback handler
   */
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * onPaste callback handler
   */
  onPaste?: (event?: React.ClipboardEvent<HTMLInputElement>) => void;

  /**
   * onKeyDown callback handler
   */
  onKeyDown?: (event?: React.KeyboardEvent<HTMLInputElement>) => void;

  /**
   * onBlur callback handler
   */
  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * onFocus callback handler
   */
  onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Adding additional elements to the textfield on the left
   */
  leftAdditional?: React.ReactNode;

  /**
   * Adding additional elements to the textfield on the right
   */
  rightAdditional?: React.ReactNode;

  /**
   * Name of the form control. Submitted with the form as part of a name/value pair
   */
  name?: string;

  /**
   * Hint for form autofill feature
   */
  autocomplete?: "none" | "cc-number";

  /**
   * Cursor that will when hovering over textfield
   */
  cursor?: "pointer" | "text";

  /**
   * The value of TextField is not editable
   */
  readonly?: boolean;

  /**
   * Force make textfield focused
   */
  forceFocus?: boolean;

  /**
   * Force make textfield invalid
   */
  forceInvalid?: boolean;

  /**
   *  if present, indicates that the input should automatically have focus when the page has finished loading
   */
  autoFocus?: boolean;

  /**
   * Validating a textfield
   */
  validators?: ITextInputValidator;

  size?: "md" | "xl";

  /**
   * onPointerDown callback handler
   */
  onPointerDown?: (event?: React.MouseEvent) => void;

  /**
   * onPointerUp callback handler
   */
  onPointerUp?: (event?: React.MouseEvent) => void;

  /**
   * onPointerLeave callback handler
   */
  onPointerLeave?: (event?: React.MouseEvent) => void;

  /**
   * Ref to `input`
   */
  controlRef?: React.Ref<HTMLInputElement>;
};

const BaseInput: FC<TextInputProps> = ({
  label,
  inputType = "text",
  maxLength,
  mask,
  defaultValue = "",
  onChange,
  onPaste,
  onKeyDown,
  leftAdditional,
  rightAdditional,
  name = "",
  readonly = false,
  autocomplete = "none",
  cursor = "text",
  onClick,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  onFocus,
  onBlur,
  autoFocus = false,
  forceFocus = false,
  className = "",
  forceInvalid = false,
  validators,
  style,
  controlRef,
  size = "md",
}) => {
  enum ValidityStatus {
    Invalid,
    Valid,
  }

  const [active, setActive] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [validationStatus, setValidationStatus] = useState(
    ValidityStatus.Valid
  );

  const inputFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setActive(!active);

    if (onFocus) {
      onFocus(event);
    }
  };

  const inputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setActive(!active);

    setDirty(true);

    if (onBlur) {
      onBlur(event);
    }
  };

  useEffect(() => {
    if (dirty) {
      validation();
    }
  }, [dirty, defaultValue]);

  const validation = () => {
    if (validators?.notEmpty && !defaultValue) {
      setValidationStatus(ValidityStatus.Invalid);
    }

    if (validators?.pattern) {
      if (!validators.pattern.test(defaultValue)) {
        setValidationStatus(ValidityStatus.Invalid);
      } else {
        setValidationStatus(ValidityStatus.Valid);
      }
    }
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  };

  return (
    <>
      <div className="input">
        <div
          className={clsx(
            "input-label",
            { [`Input-size_${size}`]: size },
            {
              "input-label-active": forceFocus || active || defaultValue,
              "input-label-invalid":
                validationStatus == ValidityStatus.Invalid || forceInvalid,
            }
          )}
        >
          {label}
        </div>

        <div className="input-field">
          <div className="input-left">{leftAdditional}</div>

          <input
            className={clsx(
              "input-control",
              {
                "input-control-invalid":
                  validationStatus == ValidityStatus.Invalid || forceInvalid,
              },
              className
            )}
            type={inputType == "card" ? "tel" : inputType}
            maxLength={maxLength}
            placeholder={active || forceFocus ? mask : ""}
            onFocus={inputFocus}
            onBlur={inputBlur}
            value={defaultValue}
            onClick={onClick}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerLeave}
            onChange={inputChange}
            onPaste={onPaste}
            onKeyDown={onKeyDown}
            name={name}
            readOnly={readonly}
            autoComplete={autocomplete}
            style={{ cursor: cursor, ...style }}
            autoFocus={autoFocus}
            ref={controlRef}
          />

          <div className="input-right" style={{ cursor: cursor }}>
            {rightAdditional}
          </div>
        </div>
      </div>
      {validators && validationStatus == ValidityStatus.Invalid && (
        <div
          className={clsx("input-validator", {
            "input-validator-show": validationStatus == ValidityStatus.Invalid,
          })}
        >
          {validators.message}
        </div>
      )}
    </>
  );
};

export default BaseInput;
