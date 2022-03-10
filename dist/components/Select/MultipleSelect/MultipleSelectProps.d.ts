export declare type MultipleSelectValue<Type> = {
    name: string;
    value: Type;
};
export declare type MultipleSelectPropsType<Type> = {
    /**
     * Лейбл для select
     */
    label: string;
    /**
     * Опции доступные для выбора в select
     */
    options: Array<MultipleSelectValue<Type>>;
    /**
     * zIndex popup
     */
    zIndex: number;
    /**
     * Максимальное количество опций, которые можно выбрать
     */
    maxSelectedOptions?: number;
    /**
     * Имя элемента в DOM
     */
    name?: string;
    /**
     * Событие вызываемое при выборе опции
     * @param option - массив выбранных опций
     */
    onChange?: (option: MultipleSelectValue<Type> | Array<MultipleSelectValue<Type>>) => void;
    value?: Array<MultipleSelectValue<any>>;
};
