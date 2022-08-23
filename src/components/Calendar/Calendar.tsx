import Button from "@components/Button";
import React, { FC, useEffect, useState } from "react";
import { DayName, MonthName, MounthData } from "./CalendarUtils";
import "./Calendar.scss";
import clsx from "clsx";

export type CalendarProps = {
  label?: string;
  defaultValue?: Array<Date>;
  onChange?: (value: Array<Date>) => void;
  disabledDates?: Array<Date>;
  disabledWeekDays?: Array<number>;
};

const Calendar: FC<CalendarProps> = ({
  onChange,
  disabledDates,
  defaultValue,
  disabledWeekDays,
}) => {
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDates, setSelectedDates] = useState<Array<Date>>(
    defaultValue ?? []
  );

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

  const containsDate = (dates: Array<Date>, date: Date): boolean => {
    return dates.some((currentDate) => {
      return (
        currentDate.getFullYear() == date.getFullYear() &&
        currentDate.getMonth() == date.getMonth() &&
        currentDate.getDate() == date.getDate()
      );
    });
  };

  const selectDate = (date: Date) => {
    if (containsDate(selectedDates, date)) {
      setSelectedDates(
        selectedDates.filter((currentDate) => {
          return currentDate.getTime() != date.getTime();
        })
      );
    } else {
      setSelectedDates([...selectedDates, date]);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(selectedDates);
    }
  }, [selectedDates]);

  return (
    <div className="calendar">
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
                      containsDate(selectedDates, day) &&
                        "calendar-day-selected",
                      disabledWeekDays?.includes(day.getDay()) &&
                        "calendar-day-disabled"
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
