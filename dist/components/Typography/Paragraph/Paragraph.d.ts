import { FC } from "react";
import "./Paragraph.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type ParagraphPropsType = defaultProps & {
    children: string;
    size: "xs" | "sm" | "md" | "lg" | "xl";
};
declare const Paragraph: FC<ParagraphPropsType>;
export default Paragraph;
