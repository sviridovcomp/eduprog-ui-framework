import useNotification from "@utils/hooks/useNotification";
import { emitter, Events } from "@utils/utils/emitter";
import NotificationDispatcher from "../NotificationDispatcher";
import clsx from "clsx";
import React, { FC, useState } from "react";
import { useCallback, useEffect } from "react";
import NotificationItem from "../NotificationItem/NotificationItem";
import "./NotificationBox.scss";

export type INotificationBoxProps = {
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";

  rootStyle?: React.CSSProperties;

  rootClassName?: string;

  autoCloseDelay?: number;
};

const NotificationBox: FC<INotificationBoxProps> = ({
  position,
  rootStyle,
  rootClassName,
  autoCloseDelay = 5000,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { notifications, dispatch } = useNotification();

  useEffect(() => {
    NotificationDispatcher({ dispatch, autoCloseDelay, isHovered });

    return () => {
      emitter.off();
    };
  }, [dispatch, autoCloseDelay, isHovered]);

  const onClose = useCallback((id: string) => {
    emitter.emit(Events.HIDE, id);
  }, []);

  return (
    <div
      style={rootStyle}
      className={clsx(rootClassName, "NotificationBox", {
        [`NotificationBox-direction-${position}`]: position,
      })}
    >
      {notifications.map((notification) => (
        <NotificationItem
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
          key={notification.id}
          {...notification}
          onClose={() => notification.id && onClose(notification.id)}
        ></NotificationItem>
      ))}
    </div>
  );
};

export default NotificationBox;
