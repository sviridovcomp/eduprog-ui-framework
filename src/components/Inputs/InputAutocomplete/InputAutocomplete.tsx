import React, { FC } from "react";
import { isBrowser, isMobile } from "react-device-detect";
import InputAutocompleteBrowser from "./Browser/InputAutocompleteBrowser";
import InputAutocompleteMobile from "./Mobile/InputAutocompleteMobile";

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
    return <InputAutocompleteMobile {...args} />;
  } else if (isBrowser) {
    return <InputAutocompleteBrowser {...args} />;
  }

  return <></>;
};

export default InputAutocomplete;
