import React, { FC } from "react";
import "./Row.scss";
import classList from "@utils/classList/classList";

export type RowPropsType = {
  align?: "start" | "end" | "center";
};

const Row: FC<RowPropsType> = ({ children }) => {
  const rootClasses = classList(["ep-row"]);
  return <div className={rootClasses}>{children}</div>;
};

export default Row;
