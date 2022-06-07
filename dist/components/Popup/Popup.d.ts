import React, { FC } from "react";
import "../Dropdown/Dropdown.scss";
export declare type PopupProps = {
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
    contentStyle?: React.CSSProperties;
    contentClassName?: string;
    wrapperStyle?: React.CSSProperties;
    wrapperClassName?: string;
    rootStyle?: React.CSSProperties;
    rootClassName?: string;
};
declare const Popup: FC<PopupProps>;
export default Popup;
