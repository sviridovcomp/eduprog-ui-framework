import React, { FC } from "react";
import "./Collapse.scss";
export declare type CollapsePropsType = {
    children: React.ReactNode;
    toggle: React.ReactNode;
    transition?: "fade" | "slide";
};
declare const Collapse: FC<CollapsePropsType>;
export default Collapse;
