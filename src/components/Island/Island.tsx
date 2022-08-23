import React, { FC } from "react";
import "./Island.scss";
import clsx from "clsx";
import { defaultProps } from "@utils/defaultProps";

export type IslandPropsType = defaultProps & {
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
  view?: "shadow" | "border";

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

  children: React.ReactNode;
};

/**
 * Island displays information in a rounded block with a border
 */
const Island: FC<IslandPropsType> = ({
  children,
  align = "center",
  view = "shadow",
  hoverTransition = null,
  style,
  onClick,
  className,
}) => {
  const rootClasses = clsx(
    className,
    "island",
    { [`island-align_${align}`]: align },
    { [`island-view_${view}`]: view },
    { [`island-hover_${hoverTransition}`]: hoverTransition }
  );

  return (
    <div style={style} className={rootClasses} onClick={onClick}>
      {children}
    </div>
  );
};

export default Island;
