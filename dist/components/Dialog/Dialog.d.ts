import React, { FC } from "react";
import "./Dialog.scss";
export declare type DialogPropsType = {
    /**
     * Заголовок диалога
     */
    label?: string;
    /**
     * Элемент триггер, при нажатии, на который диалог открывается
     */
    toggle: React.ReactNode;
    /**
     * Контент диалога
     */
    children: React.ReactNode;
    /**
     * Размер диалога
     */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "fluid" | "page";
};
/**
 * Компонент реализующий всплывающие диалоги
 */
declare const Dialog: FC<DialogPropsType>;
export default Dialog;
