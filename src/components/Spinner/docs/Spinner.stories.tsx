import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "../Spinner";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Spinner/Playground",
  component: Spinner,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Spinner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  color: "primary",
  mode: "growing",
};
