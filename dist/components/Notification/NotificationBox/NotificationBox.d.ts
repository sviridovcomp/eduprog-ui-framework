import React, { FC } from "react";
import "./NotificationBox.scss";
export type INotificationBoxProps = {
    position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
    rootStyle?: React.CSSProperties;
    rootClassName?: string;
    autoCloseDelay?: number;
};
declare const NotificationBox: FC<INotificationBoxProps>;
export default NotificationBox;
