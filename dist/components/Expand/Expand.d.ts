import React, { FC } from "react";
import "./Expand.scss";
export declare type CollapsePropsType = {
    children: React.ReactNode;
    toggle: React.ReactNode;
    transition?: "fade" | "slide";
};
declare const Expand: FC<CollapsePropsType>;
export default Expand;
