import Button from "@components/Button";
import React, { FC, useEffect, useState } from "react";
import {
  containsDate,
  DayName,
  isToday,
  MonthName,
  MounthData,
} from "./CalendarUtils";
import "./Calendar.scss";
import clsx from "clsx";

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

export const Calendar: FC<CalendarBrowserProps> = ({
  onChange,
  disabledDates,
  defaultValue,
  disabledWeekDays,
  multiple,
  classNameDay,
  isHeaderVisible = true,
  classNameToday,
  currentMonth,
  currentYear,
}) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDates, setSelectedDates] = useState<Array<Date>>(
    defaultValue ?? []
  );

  useEffect(() => {
    if (currentMonth) {
      setMonth(currentMonth);
    }
  }, [currentMonth]);

  useEffect(() => {
    if (currentYear) {
      setYear(currentYear);
    }
  }, [currentYear]);

  const MonthData = MounthData(year, month);

  const prevMonth = () => {
    if (month - 1 < 0) {
      setYear(year - 1);
      setMonth(11);
      return;
    }

    setMonth(month - 1);
  };

  const nextMonth = () => {
    if (month + 1 >= 11) {
      setYear(year + 1);
      setMonth(0);
      return;
    }

    setMonth(month + 1);
  };

  const selectDate = (date: Date) => {
    if (multiple) {
      if (containsDate(selectedDates, date)) {
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
    <div className="calendar">
      {isHeaderVisible && (
        <div className="calendar-header">
          <Button className="calendar-header-button" onClick={prevMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="24"
              width="24"
            >
              <path d="m13.3 17.3-4.6-4.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l4.6-4.6q.275-.275.7-.275.425 0 .7.275.275.275.275.7 0 .425-.275.7L10.8 12l3.9 3.9q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275Z" />
            </svg>{" "}
          </Button>
          <div>
            {MonthName()[month]} {year}
          </div>
          <Button className="calendar-header-button" onClick={nextMonth}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              height="24"
              width="24"
            >
              <path d="M8.7 17.3q-.275-.275-.275-.7 0-.425.275-.7l3.9-3.9-3.9-3.9q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l4.6 4.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-4.6 4.6q-.275.275-.7.275-.425 0-.7-.275Z" />
            </svg>
          </Button>
        </div>
      )}

      <table className="calendar-table">
        <thead>
          <tr>
            {DayName().map((name) => (
              <th key={name}>{name}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {MonthData.map((week, index) => (
            <tr key={index} className="calendar-week">
              {week.map((day, index) =>
                day ? (
                  <td
                    className={clsx(
                      "calendar-day",
                      isToday(day) && classNameToday,
                      containsDate(selectedDates, day) &&
                        "calendar-day-selected",
                      (disabledWeekDays?.includes(day.getDay()) ||
                        (disabledDates && containsDate(disabledDates, day))) &&
                        "calendar-day-disabled",
                      classNameDay
                    )}
                    key={index}
                    onClick={() => selectDate(day)}
                  >
                    {day.getDate()}
                  </td>
                ) : (
                  <td key={index}></td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
