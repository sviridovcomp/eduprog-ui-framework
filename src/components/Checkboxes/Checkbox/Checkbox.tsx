import React, { FC, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Checkbox.scss";
import { defaultProps } from "@utils/defaultProps";
import classNames from "classnames";

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
  const [active, setActive] = useState(checked);
  const [checkboxId] = useState(uuidv4());
  const rootClasses = classNames(
    "checkbox-checkmark",
    { [`checkbox-checkmark-type_${type}`]: type },
    { "checkbox-fullwidth": fullwidth }
  );

  const changing = (event: React.ChangeEvent) => {
    const checkbox = event.target as HTMLInputElement;

    setActive(checkbox.checked);

    if (onChange) {
      onChange();
    }
  };

  return (
    <div
      className={classNames(
        "checkbox",
        { "checkbox-fullwidth": fullwidth },
        ...className.split(" ")
      )}
    >
      <label
        htmlFor={checkboxId}
        className={classNames("checkbox-wrapper", {
          "checkbox-fullwidth": fullwidth,
        })}
      >
        {position === "left" && (
          <div className="checkbox-additional">{children}</div>
        )}

        <input
          type="checkbox"
          id={checkboxId}
          onChange={changing}
          disabled={disabled}
          checked={active}
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
