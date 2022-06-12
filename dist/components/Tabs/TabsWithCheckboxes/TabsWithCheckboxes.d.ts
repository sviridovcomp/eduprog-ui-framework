import React, { FC } from "react";
import { CheckboxPropsType } from "../../Checkboxes/Checkbox/Checkbox";
export declare type TabsWithCheckboxesValue<Type> = CheckboxPropsType & {
    id: string;
    label?: React.ReactNode;
    value?: Type;
};
export declare type TabsWithCheckboxProps = {
    /**
     * Options
     */
    options?: Array<TabsWithCheckboxesValue<any>>;
    /**
     * Callback
     */
    onChange?: (value: TabsWithCheckboxesValue<any>[]) => void;
};
declare const TabsWithCheckboxes: FC<TabsWithCheckboxProps>;
export default TabsWithCheckboxes;
