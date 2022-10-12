export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

const getDayInMonth = (month: number) => {
  return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

export const isLeapYear = (year: number) => {
  return !(year % 4 || (!(year % 100) && year % 400));
};

export const MonthDay = (date: Date) => {
  const month = date.getMonth();
  const year = date.getFullYear();
  const dayInMonth = getDayInMonth(month);

  if (isLeapYear(year) && month === Month.February) {
    return dayInMonth + 1;
  }

  return dayInMonth;
};

const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

export function getDayOfWeek(date: Date) {
  const dayOfWeek = date.getDay();

  return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

export const DayName = () => ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
export const MonthName = () => [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const MounthData = (year: number, month: number) => {
  const result: Array<Array<Date | undefined>> = [];
  const date = new Date(year, month);
  const monthDays = MonthDay(date);
  const monthStartsOn = getDayOfWeek(date);
  let day = 1;

  for (let i = 0; i < (monthDays + monthStartsOn) / 7; i++) {
    result[i] = [];

    for (let j = 0; j < 7; j++) {
      if ((i == 0 && j < monthStartsOn) || day > monthDays) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }

  return result;
};

export const containsDate = (date: Date, dates?: Array<Date>): boolean => {
  return dates?.some((currentDate) => {
    return (
      currentDate.getFullYear() == date.getFullYear() &&
      currentDate.getMonth() == date.getMonth() &&
      currentDate.getDate() == date.getDate()
    );
  }) ?? false;
};

export const isToday = (dist: Date) => {
  const now = new Date();
  return (
    now.getDate() == dist.getDate() &&
    now.getMonth() == dist.getMonth() &&
    now.getFullYear() == dist.getFullYear()
  );
};
