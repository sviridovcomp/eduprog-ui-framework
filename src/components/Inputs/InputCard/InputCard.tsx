import React from "react";
import { FC } from "react";
import Input from "../Input/Input";

export type InputCardPropsType = {
  label: string;
};

const InputCard: FC<InputCardPropsType> = ({ label }) => {
  return <Input label={label} inputType="card" pattern="\d*"/>;
};

export default InputCard;
