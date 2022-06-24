import React, { FC, useCallback, useRef, useState } from "react";
import "./NotificationItem.scss";
import Done from "@icons/Done";
import CloseIcon from "@icons/Close";
import Error from "@icons/Error";
import { useSwipeable } from "react-swipeable";
import clsx from "clsx";
import { defaultProps } from "@utils/defaultProps";

export type NotificationPropsType = defaultProps & {
  id?: string;
  hasCloser?: boolean;
  status?: "ok" | "fail";
  onClose?: (id?: string) => void;
  title: string;
  content: React.ReactNode;
};

const NotificationItem: FC<NotificationPropsType> = ({
  id,
  hasCloser = true,
  status = "ok",
  title,
  content,
  onClose,
  onPointerEnter,
  onPointerLeave,
}) => {
  const closeTimeoutRef = useRef(0);

  const [isClosing, setIsClosing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const swipeableHandlers = useSwipeable({
    onSwiped: ({ dir }) => {
      if (onClose && ["Left", "Right", "Up"].includes(dir)) {
        closeNotification();
      }
    },
    delta: 100,
    trackMouse: true,
  });

  const closeNotification = useCallback(() => {
    if (!onClose) {
      return;
    }

    if (isHovered) {
      return;
    }

    setIsClosing(true);

    closeTimeoutRef.current = window.setTimeout(() => {
      setIsClosing(false);
      onClose(id);
    }, 100);
  }, [isHovered]);

  return (
    <div
      {...swipeableHandlers}
      className={clsx("notification", isClosing && "notification-closing")}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div className="notification-wrapper">
        <div className="notification-left">
          <div className="notification__icon">
            {status == "ok" && <Done />}
            {status == "fail" && <Error />}
          </div>
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
    </div>
  );
};

export default NotificationItem;
