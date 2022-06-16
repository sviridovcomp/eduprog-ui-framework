import React, { FC, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../Input";

export default {
  title: "Components/Inputs/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const PlaygroundTemplate: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState("");

  return (
    <Input
      {...args}
      defaultValue={value}
      onChange={(value: string, event) => {
        setValue(value);

        args.onChange && args.onChange(value, event);
      }}
    />
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  label: "Email",
  cursor: "pointer",
};

const MaskTemplate: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Input
        {...args}
        mask="ivanov@gmail.com"
        defaultValue={value}
        onChange={(value: string, event) => {
          setValue(value);

          args.onChange && args.onChange(value, event);
        }}
      />
    </div>
  );
};

export const Mask = MaskTemplate.bind({});
Mask.args = {
  label: "Email:",
};

const ValidationTemplate: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState("");

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Input
        {...args}
        validators={{
          notEmpty: true,
          pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
          message: "Enter correct email",
        }}
        defaultValue={value}
        onChange={(value: string, event) => {
          setValue(value);

          args.onChange && args.onChange(value, event);
        }}
      />
    </div>
  );
};

export const Validation = ValidationTemplate.bind({});
Validation.args = {
  label: "Email",
};
// @ts-ignore
Validation.parameters = {
  docs: {
    description: {
      story:
        "Add validation to your Input using the `validators` object using the `ITextInputValidator` interface (show sample source code)",
    },
  },
};
