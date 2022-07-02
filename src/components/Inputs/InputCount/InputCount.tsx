import React, { FC, useState } from "react";
import BaseInput, { TextInputProps } from "../BaseInput/BaseInput";
import "./InputCount.scss";

export type InputCountPropsType = TextInputProps & {
  /**
   * Minimum value
   */
  min?: number;

  /**
   * Maximum value (`Infinity` by default)
   */
  max?: number;

  /**
   * Step for buttons
   */
  step?: number;
};

/**
 * InputCount is a good choice to input integer numbers
 */
const InputCount: FC<InputCountPropsType> = ({
  label,
  max,
  min,
  step = 1,
  name = "",
  onChange,
  ...rest
}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (max && count + step > max) {
      return;
    }

    setCount(count + step);

    if (onChange) {
      onChange(count.toString());
    }
  };
  const decrement = () => {
    if (min && count + step < min) {
      return;
    }

    setCount(count - step);

    if (onChange) {
      onChange(count.toString());
    }
  };

  const inputChange = (value: string) => {
    if (/\d/g.test(value)) {
      setCount(Number(value));
    }
  };

  return (
    <BaseInput
      inputType="text"
      label={label}
      controlClassName="input-count-control"
      defaultValue={count.toString()}
      name={name}
      onChange={inputChange}
      rigthAdditioanlClassName="input-count-control-rigth"
      rightAdditional={
        <div className="input-count-controller">
          <div className="input-count-plus" onClick={increment}>
            <i className="plus"></i>
          </div>

          <div className="input-count-minus" onClick={decrement}>
            <i className="minus"></i>
          </div>
        </div>
      }
      {...rest}
    />
  );
};

export default InputCount;
