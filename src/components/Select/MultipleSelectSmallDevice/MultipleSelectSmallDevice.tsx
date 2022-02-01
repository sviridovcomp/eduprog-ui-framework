import React, { FC, useState } from "react";
import {
  MultipleSelectPropsType,
  MultipleSelectValue,
} from "@components/Select/MultipleSelect/MultipleSelectProps";
import classList from "@utils/classList/classList";
import "./MultipleSelectSmallDevice.scss";
import { sha256 } from "js-sha256";

const MultipleSelectSmallDevice: FC<MultipleSelectPropsType<string>> = ({
  label,
  maxSelectedOptions,
  name = "",
  options,
  onChange,
}) => {
  const [active, setActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = event.target.selectedOptions;

    setSelectedOptions(
      [...options].map(({ value }) => value).slice(0, maxSelectedOptions)
    );
  };

  const selectFocus = () => {
    setActive(!active);
  };

  return (
    <div className="input">
      <div
        className={classList([
          "input-label",
          active ? "input-label-active" : "",
        ])}
      >
        {label}
      </div>

      <div className="input-field">
        <select
          className="input-control"
          onFocus={selectFocus}
          onChange={selectChange}
          style={{ width: "100%" }}
          name={name}
          size={1}
          multiple
        >
          {options.map(({ name }) => (
            <option value={name} key={sha256(name)}>
              {name}
            </option>
          ))}
        </select>

        <div className="multiple-select-value">
          {selectedOptions.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default MultipleSelectSmallDevice;
