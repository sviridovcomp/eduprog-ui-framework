import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PhoneInput from "../PhoneInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Компоненты/PhoneInput/Playground",
	component: PhoneInput,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof PhoneInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PhoneInput> = (args) => <PhoneInput {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
	label: "PhoneInput",
};
