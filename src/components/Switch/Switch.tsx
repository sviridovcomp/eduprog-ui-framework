import React, {FC} from "react";
import "./Switch.scss";
import classList from "@utils/classList/classList";

export type SwitchProps = {
	label?: string;
	color?: "primary" | "secondary" | "accent";
}

const Switch: FC<SwitchProps> = ({label , color}) => {
	return (
		<label className="switch">
			<input type="checkbox"/>
			<span className={classList(["switch-slider", color ? `switch-slider-${color}` : ""])}></span>
		</label>
	);
};

export default Switch;