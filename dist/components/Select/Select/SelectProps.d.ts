import { MultipleSelectValue } from "@components/Select/MultipleSelect/MultipleSelectProps";
export declare type SelectValue<Type> = MultipleSelectValue<Type>;
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
};