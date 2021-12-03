import React, { FC } from "react";
import "./InputCopy.scss";
export declare type InputCopyPropsType = {
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
 * InputCopy позволяет пользователю копировать текст текстового поля
 */
declare const InputCopy: FC<InputCopyPropsType>;
export default InputCopy;
