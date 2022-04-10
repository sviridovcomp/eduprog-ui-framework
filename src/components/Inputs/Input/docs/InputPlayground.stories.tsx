import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from "@components/Inputs/Input/Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Inputs/Input/Play",
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Playground = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Input
        defaultValue={value}
        validators={{
          notEmpty: true,
          message: "Укажите действительный email",
        }}
        onChange={(value: string) => setValue(value)}
        label="Email"
      />
    </>
  );
};
