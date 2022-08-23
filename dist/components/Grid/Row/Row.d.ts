import React, { FC } from "react";
import "./Row.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type RowPropsType = defaultProps & {
    align?: "start" | "end" | "center";
    spacing?: "1" | "2" | "3" | "4" | "5" | "6" | number;
    adaptive?: boolean;
    children: React.ReactNode;
};
declare const Row: FC<RowPropsType>;
export default Row;
