import React, { FC } from "react";
import "./Container.scss";
import { defaultProps } from "@utils/defaultProps";
export type ContainerPropsType = defaultProps & {
    fullwidth?: boolean;
    adaptive?: boolean;
    fixed?: boolean;
    style?: React.CSSProperties;
    children?: React.ReactNode;
};
declare const Container: FC<ContainerPropsType>;
export default Container;
