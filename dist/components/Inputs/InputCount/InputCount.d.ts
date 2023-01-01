import { FC } from "react";
import { TextInputProps } from "../BaseInput/BaseInput";
import "./InputCount.scss";
export type InputCountPropsType = TextInputProps & {
    /**
     * Minimum value
     */
    min?: number;
    /**
     * Maximum value (`Infinity` by default)
     */
    max?: number;
    /**
     * Step for buttons
     */
    step?: number;
};
/**
 * InputCount is a good choice to input integer numbers
 */
declare const InputCount: FC<InputCountPropsType>;
export default InputCount;
