import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import "./NotificationItem.scss";
import Done from "@icons/Done";
import CloseIcon from "@icons/Close";
import { useSwipeable } from "react-swipeable";
import clsx from "clsx";
import { defaultProps } from "@utils/defaultProps";
import random from "lodash/random";

export type NotificationPropsType = defaultProps & {
  id?: string;
  hasCloser?: boolean;
  icon?: React.ReactNode;
  onClose?: (id?: string) => void;
  title: string;
  content: React.ReactNode;
  autoCloseDelay: number;
};

const NotificationItem: FC<NotificationPropsType> = ({
  id,
  hasCloser = true,
  icon = <Done />,
  title,
  content,
  onClose,
  onPointerEnter,
  onPointerLeave,
  autoCloseDelay,
}) => {
  const closeTimeoutRef = useRef(0);
  const [progress, setProgress] = useState(0);

  const [isClosing, setIsClosing] = useState(false);

  const swipeableHandlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (onClose && ["Left", "Right", "Up"].includes(dir)) {
        closeNotification();
      }
    },
    delta: 100,
    trackMouse: true,
  });

  useEffect(() => {
    const fillingProgressBar = setInterval(() => {
      if (progress >= 90) {
        setProgress(100);
        return;
      }
      const ratio = 100 / (autoCloseDelay / 100);

      setProgress(progress + ratio);
    }, 100);
    return () => clearInterval(fillingProgressBar);
  }, [progress]);

  const closeNotification = useCallback(() => {
    if (!onClose) {
      return;
    }

    setIsClosing(true);

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      onClose(id);
    }, 100);
  }, []);

  return (
    <div
      {...swipeableHandlers}
      className={clsx("notification", isClosing && "notification-closing")}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div className="notification-wrapper">
        <div className="notification-left">
          <div className="notification__icon">{icon}</div>
          <div>
            <div className="notification__title">{title}</div>
            <div className="notification__content">{content}</div>
          </div>
        </div>
        <div className="notification-right">
          {hasCloser && (
            <div className="notification__closer">
              <button onClick={() => closeNotification()}>
                <CloseIcon />
              </button>
            </div>
          )}
        </div>
      </div>
      <div
        className="notification-progress"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default NotificationItem;
