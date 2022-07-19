import { KeyValue } from "@utils/utils/common/types";
import React from "react";
export declare type SelectValue<Type> = KeyValue<Type>;
export declare type SelectTypeProps<Type> = {
    /**
     * Заголовок селектора
     */
    label: string;
    /**
     * Опции в селекторе
     */
    options: Array<SelectValue<Type>>;
    /**
     * zIndex popup
     */
    zIndex: number;
    /**
     * Значение по умолчанию
     */
    defaultValue: SelectValue<Type>;
    /**
     * Имя элемента в DOM
     */
    name?: string;
    /**
     * Событие вызываемое при обновлении value
     */
    onChange: (option: SelectValue<Type>) => void;
    wrapperStyles?: React.CSSProperties;
    dropdownStyles?: React.CSSProperties;
    controlClassName?: string;
    controlStyle?: React.CSSProperties;
};
