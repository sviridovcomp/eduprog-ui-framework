import { defaultProps } from "@utils/defaultProps";
import { FC } from "react";
import "./Badge.scss";
export declare type BadgeProps = defaultProps & {
    view: "success" | "error" | "warning";
};
declare const Badge: FC<BadgeProps>;
export default Badge;
