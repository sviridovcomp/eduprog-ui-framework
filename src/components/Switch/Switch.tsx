import React, { FC, useState } from "react";
import "./Switch.scss";
import { defaultProps } from "@utils/defaultProps";
import clsx from "clsx";

export type SwitchProps = defaultProps & {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  label?: string;
  position?: "left" | "right";
  color?: "primary" | "secondary" | "accent";
  name?: string;
  onChange?: () => void;
};

const Switch: FC<SwitchProps> = ({
  style,
  label,
  color,
  position = "left",
  className = "",
  name = "",
  onChange,
  size = "md",
}) => {
  const [active, setActive] = useState(false);

  const changing = (event: React.ChangeEvent) => {
    const checkbox = event.target as HTMLInputElement;

    setActive(checkbox.checked);

    if (onChange) {
      onChange();
    }
  };

  return (
    <label className={clsx("switch", className)} style={style}>
      {position == "left" && <div className="switch-additional">{label}</div>}

      <input type="checkbox" onChange={changing} name={name} checked={active} />
      <span
        className={clsx("switch-slider", {
          [`switch-slider-color_${color}`]: color,
          [`switch-slider-size_${size}`]: size,
        })}
      />

      {position == "right" && <div className="switch-additional">{label}</div>}
    </label>
  );
};

export default Switch;
