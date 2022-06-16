import React, { FC } from "react";
import "./Island.scss";
import clsx from "clsx";
import { defaultProps } from "@utils/defaultProps";

export type IslandPropsType = defaultProps & {
  /**
   * Size
   */
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  /**
   * Align
   */
  align?: "left" | "center" | "right";
  /**
   * Component theme
   *
   * `shadow` - shading on borders
   *
   * `border` - light grey outline
   */
  type?: "shadow" | "border";

  /**
   * The transition that will be made when hovering over Island.
   *
   * `scale` — Island will be smoothly enlarged
   * `translateY` — Island will be lifted up
   */
  hoverTransition?: null | "scale" | "translateY";

  /**
   * onClick callback handler
   */
  onClick?: (event: React.MouseEvent) => void;
};

/**
 * Island displays information in a rounded block with a border
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
