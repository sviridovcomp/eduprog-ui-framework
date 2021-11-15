import React, { FC } from "react";
import "./Island.scss";
export declare type IslandPropsType = {
    /**
     * Дочерние элементы Island
     */
    children: React.ReactNode;
    /**
     * Размер компонента
     */
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    /**
     * Выравнивание компонента
     */
    align?: "left" | "center" | "right";
    /**
     * Тема компонента, `shadow` — затенение на границах, `border` — светло-серая обводка
     */
    type?: "shadow" | "border";
    hoverable?: boolean;
};
/**
 * Island отображают информацию в закругленном блоке с границей
 */
declare const Island: FC<IslandPropsType>;
export default Island;
