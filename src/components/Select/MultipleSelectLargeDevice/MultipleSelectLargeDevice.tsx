import React, { FC, useEffect, useState } from "react";
import "./MultipleSelectLargeDevice.scss";
import BaseInput from "@components/Inputs/BaseInput/BaseInput";
import Dropdown from "@components/Dropdown/Dropdown";
import Checkbox from "@components/Checkboxes/Checkbox/Checkbox";
import {
  MultipleSelectPropsType,
  MultipleSelectValue,
} from "@components/Select/MultipleSelect/MultipleSelectProps";
import { sha256 } from "js-sha256";

const MultipleSelectLargeDevice: FC<MultipleSelectPropsType<any>> = ({
  label,
  options,
  maxSelectedOptions = undefined,
  onChange,
  zIndex,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<
    Array<MultipleSelectValue<any>>
  >([]);
  const [open, setOpen] = useState(false);

  const SelectToggle = (
    <BaseInput
      label={label}
      defaultValue={selectedOptions
        .map((selectedOption) => selectedOption.name)
        .join(", ")}
      cursor="pointer"
      readonly
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

  const disabledPredicate = (option: MultipleSelectValue<any>) => {
    return (
      maxSelectedOptions !== undefined &&
      selectedOptions.length >= maxSelectedOptions &&
      !selectedOptions.some((targetOption) => targetOption.name == option.name)
    );
  };

  const selectOption = (
    params: MultipleSelectValue<any> | Array<MultipleSelectValue<any>>
  ) => {
    if (params instanceof Array) {
      return;
    }

    if (selectedOptions.some((option) => option.name == params.name)) {
      setSelectedOptions(
        selectedOptions.filter((option) => {
          return option.name != params.name;
        })
      );
    } else {
      setSelectedOptions([...selectedOptions, params]);
    }
  };

  useEffect(() => {
    if (onChange && selectedOptions) {
      onChange(selectedOptions);
    }
  }, [selectedOptions]);

  const SelectPopup = options.map((option, index) => (
    <div className="multiple-select-item" key={index}>
      <Checkbox
        position="right"
        onChange={() => selectOption(option)}
        type="primary"
        className="multiple-select-checkbox"
        fullwidth
        disabled={disabledPredicate(option)}
        wrapperStyle={{ userSelect: "none", gap: "1rem" }}
      >
        {option.name}
      </Checkbox>
    </div>
  ));

  return (
    <div className="multiple-select">
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
