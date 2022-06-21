import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "..";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    className: { control: "text" },
    position: {
      options: ["left", "right"],
    },
    view: {
      control: "select",
      options: ["default", "primary", "secondary", "accent"],
    },
    disabled: { control: "boolean" },
    width: {
      options: ["auto", "available"],
    },
    autoFocus: { control: "boolean" },
  },
} as ComponentMeta<typeof Checkbox>;

const PlaygroundTemplate: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {};

const ViewTemplate = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      <div>
        <Checkbox
          view="default"
          onChange={() => setChecked(!checked)}
          checked={checked}
        >
          Default
        </Checkbox>{" "}
      </div>
      <div>
        <Checkbox
          view="primary"
          onChange={() => setChecked(!checked)}
          checked={checked}
        >
          Primary
        </Checkbox>
      </div>
      <div>
        <Checkbox
          view="secondary"
          onChange={() => setChecked(!checked)}
          checked={checked}
        >
          Secondary
        </Checkbox>
      </div>
      <div>
        <Checkbox
          view="accent"
          onChange={() => setChecked(!checked)}
          checked={checked}
        >
          Accent
        </Checkbox>
      </div>
    </div>
  );
};

export const View = ViewTemplate.bind({});
// @ts-ignore
View.parameters = {
  docs: {
    description: {
      story:
        "To change the appearance of the checkbox, set `view` propery to `default`, `primary`, `secondary`, `accent`.",
    },
  },
};
