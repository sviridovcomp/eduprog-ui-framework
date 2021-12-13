import React, { FC } from "react";
import "./Column.scss";
import classList from "@utils/classList/classList";

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

type MarginWidth = number | "1" | "2" | "3" | "4" | "5" | "6";

export type ColumnPropsType = {
  col?: RowColumns;
  xs?: RowColumns;
  md?: RowColumns;
  lg?: RowColumns;
  ml?: MarginWidth;
  mt?: MarginWidth;
  mr?: MarginWidth;
  mb?: MarginWidth;
};

const Column: FC<ColumnPropsType> = ({
  children,
  col,
  xs,
  md,
  lg,
  ml,
  mr,
  mt,
  mb,
}) => {
  const rootClasses = classList([
    "ep-col",
    col ? `ep-col_${col}` : "",
    xs ? `ep-col_xs-${xs}` : "",
    md ? `ep-col_md-${md}` : "",
    lg ? `ep-col_lg-${lg}` : "",
    ml ? `ep-col_ml-${ml}` : "",
    mr ? `ep-col_mr-${mr}` : "",
    mt ? `ep-col_mt-${mt}` : "",
    mb ? `ep-col_ml-${mb}` : "",
  ]);
  return <div className={rootClasses}>{children}</div>;
};

export default Column;
