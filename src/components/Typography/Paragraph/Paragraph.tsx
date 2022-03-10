import React, { FC } from "react";
import "./Paragraph.scss";
import { defaultProps } from "@utils/defaultProps";
import classNames from "classnames";

export type ParagraphPropsType = defaultProps & {
  children: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
};

const Paragraph: FC<ParagraphPropsType> = ({
  children,
  style,
  className = "",
  size = "md",
}) => {
  const rootClasses = classNames([
    "paragraph",
    { [`paragraph-size_${size}`]: size },
    className,
  ]);

  return (
    <p style={style} className={rootClasses}>
      {children}
    </p>
  );
};

export default Paragraph;
