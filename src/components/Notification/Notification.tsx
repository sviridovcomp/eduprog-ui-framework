import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import "./Notification.scss";
import clsx from "clsx";
import Done from "@icons/Done";
import CloseIcon from "@icons/Close";
import Error from "@icons/Error";
import { useSwipeable } from "react-swipeable";

export type NotificationPropsType = {
  visible: boolean;
  offset?: number;
  hasCloser?: boolean;
  status?: "ok" | "fail";
  onCloserClick?: () => void;
  onCloseTimeout?: () => void;
  onClose?: () => void;
  title: string;
  stickTo?: "left" | "right";
  autoCloseDelay?: number;
};

const Notification: FC<NotificationPropsType> = ({
  visible = false,
  offset = 12,
  hasCloser = true,
  status = "ok",
  onCloseTimeout,
  title,
  children,
  onClose,
  stickTo = "left",
  autoCloseDelay = 5000,
}) => {
  const autoCloseTimeoutRef = useRef(0);
  const closeTimeoutRef = useRef(0);

  const [, setIsClosing] = useState(false);

  const startAutoCloseTimer = useCallback(() => {
    autoCloseTimeoutRef.current = window.setTimeout(() => {
      if (onCloseTimeout) {
        onCloseTimeout();
      }
    }, autoCloseDelay);
  }, [onCloseTimeout]);

  const stopAutoCloseTimer = useCallback(() => {
    clearTimeout(autoCloseTimeoutRef.current);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(closeTimeoutRef.current);
    },
    []
  );

  useEffect(() => {
    if (visible) {
      startAutoCloseTimer();
    }

    return () => {
      stopAutoCloseTimer();
    };
  }, [startAutoCloseTimer, stopAutoCloseTimer, visible]);

  const swipeableHandlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (onClose && ["Left", "Right", "Up"].includes(dir)) {
        setIsClosing(true);

        closeTimeoutRef.current = window.setTimeout(() => {
          setIsClosing(false);
          onClose();
        }, 100);
      }
    },
    delta: 100,
    trackMouse: true,
  });

  return (
    <div
      {...swipeableHandlers}
      style={{ top: `${offset}px` }}
      className={clsx(
        "notification",
        { [`notification__stick-to_${stickTo}`]: stickTo },
        {
          "notification-visible": visible,
        }
      )}
      {...swipeableHandlers}
    >
      <div className="notification__icon">
        {status == "ok" && <Done />}
        {status == "fail" && <Error />}
      </div>
      <div className="notification__title">{title}</div>
      <div className="notification__content">{children}</div>

      {hasCloser && (
        <div className="notification__closer">
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default Notification;
