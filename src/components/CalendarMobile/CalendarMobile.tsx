import { CalendarProps } from "@components/Calendar/Calendar";
import { containsDate } from "@components/Calendar/CalendarUtils";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import React, { FC, useEffect, useState } from "react";
import CalendarMobileBase from "./CalendarMobileBase";

export interface CalendarMobileProps extends CalendarProps {
  onClose: () => void;
}

const CalendarMobile: FC<CalendarMobileProps> = ({
  defaultValue,
  onChange,
  onClose,
  disabledWeekDays,
  disabledDates,
  classNameToday,
  multiple = false,
}) => {
  dayjs.extend(isBetween);

  const [selectedDates, setSelectedDates] = useState<Array<Date>>(
    defaultValue ?? []
  );

  useEffect(() => {
    document
      .querySelector(
        `.MounthsSelector table:nth-child(${new Date().getMonth() + 1}) caption`
      )
      ?.scrollIntoView();
  }, []);

  const selectDate = (date: Date) => {
    if (multiple) {
      if (containsDate(date, selectedDates)) {
        setSelectedDates(
          selectedDates.filter((currentDate) => {
            return currentDate.getTime() != date.getTime();
          })
        );
      } else {
        setSelectedDates([...selectedDates, date]);
      }
    } else {
      setSelectedDates([date]);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedDates);
    }
  }, [selectedDates]);

  return (
    <CalendarMobileBase
      defaultValue={selectedDates}
      onClose={onClose}
      onChange={selectDate}
      disabledDates={disabledDates}
      disabledWeekDays={disabledWeekDays}
      classNameDay={classNameToday}
    ></CalendarMobileBase>
  );
};

export default CalendarMobile;
