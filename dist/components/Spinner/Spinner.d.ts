import { FC } from "react";
import { defaultProps } from "@utils/defaultProps";
import "./Spinner.scss";
export declare type SpinnerPropsType = defaultProps & {
    color: "primary" | "secondary" | "accent";
    mode: "border" | "growing";
};
declare const Spinner: FC<SpinnerPropsType>;
export default Spinner;
