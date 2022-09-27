import {
  containsDate,
  DayName,
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

export interface CalendarMobileProps extends CalendarProps {
  onClose: () => void;
}

const CalendarMobile: FC<CalendarMobileProps> = ({
  defaultValue,
  onChange,
  onClose,
  disabledDates,
  disabledWeekDays,
}) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDates, setSelectedDates] = useState<Array<Date>>(
    defaultValue ?? []
  );

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      setYear(year + 1);
    },
    onSwipedRight: () => {
      setYear(year - 1);
    },
  });

  useEffect(() => {
    document
      .querySelector(
        `.MounthsSelector table:nth-child(${new Date().getMonth() + 1}) caption`
      )
      ?.scrollIntoView();
  }, []);

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
                            containsDate(selectedDates, day) &&
                              "calendar-day-selected",
                            (disabledWeekDays?.includes(day.getDay()) ||
                              (disabledDates &&
                                containsDate(disabledDates, day))) &&
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarMobile;
