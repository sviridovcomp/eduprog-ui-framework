import React, { FC } from "react";
import "./BaseInput.scss";
import { defaultProps } from "@utils/defaultProps";
export interface ITextInputValidator {
    /**
     * Textfield must not be empty
     */
    notEmpty?: boolean;
    /**
     * Regex pattern the value must match to be valid
     */
    pattern?: RegExp;
    /**
     * Message to be displayed if textfield value is not correct
     */
    message?: string;
}
export declare type TextInputProps = defaultProps & {
    /**
     * Label for the textfield
     */
    label: string;
    /**
     * Maximum length (number of characters) of value
     */
    maxLength?: number;
    /**
     * Type of form control
     */
    inputType?: "text" | "tel" | "email" | "password" | "number" | "card";
    /**
     * Определяет маску для ввода значений
     */
    mask?: string;
    /**
     * The initial value of the control
     */
    defaultValue?: string;
    /**
     * onClick callback handler
     */
    onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
    /**
     * onChange callback handler
     */
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * onPaste callback handler
     */
    onPaste?: (event?: React.ClipboardEvent<HTMLInputElement>) => void;
    /**
     * onBlur callback handler
     */
    onBlur?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * onFocus callback handler
     */
    onFocus?: (event?: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * Adding additional elements to the textfield on the left
     */
    leftAdditional?: React.ReactNode;
    /**
     * Adding additional elements to the textfield on the right
     */
    rightAdditional?: React.ReactNode;
    /**
     * Name of the form control. Submitted with the form as part of a name/value pair
     */
    name?: string;
    /**
     * Hint for form autofill feature
     */
    autocomplete?: "none" | "cc-number";
    /**
     * Cursor that will when hovering over textfield
     */
    cursor?: "pointer" | "text";
    /**
     * The value of TextField is not editable
     */
    readonly?: boolean;
    /**
     * Force make textfield focused
     */
    forceFocus?: boolean;
    /**
     * Force make textfield invalid
     */
    forceInvalid?: boolean;
    /**
     *  if present, indicates that the input should automatically have focus when the page has finished loading
     */
    autoFocus?: boolean;
    /**
     * Validating a textfield
     */
    validators?: ITextInputValidator;
    size?: "md" | "xl";
    /**
     * Ref to `input`
     */
    controlRef?: React.Ref<HTMLInputElement>;
    rootClassName?: string;
    rootStyle?: React.CSSProperties;
    controlStyle?: React.CSSProperties;
    controlClassName?: string;
    rigthAdditionalStyle?: React.CSSProperties;
    rigthAdditioanlClassName?: string;
};
declare const BaseInput: FC<TextInputProps>;
export default BaseInput;
