import React, { FC, useState, useRef } from "react";
import "./Button.scss";
import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";

export type ButtonPropsType = defaultProps & {
  /**
   * Тип кнопки
   */
  view?:
    | "default"
    | "action"
    | "link"
    | "pseudo"
    | "clear"
    | "raised"
    | "accent";

  /**
   * Размер кнопки
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";

  /**
   * Обработчик клика по кнопке
   */
  onClick?: (event?: React.PointerEvent<HTMLButtonElement>) => void;

  onPointerDown?: (event?: React.PointerEvent<HTMLButtonElement>) => void;

  onPointerUp?: (event?: React.PointerEvent<HTMLButtonElement>) => void;

  onPointerLeave?: (event?: React.PointerEvent<HTMLButtonElement>) => void;

  onBlur?: (event?: React.FocusEvent<HTMLButtonElement>) => void;
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
  onPointerUp,
  onPointerDown,
  onPointerLeave,
  onBlur,
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [pressed, setPressed] = useState(false);

  const rootClasses = clsx(
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

  const pointerDown = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (navigator.userAgent.match(/safari/i)) {
      event.preventDefault();
    }

    setPressed(true);

    if (onPointerDown) {
      onPointerDown(event);
    }
  };

  const pointerUp = (event: React.PointerEvent<HTMLButtonElement>) => {
    setPressed(false);

    if (onPointerUp) {
      onPointerUp(event);
    }
  };

  const pointerLeave = (event: React.PointerEvent<HTMLButtonElement>) => {
    setPressed(false);

    if (onPointerLeave) {
      onPointerLeave(event);
    }
  };

  const click = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (buttonRef.current != null) {
      buttonRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  const blur = (event: React.FocusEvent<HTMLButtonElement>) => {
    setPressed(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  return (
    <button
      className={rootClasses}
      onPointerDown={pointerDown}
      onPointerUp={pointerUp}
      onPointerLeave={pointerLeave}
      onBlur={blur}
      onClick={click}
      name={name}
      type={type}
      disabled={disabled}
      style={style}
      ref={buttonRef}
    >
      <span
        className="Button-label"
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
