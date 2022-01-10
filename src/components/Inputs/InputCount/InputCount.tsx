import React, { FC, useState } from "react";
import BaseInput from "../BaseInput/BaseInput";
import "./InputCount.scss";
import { defaultProps } from "@utils/defaultProps";

export type InputCountPropsType = defaultProps & {
  /**
   * заголовок input
   */
  label: string;

  /**
   * Минимальное значение в input
   */
  min?: number;

  /**
   * Максимальное значение в input
   */
  max?: number;

  /**
   * Шаг для счетчика
   */
  step?: number;

  /**
   * Имя элемента в DOM
   */
  name?: string;

  /**
   * Событие обновления input
   */
  onChange: (value: string) => void;
};

const InputCount: FC<InputCountPropsType> = ({
  label,
  max,
  min,
  step = 1,
  name = "",
  onChange,
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
    <div className="input-count">
      <BaseInput
        inputType="text"
        label={label}
        defaultValue={count.toString()}
        name={name}
        onChange={inputChange}
      />

      <div className="input-count-controller">
        <div className="input-count-plus" onClick={increment}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
          </svg>
        </div>

        <div className="input-count-minus" onClick={decrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M18 13H6c-.55 0-1-.45-1-1s.45-1 1-1h12c.55 0 1 .45 1 1s-.45 1-1 1z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default InputCount;
