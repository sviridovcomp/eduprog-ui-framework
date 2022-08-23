import { FC } from "react";
import "./InputDate.scss";
export interface InputDateProps {
    label: string;
    dateFormat?: string;
}
declare const InputDate: FC<InputDateProps>;
export default InputDate;
