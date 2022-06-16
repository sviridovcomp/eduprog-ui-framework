import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Skeleton from "../Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Playground = Template.bind({});
Playground.args = {};
