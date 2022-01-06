import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputPassword from "../InputPassword";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Компоненты/Inputs/InputPassword",
  component: InputPassword,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputPassword>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputPassword> = (args) => (
  <InputPassword {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
	label: "Password BaseInput",
};
