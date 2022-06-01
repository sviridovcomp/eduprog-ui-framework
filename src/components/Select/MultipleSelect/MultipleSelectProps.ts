import { KeyValue } from "@utils/utils/common/types";
import React from "react";

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
  options: Map<string, Type>;

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
    option: Map<string, Type>
  ) => void;

  defaultValue?: Map<string, Type>;

  wrapperStyles?: React.CSSProperties;

  dropdownStyles?: React.CSSProperties;
};
