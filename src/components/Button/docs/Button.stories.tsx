import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonDocs from "./ButtonDocs.mdx";

import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    docs: {
      page: ButtonDocs,
    },
  },

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PlaygroundTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: "Button",
};

const ViewTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      <Button view="default">Button</Button>
      <Button view="action">Button</Button>
      <Button view="link">Button</Button>
      <Button view="pseudo">Button</Button>
      <Button view="clear">Button</Button>
      <Button view="raised">Button</Button>{" "}
    </div>
  );
};

export const View = ViewTemplate.bind({});
