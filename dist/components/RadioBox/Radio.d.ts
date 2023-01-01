import { FC } from "react";
import { defaultProps } from "@utils/defaultProps";
import "./Radio.scss";
export type RadioProps = defaultProps & {
    label?: string;
    value?: string;
    checked?: boolean;
    onChange?: (label?: string) => void;
};
declare const Radio: FC<RadioProps>;
export default Radio;
