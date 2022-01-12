import React from "react";
import { FC } from "react";
export declare type InputCardPropsType = {
    label: string;
    showPaymentService?: boolean;
    onChange?: (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const InputCard: FC<InputCardPropsType>;
export default InputCard;
