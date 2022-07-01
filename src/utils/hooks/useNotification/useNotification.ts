import { NotificationPropsType } from "@components/Notification/NotificationItem";
import { useReducer } from "react";

export type NotificationActionType =
  | { type: "ADD"; notification: NotificationPropsType }
  | { type: "REMOVE"; id: string }
  | { type: "REMOVE_ALL" };

interface IState {
  notifications: NotificationPropsType[];
}

const initialState: IState = {
  notifications: [],
};

const notificationReducer = (state: IState, action: NotificationActionType): IState => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        notifications: [...state.notifications, action.notification],
      };
    case "REMOVE": {
      return {
        ...state,
        notifications: [
          ...state.notifications.filter(
            (notification) => notification.id !== action.id
          ),
        ],
      };
    }
    case "REMOVE_ALL":
      return {
        ...state,
        notifications: [],
      };
    default:
      throw new Error();
  }
};

export const useNotification = () => {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  return { ...state, dispatch };
};
