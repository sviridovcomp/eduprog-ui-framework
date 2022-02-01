import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import "./Notification.scss";
import classNames from "classnames";
import DoneIcon from "@icons/DoneIcon";
import CloseIcon from "@icons/Close";
import ErrorIcon from "@icons/ErrorIcon";
import { useSwipeable } from "react-swipeable";

export type NotificationPropsType = {
  visible: boolean;
  offset: number;
  hasCloser: boolean;
  status: "ok" | "fail";
  onCloserClick?: () => void;
  onCloseTimeout?: () => void;
  onClose?: () => void;
  title: string;
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
}) => {
  const autoCloseTimeoutRef = useRef(0);
  const closeTimeoutRef = useRef(0);

  const [isClosing, setIsClosing] = useState(false);

  const startAutoCloseTimer = useCallback(() => {
    autoCloseTimeoutRef.current = window.setTimeout(() => {
      if (onCloseTimeout) {
        onCloseTimeout();
      }
    }, 5000);
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
      style={{ top: `${offset}px` }}
      className={classNames("notification", {
        "notification-visible": visible,
      })}
      {...swipeableHandlers}
    >
      <div className="notification__icon">
        {status == "ok" && <DoneIcon />}
        {status == "fail" && <ErrorIcon />}
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
