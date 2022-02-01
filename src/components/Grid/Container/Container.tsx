import React, { FC } from "react";
import "./Container.scss";
import classNames from "classnames";

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
  const rootClasses = classNames(
    "ep-container",
    { "ep-container_fullwidth": fullwidth },
    { "ep-container_adaptive": adaptive },
    { "ep-container_fixed": fixed }
  );

  return <div className={rootClasses}>{children}</div>;
};

export default Container;
