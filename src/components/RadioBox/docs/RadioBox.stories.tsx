import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import RadioBox from "../RadioBox";

export default {
  title: "Components/RadioBox",
  component: RadioBox,
} as ComponentMeta<typeof RadioBox>;

const PlaygroundTemplate: ComponentStory<typeof RadioBox> = (args) => {
  return <RadioBox {...args} />;
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  options: [
    { label: "Option A", value: "1" },
    { label: "Option B", value: "2" },
  ],
};
