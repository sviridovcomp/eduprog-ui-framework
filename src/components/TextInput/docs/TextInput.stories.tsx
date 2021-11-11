import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextInput from "../TextInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Компоненты/TextInput/Playground",
	component: TextInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TextInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
	label: "TextInput",
};
