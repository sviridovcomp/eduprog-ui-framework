import { FC } from "react";
import "./Row.scss";
export declare type RowPropsType = {
    align?: "start" | "end" | "center";
    spacing?: "1" | "2" | "3" | "4" | "5" | "6" | number;
};
declare const Row: FC<RowPropsType>;
export default Row;
