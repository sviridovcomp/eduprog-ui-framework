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
    { [`ep-col_${col}`]: col },
    { [`ep-col_xs-${xs}`]: xs },
    { [`ep-col_md-${md}`]: md },
    { [`ep-col_lg-${lg}`]: lg },
    { [`ep-col_ml-${ml}`]: ml },
    { [`ep-col_mr-${mr}`]: mr },
    { [`ep-col_mt-${mt}`]: mt },
    { [`ep-col_ml-${mb}`]: mb },
    { [`ep-col_spacing-${spacing}`]: spacing },
  ]);
  return <div className={rootClasses}>{children}</div>;
};

export default Column;
