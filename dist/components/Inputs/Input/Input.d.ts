import React, { FC } from "react";
import "./Input.scss";
export declare type TextInputProps = {
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
    /**
     * Добавление дополнительных элементов к инпуту слева
     */
    leftAdditional?: React.ReactNode;
    /**
     * Добавление дополнительных элементов к инпуту справа
     */
    rightAdditional?: React.ReactNode;
    /**
     * Паттерн валидации input
     */
    pattern?: string;
    /**
     * Имя элемента в DOM
     */
    name?: string;
};
declare const Input: FC<TextInputProps>;
export default Input;
