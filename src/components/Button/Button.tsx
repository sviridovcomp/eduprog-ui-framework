import React, { FC, useState } from "react";
import "./Button.scss";
import classList from "../../utils/classList";

export type ButtonPropsType = {
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
  type = "default",
  size = "md",
  onClick,
}) => {
  const [active, setActive] = useState(false);

  const rootClasses = classList([
    "Button",
    `Button-type_${type}`,
    `Button-size_${size}`,
    active ? "Button-clicking" : "",
  ]);

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
        className={rootClasses}
        onClick={(event) => clicking(event)}
      >
        <span className="Button-label">{children}</span>
      </button>
    </div>
  );
};

export default Button;
