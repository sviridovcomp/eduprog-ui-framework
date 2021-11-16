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
};
/**
 * Компонент Заголовок
 */
declare const Heading: FC<HeadingPropsType>;
export default Heading;
