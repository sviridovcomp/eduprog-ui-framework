import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CustomDropdown from "../CustomDropdown";
import Button from "@components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/CustomDropdown/Playground",
  component: CustomDropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CustomDropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CustomDropdown> = (args) => (
  <CustomDropdown {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
    children: <><Button>Привет</Button></>
};
