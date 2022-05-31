// @ts-ignore
import React, { FC, useEffect, useRef, useState, useId } from "react";
import "./Checkbox.scss";
import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";

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
  type: "base" | "primary" | "secondary" | "accent";

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

  autoFocus?: boolean;

  style?: React.CSSProperties;

  wrapperStyle?: React.CSSProperties;
};

/**
 * Компонент чекбокса.
 */
const Checkbox: FC<CheckboxPropsType> = ({
  children,
  position = "left",
  type = "base",
  fullwidth = false,
  disabled = false,
  checked = false,
  className = "",
  onChange,
  autoFocus,
  style,
  wrapperStyle,
}) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [pressed, setPressed] = useState(checked || false);
  const checkboxId = useId();
  const rootClasses = clsx(
    "checkbox-checkmark",

    { "checkbox-fullwidth": fullwidth }
  );

  useEffect(() => {
    if (autoFocus && checkboxRef.current != null) {
      checkboxRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setPressed(checked || false);
  }, [checked]);

  const changing = (event: React.ChangeEvent) => {
    const checkbox = event.target as HTMLInputElement;

    setPressed(checkbox.checked);

    if (onChange) {
      onChange();
    }
  };

  return (
    <div
      className={clsx(
        "checkbox",
        { "checkbox-fullwidth": fullwidth },
        ...className.split(" ")
      )}
    >
      <label
        style={wrapperStyle}
        className={clsx("checkbox-wrapper", {
          "checkbox-fullwidth": fullwidth,
        })}
        htmlFor={`${checkboxId}-checkbox`}
      >
        {position === "left" && (
          <div className="checkbox-additional">{children}</div>
        )}

        <input
          type="checkbox"
          onChange={changing}
          disabled={disabled}
          checked={pressed}
          ref={checkboxRef}
          id={`${checkboxId}-checkbox`}
        />

        <span
          style={style}
          className={clsx("checkbox-fake", {
            [`checkbox-checkmark-type_${type}`]: type,
          })}
        >
          <span className={rootClasses}>
            <svg width="14" height="10" viewBox="0 0 14 10">
              <path d="M1.49 4.885l1.644-1.644 4.385 4.385L5.874 9.27 1.49 4.885zm4.384 1.096L11.356.5 13 2.144 7.519 7.626 5.874 5.98v.001z"></path>
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
