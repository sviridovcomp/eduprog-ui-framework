import React, { FC } from "react";
import { TextInputProps } from "../BaseInput/BaseInput";
import "./InputPassword.scss";
export declare type InputPasswordPropsType = TextInputProps & {
    /**
     * Заголовок input
     */
    label: string;
    /**
     * Событие обновления input
     */
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Название компонента в DOM
     */
    name?: string;
    required?: boolean;
    pattern?: RegExp;
    validationMessage?: string;
};
/**
 * InputCopy позволяет пользователю копировать текст текстового поля
 */
declare const InputPassword: FC<InputPasswordPropsType>;
export default InputPassword;
