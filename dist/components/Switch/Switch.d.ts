import { FC } from "react";
import "./Switch.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type SwitchProps = defaultProps & {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    label?: string;
    position?: "left" | "right";
    color?: "primary" | "secondary" | "accent";
    name?: string;
    onChange?: () => void;
};
declare const Switch: FC<SwitchProps>;
export default Switch;
