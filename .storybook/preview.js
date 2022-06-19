import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import EduprogTheme from "./EduprogTheme";
import "../src/styles/themes/eduprogTheme.scss";

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
    theme: EduprogTheme,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
