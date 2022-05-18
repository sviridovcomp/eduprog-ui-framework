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
    {
      name: "5% - Аптеки",
      value: "1",
    },
    {
      name: "5% - Ozon.ru",
      value: "2",
    },
    {
      name: "3% - Пятёрочка",
      value: "3",
    },
    {
      name: "5% - Спорттовары",
      value: "4",
    },
    {
      name: "5% - Такси",
      value: "5",
    },
    {
      name: "5% - Рестораны",
      value: "6",
    },
  ],
  wrapperStyles: { borderRadius: 0 },
};
