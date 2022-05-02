import React, { FC } from "react";
import "./ToggleBlock.scss";
export interface IToggleBlockOptions<Type> {
    id: string;
    name?: React.ReactNode;
    value?: Type;
}
export interface IToggleBlockProps {
    options: Array<IToggleBlockOptions<any>>;
    defaultValue?: IToggleBlockOptions<any>;
    style?: React.CSSProperties;
    onChange?: (value?: IToggleBlockOptions<any>) => void;
}
declare const ToggleBlock: FC<IToggleBlockProps>;
export default ToggleBlock;
