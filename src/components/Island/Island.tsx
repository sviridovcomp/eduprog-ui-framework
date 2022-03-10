import React, { FC } from "react";
import "./Island.scss";
import classNames from "classnames";

export type IslandPropsType = {
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
}) => {
  const rootClasses = classNames(
    "island",
    { [`island-size_${size}`]: size },
    { [`island-align_${align}`]: align },
    { [`island-type_${type}`]: type },
    { "island-hoverable": hoverable }
  );

  return <div className={rootClasses}>{children}</div>;
};

export default Island;
