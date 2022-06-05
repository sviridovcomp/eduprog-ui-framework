import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectSmallDevice from "../SelectSmallDevice";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Select/SelectSmallDevice/Playground",
  component: SelectSmallDevice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SelectSmallDevice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectSmallDevice> = (args) => (
  <SelectSmallDevice {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: "Select",
  options: [
    ["5% - Аптеки", "1"],
    ["5% - Ozon.ru", "2"],
    ["3% - Пятёрочка", "3"],
    ["5% - Спорттовары", "4"],
    ["5% - Такси", "5"],
    ["5% - Рестораны", "6"],
  ],
  defaultValue: ["5% - Спорттовары", "4"],
  wrapperStyles: { borderRadius: 0 },
};
