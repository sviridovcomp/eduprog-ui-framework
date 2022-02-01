import { FC } from "react";
import "./Notification.scss";
export declare type NotificationPropsType = {
    visible: boolean;
    offset: number;
    hasCloser: boolean;
    status: "ok" | "fail";
    onCloserClick?: () => void;
    onCloseTimeout?: () => void;
    onClose?: () => void;
    title: string;
    stickTo: "left" | "right";
};
declare const Notification: FC<NotificationPropsType>;
export default Notification;
