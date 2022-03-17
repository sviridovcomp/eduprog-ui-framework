import React, { FC } from "react";
import "./Row.scss";
import classNames from "classnames";
import { defaultProps } from "@utils/defaultProps";

export type RowPropsType = defaultProps &{
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
}) => {
  const rootClasses = classNames([
    "ep-row",
    { [`ep-row_spacing-${spacing}`]: spacing },
    { [`ep-row_align_${align}`]: align },
    { "ep-row_adaptive": adaptive },
  ]);
  return <div style={style} className={rootClasses}>{children}</div>;
};

export default Row;
