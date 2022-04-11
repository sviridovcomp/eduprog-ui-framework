import { ElementType, ReactNode, CSSProperties, PureComponent } from "react";
import "./Text.scss";
export declare type TextAlignValue = "start" | "end" | "center" | "justify";
export declare type TextOverflowValue = "fade" | "ellipsis" | "fade-horizontal";
export declare type TextTypographyValue = "display-xl" | "display-lg" | "display-md" | "display-sm" | "headline-xl" | "headline-lg" | "headline-sm" | "headline-xs" | "headline-md" | "subheader-xl" | "subheader-lg" | "subheader-md" | "subheader-sm" | "body-short-xl" | "body-short-lg" | "body-short-md" | "body-short-sm" | "body-long-xl" | "body-long-lg" | "body-long-md" | "body-long-sm" | "caption-xl" | "caption-lg" | "caption-md" | "overline-lg" | "overline-md" | "overline-sm" | "control-xxs" | "control-xs" | "control-sm" | "control-lg" | "control-xl" | "control-md" | "control-xxl";
export interface TextProps {
    /**
     * Тип элемента для отображения как (строка или компонент).
     */
    as?: ElementType;
    /**
     * Основной контент
     */
    children?: ReactNode;
    /**
     * Дополнительный класс
     */
    className?: string;
    /**
     * Задает выравнивание текста в компоненте.
     */
    align?: TextAlignValue;
    /**
     * Задает отображение переполненного текста
     */
    overflow?: TextOverflowValue;
    /**
     * Максимальное количество строк текста (работает в связке с overflow)
     */
    maxLines?: number;
    /**
     * Дополнительные стили
     */
    style?: CSSProperties;
    /**
     * Цвет текста
     */
    color?: string;
    /**
     * Задает типографику текста в компоненте.
     */
    typography?: TextTypographyValue;
    weight?: "bold" | "light" | "medium" | "regular";
}
/**
 * Базовый примитив представления текстовых данных.
 * @param { TextProps }  props
 */
export declare class Text extends PureComponent<TextProps> {
    private static getLineHeight;
    private static isFade;
    private static isEllipsis;
    private textElement;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Readonly<TextProps>): void;
    private updateText;
    private getLineHeight;
    private setTextElement;
    render(): JSX.Element;
}
