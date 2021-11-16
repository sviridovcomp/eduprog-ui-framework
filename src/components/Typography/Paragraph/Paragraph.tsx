import React, { FC } from "react";
import "./Paragraph.scss";

export type ParagraphPropsType = {
    children: string;
    size: "xs" | "sm" | "md" | "lg" | "xl";
}

const Paragraph: FC<ParagraphPropsType> = ({children, size = "md"}) => {
    const rootClasses = [
        "Paragraph",
        size ? `Paragraph-size_${size}` : ""
    ];
    
    return (
        <p className={rootClasses.join(" ")}>
            {children}
        </p>
    )
}

export default Paragraph;