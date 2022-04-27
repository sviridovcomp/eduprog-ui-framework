import React, { FC } from "react";
import { CheckboxPropsType } from "../Checkbox/Checkbox";
export declare type ICheckboxBlockValue<Type> = CheckboxPropsType & {
    id: string;
    label?: React.ReactNode;
    value?: Type;
};
export declare type CheckboxBlockPropsType = {
    options?: Array<ICheckboxBlockValue<any>>;
    onChange?: (value: ICheckboxBlockValue<any>[]) => void;
};
declare const CheckboxBlock: FC<CheckboxBlockPropsType>;
export default CheckboxBlock;
