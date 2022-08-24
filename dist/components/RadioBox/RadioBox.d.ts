import React from "react";
import { defaultProps } from "@utils/defaultProps";
import { FC } from "react";
export interface RadioBoxValueProps {
    label: string;
    value: string;
}
export declare type RadioBoxProps = defaultProps & {
    options: RadioBoxValueProps[];
    children?: React.ReactNode;
};
declare const RadioBox: FC<RadioBoxProps>;
export default RadioBox;
