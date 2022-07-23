import React from "react";

export type SelectValue<Type> = {
  name: string;
  value: Type;
}

export type SelectTypeProps<Type> = {
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
