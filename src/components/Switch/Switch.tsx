// @ts-ignore
import React, { FC, useCallback } from "react";
import "./Switch.scss";
import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";

export type SwitchProps = defaultProps & {
  color: "primary" | "secondary" | "accent" | string;
  name?: string;
  onChange?: (event?: React.ChangeEvent) => void;
  textOn?: React.ReactChild;
  textOff?: React.ReactChild;
  checked: boolean;
  disabled?: boolean;
  inputHtmlId?: string;
};

const Switch: FC<SwitchProps> = ({
  style,
  color = "primary",
  className = "",
  name = "",
  onChange,
  textOn,
  textOff,
  checked,
  disabled,
  inputHtmlId,
}) => {
  const changing = (event: React.ChangeEvent) => {
    if (onChange) {
      onChange(event);
    }
  };

  const colorRouter = useCallback(() => {
    const router = new Map([
      ["primary", "var(--ep-color-primary)"],
      ["secondary", "var(--ep-color-secondary)"],
      ["accent", "var(--ep-color-accent)"],
    ]);

    if (router.has(color)) {
      return router.get(color);
    }

    return color;
  }, [color]);

  return (
    <div
      className={clsx("switch", className)}
      style={{
        color: colorRouter(),
        opacity: `${disabled ? "0.6" : "initial"}`,
        ...style,
      }}
    >
      <input
        type="checkbox"
        onChange={changing}
        name={name}
        checked={checked}
        id={inputHtmlId}
        disabled={disabled}
      />
      <div className="switch-circle"></div>
      <div className="switch-text on">{textOn}</div>
      <div className="switch-text off">{textOff}</div>
      <div className="switch-background"></div>
    </div>
  );
};

export default Switch;
