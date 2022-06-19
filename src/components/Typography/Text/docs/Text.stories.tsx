import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "../Text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Text",
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

const OverflowTemplate: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const Overflow = OverflowTemplate.bind({});
Overflow.args = {
  children:
    "Lorem ipsum - uptatum deleniti culpa, numquam officiis? Totam enim voluptatibus quibusdam hic.",
  overflow: "ellipsis",
  typography: "display-xl",
  maxLines: 1,
};

const OverflowFadeTemplate: ComponentStory<typeof Text> = (args) => (
  <Text {...args} />
);

export const OverflowFade = OverflowFadeTemplate.bind({});
OverflowFade.args = {
  children:
    "Lorem ipsum - uptatum deleniti culpa, numquam officiis? Totam enim voluptatibus quibusdam hic.",
  overflow: "fade",
  typography: "display-xl",
  maxLines: 1,
};

const AlignTemplate: ComponentStory<typeof Text> = (args) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text {...args} align="start" />
      <Text {...args} align="center" />
      <Text {...args} align="end" />{" "}
    </div>
  );
};

export const Align = AlignTemplate.bind({});
Align.args = {
  children: "Headline",
  typography: "display-xl",
  maxLines: 1,
};

const WeightTemplate: ComponentStory<typeof Text> = (args) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Text {...args} weight="light" />
      <Text {...args} weight="regular" />
      <Text {...args} weight="medium" />
      <Text {...args} weight="bold" />
    </div>
  );
};

export const Weigth = WeightTemplate.bind({});
Weigth.args = {
  children: "Headline",
  typography: "display-xl",
  maxLines: 1,
};
