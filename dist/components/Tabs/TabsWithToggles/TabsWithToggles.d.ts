import React, { FC } from "react";
import "./TabsWithToggles.scss";
export interface TabsWithTogglesOptions<Type> {
    id: string;
    name?: React.ReactNode;
    value?: Type;
}
export interface IToggleBlockProps {
    options: Array<TabsWithTogglesOptions<any>>;
    defaultValue?: TabsWithTogglesOptions<any>;
    style?: React.CSSProperties;
    onChange?: (value?: TabsWithTogglesOptions<any>) => void;
}
declare const TabsWithToggles: FC<IToggleBlockProps>;
export default TabsWithToggles;
