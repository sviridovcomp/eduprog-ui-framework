import { defaultProps } from "@utils/defaultProps";
import React, { FC } from "react";
import "./Badge.scss";
export declare type BadgeProps = defaultProps & {
    view: "success" | "error" | "warning";
    children?: React.ReactNode;
};
declare const Badge: FC<BadgeProps>;
export default Badge;
