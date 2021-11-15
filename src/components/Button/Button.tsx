import React, { FC, useState } from "react";
import "./Button.scss";

export type ButtonPropsType = {
  /**
   * Цвет кнопки
   */
  color?: "primary" | "secondary" | "accent" | "success" | "danger";

  /**
   * Тип кнопки
   */
  type?: "default" | "action" | "link" | "pseudo" | "clear" | "raised";

  /**
   * Размер кнопки
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Обработчик клика по кнопке
   */
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
};

/**
 * Компонент создающий кнопки
 */
const Button: FC<ButtonPropsType> = ({
  children,
  color,
  type = "default",
  size = "md",
  onClick,
}) => {
  const [active, setActive] = useState(false);

  const rootClasses = [
    "Button",
    `Button-color_${color}`,
    `Button-type_${type}`,
    `Button-size_${size}`,
    active && "Button-clicking",
  ];

  const clicking = (event: React.MouseEvent<HTMLButtonElement>) => {
    setActive(true);

    if (onClick) {
      onClick(event);
    }

    setTimeout(() => {
      setActive(false);
    }, 400);
  };

  return (
    <div>
      <button
        className={rootClasses.join(" ")}
        onClick={(event) => clicking(event)}
      >
        <span className="Button-label">{children}</span>
      </button>
    </div>
  );
};

export default Button;
