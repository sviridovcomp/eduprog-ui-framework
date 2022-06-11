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

const SizeTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      <Button size="xl">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="md">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="xs">Button</Button>
    </div>
  );
};

export const Size = SizeTemplate.bind({});

const WidthTemplate: ComponentStory<typeof Button> = (args) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <div>
        <Button width="available">Button</Button>
      </div>
      <div>
        <Button width="auto">Button</Button>
      </div>
    </div>
  );
};

export const Width = WidthTemplate.bind({});
