import React, { FC } from "react";
export declare type InputPhonePropsType = {
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
declare const InputPhone: FC<InputPhonePropsType>;
export default InputPhone;
