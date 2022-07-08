import React from "react";
import { SelectValue } from "../Select/SelectProps";

export type MultipleSelectValue<Type> = {
  name: string;
  value: Type;
};

export type MultipleSelectPropsType<Type> = {
  /**
   * Лейбл для select
   */
  label: string;

  /**
   * Опции доступные для выбора в select
   */
  options: Array<SelectValue<Type>>;

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
  onChange?: (
    option: Array<SelectValue<Type>>
  ) => void;

  defaultValue?: Array<SelectValue<Type>>;

  wrapperStyles?: React.CSSProperties;

  dropdownStyles?: React.CSSProperties;
};
