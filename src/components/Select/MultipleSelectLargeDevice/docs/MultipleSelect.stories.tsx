import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import MultipleSelectLargeDevice from "@components/Select/MultipleSelectLargeDevice/MultipleSelectLargeDevice";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Select/MultipleSelectLargeDevice/Playground",
  component: MultipleSelectLargeDevice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MultipleSelectLargeDevice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MultipleSelectLargeDevice> = (args) => (
  <MultipleSelectLargeDevice {...args} />
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
