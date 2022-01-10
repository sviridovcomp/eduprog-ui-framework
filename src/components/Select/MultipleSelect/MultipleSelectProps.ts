export type MultipleSelectPropsType = {
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
   * Имя элемента в DOM
   */
  name?: string;

  /**
   * Событие вызываемое при выборе опции
   * @param values - массив выбранных опций
   */
  onSelect?: (values: Array<string>) => void;
};