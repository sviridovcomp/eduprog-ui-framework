import { emitter, Events } from "@utils/utils/emitter";
import { v4 as uuid } from "uuid";
import { NotificationPropsType } from "./NotificationItem";

export const InitNotification = (props: NotificationPropsType) => {
  return {
    ...props,
    id: uuid(),
  };
};

const ApplyNotification = (notification: NotificationPropsType) =>
  emitter.emit(Events.SHOW, InitNotification({ ...notification }));

export const Notify = (props: NotificationPropsType) => {
  ApplyNotification({ ...props });
};
