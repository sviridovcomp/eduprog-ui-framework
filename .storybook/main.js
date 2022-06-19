const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin");
const path = require("path");

module.exports = {
  reactOptions: {
    strictMode: true,
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-actions",
    "@storybook/addon-a11y",
    "storybook-addon-performance/register",
    "storybook-theme-toggle"
  ],
  core: {
    builder: "webpack5",
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json')
      }),
    ];
    config.resolve.alias = {
      styles: path.join(__dirname, "../src/styles")
    }
    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
      include: path.resolve(__dirname, "./css")
    })
    return config;
  }
};
