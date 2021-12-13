import React, { FC, useState } from "react";
import { useId } from "react-id-generator";
import "./Checkbox.scss";
import classList from "@utils/classList/classList";

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
  const rootClasses = classList([
    "checkbox-checkmark",
    type ? `checkbox-checkmark-type_${type}` : "",
  ]);

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
          <span className={rootClasses}/>
        </span>

        {position === "right" && (
          <div className="checkbox-additional">{children}</div>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
