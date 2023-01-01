import { FC } from "react";
import "./CalendarMobile.scss";
interface CalendarMobileBaseProps {
    onClose: () => void;
    isInterval?: boolean;
    onChange?: (date: Date) => void;
    defaultValue?: Array<Date>;
    disabledDates?: Array<Date>;
    disabledWeekDays?: Array<number>;
    classNameDay?: string;
}
declare const CalendarMobileBase: FC<CalendarMobileBaseProps>;
export default CalendarMobileBase;
