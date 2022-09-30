import { FC } from "react";
import "./Calendar.scss";
export interface CalendarProps {
    label?: string;
    defaultValue?: Array<Date>;
    onChange?: (value: Array<Date>) => void;
    disabledDates?: Array<Date>;
    disabledWeekDays?: Array<number>;
    multiple?: boolean;
    classNameDay?: string;
}
export interface CalendarBrowserProps extends CalendarProps {
    label?: string;
}
export declare const Calendar: FC<CalendarBrowserProps>;
export default Calendar;
