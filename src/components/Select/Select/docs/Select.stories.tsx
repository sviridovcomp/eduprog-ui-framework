import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "@components/Select/Select/Select";
import { SelectValue } from "../SelectProps";

export default {
  title: "Components/Select/Select",
  component: Select,
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
      <p style={{ color: "var(--ep-text-color)", fontFamily: "Nunito" }}>
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
