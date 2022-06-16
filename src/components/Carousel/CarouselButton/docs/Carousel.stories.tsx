import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CarouselButton from "../CarouselButton";

export default {
  title: "Components/CarouselButton",
  component: CarouselButton,
} as ComponentMeta<typeof CarouselButton>;

const Template: ComponentStory<typeof CarouselButton> = (args) => (
  <CarouselButton {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  children: <></>,
};
