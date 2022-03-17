import React, { FC, useRef } from "react";
import "./Dialog.scss";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import Backdrop from "@components/Backdrop/Backdrop";
import { useClickAway } from "@utils/hooks/useClickAway";
import { asyncSleep } from "@utils/utils/utils";

export type DialogPropsType = {
  /**
   * Заголовок диалога
   */
  label?: string;

  /**
   * Контент диалога
   */
  children: React.ReactNode;

  /**
   * Размер диалога
   */
  size: "xs" | "sm" | "md" | "lg" | "xl" | "fluid" | "page";

  /**
   * Открыт ли диалог
   */
  open?: boolean;

  /**
   * Событие вызываемое при закрытии диалога
   */
  onClose?: () => void;
};

/**
 * Компонент реализующий всплывающие диалоги
 */
const Dialog: FC<DialogPropsType> = ({
  label,
  children,
  size = "md",
  open = false,
  onClose,
}) => {
  const modalContent = useRef<HTMLDivElement>(null);
  useClickAway(modalContent, () => {
    if (open) {
      if (onClose) {
        setTimeout(() => {
          onClose();
        }, 100);
      }
    }
  });

  return (
    <div className="dialog">
      <div
        className={classNames("dialog-backdrop", {
          "dialog-backdrop-show": open,
        })}
      />

      <CSSTransition in={open} timeout={100} classNames="dialog-body-animation">
        <div
          className={classNames("dialog-body", {
            [`dialog-body-size_${size}`]: size,
          })}
          ref={modalContent}
        >
          <section className="dialog-header">
            <h2 className="dialog-heading">{label}</h2>
          </section>
          <section className="dialog-content">{children}</section>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Dialog;
