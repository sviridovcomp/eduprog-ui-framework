import React, { CSSProperties, FC } from "react";
import "./Heading.scss";
import classNames from "classnames";

export type HeadingPropsType = {
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
  mb: number;

  /**
   * Отступ сверху
   */
  mt: number;
};

/**
 * Компонент Заголовок
 */
const Heading: FC<HeadingPropsType> = ({
  children,
  size = "xxl",
  mt = 1,
  mb = 1,
}) => {
  const commonStyles = {
    marginTop: `${mt}rem`,
    marginBottom: `${mb}rem`,
  } as CSSProperties;

  return (
    <div className="heading">
      <h1
        className={classNames({ [`heading-size_${size}`]: size })}
        style={commonStyles}
      >
        {children}
      </h1>
    </div>
  );
};

export default Heading;
