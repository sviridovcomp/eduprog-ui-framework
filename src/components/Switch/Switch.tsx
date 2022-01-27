import React, {FC} from "react";
import "./Switch.scss";
import classList from "@utils/classList/classList";

export type SwitchProps = {
	label?: string;
	position?: "left" | "right";
	color?: "primary" | "secondary" | "accent";
}

const Switch: FC<SwitchProps> = ({label , color, position= "left"}) => {
	return (
		<label className="switch">
			{ position == "left" && (
				<div className="switch-additional">{label}</div>
			)}

			<input type="checkbox"/>
			<span className={classList(["switch-slider", color ? `switch-slider-${color}` : ""])}/>

			{ position == "right" && (
				<div className="switch-additional">{label}</div>
			)}
		</label>
	);
};

export default Switch;