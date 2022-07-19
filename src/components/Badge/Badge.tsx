import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";
import React, { FC } from "react";
import "./Badge.scss";

export type BadgeProps = defaultProps & {
  view: "success" | "error" | "warning";
};

const Badge: FC<BadgeProps> = ({
  children,
  view = "success",
  style,
  className,
  onPointerDown,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  onPointerUp,
  onBlur,
  onFocus,
}) => {
  return (
    <div
      className={clsx("badge", { [`badge-view_${view}`]: view }, className)}
      style={style}
      onPointerDown={onPointerDown}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </div>
  );
};

export default Badge;
