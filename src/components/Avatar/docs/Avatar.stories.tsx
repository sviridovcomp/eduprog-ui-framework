import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "../Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const PlaygroundTemplate: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  text: "Name Surname",
};

const AutoColorTemplate: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} autoColor></Avatar>;
};

export const AutoColor = AutoColorTemplate.bind({});
// @ts-ignore
AutoColor.parameters = {
  docs: {
    description: {
      story:
        "To create a coloured avatar with a random colour palette, set `autoColor` property.",
    },
  },
};
AutoColor.args = {
  text: "Name Surname",
};

const SizeTemplate = () => {
  return (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      <Avatar size="xl" text="Name Surname" />
      <Avatar size="lg" text="Name Surname" />
      <Avatar size="md" text="Name Surname" />
      <Avatar size="sm" text="Name Surname" />
      <Avatar size="xs" text="Name Surname" />
    </div>
  );
};

export const Size = SizeTemplate.bind({});
// @ts-ignore
Size.parameters = {
  docs: {
    description: {
      story:
        "To change the size of the avatar, set `size` property to `xs`, `sm`, `md`, `lg`, `xl`.",
    },
  },
};
