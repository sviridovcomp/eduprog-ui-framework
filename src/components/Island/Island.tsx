import React, { FC } from "react";
import "./Island.scss";

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
  const rootClasses = [
    "island",
    size && `island-size_${size}`,
    align && `island-align_${align}`,
    type && `island-type_${type}`,
    hoverable && "island-hoverable",
  ];

  return <div className={rootClasses.join(" ")}>{children}</div>;
};

export default Island;
