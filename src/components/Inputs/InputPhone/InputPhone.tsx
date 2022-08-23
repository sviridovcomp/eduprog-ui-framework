import React, { FC } from "react";
import BaseInput, { TextInputProps } from "../BaseInput/BaseInput";
import { Key } from "ts-keycode-enum";

export type InputPhonePropsType = TextInputProps;

/**
 * InputPhone allows to input a phone number
 */
const InputPhone: FC<InputPhonePropsType> = ({
  label,
  defaultValue,
  onChange,
  // ...rest
}) => {
  const formatPhoneNumber = (phoneNumber: string) => {
    let formattedValue = "";

    if (["7", "8", "9"].includes(phoneNumber[0])) {
      if (phoneNumber[0] === "9") {
        phoneNumber = `7${phoneNumber}`;
      }
      const firstSymbols = phoneNumber[0] === "8" ? "8" : "+7";

      formattedValue = `${firstSymbols} `;
      if (phoneNumber.length > 1) {
        formattedValue += `(${phoneNumber.slice(1, 4)}`;
      }
      if (phoneNumber.length >= 5) {
        formattedValue += `) ${phoneNumber.slice(4, 7)}`;
      }
      if (phoneNumber.length >= 8) {
        formattedValue += `-${phoneNumber.slice(7, 9)}`;
      }
      if (phoneNumber.length >= 10) {
        formattedValue += `-${phoneNumber.slice(9, 11)}`;
      }
    } else {
      formattedValue = `+${phoneNumber.slice(0, 16)}`;
    }

    return formattedValue;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputChange = (value: string, event: any): void => {
    const input = event.target as HTMLInputElement;
    const { selectionStart } = input;
    const inputNumbersValue = value.replace(/\D/g, "");

    if (!inputNumbersValue) {
      return changeInputEvent("");
    }

    if (selectionStart && value.length !== selectionStart) {
      if (event.data && /\D/g.test(event.data)) {
        changeInputEvent(inputNumbersValue.replace(event.data, ""));
        input.selectionStart = selectionStart - 1;
        input.selectionEnd = event.target.selectionStart;
      }
      return;
    }

    changeInputEvent(formatPhoneNumber(inputNumbersValue));
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inputPaste = (event: any) => {
    const input = event?.target as HTMLInputElement;
    const inputNumbersValue = input.value.replace(/\D/g, "");
    const pasted = event?.clipboardData;
    if (pasted) {
      const pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
      }
    }
  };

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  const inputKeyDown = (event: any) => {
    // const input = event?.target as HTMLInputElement;
    // const inputValue = input.value.replace(/\D/g, "");
    // if (event.keyCode == Key.Backspace && inputValue.length <= 1) {
    //   changeInputEvent("");
    // } else if (
    //   [Key.Backspace, Key.Delete].includes(event.keyCode) &&
    //   inputValue.length > 1
    // ) {
    //   let symToClear = "";
    //   switch (event.keyCode) {
    //     case Key.Backspace:
    //       symToClear = event.target.value[event.target.selectionStart - 1];
    //       break;
    //     case Key.Delete:
    //       symToClear = event.target.value[event.target.selectionStart];
    //       break;
    //   }
    //   console.log(symToClear);
    //   if (symToClear && /\D/.test(symToClear)) {
    //     event.preventDefault();
    //   }
    // }
    const inputValue = event.target.value.replace(/\D/g, "");
    if (event.keyCode == Key.Backspace && inputValue <= 1) {
      changeInputEvent("");
    }
  };

  const changeInputEvent = (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (onChange) {
      onChange(value, event);
    }
  };

  return (
    <BaseInput
      inputType="tel"
      defaultValue={defaultValue}
      onChange={inputChange}
      onPaste={inputPaste}
      onKeyDown={inputKeyDown}
      label={label}
      // {...rest}
    />
  );
};

export default InputPhone;
