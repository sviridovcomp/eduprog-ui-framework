import React, { FC } from "react";
import "./Column.scss";
import classList from "../../../utils/classList";

type RowColWidth =
  | number
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "auto";
type RowColumns = RowColWidth | { cols?: RowColWidth };

export type ColumnPropsType = {
  col?: RowColumns;
  xs?: RowColumns;
  md?: RowColumns;
  lg?: RowColumns;
};

const Column: FC<ColumnPropsType> = ({ children, col, xs, md, lg }) => {
  const rootClasses = classList([
    "ep-col",
    col ? `ep-col_${col}` : "",
    xs ? `ep-col_xs-${xs}` : "",
    md ? `ep-col_md-${md}` : "",
    lg ? `ep-col_lg-${lg}` : "",
  ]);
  return <div className={rootClasses}>{children}</div>;
};

export default Column;
