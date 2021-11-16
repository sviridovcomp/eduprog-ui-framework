import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Paragraph from "../Paragraph";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Paragraph/Playground",
  component: Paragraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Paragraph>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  size: "xl",
  children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis maiores itaque saepe possimus autem pariatur, dignissimos laboriosam alias quis, voluptatum deleniti culpa, numquam officiis? Totam enim voluptatibus quibusdam hic."
};
