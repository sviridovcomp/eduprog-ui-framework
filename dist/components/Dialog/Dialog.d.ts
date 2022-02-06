import React, { FC } from "react";
import "./Dialog.scss";
export declare type DialogPropsType = {
    /**
     * Заголовок диалога
     */
    label?: string;
    /**
     * Контент диалога
     */
    children: React.ReactNode;
    /**
     * Размер диалога
     */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "fluid" | "page";
    open?: boolean;
    onClose?: () => void;
};
/**
 * Компонент реализующий всплывающие диалоги
 */
declare const Dialog: FC<DialogPropsType>;
export default Dialog;
