import { FC } from "react";
export interface ITextSkeletonProps {
    height?: number;
    animation?: "wave" | "pulse";
    rows: number;
}
declare const TextSkeleton: FC<ITextSkeletonProps>;
export default TextSkeleton;
