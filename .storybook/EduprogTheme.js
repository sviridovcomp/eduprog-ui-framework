import { create } from "@storybook/theming";

export default create({
  base: "dark",

  colorPrimary: "#6320ee",
  colorSecondary: "#8075ff",

  appBorderRadius: 4,

  // Typography
  fontBase: '"Nunito", sans-serif',
  fontCode: '"JetBrains Mono", monospace',
  
  fontSize: "16",

  // Text colors
  textColor: "rgba(255,255,255,0.9)",
  textInverseColor: "black",

  // Form colors
  inputBg: "#545454",
  inputBorder: "545454",
  inputTextColor: "white",
  inputBorderRadius: 8,

  brandTitle: "My custom storybook",
  brandUrl: "https://eduprog.ru",
  brandImage: "https://res.cloudinary.com/dixvycrtj/image/upload/v1655328354/eduprog-ui-logo_auwnjy.svg",
  brandTarget: "_self",
});
