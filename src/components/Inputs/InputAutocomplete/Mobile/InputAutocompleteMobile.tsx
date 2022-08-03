import BottomDrawer from "@components/BottomDrawer/BottomDrawer";
import Input from "@components/Inputs/Input/Input";
import React, { FC, useState } from "react";
import {
  AutocompleteValue,
  IInputAutocompleteProps,
} from "../InputAutocomplete";
import "./InputAutocompleteMobile.scss";

const InputAutocompleteMobile: FC<IInputAutocompleteProps> = ({
  label,
  onChange,
  options,
}) => {
  const [value, setValue] = useState("");
  const [selectedOptions, setSelectedOptions] =
    useState<AutocompleteValue<any>>();
  const [open, setOpen] = useState(false);

  const changing = (value: string) => {
    setValue(value);
  };

  const escapeRegExp = (value: string): string => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const filteredOptions = () => {
    const regexPattern = new RegExp(escapeRegExp(value.trim()), "i");

    return options?.filter((option) => {
      return regexPattern.test(option.name);
    });
  };

  const selectItem = (option: AutocompleteValue<any>) => {
    setSelectedOptions(option);
    setValue(option.name);
    setOpen(false);
  };

  return (
    <>
      <Input label={label} defaultValue={value} onClick={() => setOpen(true)} />

      <div>
        <BottomDrawer
          open={open}
          onClose={() => setOpen(false)}
          className="autocomplete-drawer"
        >
          <Input
            label={label}
            defaultValue={value}
            onChange={changing}
            autoFocus={true}
          />

          <div style={{ marginTop: "0.5rem" }}>
            {filteredOptions()?.map((option) => (
              <div
                className="autocomplete-item"
                key={option.name}
                onClick={() => selectItem(option)}
              >
                {option.name}
              </div>
            ))}
          </div>
        </BottomDrawer>
      </div>
    </>
  );
};

export default InputAutocompleteMobile;
