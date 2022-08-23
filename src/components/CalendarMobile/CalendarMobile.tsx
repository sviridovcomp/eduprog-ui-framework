import {
  DayName,
  MonthName,
  MounthData,
} from "@components/Calendar/CalendarUtils";
import clsx from "clsx";
import React, { FC, useState } from "react";
import range from "lodash/range";
import "./CalendarMobile.scss";
import dayjs from "dayjs";
import CloseIcon from "@icons/Close";
import Button from "@components/Button";

export interface CalendarMobileProps {
  defaultValue: Array<Date>;
}

const CalendarMobile: FC<CalendarMobileProps> = ({ defaultValue }) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDates, setSelectedDates] = useState<Array<Date>>(
    defaultValue ?? []
  );

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

  return (
    <div className="CalendarMobile">
      <div className="CalendarMobileWrapper">
        <div className="Controls">
          <div className="CloseButton">
            <CloseIcon />
          </div>

          <div className="Title">Выберите день</div>

          <div className="AcceptButton">
            <Button view="clear" style={{ color: "#668fd6" }}>
              Готово
            </Button>
          </div>
        </div>

        <div className="YearSelector">
          {range(year - 2, year + 3).map((item) => (
            <div
              className={clsx(
                "YearSelectorItem",
                year == item && "YearSelectorItem-Selected"
              )}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="MounthsSelector">
          {range(12).map((month: number) => (
            <table className="calendar-table" key={month}>
              <caption className="calendar-table-month-name">
                {MonthName()[month]}
              </caption>
              <thead>
                <tr>
                  {DayName().map((name) => (
                    <th key={name}>{name}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {MounthData(year, month).map((week, index) => (
                  <tr key={index} className="calendar-week">
                    {week.map((day, index) =>
                      day ? (
                        <td
                          className={clsx(
                            "calendar-day",
                            containsDate(selectedDates, day) &&
                              "calendar-day-selected"
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarMobile;
