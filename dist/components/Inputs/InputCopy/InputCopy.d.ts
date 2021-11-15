import { FC } from "react";
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
};
/**
 * InputCopy позволяет пользователю копировать текст текстового поля
 */
declare const InputCopy: FC<InputCopyPropsType>;
export default InputCopy;
