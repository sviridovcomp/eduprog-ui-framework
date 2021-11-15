import React, { FC, useRef, useState } from "react";
import Input from "../Inputs/Input/Input";

export type PhoneNumberInputProps = {
  label: string;
};

const PhoneInput: FC<PhoneNumberInputProps> = ({ label }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const phoneNumbersValue = (value: string) => {
    return value.replace(/\D/g, "");
  };

  const phoneChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
  };

  return (
    <Input
      inputType="tel"
      defaultValue={phoneNumber}
      onChange={phoneChange}
      label={label}
      maxLength={18}
    />
  );
};

export default PhoneInput;
