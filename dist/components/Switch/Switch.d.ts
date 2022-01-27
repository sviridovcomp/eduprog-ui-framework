import { FC } from "react";
import "./Switch.scss";
export declare type SwitchProps = {
    label?: string;
    position?: "left" | "right";
    color?: "primary" | "secondary" | "accent";
};
declare const Switch: FC<SwitchProps>;
export default Switch;
