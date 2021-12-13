import React, { FC } from "react";
import "./Paragraph.scss";
import classList from "@utils/classList/classList";

export type ParagraphPropsType = {
  children: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
};

const Paragraph: FC<ParagraphPropsType> = ({ children, size = "md" }) => {
  const rootClasses = classList([
    "paragraph",
    size ? `paragraph-size_${size}` : "",
  ]);

  return <p className={rootClasses}>{children}</p>;
};

export default Paragraph;
