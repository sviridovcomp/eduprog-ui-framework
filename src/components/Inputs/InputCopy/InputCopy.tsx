import React, { FC, useState } from "react";
import BaseInput, { TextInputProps } from "../BaseInput/BaseInput";
import "./InputCopy.scss";
import classNames from "classnames";

export type InputCopyPropsType = TextInputProps & {
  /**
   * Заголовок input
   */
  label: string;

  /**
   * Текст, который показан при копировании
   */
  copyLabel: string;

  /**
   * Событие обновления input
   */
  onChange: (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;

  /**
   * Имя элемента в DOM
   */
  name?: string;
};

/**
 * InputCopy позволяет пользователю копировать текст текстового поля
 */
const InputCopy: FC<InputCopyPropsType> = ({
  label,
  copyLabel = "Скопировано",
  onChange,
  name = "",
  ...rest
}) => {
  const [value, setValue] = useState("");
  const [activePopup, setActivePopup] = useState(false);

  const onInputChange = (
    value: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(value);

    if (onChange && event) {
      onChange(value, event);
    }
  };

  const copyValue = () => {
    if (!value.length) {
      return;
    }

    navigator.clipboard.writeText(value).then(function (err) {
      console.error("Async: Could not copy text: ", err);
    });

    setActivePopup(true);

    setTimeout(() => {
      setActivePopup(false);
    }, 2000);
  };

  return (
    <div className="input-copy">
      <BaseInput
        defaultValue={value}
        inputType="text"
        onChange={onInputChange}
        label={label}
        name={name}
        {...rest}
        rightAdditional={
          <svg
            className="input-copy-copy"
            onClick={copyValue}
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path d="M15,20H5V7c0-0.55-0.45-1-1-1h0C3.45,6,3,6.45,3,7v13c0,1.1,0.9,2,2,2h10c0.55,0,1-0.45,1-1v0C16,20.45,15.55,20,15,20z M20,16V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v12c0,1.1,0.9,2,2,2h9C19.1,18,20,17.1,20,16z M18,16H9V4h9V16z" />
            </g>
          </svg>
        }
      />
      <div
        className={classNames("popup-coppied", {
          "popup-coppied-active": activePopup,
        })}
      >
        {copyLabel}
      </div>
    </div>
  );
};

export default InputCopy;
