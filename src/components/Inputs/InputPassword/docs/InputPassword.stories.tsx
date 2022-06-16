import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputPassword from "../InputPassword";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Inputs/InputPassword",
  component: InputPassword,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputPassword>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PlaygroundTemplate: ComponentStory<typeof InputPassword> = (args) => {
  const [value, setValue] = useState("");

  return (
    <InputPassword
      {...args}
      defaultValue={value}
      onChange={(value, event) => {
        setValue(value);
        args.onChange && args.onChange(value, event);
      }}
    />
  );
};

export const Playground = PlaygroundTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: "Password:",
};

const ValdationTemplate: ComponentStory<typeof InputPassword> = (args) => {
  const [value, setValue] = useState("");

  return (
    <InputPassword
      {...args}
      defaultValue={value}
      onChange={(value, event) => {
        setValue(value);
        args.onChange && args.onChange(value, event);
      }}
    />
  );
};

export const Validation = ValdationTemplate.bind({});
Validation.args = {
  label: "Password:",
  isValidation: true,
};
