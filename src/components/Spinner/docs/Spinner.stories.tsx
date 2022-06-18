import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Spinner from "../Spinner";
import Button from "@components/Button";
import { Container, Row, Column } from "@components/Grid";

export default {
  title: "Components/Spinner",
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const PlaygroundTemplate: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  color: "primary",
  mode: "growing",
};

const SizeTemplate = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
      <div style={{ display: "flex", gap: "0.25rem" }}>
        <Spinner color="primary" size="xl" />
        <Spinner color="primary" size="lg" />
        <Spinner color="primary" size="md" />
        <Spinner color="primary" size="sm" />
        <Spinner color="primary" size="xs" />
      </div>

      <div style={{ display: "flex", gap: "0.25rem" }}>
        <Spinner mode="border" color="primary" size="xl" />
        <Spinner mode="border" color="primary" size="lg" />
        <Spinner mode="border" color="primary" size="md" />
        <Spinner mode="border" color="primary" size="sm" />
        <Spinner mode="border" color="primary" size="xs" />
      </div>
    </div>
  );
};

export const Size = SizeTemplate.bind({});

const ButtonsTempalate: ComponentStory<typeof Spinner> = () => {
  return (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      <Button
        view="action"
        contentLeft={
          <>
            <Spinner size="xs" mode="border" color="#fff" />
          </>
        }
      >
        Loading...
      </Button>
      <Button
        view="action"
        contentLeft={
          <>
            <Spinner size="sm" mode="growing" color="#fff" />
          </>
        }
      >
        Loading...
      </Button>
    </div>
  );
};

export const Buttons = ButtonsTempalate.bind({});
// @ts-ignore
Buttons.parameters = {
  docs: {
    description: {
      story:
        "Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.",
    },
  },
};
