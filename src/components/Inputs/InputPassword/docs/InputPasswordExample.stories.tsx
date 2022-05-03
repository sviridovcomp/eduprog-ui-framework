import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";

import InputPassword from "@components/Inputs/InputPassword/InputPassword";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Inputs/InputPassword/Example",
  component: InputPassword,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof InputPassword>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Playground = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <InputPassword
        defaultValue={value}
        onChange={(value: string) => setValue(value)}
        label="Пароль"
      />
    </>
  );
};
