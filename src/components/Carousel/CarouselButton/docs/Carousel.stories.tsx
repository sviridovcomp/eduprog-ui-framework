import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CarouselButton from "../CarouselButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/CarouselButton/Playground",
  component: CarouselButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CarouselButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CarouselButton> = (args) => (
  <CarouselButton {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: <></>,
};
