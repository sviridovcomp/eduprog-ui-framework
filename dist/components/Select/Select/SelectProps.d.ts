import { MultipleSelectValue } from "@components/Select/MultipleSelect/MultipleSelectProps";
import React from "react";
export declare type SelectValue<Type> = MultipleSelectValue<Type>;
export declare type SelectTypeProps<Type> = {
    /**
     * Заголовок селектора
     */
    label: string;
    /**
     * Опции в селекторе
     */
    options: Array<[string, Type]>;
    /**
     * zIndex popup
     */
    zIndex: number;
    /**
     * Значение по умолчанию
     */
    defaultValue: [string, Type];
    /**
     * Имя элемента в DOM
     */
    name?: string;
    /**
     * Событие вызываемое при обновлении value
     */
    onChange: (option: [string, Type]) => void;
    wrapperStyles?: React.CSSProperties;
    dropdownStyles?: React.CSSProperties;
};
