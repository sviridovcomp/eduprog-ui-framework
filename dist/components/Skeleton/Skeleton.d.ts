import React, { FC } from "react";
import "./Skeleton.scss";
export interface ISkeletonProps {
    variant?: "text" | "circular" | "rectangular";
    animation?: "wave" | "pulse";
    width?: number;
    height?: number;
    borderRadius?: number | "auto";
    children?: React.ReactNode;
}
declare const Skeleton: FC<ISkeletonProps>;
export default Skeleton;
