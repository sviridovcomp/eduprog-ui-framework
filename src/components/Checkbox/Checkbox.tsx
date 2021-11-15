import React, { FC, useState } from "react";
import { useId } from "react-id-generator";
import "./Checkbox.scss";

export type CheckboxPropsType = {
  /**
   * контент слева или справа чекбокса
   */
  children?: React.ReactNode;

  /**
   * Положение `children`
   */
  position?: "left" | "right";

  /**
   * Цвет чекбокса
   */
  type: "primary" | "secondary" | "accent";

  /**
   * Коллбэк вызывается при изменении значения чекбокса
   * @param value - новое значение чекбокса
   */
  onChange?: (value: boolean) => void;
};

/**
 * Компонент чекбокса.
 */
const Checkbox: FC<CheckboxPropsType> = ({
  children,
  position = "left",
  type = "primary",
  onChange,
}) => {
  const [active, setActive] = useState(false);
  const [checkboxId] = useId();
  const rootClasses = [
    "checkbox-checkmark",
    type ? `checkbox-checkmark-type_${type}` : "",
  ];

  const onClick = () => {
    setActive(!active);

    if (onChange) {
      onChange(active);
    }
  };

  return (
    <div className="checkbox">
      <label htmlFor={checkboxId} className="checkbox-wrapper">
        {position === "left" && (
          <div className="checkbox-additional">{children}</div>
        )}

        <input type="checkbox" id={checkboxId} onClick={onClick} />

        <span className="checkbox-fake">
          <span className={rootClasses.join(" ")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#ffffff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z" />
            </svg>
          </span>
        </span>

        {position === "right" && (
          <div className="checkbox-additional">{children}</div>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
