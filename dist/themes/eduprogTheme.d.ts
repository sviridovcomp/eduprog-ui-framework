export interface Theme {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    backgroundColor: string;
    textColor: string;
}
export declare const eduprogTheme: {
    [key: string]: Theme;
};
declare const ThemeProvider: import("react").ComponentType<{
    theme?: Theme | undefined;
}>, withTheme: <Props extends {
    theme: Theme;
}, C>(WrappedComponent: import("react").ComponentType<Props> & C) => import("react").ComponentType<import("@callstack/react-theme-provider").$Without<Props, "theme"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<Theme> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Props> & C, {}>;
export { ThemeProvider, withTheme };
