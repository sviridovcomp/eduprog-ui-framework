import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioButton from "../RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const PlaygroundTemplate: ComponentStory<typeof RadioButton> = (args) => (
  <RadioButton {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {};
