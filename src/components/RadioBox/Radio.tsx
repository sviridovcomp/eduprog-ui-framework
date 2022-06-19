// @ts-ignore
import React, { FC, useId } from "react";
import { defaultProps } from "@utils/defaultProps";
import "./Radio.scss";

export type RadioProps = defaultProps & {
  label?: string;

  value?: string;

  checked?: boolean;

  onChange?: (label?: string) => void;
};

const Radio: FC<RadioProps> = ({ onChange, label, value, checked }) => {
  const radioId = useId();
  const labelId = `label-${radioId}`;

  const radioChange = (label?: string) => {
    onChange && onChange(label);
  };

  return (
    <div className="radiobox-radio">
      <label htmlFor={labelId}>
        <input
          type="radio"
          className="radiobox-control"
          id={labelId}
          value={value}
          checked={checked}
          onChange={() => radioChange(label)}
        />
        {label}
      </label>
    </div>
  );
};

export default Radio;
