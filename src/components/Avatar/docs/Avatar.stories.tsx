import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Avatar from "../Avatar";
import AvatarDocs from "./AvatarDocs.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    docs: {
      page: AvatarDocs,
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PlaygroundTemplate: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  text: "Name Surname",
};

const AutoColorTemplate: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} autoColor></Avatar>;
};

export const AutoColor = AutoColorTemplate.bind({});

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
