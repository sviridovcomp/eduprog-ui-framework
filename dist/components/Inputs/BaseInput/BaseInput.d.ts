import React, { FC } from "react";
import "./BaseInput.scss";
import { defaultProps } from "@utils/defaultProps";
export interface ITextInputValidator {
    notEmpty?: boolean;
    pattern?: RegExp;
    message?: string;
}
export declare type TextInputProps = defaultProps & {
    /**
     * Лейбл для поля ввода
     */
    label: string;
    /**
     * Максимальная длина текста в поле ввода
     */
    maxLength?: number;
    /**
     * Тип поля ввода
     */
    inputType?: "text" | "tel" | "email" | "password" | "number" | "card";
    /**
     * Определяет маску для ввода значений
     */
    mask?: string;
    /**
     * Значение поля ввода по умолчанию
     */
    defaultValue?: string;
    /**
     * Событие вызываемое при клике на input
     */
    onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
    /**
     * Событие обновления input
     */
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * Событие обновления input
     */
    onPaste?: (event?: React.ClipboardEvent<HTMLInputElement>) => void;
    /**
     * Событие нажатия input
     */
    onKeyDown?: (event?: React.KeyboardEvent<HTMLInputElement>) => void;
    onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Добавление дополнительных элементов к инпуту слева
     */
    leftAdditional?: React.ReactNode;
    /**
     * Добавление дополнительных элементов к инпуту справа
     */
    rightAdditional?: React.ReactNode;
    /**
     * Имя элемента в DOM
     */
    name?: string;
    /**
     * Параметры автокомпилита
     */
    autocomplete?: "none" | "cc-number";
    /**
     * Курсор, который будет при наведении на input
     */
    cursor?: "pointer" | "text";
    /**
     * BaseInput доступен только для чтения
     */
    readonly?: boolean;
    /**
     *
     */
    forceFocus?: boolean;
    forceInvalid?: boolean;
    autoFocus?: boolean;
    validators?: ITextInputValidator;
    onPointerDown?: (event?: React.MouseEvent) => void;
    onPointerUp?: (event?: React.MouseEvent) => void;
    onPointerLeave?: (event?: React.MouseEvent) => void;
};
declare const BaseInput: FC<TextInputProps>;
export default BaseInput;
