import { FC } from "react";
import "./Switch.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type SwitchProps = defaultProps & {
    label?: string;
    position?: "left" | "right";
    color?: "primary" | "secondary" | "accent";
    name?: string;
    onChange?: (value: boolean) => void;
};
declare const Switch: FC<SwitchProps>;
export default Switch;
