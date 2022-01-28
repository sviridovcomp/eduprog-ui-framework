import React, { FC } from "react";
import "./Switch.scss";
import classList from "@utils/classList/classList";
import { defaultProps } from "@utils/defaultProps";

export type SwitchProps = defaultProps & {
  label?: string;
  position?: "left" | "right";
  color?: "primary" | "secondary" | "accent";
  name?: string;
};

const Switch: FC<SwitchProps> = ({
  style,
  label,
  color,
  position = "left",
  className = "",
  name = "",
}) => {
  return (
    <label className={classList(["switch", className])} style={style}>
      {position == "left" && <div className="switch-additional">{label}</div>}

      <input type="checkbox" name={name} />
      <span
        className={classList([
          "switch-slider",
          color ? `switch-slider-${color}` : "",
        ])}
      />

      {position == "right" && <div className="switch-additional">{label}</div>}
    </label>
  );
};

export default Switch;
