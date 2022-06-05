import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FullScreenSlider from "../FullScreenSlider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/FullScreenSlider/Props",
  component: FullScreenSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FullScreenSlider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FullScreenSlider> = (args) => (
  <FullScreenSlider {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: <img src="" alt="" />,
};
