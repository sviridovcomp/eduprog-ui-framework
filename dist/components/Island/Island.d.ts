import React, { FC } from "react";
import "./Island.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type IslandPropsType = defaultProps & {
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
    hoverTranstion?: null | "scale" | "translateY";
    onClick?: (event: React.MouseEvent) => void;
};
/**
 * Island отображают информацию в закругленном блоке с границей
 */
declare const Island: FC<IslandPropsType>;
export default Island;
