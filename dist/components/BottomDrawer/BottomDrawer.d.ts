import { FC } from "react";
import "./BottomDrawer.scss";
export interface IBottomDrawerProps {
    /**
     * Открыт ли BottomDrawer
     */
    open: boolean;
    /**
     * Колбэк, вызываемый при закрытии BottomDrawer
     */
    onClose: () => void;
    /**
     * Продолжительность анимация BottomDrawer
     */
    duration?: number;
    /**
     * Спрятать скроллбары
     */
    hideScrollbars?: boolean;
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
    className?: string;
    backdropClassname?: string;
}
/**
 * This component creates a bottom curtain for mobile devices.
 */
declare const BottomDrawer: FC<IBottomDrawerProps>;
export default BottomDrawer;
