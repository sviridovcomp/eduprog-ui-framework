import { FC } from "react";
import { defaultProps } from "@utils/defaultProps";
import "./Spinner.scss";
export declare type SpinnerPropsType = defaultProps & {
    color: "primary" | "secondary" | "accent" | string;
    mode?: "border" | "growing";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
};
/**
 *
 * @param param0
 * @returns
 */
declare const Spinner: FC<SpinnerPropsType>;
export default Spinner;
