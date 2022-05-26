import React, { FC, useRef } from "react";
import "./Dialog.scss";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import useClickAway from "@utils/hooks/useClickAway";
import Backdrop from "@components/Backdrop/Backdrop";

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

  /**
   * Вертикальное выравнивание
   */
  verticalAlign?: "top" | "center";

  /**
   * Стили диалога
   */
  style?: React.CSSProperties;
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
  verticalAlign = "center",
  style,
}) => {
  const modalContent = useRef<HTMLDivElement>(null);
  useClickAway(modalContent, () => {
    if (onClose) {
      onClose();
    }
  });

  return (
    <CSSTransition
      unmountOnExit
      in={open}
      timeout={150}
      classNames={"dialog-animation"}
    >
      <div
        style={style}
        className={classNames("dialog", {
          [`dialog-align_${verticalAlign}`]: verticalAlign,
        })}
      >
        <Backdrop open={open} />

        <CSSTransition
          in={open}
          unmountOnExit
          timeout={150}
          classNames={"dialog-body-animation"}
        >
          <div
            className={classNames("dialog-body", {
              [`dialog-body-size_${size}`]: size,
              [`dialog-body-align_${verticalAlign}`]: verticalAlign,
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
    </CSSTransition>
  );
};

export default Dialog;
