import React, { FC, useState } from "react";
import Input from "../Input/Input";

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

  return (
    <Input
      inputType="tel"
      label={label}
    />
  );
};

export default InputPhone;
