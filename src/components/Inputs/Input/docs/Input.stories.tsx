import React, { FC, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "../Input";
import { TextInputProps } from "@components/Inputs/BaseInput/BaseInput";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Inputs/Input",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

const PlaygroundComponent: FC<TextInputProps> = (props) => {
  const [value, setValue] = useState("");

  return (
    <Input
      defaultValue={value}
      onChange={(value: string) => {
        setValue(value);
      }}
      {...props}
    />
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => (
  <PlaygroundComponent {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  label: "Email",
  cursor: "pointer",
};
