import React, { FC, useState } from "react";
import "./Button.scss";
import { defaultProps } from "@utils/defaultProps";
import classNames from "classnames";

export type ButtonPropsType = defaultProps & {
  /**
   * Тип кнопки
   */
  view?: "default" | "action" | "link" | "pseudo" | "clear" | "raised";

  /**
   * Размер кнопки
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Обработчик клика по кнопке
   */
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;

  onMouseDown?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
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

  /**
   * Тип поведения кнопки в форме
   */
  type?: "button" | "reset" | "submit";

  /**
   * Выравнивание лейбла кнопки по ширине
   */
  labelJustifyContent?: "center" | "space-around";

  /**
   * Выравнивание лейбла кнопки по высоте
   */
  labelAlignItems?: "center";

  /**
   * Выключена ли кнопка
   */
  disabled?: boolean;

  /**
   * Круглая кнопка
   */
  rounded?: boolean;

  /**
   * Прогресс
   */
  progress?: boolean;
};

/**
 * Компонент создающий кнопки
 */
const Button: FC<ButtonPropsType> = ({
  children,
  view = "default",
  size = "md",
  onClick,
  onMouseDown,
  className = "",
  name,
  width = "default",
  contentLeft,
  contentRight,
  type = "button",
  labelJustifyContent = "center",
  labelAlignItems = "center",
  disabled = false,
  rounded = false,
  progress = false,
  style,
}) => {
  const [pressed, setPressed] = useState(false);

  const rootClasses = classNames(
    { [`${className}`]: className },
    "Button",
    { [`Button-view_${view}`]: view },
    { [`Button-size_${size}`]: size },
    { "Button-pressed": pressed },
    { [`Button-width_${width}`]: width },
    { "Button-disabled": disabled },
    { "Button-rounded": rounded },
    { "Button-progress": progress }
  );

  const pressing = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPressed(true);

    if (onClick) {
      onClick(event);
    }

    setTimeout(() => {
      setPressed(false);
    }, 400);
  };

  return (
    <button
      className={rootClasses}
      onClick={(event) => pressing(event)}
      onMouseDown={(event) => (onMouseDown ? onMouseDown(event) : null)}
      name={name}
      type={type}
      disabled={disabled}
      style={style}
    >
      <span
        className={classNames("Button-label")}
        style={{
          justifyContent: labelJustifyContent,
        }}
      >
        <span className="Button-label_left">{contentLeft}</span>
        <span
          className="Button-label_center"
          style={{ display: "flex", alignItems: labelAlignItems }}
        >
          {children}
        </span>

        <span className="Button-label_right">{contentRight}</span>
      </span>
    </button>
  );
};

export default Button;
