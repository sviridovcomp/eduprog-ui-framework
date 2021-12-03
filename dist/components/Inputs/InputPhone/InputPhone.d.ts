import React, { FC } from "react";
export declare type InputCopyPropsType = {
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
 * InputPhone - поле ввода мобильного телефона
 */
declare const InputPhone: FC<InputCopyPropsType>;
export default InputPhone;
