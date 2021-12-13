import React, { FC, useState } from "react";
import "./Button.scss";
import classList from "@utils/classList/classList";
import { defaultProps } from "@utils/defaultProps";

export type ButtonPropsType = defaultProps & {
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

  /**
   *  Имя кнопки в DOM
   */
  name?: string;

  /**
   * Управление шириной кнопки. При значении 'available' растягивает кнопку на ширину родителя
   */
  width?: "default" | "available";

  /**
   * Список произвольных элементов в левом слоте.
   */
  contentLeft?: React.ReactNode;

  /**
   * Список произвольных элементов в правом слоте.
   */
  contentRight?: React.ReactNode;
};

/**
 * Компонент создающий кнопки
 */
const Button: FC<ButtonPropsType> = ({
  children,
  type = "default",
  size = "md",
  onClick,
  className = "",
  name,
  width = "default",
  contentLeft,
  contentRight,
}) => {
  const [active, setActive] = useState(false);

  const rootClasses = classList([
    "Button",
    `Button-type_${type}`,
    `Button-size_${size}`,
    active ? "Button-clicking" : "",
    `Button-width_${width}`,
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
        className={`${rootClasses} ${className}`}
        onClick={(event) => clicking(event)}
        name={name}
      >
        <span className="Button-label">
          <span className="Button-label_left">
            {contentLeft}
          </span>
          <span className="Button-label_center">{children}</span>

          <span className="Button-label_right">
            {contentRight}
          </span>
        </span>
      </button>
    </div>
  );
};

export default Button;
