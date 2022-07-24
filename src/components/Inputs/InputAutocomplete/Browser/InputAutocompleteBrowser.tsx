import Input from "@components/Inputs/Input/Input";
import {
  autoUpdate,
  flip,
  offset,
  size,
  useFloating,
} from "@floating-ui/react-dom-interactions";
import React, { FC, useState, useEffect } from "react";
import {
  AutocompleteValue,
  IInputAutocompleteProps,
} from "../InputAutocomplete";
import "./InputAutocomplete.scss";

const InputAutocompleteBrowser: FC<IInputAutocompleteProps> = ({
  label,
  options,
  onChange,
}) => {
  const [value, setValue] = useState("");
  const [selectedOptions, setSelectedOptions] =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useState<AutocompleteValue<any>>();
  const [open, setOpen] = useState(false);

  const escapeRegExp = (value: string): string => {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filteredOptions = () => {
    const regexPattern = new RegExp(escapeRegExp(value.trim()), "i");

    return options?.filter((option) => {
      return regexPattern.test(option.name);
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const selectItem = (option: AutocompleteValue<any>) => {
    setValue(option.name);
    setSelectedOptions(option);
  };

  const { x, y, floating, reference, strategy } = useFloating<HTMLDivElement>({
    middleware: [
      offset(8),
      flip(),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: "calc(2.5rem * 6)",
          });
        },
        padding: 8,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  useEffect(() => {
    onChange && onChange(selectedOptions);
  }, [selectedOptions]);

  return (
    <div onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      <Input
        label={label}
        defaultValue={value}
        onChange={(value) => setValue(value)}
        controlRef={reference}
      />

      {open && (
        <div
          ref={floating}
          className="autocomplete"
          style={{ position: strategy, left: x ?? 0, top: y ?? 0 }}
        >
          {filteredOptions()?.map((option) => (
            <div
              key={option.name}
              className="autocomplete-item"
              onPointerDown={() => selectItem(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InputAutocompleteBrowser;
