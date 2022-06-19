import {
  createTheming,
  type ThemingType,
} from "@callstack/react-theme-provider";

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

export const eduprogTheme: { [key: string]: Theme } = {
  default: {
    primaryColor: "#6320ee",
    secondaryColor: "#8075ff",
    accentColor: "#50c878",
    backgroundColor: "#fff",
    textColor: "#000",
  },
};

const { ThemeProvider, withTheme }: ThemingType<Theme> = createTheming(
  eduprogTheme.default
);

export { ThemeProvider, withTheme };
