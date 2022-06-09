import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage } from "@storybook-addons/docs";

export const parameters = {
  docs: {
    container: DocsPage,
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
