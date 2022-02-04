/// <reference types="react" />
import { SelectValue } from "@components/Select/SelectLargeDevice/Select";
export declare function useSelect<Type>(initialValue: SelectValue<Type>): {
    value: SelectValue<Type>;
    setValue: import("react").Dispatch<import("react").SetStateAction<SelectValue<Type>>>;
    handleChange: (option: SelectValue<Type>) => void;
};
