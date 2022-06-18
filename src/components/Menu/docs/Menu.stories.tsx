import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Menu from "../Menu";
import Button from "../../Button/Button";

export default {
  title: "Components/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const PlaygroundTemplate: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  children: (
    <div>
      <Button>Delete</Button>
    </div>
  ),
  toggle: <Button>Dropdown</Button>,
};
