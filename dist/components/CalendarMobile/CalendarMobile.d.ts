import { FC } from "react";
import "./CalendarMobile.scss";
import { CalendarProps } from "@components/Calendar/Calendar";
export interface CalendarMobileProps extends CalendarProps {
    onClose: () => void;
}
declare const CalendarMobile: FC<CalendarMobileProps>;
export default CalendarMobile;
