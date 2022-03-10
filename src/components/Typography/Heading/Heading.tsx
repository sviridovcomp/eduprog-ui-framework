import React, { CSSProperties, FC } from "react";
import "./Heading.scss";

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
  spacingBottom: number;

  /**
   * Отступ сверху
   */
  spacingTop: number;
};

/**
 * Компонент Заголовок
 */
const Heading: FC<HeadingPropsType> = ({
  children, 
  size = "xxl", 
  spacingBottom = 1,
  spacingTop = 1 
}) => {
  const commonStyles = {marginTop: `${spacingTop}rem`, marginBottom: `${spacingBottom}rem`} as CSSProperties;    
  
  return (
    <div className="heading">
      {size === "xxl" && <h1 style={commonStyles}>{children}</h1>}

      {size === "xl" && <h2 style={commonStyles}>{children}</h2>}

      {size === "lg" && <h3 style={commonStyles}>{children}</h3>}

      {size === "md" && <h4 style={commonStyles}>{children}</h4>}

      {size === "sm" && <h5 style={commonStyles}>{children}</h5>}

      {size === "xs" && <h6 style={commonStyles}>{children}</h6>}
    </div>
  );
};

export default Heading;
