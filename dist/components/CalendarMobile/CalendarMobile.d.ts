import { CalendarProps } from "@components/Calendar/Calendar";
import { FC } from "react";
export interface CalendarMobileProps extends CalendarProps {
    onClose: () => void;
}
declare const CalendarMobile: FC<CalendarMobileProps>;
export default CalendarMobile;
