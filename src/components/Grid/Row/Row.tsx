import React, { FC } from "react";
import "./Row.scss";

export type RowPropsType = {
  align?: "start" | "end" | "center";
};

const Row: FC<RowPropsType> = ({ children }) => {
  const rootClasses = ["ep-row"];
  return <div className={rootClasses.join(" ")}>{children}</div>;
};

export default Row;
