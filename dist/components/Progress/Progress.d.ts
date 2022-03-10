import { FC } from "react";
import "./Progress.scss";
export interface IProgressProps {
    value: number;
    color?: "primary" | "secondary" | "accent";
    striped?: boolean;
    animated?: boolean;
}
declare const Progress: FC<IProgressProps>;
export default Progress;
