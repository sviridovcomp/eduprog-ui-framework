import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MultipleSelectSmallDevice from "@components/Select/MultipleSelectSmallDevice/MultipleSelectSmallDevice";
import Button from "@components/Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Select/MultipleSelectSmallDevice/Playground",
  component: MultipleSelectSmallDevice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MultipleSelectSmallDevice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MultipleSelectSmallDevice> = (args) => (
  <MultipleSelectSmallDevice {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: "Select",
  options: [
    "5% - Аптеки",
    "5% - Ozon.ru",
    "3% - Пятёрочка",
    "5% - Спорттовары",
    "5% - Такси",
    "5% - Рестораны",
  ],
  maxSelectedOptions: 3,
};
