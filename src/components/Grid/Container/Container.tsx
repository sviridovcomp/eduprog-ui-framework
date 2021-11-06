import React, { FC } from "react";
import "./Container.scss";

export type ContainerPropsType = {
  fullwidth?: boolean;
  adaptive?: boolean;
  fixed?: boolean;
};

const Container: FC<ContainerPropsType> = ({
  children,
  fullwidth,
  adaptive,
  fixed,
}) => {
  const rootClasses = [
    "ep-container",
    fullwidth && "ep-container_fullwidth",
    adaptive && "ep-container_adaptive",
    fixed && "ep-container_fixed",
  ];

  return <div className={rootClasses.join(" ")}>{children}</div>;
};

export default Container;
