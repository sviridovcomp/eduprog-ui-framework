import { NotificationActionType } from "@utils/hooks/useNotification/useNotification";
import { emitter, Events } from "../emitter";

interface INotificationDispatcher {
    dispatch: (value: NotificationActionType) => void;
    autoCloseDelay?: number;
    isHovered: boolean;
}

export const NotificationDispatcher = (props: INotificationDispatcher) => {
    emitter.on(Events.SHOW, (notification) => {
        props.dispatch({type: "ADD", notification});

        if (!props.isHovered && props.autoCloseDelay) {
            setTimeout(() => {
                !props.isHovered && props.dispatch({type: "REMOVE", id: notification.id});
            }, props.autoCloseDelay);
        }
    });

    emitter.on(Events.HIDE, (id: string) => props.dispatch({type: "REMOVE", id}));

    emitter.on(Events.HIDE_ALL, () => props.dispatch({ type: "REMOVE_ALL" }));

};