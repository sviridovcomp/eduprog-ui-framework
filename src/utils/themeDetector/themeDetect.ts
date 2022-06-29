export enum Themes {
    Ligth,
    Dark
}

export const ThemeDetect = () => {
  const theme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  return theme.matches ? Themes.Dark : Themes.Ligth;
};

