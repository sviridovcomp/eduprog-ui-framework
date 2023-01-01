import React, { FC } from "react";
import "./Column.scss";
import { defaultProps } from "@utils/defaultProps";
type RowColWidth = number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto";
type RowColumns = RowColWidth | {
    cols?: RowColWidth;
};
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
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
};
declare const Column: FC<ColumnPropsType>;
export default Column;
