import React, { FC } from "react";
import "./Dialog.scss";
import classNames from "classnames";

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
  return (
    <div className="dialog">
      {open && (
        <>
          <div
            className={classNames("dialog-transition_fade", {
              "dialog-transition_fade-active": open,
            })}
          >
            <div className="dialog-wrapper" onClick={onClose} />
          </div>
          <div
            className={classNames(
              "dialog-body",
              "dialog-transition_pop",
              { "dialog-transition_pop-active": open },
              { [`dialog-body-size_${size}`]: true }
            )}
          >
            <section className="dialog-header">
              <h2 className="dialog-heading">{label}</h2>
            </section>
            <section className="dialog-content">{children}</section>
          </div>
        </>
      )}
    </div>
  );
};

export default Dialog;
