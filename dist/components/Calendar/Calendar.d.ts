import { FC } from "react";
import "./Calendar.scss";
export declare type CalendarProps = {
    label?: string;
    defaultValue?: Array<Date>;
    onChange?: (value: Array<Date>) => void;
    disabledDates?: Array<Date>;
    disabledWeekDays?: Array<number>;
};
declare const Calendar: FC<CalendarProps>;
export default Calendar;
