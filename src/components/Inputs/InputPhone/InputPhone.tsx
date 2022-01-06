import React, { FC, useState } from "react";
import BaseInput from "../BaseInput/BaseInput";

export type InputCopyPropsType = {
  /**
   * Заголовок input
   */
  label: string;

  /**
   * Событие обновления input
   */
  onChange?: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

/**
 * InputPhone - поле ввода мобильного телефона
 */
const InputPhone: FC<InputCopyPropsType> = ({ label, onChange }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const getInputNumbersValue = (content: string) => {
    // Return stripped input value — just numbers
    return content.replace(/\D/g, '');
  }

  const inputChange = (value: string, event: any): void => {
    const { selectionStart } = event.target as HTMLInputElement;
    let inputNumbersValue = value.replace(/\D/g, "");
    let formattedInputValue = "";

    if (!inputNumbersValue) {
      setPhoneNumber("");
      return;
    }

    if (value.length !== selectionStart) {
      if (event.data && /\D/g.test(event.data)) {
        setPhoneNumber(inputNumbersValue.replace(event.data, ""));
        event.target.selectionStart = selectionStart! - 1;
        event.target.selectionEnd = event.target.selectionStart;
      }
      return;
    }
    if (["7", "8", "9"].includes(inputNumbersValue[0])) {
      if (inputNumbersValue[0] === "9") {
        inputNumbersValue = `7${inputNumbersValue}`;
      }
      const firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";

      formattedInputValue = `${firstSymbols} `;
      if (inputNumbersValue.length > 1) {
        formattedInputValue += `(${inputNumbersValue.slice(1, 4)}`;
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += `) ${inputNumbersValue.slice(4, 7)}`;
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += `-${inputNumbersValue.slice(7, 9)}`;
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += `-${inputNumbersValue.slice(9, 11)}`;
      }
    } else {
      formattedInputValue = `+${inputNumbersValue.slice(0, 16)}`;
    }
    setPhoneNumber(formattedInputValue);
  }

  const inputPaste = (event: any) => {
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

  const inputKeyDown = (event: any) => {
    const inputValue = phoneNumber.replace(/\D/g, "");
    if (event.keyCode == 8 && inputValue.length == 1) {
      setPhoneNumber("");
    }
  }


  return (
    <BaseInput
      defaultValue={phoneNumber}
      inputType="tel"
      onChange={inputChange}
      onPaste={inputPaste}
      onKeyDown={inputKeyDown}
      label={label}
    />
  );
};

export default InputPhone;
