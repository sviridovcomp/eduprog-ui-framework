import React, { FC } from "react";
import "./Input.scss";
export declare type TextInputProps = {
    label: string;
    maxLength?: number;
    inputType?: "text" | "tel" | "email" | "password";
    mask?: string;
    defaultValue?: string;
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    onPaste?: (event?: React.ClipboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (event?: React.KeyboardEvent<HTMLInputElement>) => void;
    leftAdditional?: React.ReactNode;
    rightAdditional?: React.ReactNode;
};
declare const Input: FC<TextInputProps>;
export default Input;
