import { FC } from "react";
import "./Heading.scss";
export declare type HeadingPropsType = {
    /**
     * Текст заголовка
     */
    children: string;
    /**
     * Размер заголовка
     */
    size: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    /**
     * Отступ снизу
     */
    spacingBottom: number;
    /**
     * Отступ сверху
     */
    spacingTop: number;
};
/**
 * Компонент Заголовок
 */
declare const Heading: FC<HeadingPropsType>;
export default Heading;
