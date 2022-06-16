import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "@components/Select/Select/Select";
import { SelectValue } from "../SelectProps";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Select/Select",
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [option, setOption] = useState<SelectValue<string>>();

  return (
    <>
      <Select
        {...args}
        onChange={(value) => {
          setOption(value);

          args.onChange && args.onChange(value);
        }}
      />
      <p style={{ color: "#fff", fontFamily: "Nunito" }}>
        Selected value: {option && option.key}
      </p>
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  options: [
    { key: "5% - Аптеки", value: "5% - аптеки" },
    { key: "5% - Ozon.ru", value: "5% - ozon.ru" },
    { key: "3% - Пятёрочка", value: "fewfew" },
    { key: "5% - Спорттовары", value: "grewge" },
    { key: "5% - Такси", value: "fwegfewr" },
    { key: "5% - Рестораны", value: "fwergerr" },
  ],
  label: "Выберите категории кэшбека:",
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
