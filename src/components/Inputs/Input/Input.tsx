import React, { FC, useState } from "react";
import "./Input.scss";
import classList from "@utils/classList";

export type TextInputProps = {
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
  pattern?: string;

  /**
   * Имя элемента в DOM
   */
  name?: string;
};

const Input: FC<TextInputProps> = ({
  label,
  inputType = "text",
  maxLength,
  mask,
  defaultValue,
  onChange,
  onPaste,
  onKeyDown,
  leftAdditional,
  rightAdditional,
  pattern,
  name = "",
}) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const inputFocus = () => {
    setActive(!active);
  };

  const inputBlur = () => {
    setActive(!active);
  };

  const inputChange = (event: any) => {
    if (inputType == "tel") {
      const { selectionStart, value } = event.target as HTMLInputElement;
      let inputNumbersValue = value.replace(/\D/g, "");
      let formattedInputValue = "";
      if (!inputNumbersValue) {
        setValue(event.data === "+" ? "+" : "");
        return;
      }
      if (value.length !== selectionStart) {
        if (event.data && /\D/g.test(event.data)) {
          setValue(inputNumbersValue);
        }
        return;
      }
      if (["7", "8", "9"].includes(inputNumbersValue[0])) {
        if (inputNumbersValue[0] === "9") {
          inputNumbersValue = `7${inputNumbersValue}`;
        }
        const firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
        formattedInputValue = `${firstSymbols} `;
        if (inputNumbersValue.length > 1) {
          formattedInputValue += `(${inputNumbersValue.substring(1, 4)}`;
        }
        if (inputNumbersValue.length >= 5) {
          formattedInputValue += `) ${inputNumbersValue.substring(4, 7)}`;
        }
        if (inputNumbersValue.length >= 8) {
          formattedInputValue += `-${inputNumbersValue.substring(7, 9)}`;
        }
        if (inputNumbersValue.length >= 10) {
          formattedInputValue += `-${inputNumbersValue.substring(9, 11)}`;
        }
      } else {
        formattedInputValue = `+${inputNumbersValue.substring(0, 16)}`;
      }
      setValue(formattedInputValue);
    } else {
      setValue(event.target.value);
    }

    if (onChange && value) {
      onChange(value, event);
    }
  };

  const inputPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    if (inputType == "tel") {
      const input = event.target as HTMLInputElement;
      const inputNumbersValue = input.value.replace(/\D/g, "");
      const pasted = event.clipboardData;
      if (pasted) {
        const pastedText = pasted.getData("Text");
        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    }

    if (onPaste) {
      onPaste(event);
    }
  };

  const inputKeyDown = (event: any) => {
    if (onKeyDown) {
      onKeyDown(event);
    }

    if (inputType == "tel" && value) {
      const inputValue = value.replace(/\D/g, "");
      if (event.code == "Backspace" && inputValue.length == 1) {
        setValue("");
      } else if (
        ["Delete", "Backspace"].includes(event.code) &&
        inputValue.length > 1
      ) {
        let symToClear = "";
        if (event.code === "Backspace") {
          symToClear = value[event.target.selectionStart - 1];
        } else if (event.code === "Delete") {
          symToClear = value[event.target.selectionStart];
        }

        if (symToClear && /\D/g.test(symToClear)) {
          event.preventDefault();
        }
      }
    }
  };

  return (
    <div className="input">
      <div className="input">
        <div
          className={classList([
            "input-label",
            active || value ? "input-label-active" : "",
          ])}
        >
          {label}
        </div>

        <div className="input-field">
          <div className="input-left">{leftAdditional}</div>

          <input
            className="input-control"
            type={inputType == "card" ? "tel" : inputType}
            maxLength={maxLength}
            placeholder={active ? mask : ""}
            onFocus={inputFocus}
            onBlur={inputBlur}
            value={value}
            onChange={(event) => inputChange(event)}
            onPaste={(event) => inputPaste(event)}
            onKeyDown={(event) => inputKeyDown(event)}
            pattern={pattern}
            name={name}
          />

          <div className="input-right">{rightAdditional}</div>
        </div>
      </div>
    </div>
  );
};

export default Input;
