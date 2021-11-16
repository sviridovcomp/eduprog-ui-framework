import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";

import Heading from "../Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Heading/Playground",
  component: Heading,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  size: "xxl",
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis maiores itaque saepe possimus autem pariatur, dignissimos laboriosam alias quis, voluptatum deleniti culpa, numquam officiis? Totam enim voluptatibus quibusdam hic.",
};
