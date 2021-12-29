import { FC } from "react";
import "./Column.scss";
declare type RowColWidth = number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "auto";
declare type RowColumns = RowColWidth | {
    cols?: RowColWidth;
};
declare type AdditionalSpacingWidth = number | "1" | "2" | "3" | "4" | "5" | "6";
export declare type ColumnPropsType = {
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
declare const Column: FC<ColumnPropsType>;
export default Column;
