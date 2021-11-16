import { FC } from "react";
import "./Paragraph.scss";
export declare type ParagraphPropsType = {
    children: string;
    size: "xs" | "sm" | "md" | "lg" | "xl";
};
declare const Paragraph: FC<ParagraphPropsType>;
export default Paragraph;
