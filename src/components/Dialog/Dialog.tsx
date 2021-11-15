import React, { FC, useState } from "react";
import "./Dialog.scss";

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

	    {active &&
      <>
          <div
              className={[
						    "dialog-transition_fade",
						    active ? "dialog-transition_fade-active" : "",
					    ].join(" ")}
          >
              <div className="dialog-wrapper" onClick={() => setActive(false)}/>
          </div>
          <div
              className={[
						    "dialog-body",
						    "dialog-transition_pop",
						    active ? "dialog-transition_pop-active" : "",
                size ? `dialog-body-size_${size}` : "",
					    ].join(" ")}
          >
              <div className="dialog-header">{label}</div>
              <div className="dialog-content">{children}</div>
          </div>
      </>
	    }
    </div>
  );
};

export default Dialog;
