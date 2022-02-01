import React, { FC, useState } from "react";
import "./Dialog.scss";
import classList from "@utils/classList/classList";
import classNames from "classnames";

export type DialogPropsType = {
  /**
   * Заголовок диалога
   */
  label?: string;

  /**
   * Элемент триггер, при нажатии, на который диалог открывается
   */
  toggle: React.ReactNode;

  /**
   * Контент диалога
   */
  children: React.ReactNode;

  /**
   * Размер диалога
   */
  size: "xs" | "sm" | "md" | "lg" | "xl" | "fluid" | "page";
};

/**
 * Компонент реализующий всплывающие диалоги
 */
const Dialog: FC<DialogPropsType> = ({
  label,
  toggle,
  children,
  size = "md",
}) => {
  const [active, setActive] = useState(false);
  const toggleDialog = () => {
    setActive(!active);
  };

  return (
    <div className="dialog">
      <div className="dialog-toggle" onClick={toggleDialog}>
        {toggle}
      </div>

      {active && (
        <>
          <div
            className={classNames("dialog-transition_fade", {
              "dialog-transition_fade-active": active,
            })}
          >
            <div className="dialog-wrapper" onClick={() => setActive(false)} />
          </div>
          <div
            className={classNames(
              "dialog-body",
              "dialog-transition_pop",
              { "dialog-transition_pop-active": active },
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
