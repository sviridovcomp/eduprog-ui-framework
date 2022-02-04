import { MultipleSelectValue } from "@components/Select/MultipleSelect/MultipleSelectProps";
import { FC } from "react";
import "./Select.scss";
export declare type SelectValue<Type> = MultipleSelectValue<Type>;
export declare type ISelectProps<Type> = {
    label: string;
    options: Array<SelectValue<Type>>;
    defaultValue: SelectValue<Type>;
    onChange: (option: SelectValue<Type>) => void;
};
declare const SelectLargeDevice: FC<ISelectProps<any>>;
export default SelectLargeDevice;
