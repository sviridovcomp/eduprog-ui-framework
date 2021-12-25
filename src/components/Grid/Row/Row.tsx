import React, {FC} from "react";
import "./Row.scss";
import classList from "@utils/classList/classList";

export type RowPropsType = {
    align?: "start" | "end" | "center";
    spacing?: "1" | "2" | "3" | "4" | "5" | "6" | number;
};

const Row: FC<RowPropsType> = ({children, spacing}) => {
    const rootClasses = classList(["ep-row", spacing ? `ep-row_spacing-${spacing}` : ""]);
    return <div className={rootClasses}>{children}</div>;
};

export default Row;
