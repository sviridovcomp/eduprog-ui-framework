import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Switch from "../Switch";

export default {
  title: "Components/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

interface Form {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
}

const PlaygroundTemplate: ComponentStory<typeof Switch> = (args) => {
  const [form, setForm] = useState<Form>({
    first: false,
    second: true,
    third: true,
    fourth: true,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.625rem",
        padding: "1.25rem",
      }}
    >
      <Switch
        {...args}
        color="primary"
        onChange={() => setForm({ ...form, first: !form.first })}
        checked={form.first}
      />

      <Switch
        {...args}
        color="primary"
        onChange={() => setForm({ ...form, second: !form.second })}
        checked={form.second}
      />

      <Switch color="primary" checked={false} disabled />
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});

const ColorTemplate: ComponentStory<typeof Switch> = (args) => {
  const [form, setForm] = useState<Form>({
    first: true,
    second: true,
    third: true,
    fourth: true,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.625rem",
        padding: "1.25rem",
      }}
    >
      <Switch
        {...args}
        color="primary"
        onChange={() => setForm({ ...form, first: !form.first })}
        checked={form.first}
      />
      <Switch
        {...args}
        color="secondary"
        checked={form.second}
        onChange={() => setForm({ ...form, second: !form.second })}
      />
      <Switch
        {...args}
        color="accent"
        checked={form.third}
        onChange={() => setForm({ ...form, third: !form.third })}
      />
      <Switch
        {...args}
        color="#ffbf11"
        checked={form.fourth}
        onChange={() => setForm({ ...form, fourth: !form.fourth })}
      />
    </div>
  );
};

export const Color = ColorTemplate.bind({});
