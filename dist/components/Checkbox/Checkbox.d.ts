import React, { FC } from "react";
import "./Checkbox.scss";
export declare type CheckboxPropsType = {
    children?: React.ReactNode;
    position?: "left" | "right";
    type: "primary" | "secondary" | "accent";
    onChange?: (value: boolean) => void;
};
declare const Checkbox: FC<CheckboxPropsType>;
export default Checkbox;
