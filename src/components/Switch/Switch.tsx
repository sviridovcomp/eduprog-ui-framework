import React, { FC, useState } from "react";
import "./Switch.scss";
import { defaultProps } from "@utils/defaultProps";
import classNames from "classnames";

export type SwitchProps = defaultProps & {
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
    <label className={classNames("switch", className)} style={style}>
      {position == "left" && <div className="switch-additional">{label}</div>}

      <input type="checkbox" onChange={changing} name={name} checked={active} />
      <span
        className={classNames("switch-slider", {
          [`switch-slider-${color}`]: true,
        })}
      />

      {position == "right" && <div className="switch-additional">{label}</div>}
    </label>
  );
};

export default Switch;
