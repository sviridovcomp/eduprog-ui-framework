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
    <div
      style={{
        display: "flex",
        margin: "auto",
        maxWidth: 300,
        flexDirection: "column",
      }}
    >
      <Select
        {...args}
        onChange={(value) => {
          setOption(value);

          args.onChange && args.onChange(value);
        }}
      />
      <p style={{ color: "var(--ep-text-color)", fontFamily: "Nunito" }}>
        Selected value: {option && option.name}
      </p>
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  options: [
    { name: "5% - Аптеки", value: "5% - аптеки" },
    { name: "5% - Ozon.ru", value: "5% - ozon.ru" },
    { name: "3% - Пятёрочка", value: "fewfew" },
    { name: "5% - Спорттовары", value: "grewge" },
    { name: "5% - Такси", value: "fwegfewr" },
    { name: "5% - Рестораны", value: "fwergerr" },
  ],
  label: "Выберите категории кэшбека:",
};
