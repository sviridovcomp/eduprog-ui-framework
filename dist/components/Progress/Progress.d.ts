import { FC } from "react";
import "./Progress.scss";
export declare type colorVariants = "primary" | "secondary" | "accent";
export interface IProgressProps {
    value: number;
    color: colorVariants | string;
    striped?: boolean;
    animated?: boolean;
}
/**
 * Component that indicates the progress of an operation.
 */
declare const Progress: FC<IProgressProps>;
export default Progress;
