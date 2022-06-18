import React, { FC } from "react";
import "./RadioButton.scss";

export interface IRadioButtonProps {
  label?: string;
}

const RadioButton: FC<IRadioButtonProps> = () => {
  return (
    <div className="radio-button">
      <span className="radio-button-wrapper">
        <input type="radio" className="radio-button-control" />
      </span>
    </div>
  );
};

export default RadioButton;
