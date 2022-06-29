import React, { FC } from "react";
import "./Switch.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type SwitchProps = defaultProps & {
    label?: string;
    position?: "left" | "right";
    color: "primary" | "secondary" | "accent" | string;
    name?: string;
    onChange?: (event?: React.ChangeEvent) => void;
    textOn?: React.ReactChild;
    textOff?: React.ReactChild;
    checked: boolean;
    disabled?: boolean;
};
declare const Switch: FC<SwitchProps>;
export default Switch;
