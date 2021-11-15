import React, { FC } from "react";
import "./Dropdown.scss";
export declare type DropdownPropsType = {
    /**
     * Дочерние элементы Dropdown
     */
    children: React.ReactNode;
    /**
     * Элемент триггер, по клику, на который открывается popup
     */
    toggle: React.ReactNode;
    /**
     * Направление раскрытия popup
     */
    direction?: "bottom-left" | "bottom-center" | "bottom-right" | "top-left" | "top-center" | "top-right";
    /**
     * Убрать стрелочку направления popup
     */
    clearly: boolean;
    /**
     * Dropdown в полный размер родительского блока
     */
    fullwidth: boolean;
    /**
     * Dropdown скрывается при клике прочие элементы
     */
    dismissible: boolean;
};
/**
 * Компонент для создания выпадающего списка
 */
declare const Dropdown: FC<DropdownPropsType>;
export default Dropdown;
