import {
  containsDate,
  DayName,
  isToday,
  MonthName,
  MounthData,
} from "@components/Calendar/CalendarUtils";
import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";
import range from "lodash/range";
import "./CalendarMobile.scss";
import CloseIcon from "@icons/Close";
import Button from "@components/Button";
import { useSwipeable } from "react-swipeable";
import { CalendarProps } from "@components/Calendar/Calendar";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

interface CalendarMobileBaseProps {
  onClose: () => void;
  isInterval?: boolean;
  onChange?: (date: Date) => void;
  defaultValue?: Array<Date>;
  disabledDates?: Array<Date>;
  disabledWeekDays?: Array<number>;
  classNameDay?: string;
  classNameToday?: string;
}

const CalendarMobileBase: FC<CalendarMobileBaseProps> = ({
  defaultValue,
  onChange,
  onClose,
  disabledDates,
  disabledWeekDays,
  classNameToday,
  classNameDay,
}) => {
  const [year, setYear] = useState(new Date().getFullYear());

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setYear(year + 1);
    },
    onSwipedRight: () => {
      setYear(year - 1);
    },
  });

  return (
    <div className="CalendarMobile">
      <div className="CalendarMobileWrapper">
        <div className="Controls">
          <div className="CloseButton" onClick={onClose}>
            <CloseIcon />
          </div>

          <div className="Title">Выберите день</div>

          <div className="AcceptButton">
            <Button view="clear" style={{ color: "#668fd6" }} onClick={onClose}>
              Готово
            </Button>
          </div>
        </div>

        <div className="YearSelector" {...swipeHandlers}>
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
        <div className="WeeknameTitles">
          {DayName().map((name) => (
            <div key={name}>{name}</div>
          ))}
        </div>

        <div className="MounthsSelector">
          {range(12).map((month: number) => (
            <table className="calendar-table" key={month}>
              <caption className="calendar-table-month-name">
                {MonthName()[month]}
              </caption>

              <tbody>
                {MounthData(year, month).map((week, index) => (
                  <tr key={index} className="calendar-week">
                    {week.map((day, index) =>
                      day ? (
                        <td
                          className={clsx(
                            "calendar-day calendar-day-mobile",
                            isToday(day) && classNameToday,
                            containsDate(day, defaultValue) &&
                              "calendar-day-selected",
                            (disabledWeekDays?.includes(day.getDay()) ||
                              (disabledDates &&
                                containsDate(day, disabledDates))) &&
                              "calendar-day-disabled",
                            classNameDay
                          )}
                          key={index}
                          onClick={() => onChange && onChange(day)}
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

export default CalendarMobileBase;
