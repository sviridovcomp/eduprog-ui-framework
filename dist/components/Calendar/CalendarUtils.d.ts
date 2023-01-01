export declare enum Month {
    January = 0,
    February = 1,
    March = 2,
    April = 3,
    May = 4,
    June = 5,
    July = 6,
    August = 7,
    September = 8,
    October = 9,
    November = 10,
    December = 11
}
export declare const isLeapYear: (year: number) => boolean;
export declare const MonthDay: (date: Date) => number;
export declare function getDayOfWeek(date: Date): number;
export declare const DayName: () => string[];
export declare const MonthName: () => string[];
export declare const MounthData: (year: number, month: number) => (Date | undefined)[][];
export declare const containsDate: (date: Date, dates?: Array<Date>) => boolean;
export declare const isToday: (dist: Date) => boolean;
