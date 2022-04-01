import { defaultProps } from "@utils/defaultProps";
import { FC } from "react";
import "../Dropdown/Dropdown.scss";
export declare type CustomDropdownPropsType = defaultProps & {
    open?: boolean;
    /**
     * Направление раскрытия popup
     */
    direction: "bottom-left" | "bottom-center" | "bottom-right" | "top-left" | "top-center" | "top-right";
    /**
     * Убрать стрелочку направления popup
     */
    clearly?: boolean;
    /**
     * Dropdown в полный размер родительского блока
     */
    fullwidth?: boolean;
    onClose?: () => void;
};
declare const CustomDropdown: FC<CustomDropdownPropsType>;
export default CustomDropdown;
