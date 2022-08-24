import React, { FC, useId } from "react";
import Skeleton from "@components/Skeleton/Skeleton";
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
  const id = useId();
  const SkeletonId = `skeleton-${id}`;

  return (
    <div className="Skeleton-Group">
      {range(1, rows).map(() => (
        <Skeleton
          key={SkeletonId}
          height={height}
          variant="text"
          animation={animation}
        />
      ))}
    </div>
  );
};

export default TextSkeleton;
