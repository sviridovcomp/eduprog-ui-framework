import React, { FC } from "react";
import "./Column.scss";
import classNames from "classnames";

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

type AdditionalSpacingWidth = number | "1" | "2" | "3" | "4" | "5" | "6";

export type ColumnPropsType = {
  col?: RowColumns;
  xs?: RowColumns;
  md?: RowColumns;
  lg?: RowColumns;
  ml?: AdditionalSpacingWidth;
  mt?: AdditionalSpacingWidth;
  mr?: AdditionalSpacingWidth;
  mb?: AdditionalSpacingWidth;
  spacing?: AdditionalSpacingWidth;
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
  spacing,
}) => {
  const rootClasses = classNames([
    "ep-col",
    { [`ep-col_${col}`]: true },
    { [`ep-col_xs-${xs}`]: true },
    { [`ep-col_md-${md}`]: true },
    { [`ep-col_lg-${lg}`]: true },
    { [`ep-col_ml-${ml}`]: true },
    { [`ep-col_mr-${mr}`]: true },
    { [`ep-col_mt-${mt}`]: true },
    { [`ep-col_ml-${mb}`]: true },
    { [`ep-col_spacing-${spacing}`]: true },
  ]);
  return <div className={rootClasses}>{children}</div>;
};

export default Column;
