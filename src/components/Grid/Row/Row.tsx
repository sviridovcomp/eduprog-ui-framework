import React, { FC } from "react";
import "./Row.scss";
import classNames from "classnames";

export type RowPropsType = {
  align?: "start" | "end" | "center";
  spacing?: "1" | "2" | "3" | "4" | "5" | "6" | number;
};

const Row: FC<RowPropsType> = ({ children, spacing, align }) => {
  const rootClasses = classNames([
    "ep-row",
    { [`ep-row_spacing-${spacing}`]: true },
    { [`ep-row_align_${align}`]: true },
  ]);
  return <div className={rootClasses}>{children}</div>;
};

export default Row;
