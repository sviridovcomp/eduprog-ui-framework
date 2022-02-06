import React, { FC, useState } from "react";
import BaseInput, {
  TextInputProps,
} from "@components/Inputs/BaseInput/BaseInput";

const Input: FC<TextInputProps> = ({
  onChange,
  defaultValue = "",
  ...rest
}) => {
  const [value, setValue] = useState(defaultValue);

  const inputChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    setValue(value);

    if (onChange) {
      onChange(value, event);
    }
  };

  return <BaseInput onChange={inputChange} defaultValue={value} {...rest} />;
};

export default Input;
