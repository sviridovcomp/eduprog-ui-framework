export interface MultipleSelectValue<Type> {
    name: string;
    value: Type;
}
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
     * Максимальное количество опций, которые можно выбрать
     */
    maxSelectedOptions?: number;
    /**
     * Имя элемента в DOM
     */
    name?: string;
    /**
     * Событие вызываемое при выборе опции
     * @param values - массив выбранных опций
     */
    onChange?: (values: Array<MultipleSelectValue<Type>>) => void;
    value?: Array<MultipleSelectValue<any>>;
};
