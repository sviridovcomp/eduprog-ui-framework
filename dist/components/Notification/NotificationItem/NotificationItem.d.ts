import React, { FC } from "react";
import "./NotificationItem.scss";
import { defaultProps } from "@utils/defaultProps";
export declare type NotificationPropsType = defaultProps & {
    id?: string;
    hasCloser?: boolean;
    icon?: React.ReactNode;
    onClose?: (id?: string) => void;
    title: string;
    content: React.ReactNode;
};
declare const NotificationItem: FC<NotificationPropsType>;
export default NotificationItem;
