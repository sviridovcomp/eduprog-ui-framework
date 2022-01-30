import React, { FC, useState } from "react";
import "./Switch.scss";
import classList from "@utils/classList/classList";
import { defaultProps } from "@utils/defaultProps";

export type SwitchProps = defaultProps & {
  label?: string;
  position?: "left" | "right";
  color?: "primary" | "secondary" | "accent";
  name?: string;
  onChange?: (value: boolean) => void;
};

const Switch: FC<SwitchProps> = ({
  style,
  label,
  color,
  position = "left",
  className = "",
  name = "",
  onChange,
}) => {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);

    if (onChange) {
      onChange(active);
    }
  };

  return (
    <label className={classList(["switch", className])} style={style}>
      {position == "left" && <div className="switch-additional">{label}</div>}

      <input type="checkbox" onClick={onClick} name={name} />
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
