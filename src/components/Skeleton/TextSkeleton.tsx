import React, { FC } from "react";
import Skeleton from "@components/Skeleton/Skeleton";
import { v4 as uuid } from "uuid";
import range from "lodash/range";

export interface ITextSkeletonProps {
  height?: number;
  animation?: "wave" | "pulse";
  rows: number;
}

const TextSkeleton: FC<ITextSkeletonProps> = ({
  rows,
  animation = "wave",
  height = 16,
}) => {
  return (
    <div className="Skeleton-Group">
      {range(1, rows).map(() => (
        <Skeleton
          key={uuid()}
          height={height}
          variant="text"
          animation={animation}
        />
      ))}
    </div>
  );
};

export default TextSkeleton;
