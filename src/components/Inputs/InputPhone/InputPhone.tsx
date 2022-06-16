import React, { FC, useEffect, useState } from "react";
import BaseInput, { TextInputProps } from "../BaseInput/BaseInput";

export type InputPhonePropsType = TextInputProps;

/**
 * InputPhone allows to input a phone number
 */
const InputPhone: FC<InputPhonePropsType> = ({
  label,
  onChange,
  defaultValue = "",
  ...rest
}) => {
  const [phoneNumber, setPhoneNumber] = useState(defaultValue);

  const mappedPhoneNumber = (phoneNumber: string) => {
    let formattedValue: string;

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
    const { selectionStart } = event.target as HTMLInputElement;
    const inputNumbersValue = value.replace(/\D/g, "");

    if (!inputNumbersValue) {
      setPhoneNumber("");
      return;
    }

    const formattedInputValue = mappedPhoneNumber(inputNumbersValue);

    if (value.length !== selectionStart && selectionStart) {
      if (event.data && /\D/g.test(event.data)) {
        setPhoneNumber(inputNumbersValue.replace(event.data, ""));
        event.target.selectionStart = selectionStart - 1;
        event.target.selectionEnd = event.target.selectionStart;
      }
      return;
    }

    setPhoneNumber(formattedInputValue);
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

  const inputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> | undefined
  ) => {
    const input = event?.target as HTMLInputElement;
    const inputValue = input.value.replace(/\D/g, "");
    
    if (event?.key == "Backspace" && inputValue.length == 1) {
      setPhoneNumber("");
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(phoneNumber);
    }
  }, [phoneNumber]);

  return (
    <BaseInput
      defaultValue={phoneNumber}
      inputType="tel"
      onChange={inputChange}
      onPaste={inputPaste}
      onKeyDown={inputKeyDown}
      label={label}
      {...rest}
    />
  );
};

export default InputPhone;
