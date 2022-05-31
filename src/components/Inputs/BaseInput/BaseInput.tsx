import React, { FC, useEffect, useState } from "react";
import "./BaseInput.scss";
import clsx from "clsx";
import { defaultProps } from "@utils/defaultProps";

export interface ITextInputValidator {
  notEmpty?: boolean;
  pattern?: RegExp;
  message?: string;
}

export type TextInputProps = defaultProps & {
  /**
   * Лейбл для поля ввода
   */
  label: string;

  /**
   * Максимальная длина текста в поле ввода
   */
  maxLength?: number;

  /**
   * Тип поля ввода
   */
  inputType?: "text" | "tel" | "email" | "password" | "number" | "card";

  /**
   * Определяет маску для ввода значений
   */
  mask?: string;

  /**
   * Значение поля ввода по умолчанию
   */
  defaultValue?: string;

  /**
   * Событие вызываемое при клике на input
   */
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;

  /**
   * Событие обновления input
   */
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * Событие обновления input
   */
  onPaste?: (event?: React.ClipboardEvent<HTMLInputElement>) => void;

  /**
   * Событие нажатия input
   */
  onKeyDown?: (event?: React.KeyboardEvent<HTMLInputElement>) => void;

  onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;

  onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Добавление дополнительных элементов к инпуту слева
   */
  leftAdditional?: React.ReactNode;

  /**
   * Добавление дополнительных элементов к инпуту справа
   */
  rightAdditional?: React.ReactNode;

  /**
   * Имя элемента в DOM
   */
  name?: string;

  /**
   * Параметры автокомпилита
   */
  autocomplete?: "none" | "cc-number";

  /**
   * Курсор, который будет при наведении на input
   */
  cursor?: "pointer" | "text";

  /**
   * BaseInput доступен только для чтения
   */
  readonly?: boolean;

  /**
   *
   */
  forceFocus?: boolean;

  forceInvalid?: boolean;

  autoFocus?: boolean;

  validators?: ITextInputValidator;

  onPointerDown?: (event?: React.MouseEvent) => void;
  onPointerUp?: (event?: React.MouseEvent) => void;
  onPointerLeave?: (event?: React.MouseEvent) => void;
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

  const inputPointerDown = (event: React.PointerEvent<HTMLInputElement>) => {
    if (onPointerDown) {
      onPointerDown(event);
    }
  };

  const inputPointerUp = (event: React.PointerEvent<HTMLInputElement>) => {
    if (onPointerUp) {
      onPointerUp(event);
    }
  };

  const inputPointerLeave = (event: React.PointerEvent<HTMLInputElement>) => {
    if (onPointerLeave) {
      onPointerLeave(event);
    }
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value, event);
    }
  };

  const inputPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    if (onPaste) {
      onPaste(event);
    }
  };

  const inputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <>
      <div className="input">
        <div
          className={clsx("input-label", {
            "input-label-active": forceFocus || active || defaultValue,
            "input-label-invalid":
              validationStatus == ValidityStatus.Invalid || forceInvalid,
          })}
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
            onPointerDown={inputPointerDown}
            onPointerUp={inputPointerUp}
            onPointerLeave={inputPointerLeave}
            onChange={inputChange}
            onPaste={inputPaste}
            onKeyDown={inputKeyDown}
            name={name}
            readOnly={readonly}
            autoComplete={autocomplete}
            style={{ cursor: cursor, ...style }}
            autoFocus={autoFocus}
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
