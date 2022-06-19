import React, { FC, useEffect, useState } from "react";
import BaseInput from "@components/Inputs/BaseInput/BaseInput";
import "./SelectLargeDevice.scss";
import {
  SelectTypeProps,
  SelectValue,
} from "@components/Select/Select/SelectProps";
import Popup from "@components/Popup/Popup";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SelectLargeDevice: FC<SelectTypeProps<any>> = ({
  label,
  defaultValue,
  options,
  onChange,
  zIndex,
  wrapperStyles,
  dropdownStyles,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue ? defaultValue : options[0]);

  const SelectToggle = () => {
    return (
      <BaseInput
        label={label}
        defaultValue={value ? value.key : ""}
        cursor="pointer"
        readonly
        onPointerDown={() => setOpen(true)}
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
              fill="currentColor"
            >
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z" />
            </svg>
          </span>
        }
      />
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (option: SelectValue<any>) => {
    setValue(option);
    setOpen(false);
  };

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  const SelectPopup = (
    <div className="select" style={dropdownStyles}>
      {options.map(({ key, value }, index) => (
        <div
          className="select-item"
          key={index}
          onClick={() => onSelect({ key: key, value: value })}
        >
          {key}
        </div>
      ))}
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        color: "var(--ep-text-color)",
      }}
    >
      <SelectToggle />
      <Popup
        direction="bottom-center"
        clearly
        fullwidth
        onClose={() => setOpen(false)}
        open={open}
        rootStyle={{ zIndex: zIndex }}
        contentStyle={{ borderRadius: "0.5rem" }}
      >
        {SelectPopup}
      </Popup>
    </div>
  );
};

export default SelectLargeDevice;
