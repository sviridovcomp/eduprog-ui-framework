import React, { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Checkbox.scss";
import classList from "@utils/classList/classList";
import { defaultProps } from "@utils/defaultProps";

export type CheckboxPropsType = defaultProps & {
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
   * Checkbox располагается во всю ширину родителя
   */
  fullwidth?: boolean;

  /**
   * Отключен ли checkbox
   */
  disabled?: boolean;

  /**
   * Checkbox установлен
   */
  checked?: boolean;

  /**
   * Коллбэк вызывается при изменении значения чекбокса
   */
  onChange?: () => void;
};

/**
 * Компонент чекбокса.
 */
const Checkbox: FC<CheckboxPropsType> = ({
  children,
  position = "left",
  type = "primary",
  fullwidth = false,
  disabled = false,
  checked = false,
  className = "",
  onChange,
}) => {
  const [active, setActive] = useState(false);
  const [checkboxId] = useState(uuidv4());
  const rootClasses = classList([
    "checkbox-checkmark",
    type ? `checkbox-checkmark-type_${type}` : "",
    fullwidth ? "checkbox-fullwidth" : "",
  ]);

  const onClick = () => {
    setActive(!active);

    if (onChange) {
      onChange();
    }
  };

  return (
    <div
      className={classList([
        "checkbox",
        fullwidth ? "checkbox-fullwidth" : "",
        ...className.split(" "),
      ])}
    >
      <label
        htmlFor={checkboxId}
        className={classList([
          "checkbox-wrapper",
          fullwidth ? "checkbox-fullwidth" : "",
        ])}
      >
        {position === "left" && (
          <div className="checkbox-additional">{children}</div>
        )}

        <input
          type="checkbox"
          id={checkboxId}
          onClick={onClick}
          disabled={disabled}
          checked={active || checked}
        />

        <span className="checkbox-fake">
          <span className={rootClasses} />
        </span>

        {position === "right" && (
          <div className="checkbox-additional">{children}</div>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
