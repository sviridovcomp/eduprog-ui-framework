import React, { FC, useState } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import Input from "../Input/Input";
import InputAutocompleteBrowser from "./Browser/InputAutocompleteBrowser";

export type AutocompleteValue<Type> = {
  name: string;
  value: Type;
};

export interface IInputAutocompleteProps {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: Array<AutocompleteValue<any>>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (value?: AutocompleteValue<any>) => void;
}

const InputAutocomplete: FC<IInputAutocompleteProps> = (args) => {
  if (isMobile) {
  } else if (isBrowser) {
    return <InputAutocompleteBrowser {...args} />;
  }
};

export default InputAutocomplete;
