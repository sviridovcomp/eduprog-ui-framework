import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import InputPhone from "../InputPhone";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Inputs/InputPhone",
  component: InputPhone,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputPhone>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputPhone> = (args) => {
  const [value, setValue] = useState("");

  return (
    <InputPhone
      onChange={(data) => {
        setValue(data);
        console.log("update: ", value);
      }}
      {...args}
    />
  );
};
export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: "Phone Input",
};
