import React, { FC, useEffect, useRef, useState } from "react";
import "./MultipleSelectLargeDevice.scss";
import BaseInput from "@components/Inputs/BaseInput/BaseInput";
import Checkbox from "@components/Checkbox";
import { MultipleSelectPropsType } from "@components/Select/MultipleSelect/MultipleSelectProps";
import {
  offset,
  useFloating,
  size,
  autoUpdate,
  flip,
} from "@floating-ui/react-dom-interactions";
import { useClickAway } from "@utils/hooks/useClickAway";
import { SelectValue } from "../Select/SelectProps";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MultipleSelectLargeDevice: FC<MultipleSelectPropsType<any>> = ({
  label,
  options,
  maxSelectedOptions = undefined,
  onChange,
  wrapperStyles,
  dropdownStyles,
  defaultValue = [],
}) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  useClickAway(rootRef, () => {
    setOpen(false);
  });

  const { x, y, reference, floating, strategy } = useFloating<HTMLInputElement>(
    {
      open: open,
      onOpenChange: setOpen,
      placement: "bottom-start",
      middleware: [
        offset(8),
        flip({ padding: 8 }),
        size({
          apply({ rects, availableHeight, elements }) {
            Object.assign(elements.floating.style, {
              width: `${rects.reference.width}px`,
              maxHeight: `${availableHeight}px`,
            });
          },
          padding: 8,
        }),
      ],
      whileElementsMounted: autoUpdate,
    }
  );

  const containsOption = (
    options: Array<SelectValue<any>>, // eslint-disable-line @typescript-eslint/no-explicit-any
    option: SelectValue<any> // eslint-disable-line @typescript-eslint/no-explicit-any
  ): boolean => {
    return options.some((currentOption) => currentOption.name == option.name);
  };

  const [selectedOptions, setSelectedOptions] = useState(defaultValue); // eslint-disable-line @typescript-eslint/no-explicit-any

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const disabledPredicate = (option: SelectValue<any>) => {
    return (
      maxSelectedOptions !== undefined &&
      selectedOptions.length >= maxSelectedOptions &&
      !containsOption(selectedOptions, option)
    );
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectOption = (option: SelectValue<any>) => {
    if (containsOption(selectedOptions, option)) {
      setSelectedOptions(
        selectedOptions.filter((currentOption) => {
          return currentOption.name != option.name;
        })
      );
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  useEffect(() => {
    if (onChange && selectedOptions) {
      onChange(selectedOptions);
    }
  }, [selectedOptions]);

  return (
    <div className="multiple-select" style={dropdownStyles} ref={rootRef}>
      <BaseInput
        label={label}
        onClick={() => setOpen(!open)}
        defaultValue={selectedOptions.map((option) => option.name).join(", ")}
        cursor="pointer"
        readonly
        controlRef={reference}
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
        rigthAdditionalStyle={{ pointerEvents: "none" }}
      />

      {open && (
        <div
          className="multiple-select-popup"
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
        >
          {options.map((option, index) => (
            <div className="multiple-select-item" key={index}>
              <Checkbox
                position="right"
                onChange={() => selectOption(option)}
                view="primary"
                className="multiple-select-checkbox"
                width="available"
                disabled={disabledPredicate(option)}
                checkboxLabelStyle={{
                  display: "flex",
                  width: "100%",
                  height: "2.5rem",
                  cursor: "pointer",
                }}
                checkboxFakeStyle={{
                  display: "flex",
                  gap: "1rem",
                  width: "100%",
                }}
                checked={containsOption(selectedOptions, option)}
              >
                {option.name}
              </Checkbox>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultipleSelectLargeDevice;
