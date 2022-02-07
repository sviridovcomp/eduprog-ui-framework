import React, { FC, useState } from "react";
import "./BaseInput.scss";
import classNames from "classnames";
import { defaultProps } from "@utils/defaultProps";

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
  onClick?: () => void;

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

  onBlur?: () => void;

  /**
   * Добавление дополнительных элементов к инпуту слева
   */
  leftAdditional?: React.ReactNode;

  /**
   * Добавление дополнительных элементов к инпуту справа
   */
  rightAdditional?: React.ReactNode;

  /**
   * Паттерн валидации input
   */
  pattern?: RegExp;

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

  required?: boolean;

  /**
   * Сообщение валидатора
   */
  validationMessage?: string;

  autoFocus?: boolean;
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
  pattern,
  name = "",
  readonly = false,
  autocomplete = "none",
  cursor = "text",
  onClick,
  onBlur,
  autoFocus = false,
  forceFocus = false,
  className = "",
  required = false,
  validationMessage = "",
}) => {
  enum ValidityStatus {
    Invalid,
    Valid,
  }

  const [active, setActive] = useState(false);
  const [validationStatus, setValidationStatus] = useState(
    ValidityStatus.Valid
  );

  const inputFocus = () => {
    setActive(!active);
  };

  const inputBlur = () => {
    setActive(!active);

    validation();

    if (onBlur) {
      onBlur();
    }
  };

  const validation = () => {
    if (required && defaultValue?.length == 0) {
      setValidationStatus(ValidityStatus.Invalid);
      return;
    }

    if (pattern) {
      if (!pattern.test(defaultValue)) {
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

  const inputClicked = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <div className="input">
        <div
          className={classNames("input-label", {
            "input-label-active": forceFocus || active || defaultValue,
          })}
        >
          {label}
        </div>

        <div className="input-field">
          <div className="input-left">{leftAdditional}</div>

          <input
            className={classNames(
              "input-control",
              {
                "input-control-invalid":
                  validationStatus == ValidityStatus.Invalid,
              },
              className
            )}
            type={inputType == "card" ? "tel" : inputType}
            maxLength={maxLength}
            placeholder={active || forceFocus ? mask : ""}
            onFocus={inputFocus}
            onBlur={inputBlur}
            value={defaultValue}
            onClick={() => inputClicked()}
            onChange={(event) => inputChange(event)}
            onPaste={(event) => inputPaste(event)}
            onKeyDown={(event) => inputKeyDown(event)}
            name={name}
            readOnly={readonly}
            autoComplete={autocomplete}
            style={{ cursor: cursor }}
            autoFocus={autoFocus}
          />

          <div className="input-right" style={{ cursor: cursor }}>
            {rightAdditional}
          </div>
        </div>
      </div>
      {pattern && (
        <div
          className={classNames("input-validator", {
            "input-validator-show": validationStatus == ValidityStatus.Invalid,
          })}
        >
          {validationMessage}
        </div>
      )}
    </>
  );
};

export default BaseInput;
