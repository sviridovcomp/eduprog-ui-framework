import React, { FC } from "react";
export interface IBottomDrawerProps {
    isVisible: boolean;
    onClose: () => void;
    duration?: number;
    hideScrollbars?: boolean;
    unmountOnExit?: boolean;
    mountOnEnter?: boolean;
    className?: string;
    backdropClassname?: string;
    children: React.ReactNode;
}
declare const BottomDrawer: FC<IBottomDrawerProps>;
export default BottomDrawer;
