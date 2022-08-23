import { FC } from "react";
import "./CalendarMobile.scss";
export interface CalendarMobileProps {
    defaultValue: Array<Date>;
    onChange: (dates: Array<Date>) => void;
    onClose: () => void;
}
declare const CalendarMobile: FC<CalendarMobileProps>;
export default CalendarMobile;
