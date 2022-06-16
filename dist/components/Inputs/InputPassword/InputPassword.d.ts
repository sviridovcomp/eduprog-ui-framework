import { FC } from "react";
import { TextInputProps } from "../BaseInput/BaseInput";
import "./InputPassword.scss";
export declare type InputPasswordPropsType = TextInputProps & {
    /**
     * Is textfield validation required
     */
    isValidation?: boolean;
};
/**
 * InputPassword is a great solution for entering your password
 */
declare const InputPassword: FC<InputPasswordPropsType>;
export default InputPassword;
