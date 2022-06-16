import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputCopy from "../InputCopy";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Inputs/InputCopy",
  component: InputCopy,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputCopy>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputCopy> = (args) => (
  <InputCopy {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: "Copy Input",
};
