import React, { FC } from "react";
import { TextInputProps } from "../BaseInput/BaseInput";
import "./InputCopy.scss";
export declare type InputCopyPropsType = TextInputProps & {
    /**
     * Заголовок input
     */
    label: string;
    /**
     * Текст, который показан при копировании
     */
    copyLabel: string;
    /**
     * Событие обновления input
     */
    onChange: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Имя элемента в DOM
     */
    name?: string;
};
/**
 * InputCopy alows user to copy a text of textfield
 */
declare const InputCopy: FC<InputCopyPropsType>;
export default InputCopy;
