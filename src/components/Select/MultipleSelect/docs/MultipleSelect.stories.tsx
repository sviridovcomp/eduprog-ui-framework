import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MultipleSelect from "@components/Select/MultipleSelect/MultipleSelect";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Select/MultipleSelect/Playground",
  component: MultipleSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MultipleSelect>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MultipleSelect> = (args) => (
  <MultipleSelect {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: "Select",
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
