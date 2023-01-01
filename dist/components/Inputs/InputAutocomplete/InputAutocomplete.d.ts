import { FC } from "react";
export type AutocompleteValue<Type> = {
    name: string;
    value: Type;
};
export interface IInputAutocompleteProps {
    label: string;
    options?: Array<AutocompleteValue<any>>;
    onChange?: (value?: AutocompleteValue<any>) => void;
}
declare const InputAutocomplete: FC<IInputAutocompleteProps>;
export default InputAutocomplete;
