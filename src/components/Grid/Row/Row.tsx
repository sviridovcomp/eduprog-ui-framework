import React, { FC } from "react";
import "./Row.scss";
import clsx from "clsx";
import { defaultProps } from "@utils/defaultProps";

export type RowPropsType = defaultProps & {
  align?: "start" | "end" | "center";
  spacing?: "1" | "2" | "3" | "4" | "5" | "6" | number;
  adaptive?: boolean;
};

const Row: FC<RowPropsType> = ({
  children,
  spacing,
  align,
  adaptive = true,
  style,
  className,
}) => {
  const rootClasses = clsx([
    "ep-row",
    { [`ep-row_spacing-${spacing}`]: spacing },
    { [`ep-row_align_${align}`]: align },
    { "ep-row_adaptive": adaptive },
    className,
  ]);
  return (
    <div style={style} className={rootClasses}>
      {children}
    </div>
  );
};

export default Row;
