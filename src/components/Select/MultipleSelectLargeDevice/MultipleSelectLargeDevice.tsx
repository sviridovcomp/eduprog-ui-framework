import React, { FC, useEffect, useState } from "react";
import "./MultipleSelectLargeDevice.scss";
import BaseInput from "@components/Inputs/BaseInput/BaseInput";
import Dropdown from "@components/Dropdown/Dropdown";
import Checkbox from "@components/Checkbox";
import {
  MultipleSelectPropsType,
  MultipleSelectValue,
} from "@components/Select/MultipleSelect/MultipleSelectProps";
import { KeyValue } from "@utils/utils/common/types";

const MultipleSelectLargeDevice: FC<MultipleSelectPropsType<any>> = ({
  label,
  options,
  maxSelectedOptions = undefined,
  onChange,
  zIndex,
  wrapperStyles,
  dropdownStyles,
  defaultValue = new Map(),
}) => {
  const [selectedOptions, setSelectedOptions] =
    useState<Map<string, any>>(defaultValue);
  const [open, setOpen] = useState(false);

  const SelectToggle = (
    <BaseInput
      label={label}
      defaultValue={
        !selectedOptions
          ? ""
          : [...selectedOptions].map((option) => option[0]).join(", ")
      }
      cursor="pointer"
      readonly
      style={wrapperStyles}
      rightAdditional={
        <span
          style={{
            transition: "0.2s transform ease",
            transform: `rotate(${open ? "180" : "0"}deg)`,
            height: "24px",
          }}
        >
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
        </span>
      }
    />
  );

  const disabledPredicate = (optionKey: string) => {
    return (
      maxSelectedOptions !== undefined &&
      [...selectedOptions].length >= maxSelectedOptions &&
      !selectedOptions?.has(optionKey)
    );
  };

  const selectOption = (optionKey: string) => {
    console.log(selectedOptions);
    if (selectedOptions?.has(optionKey) && selectedOptions?.delete(optionKey)) {
      setSelectedOptions(new Map(selectedOptions));
    } else {
      setSelectedOptions(
        new Map(selectedOptions?.set(optionKey, options.get(optionKey)))
      );
    }
    console.log(selectedOptions);
  };

  useEffect(() => {
    if (onChange && selectedOptions) {
      onChange(selectedOptions);
    }
  }, [selectedOptions]);

  const SelectPopup = [...options].map((option, index) => (
    <div className="multiple-select-item" key={index}>
      <Checkbox
        position="right"
        onChange={() => selectOption(option[0])}
        view="primary"
        className="multiple-select-checkbox"
        width="available"
        disabled={disabledPredicate(option[0])}
        wrapperStyle={{ userSelect: "none", gap: "1rem" }}
      >
        {option[0]}
      </Checkbox>
    </div>
  ));

  return (
    <div className="multiple-select" style={dropdownStyles}>
      <Dropdown
        direction="bottom-center"
        toggle={SelectToggle}
        clearly
        dismissible="outside"
        fullwidth
        style={{ zIndex: zIndex }}
        onOpen={() => setOpen(!open)}
        onClose={() => setOpen(false)}
        contentStyle={{ borderRadius: "0.5rem" }}
      >
        {SelectPopup}
      </Dropdown>
    </div>
  );
};

export default MultipleSelectLargeDevice;
