import { NotificationPropsType } from "@components/Notification/NotificationItem";
export type NotificationActionType = {
    type: "ADD";
    notification: NotificationPropsType;
} | {
    type: "REMOVE";
    id: string;
} | {
    type: "REMOVE_ALL";
};
export declare const useNotification: () => {
    dispatch: import("react").Dispatch<NotificationActionType>;
    notifications: NotificationPropsType[];
};
