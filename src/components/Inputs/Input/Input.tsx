import React, { FC } from "react";
import BaseInput, {
  TextInputProps,
} from "@components/Inputs/BaseInput/BaseInput";

const Input: FC<TextInputProps> = (props) => {
  return <BaseInput {...props} />;
};

export default Input;
