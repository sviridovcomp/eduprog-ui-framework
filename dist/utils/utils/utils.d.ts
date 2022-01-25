export declare const asyncSleep: (milliseconds: number) => Promise<unknown>;
export declare const removeArrayItem: <Type>(array: Type[], item: Type) => Type[];
export declare const importAll: (r: any) => any;
export declare const random: (min: number, max: number) => number;
export declare const splittingStringToBatches: (content: string, batchSize?: number, batchCount?: number) => string;
