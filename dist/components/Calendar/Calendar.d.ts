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
    isHeaderVisible?: boolean;
    classNameToday?: string;
}
export interface CalendarBrowserProps extends CalendarProps {
    label?: string;
    currentMonth?: number;
    currentYear?: number;
}
export declare const Calendar: FC<CalendarBrowserProps>;
export default Calendar;
