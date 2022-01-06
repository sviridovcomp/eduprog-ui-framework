import { FC } from "react";
import "./MultipleSelect.scss";
export declare type MultipleSelectPropsType = {
    /**
     * Лейбл для select
     */
    label: string;
    /**
     * Опции доступные для выбора в select
     */
    options: Array<string>;
    /**
     * Максимальное количество опций, которые можно выбрать
     */
    maxSelectedOptions?: number;
    /**
     * Событие вызываемое при выборе опции
     * @param values - массив выбранных опций
     */
    onSelect?: (values: Array<string>) => void;
};
declare const MultipleSelect: FC<MultipleSelectPropsType>;
export default MultipleSelect;
