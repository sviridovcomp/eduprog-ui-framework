import classNames from "classnames";
import React, {
  ElementType,
  ReactNode,
  CSSProperties,
  PureComponent,
} from "react";

import "./Text.scss";

export type TextAlignValue = "start" | "end" | "center" | "justify";

export type TextOverflowValue = "fade" | "ellipsis" | "fade-horizontal";

export type TextTypographyValue =
  | "display-xl"
  | "display-lg"
  | "display-md"
  | "display-sm"
  | "headline-xl"
  | "headline-lg"
  | "headline-sm"
  | "headline-xs"
  | "headline-md"
  | "subheader-xl"
  | "subheader-lg"
  | "subheader-md"
  | "subheader-sm"
  | "body-short-xl"
  | "body-short-lg"
  | "body-short-md"
  | "body-short-sm"
  | "body-long-xl"
  | "body-long-lg"
  | "body-long-md"
  | "body-long-sm"
  | "caption-xl"
  | "caption-lg"
  | "caption-md"
  | "overline-lg"
  | "overline-md"
  | "overline-sm"
  | "control-xxs"
  | "control-xs"
  | "control-sm"
  | "control-lg"
  | "control-xl"
  | "control-md"
  | "control-xxl";

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
export class Text extends PureComponent<TextProps> {
  private static getLineHeight(textElement: HTMLElement) {
    return parseFloat(getComputedStyle(textElement).lineHeight);
  }

  private static isFade(overflow: TextOverflowValue) {
    return overflow === "fade" || overflow === "fade-horizontal";
  }

  private static isEllipsis(overflow: TextOverflowValue) {
    return overflow === "ellipsis";
  }

  private textElement: HTMLElement | null = null;

  componentDidMount() {
    this.updateText();
  }

  componentWillUnmount() {
    this.textElement = null;
  }

  componentDidUpdate(prevProps: Readonly<TextProps>) {
    if (prevProps.typography !== this.props.typography) {
      this.updateText();
    }
  }

  private updateText() {
    const { textElement } = this;
    const { overflow } = this.props;
    if (textElement && overflow && Text.isFade(overflow) /*&& canUseDOM()*/) {
      this.forceUpdate();
    }
  }

  private getLineHeight(): number | void {
    if (this.textElement) {
      const lineHeightValue = Text.getLineHeight(this.textElement);
      if (!isNaN(lineHeightValue)) {
        return lineHeightValue;
      }
    }
  }

  private setTextElement(el: HTMLElement) {
    this.textElement = el;
  }

  render() {
    const {
      as: ElementType = "span",
      className,
      align,
      overflow,
      maxLines = 1,
      style = {},
      color,
      typography,
      weight = "regular",
      ...otherProps
    } = this.props;

    if (overflow) {
      if (Text.isEllipsis(overflow)) {
        style.WebkitLineClamp = maxLines;
      } else if (Text.isFade(overflow)) {
        style.whiteSpace = maxLines === 1 ? "nowrap" : undefined;
        if (maxLines > 1) {
          const lineHeight = this.getLineHeight();
          if (typeof lineHeight === "number") {
            style.maxHeight = `${maxLines * lineHeight}px`;
          }
        }
      }
    }

    return (
      //@ts-ignore
      <ElementType
        ref={this.setTextElement.bind(this)}
        style={{ color: color, ...style }}
        className={classNames(
          "Text",
          { [`Text-align_${align}`]: align },
          { [`Text-overflow_${overflow}`]: overflow },
          { [`Text-typography_${typography}`]: typography },
          { [`Text-weight_${weight}`]: weight },
          className
        )}
        {...otherProps}
      />
    );
  }
}
