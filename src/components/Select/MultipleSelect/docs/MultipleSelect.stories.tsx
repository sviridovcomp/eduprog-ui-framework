import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MultipleSelect from "@components/Select/MultipleSelect/MultipleSelect";

export default {
  title: "Components/Select/MultipleSelect",
  component: MultipleSelect,
} as ComponentMeta<typeof MultipleSelect>;

const Template: ComponentStory<typeof MultipleSelect> = (args) => {
  const [options, setOptions] = useState([]);

  return (
    <>
      <MultipleSelect
        {...args}
        onChange={(value: any) => {
          setOptions(value);
        }}
      />
      <p style={{ color: "#fff", fontFamily: "Nunito" }}>
        Selected values:{" "}
        {[...options].map((option) => (
          <li key={option[0]}>{option[0]}</li>
        ))}
      </p>
    </>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  label: "Выберите категории кэшбэка:",
  options: new Map([
    ["5% - Аптеки", "5% - аптеки"],
    ["5% - Ozon.ru", "5% - ozon.ru"],
    ["3% - Пятёрочка", "fewfew"],
    ["5% - Спорттовары", "grewge"],
    ["5% - Такси", "fwegfewr"],
    ["5% - Рестораны", "fwergerr"],
  ]),
  maxSelectedOptions: 3,
};
