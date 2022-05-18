import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SelectLargeDevice from "../SelectLargeDevice";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Select/SelectLargeDevice/Playground",
  component: SelectLargeDevice,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof SelectLargeDevice>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectLargeDevice> = (args) => (
  <SelectLargeDevice {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  label: "Select",
  options: [
    {
      name: "5% - Аптеки",
      value: "5% - аптеки",
    },
    {
      name: "5% - Ozon.ru",
      value: "5% - ozon.ru",
    },
    {
      name: "3% - Пятёрочка",
      value: "fewfew",
    },
    {
      name: "5% - Спорттовары",
      value: "grewge",
    },
    {
      name: "5% - Такси",
      value: "fwegfewr",
    },
    {
      name: "5% - Рестораны",
      value: "fwergerr",
    },
  ],
  dropdownStyles: {
    maxHeight: 100,
    overflowY: "scroll",
    scrollBehavior: "smooth",
    scrollbarWidth: "thin",
  },
};
