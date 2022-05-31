import React, { FC } from "react";
import "./Island.scss";
import clsx from "clsx";
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

  hoverTransition?: null | "scale" | "translateY";

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
  hoverTransition = null,
  style,
  onClick,
  className,
}) => {
  const rootClasses = clsx(
    className,
    "island",
    { [`island-size_${size}`]: size },
    { [`island-align_${align}`]: align },
    { [`island-type_${type}`]: type },
    { [`island-hover_${hoverTransition}`]: hoverTransition }
  );

  return (
    <div style={style} className={rootClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Island;
