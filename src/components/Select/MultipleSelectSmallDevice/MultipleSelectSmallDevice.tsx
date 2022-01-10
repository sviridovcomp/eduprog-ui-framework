import React, { FC, useState } from "react";
import { MultipleSelectPropsType } from "@components/Select/MultipleSelect/MultipleSelectProps";
import classList from "@utils/classList/classList";
import "./MultipleSelectSmallDevice.scss";
import { sha256 } from "js-sha256";

const MultipleSelectSmallDevice: FC<MultipleSelectPropsType> = ({
  label,
  maxSelectedOptions,
  name = "",
  options,
  onSelect,
}) => {
  const [active, setActive] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<Array<string>>([]);

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = event.target.selectedOptions;
    console.log(options);
    setSelectedOptions(
      [...options].map(({ value }) => value).slice(0, maxSelectedOptions)
    );

    if (onSelect) {
      onSelect(selectedOptions);
    }
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
          {options.map((optionName) => (
            <option value={optionName} key={sha256(optionName)}>
              {optionName}
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
