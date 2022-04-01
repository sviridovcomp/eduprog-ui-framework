import React, { FC } from "react";
import "./Island.scss";
import classNames from "classnames";
import { defaultProps } from "@utils/defaultProps";

export type IslandPropsType = defaultProps & {
  /**
   * Дочерние элементы Island
   */
  children: React.ReactNode;
  /**
   * Размер компонента
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Выравнивание компонента
   */
  align?: "left" | "center" | "right";
  /**
   * Тема компонента, `shadow` — затенение на границах, `border` — светло-серая обводка
   */
  type?: "shadow" | "border";
  hoverable?: boolean;

  scalable?: boolean;

  onClick?: (event: React.MouseEvent) => void;
};

/**
 * Island отображают информацию в закругленном блоке с границей
 */
const Island: FC<IslandPropsType> = ({
  children,
  size = "md",
  align = "center",
  type = "shadow",
  hoverable = false,
  className,
  style,
  scalable = false,
  onClick,
}) => {
  const rootClasses = classNames(
    className,
    "island",
    { [`island-size_${size}`]: size },
    { [`island-align_${align}`]: align },
    { [`island-type_${type}`]: type },
    { "island-hoverable": hoverable },
    { "island-scalable": scalable}
  );

  return <div style={style} className={rootClasses} onClick={onClick}>{children}</div>;
};

export default Island;
