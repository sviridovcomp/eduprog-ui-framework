import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Text/Playground",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  as: "h1",
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis maiores itaque saepe possimus autem pariatur, dignissimos laboriosam alias quis, voluptatum deleniti culpa, numquam officiis? Totam enim voluptatibus quibusdam hic.",
};
