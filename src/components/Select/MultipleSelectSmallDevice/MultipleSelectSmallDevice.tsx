import React, { FC, useEffect, useState } from "react";
import {
  MultipleSelectPropsType,
  MultipleSelectValue,
} from "@components/Select/MultipleSelect/MultipleSelectProps";
import "./MultipleSelectSmallDevice.scss";
import clsx from "clsx";

const MultipleSelectSmallDevice: FC<MultipleSelectPropsType<string>> = ({
  label,
  maxSelectedOptions,
  name = "",
  options,
  onChange,
  wrapperStyles,
  defaultValue = [],
}) => {
  const [active, setActive] = useState(false);
  const [selectedOptions, setSelectedOptions] =
    useState<Array<MultipleSelectValue<any>>>(defaultValue);

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = event.target.selectedOptions;

    setSelectedOptions(
      [...options]
        .map((item) => {
          return {
            name: item.label,
            value: item.value,
          } as MultipleSelectValue<any>;
        })
        .slice(0, maxSelectedOptions)
    );
  };

  useEffect(() => {
    if (onChange && selectedOptions) {
      onChange(selectedOptions);
    }
  }, [selectedOptions]);

  const selectFocus = () => {
    setActive(!active);
  };

  return (
    <div className="input">
      <div className={clsx("input-label", { "input-label-active": active })}>
        {label}
      </div>

      <div className="input-field">
        <select
          className="input-control"
          onFocus={selectFocus}
          onChange={selectChange}
          style={{ color: "transparent", ...wrapperStyles }}
          name={name}
          size={1}
          multiple
        >
          {options.map(({ name, value }, index) => (
            <option
              value={name}
              key={index}
              selected={selectedOptions.some((option) => option.name == name)}
            >
              {name}
            </option>
          ))}
        </select>

        <div className="multiple-select-value">
          {selectedOptions
            .map((selectedOption) => selectedOption.name)
            .join(", ")}
        </div>

        <div className="multiple-select-icon">
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
        </div>
      </div>
    </div>
  );
};

export default MultipleSelectSmallDevice;
