import React, { FC } from "react";
import "./Container.scss";
import clsx from "clsx";
import { defaultProps } from "@utils/defaultProps";

export type ContainerPropsType = defaultProps & {
  fullwidth?: boolean;
  adaptive?: boolean;
  fixed?: boolean;
  style?: React.CSSProperties;
};

const Container: FC<ContainerPropsType> = ({
  children,
  fullwidth,
  adaptive = true,
  fixed,
  style,
  className,
}) => {
  const rootClasses = clsx(
    "ep-container",
    { "ep-container_fullwidth": fullwidth },
    { "ep-container_adaptive": adaptive },
    { "ep-container_fixed": fixed },
    className
  );

  return (
    <div style={style} className={rootClasses}>
      {children}
    </div>
  );
};

export default Container;
