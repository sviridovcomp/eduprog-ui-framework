import React, { FC } from "react";
import { TextInputProps } from "../BaseInput/BaseInput";
export declare type InputPhonePropsType = TextInputProps & {
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
