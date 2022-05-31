import React, { FC } from "react";
import "./Column.scss";
import clsx from "clsx";
import { defaultProps } from "@utils/defaultProps";

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

export type ColumnPropsType = defaultProps & {
  col?: RowColumns;
  xs?: RowColumns;
  md?: RowColumns;
  lg?: RowColumns;
  ml?: AdditionalSpacingWidth;
  mt?: AdditionalSpacingWidth;
  mr?: AdditionalSpacingWidth;
  mb?: AdditionalSpacingWidth;
  spacing?: AdditionalSpacingWidth;
  onClick?: (event: React.MouseEvent<any>) => void;
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
  className = "",
  onClick,
  style,
}) => {
  const rootClasses = clsx([
    "ep-col",
    className,
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
  return (
    <div onClick={onClick} style={style} className={rootClasses}>
      {children}
    </div>
  );
};

export default Column;
