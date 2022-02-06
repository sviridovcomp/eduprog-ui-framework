import { FC } from "react";
import { TextInputProps } from "../BaseInput/BaseInput";
import "./InputCount.scss";
export declare type InputCountPropsType = TextInputProps & {
    /**
     * заголовок input
     */
    label: string;
    /**
     * Минимальное значение в input
     */
    min?: number;
    /**
     * Максимальное значение в input
     */
    max?: number;
    /**
     * Шаг для счетчика
     */
    step?: number;
    /**
     * Имя элемента в DOM
     */
    name?: string;
    /**
     * Событие обновления input
     */
    onChange: (value: string) => void;
};
declare const InputCount: FC<InputCountPropsType>;
export default InputCount;
