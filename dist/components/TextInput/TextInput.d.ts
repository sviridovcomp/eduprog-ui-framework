import React, { FC } from "react";
import "./TextInput.scss";
export declare type TextInputProps = {
    label: string;
    maxLength?: number;
    inputType?: "text" | "tel" | "email";
    mask?: string;
    defaultValue?: string;
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    onPaste?: (event?: React.ClipboardEvent<HTMLInputElement>) => void;
    onKeyDown?: (event?: React.KeyboardEvent<HTMLInputElement>) => void;
};
declare const TextInput: FC<TextInputProps>;
export default TextInput;
