import React, { FC } from "react";
import "./InputPassword.scss";
export declare type InputPasswordPropsType = {
    /**
     * Заголовок input
     */
    label: string;
    /**
     * Событие обновления input
     */
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
};
/**
 * InputCopy позволяет пользователю копировать текст текстового поля
 */
declare const InputPassword: FC<InputPasswordPropsType>;
export default InputPassword;
