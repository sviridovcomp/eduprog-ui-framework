import React, { FC, useState } from "react";
import "./TextInput.scss";

export type TextInputProps = {
  label: string;
  maxLength?: number;
  inputType?: "text" | "tel" | "email";
  mask?: string;
  defaultValue?: string;
  onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
  onPaste?: (event?: React.ClipboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event?: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TextInput: FC<TextInputProps> = ({
  label,
  inputType = "text",
  maxLength,
  mask,
  defaultValue,
  onChange,
  onPaste,
  onKeyDown,
}) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const inputFocus = () => {
    setActive(!active);
  };

  const inputBlur = () => {
    setActive(!active);
  };

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);

    if (onChange && value) {
      onChange(value, event);
    }
  };

  const inputPaste = (
    event: React.ClipboardEvent<HTMLInputElement> | undefined
  ) => {
    if (onPaste) {
      onPaste(event);
    }
  };

  const inputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement> | undefined
  ) => {
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <div className="TextInput">
      <div className="TextInput-wrapper">
        <div
          className={[
            "TextInput-label",
            (active || value) && "TextInput-label-active",
          ].join(" ")}
        >
          {label}
        </div>

        <div className="TextInput-field">
          <input
            className="TextInput-control"
            type={inputType}
            maxLength={maxLength}
            placeholder={active ? mask : ""}
            onFocus={inputFocus}
            onBlur={inputBlur}
            value={value}
            onChange={(event) => inputChange(event)}
            onPaste={(event) => inputPaste(event)}
            onKeyDown={(event) => inputKeyDown(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
