import { FC } from "react";
import { TextInputProps } from "../BaseInput/BaseInput";
import "./InputCopy.scss";
export type InputCopyPropsType = TextInputProps & {
    /**
     * Text that is shown when copying
     */
    copyLabel: string;
};
/**
 * InputCopy alows user to copy a text of textfield
 */
declare const InputCopy: FC<InputCopyPropsType>;
export default InputCopy;
