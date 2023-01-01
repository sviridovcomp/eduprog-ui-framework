import { ElementType, ReactNode, CSSProperties, PureComponent } from "react";
import "./Text.scss";
export type TextAlignValue = "start" | "end" | "center" | "justify";
export type TextOverflowValue = "fade" | "ellipsis" | "fade-horizontal";
export type TextTypographyValue = "display-xl" | "display-lg" | "display-md" | "display-sm" | "headline-xl" | "headline-lg" | "headline-sm" | "headline-xs" | "headline-md" | "subheader-xl" | "subheader-lg" | "subheader-md" | "subheader-sm" | "body-short-xl" | "body-short-lg" | "body-short-md" | "body-short-sm" | "body-long-xl" | "body-long-lg" | "body-long-md" | "body-long-sm" | "caption-xl" | "caption-lg" | "caption-md" | "overline-lg" | "overline-md" | "overline-sm" | "control-xxs" | "control-xs" | "control-sm" | "control-lg" | "control-xl" | "control-md" | "control-xxl";
export interface TextProps {
    /**
     * Type of element to display as (string or component).
     */
    as?: ElementType;
    /**
     * Main content
     */
    children?: ReactNode;
    /**
     * Additional class
     */
    className?: string;
    /**
     * Sets the alignment of the text in the component.
     */
    align?: TextAlignValue;
    /**
     * Sets the display of overflow text
     */
    overflow?: TextOverflowValue;
    /**
     * Maximum number of lines of text (works in conjunction with overflow)
     */
    maxLines?: number;
    /**
     * Additional styles
     */
    style?: CSSProperties;
    /**
     * Text color
     */
    color: string;
    /**
     * Sets the typography of the text in the component.
     */
    typography?: TextTypographyValue;
    /**
     * Sets the weigth of the text in the component.
     */
    weight?: "bold" | "light" | "medium" | "regular";
}
/**
 * A basic primitive for representing textual data.
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
