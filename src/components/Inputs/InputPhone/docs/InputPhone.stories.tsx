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
  const [, setValue] = useState("");

  return (
    <>
      <div
        style={{
          maxWidth: 300,
          display: "flex",
          flexDirection: "row",
          margin: "auto",
        }}
      >
        <InputPhone
          onChange={(data) => {
            setValue(data);
          }}
          {...args}
        />
      </div>
    </>
  );
};
export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: "Phone Input",
};
