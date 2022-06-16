import React, { FC } from "react";
import BaseInput, {
  TextInputProps,
} from "@components/Inputs/BaseInput/BaseInput";

/**
 * Input — is a single-line textfield. It's not recommended to use it with numbers, because the value type of this component is a string
 */
const Input: FC<TextInputProps> = (props) => {
  return <BaseInput {...props} />;
};

export default Input;
