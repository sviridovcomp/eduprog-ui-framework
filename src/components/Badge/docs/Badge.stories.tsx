import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Badge from "../Badge";

export default {
  title: "Components/Badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const PlaygroundTemplate: ComponentStory<typeof Badge> = () => {
  return (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      <Badge view="success">Success</Badge>
      <Badge view="error">Error</Badge>
      <Badge view="warning">Warning</Badge>
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});
