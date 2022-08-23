import React, { useState } from "react";
import { defaultProps } from "@utils/defaultProps";
import { FC } from "react";
import Radio from "./Radio";

export interface RadioBoxValueProps {
  label: string;
  value: string;
}

export type RadioBoxProps = defaultProps & {
  options: RadioBoxValueProps[];
  children: React.ReactNode;
};

const RadioBox: FC<RadioBoxProps> = ({ options, children }) => {
  const [checkedRadio, setCheckedRadio] = useState(options[0].label);

  return (
    <div className="radiobox">
      {children ||
        options?.map((option) => (
          <Radio
            key={option.label}
            label={option.label}
            onChange={(label) => label && setCheckedRadio(label)}
            checked={checkedRadio == option.label}
          ></Radio>
        ))}
    </div>
  );
};

export default RadioBox;
