import { NotificationActionType } from "@utils/hooks/useNotification/useNotification";
import { emitter, Events } from "@utils/utils/emitter";

interface INotificationDispatcher {
    dispatch: (value: NotificationActionType) => void;
    autoCloseDelay?: number;
    isHovered: boolean;
}

export const NotificationDispatcher = (props: INotificationDispatcher) => {
    emitter.on(Events.SHOW, (notification) => {
        props.dispatch({type: "ADD", notification});

                    console.log("hovered", props.isHovered);


        if (props.autoCloseDelay) {
            setTimeout(() => {
                if (props.isHovered) {
                    return;
                }
                props.dispatch({type: "REMOVE", id: notification.id});
            }, props.autoCloseDelay);
        }
    });

    emitter.on(Events.HIDE, (id: string) => props.dispatch({type: "REMOVE", id}));

    emitter.on(Events.HIDE_ALL, () => props.dispatch({ type: "REMOVE_ALL" }));

};