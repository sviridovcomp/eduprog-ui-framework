import React, { FC, useState } from "react";
import "./MultipleSelectLargeDevice.scss";
import BaseInput from "@components/Inputs/BaseInput/BaseInput";
import Dropdown from "@components/Dropdown/Dropdown";
import Checkbox from "@components/Checkboxes/Checkbox/Checkbox";
import { MultipleSelectPropsType } from "@components/Select/MultipleSelect/MultipleSelectProps";

const MultipleSelectLargeDevice: FC<MultipleSelectPropsType> = ({
  label,
  options,
  maxSelectedOptions = undefined,
  onSelect,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const SelectToggle = (
    <BaseInput
      label={label}
      defaultValue={selectedOptions.join(", ")}
      cursor="pointer"
      readonly
      rightAdditional={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
          <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
        </svg>
      }
    />
  );

  const disabledPredicate = (option: string) => {
    return (
      maxSelectedOptions !== undefined &&
      selectedOptions.length >= maxSelectedOptions &&
      !selectedOptions.includes(option)
    );
  };

  const selectOption = (option: string) => {
    if (disabledPredicate(option)) {
      return;
    }

    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }

    if (onSelect) {
      onSelect(selectedOptions);
    }
  };

  const SelectPopup = options.map((option, index) => (
    <div className="multiple-select-item">
      <Checkbox
        position="right"
        onChange={() => selectOption(option)}
        children={option}
        type="primary"
        className="multiple-select-checkbox"
        fullwidth
        disabled={disabledPredicate(option)}
      />
    </div>
  ));

  return (
    <div className="multiple-select">
      <Dropdown
        children={SelectPopup}
        direction="bottom-center"
        toggle={SelectToggle}
        clearly
        dismissible="outside"
        fullwidth
      />
    </div>
  );
};

export default MultipleSelectLargeDevice;
