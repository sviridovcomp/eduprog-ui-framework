import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MultipleSelect from "@components/Select/MultipleSelect/MultipleSelect";
import { SelectValue } from "@components/Select/Select/SelectProps";

export default {
  title: "Components/Select/MultipleSelect",
  component: MultipleSelect,
} as ComponentMeta<typeof MultipleSelect>;

const Template: ComponentStory<typeof MultipleSelect> = (args) => {
  const [options, setOptions] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        maxWidth: 300,
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <MultipleSelect
        {...args}
        // eslint-disable-next-line
        onChange={(value: any) => {
          setOptions(value);
        }}
      />
      <p style={{ color: "var(--ep-text-color)" }}>
        Selected values:{" "}
        {options.map((option: SelectValue<any>, index) => (
          <li key={index}>{option.name}</li>
        ))}
      </p>
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  label: "Выберите категории кэшбэка:",
  options: [
    { name: "5% - Аптеки", value: "5% - аптеки" },
    { name: "5% - Ozon.ru", value: "5% - ozon.ru" },
    { name: "3% - Пятёрочка", value: "fewfew" },
    { name: "5% - Спорттовары", value: "grewge" },
    { name: "5% - Такси", value: "fwegfewr" },
    { name: "5% - Рестораны", value: "fwergerr" },
  ],
  maxSelectedOptions: 3,
};
