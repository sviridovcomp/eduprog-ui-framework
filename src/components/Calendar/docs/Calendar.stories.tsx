import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Calendar from "../Calendar";

export default {
  title: "Components/Calendar/Browser",
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const PlaygroundTemplate: ComponentStory<typeof Calendar> = (args) => {
  const [dates, setDates] = useState<Array<Date>>([new Date(2022, 7, 3)]);
  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <Calendar
        {...args}
        defaultValue={dates}
        onChange={(currentDates: Array<Date>) => setDates(currentDates)}
      />

      <div>{JSON.stringify(dates)}</div>
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  disabledWeekDays: [0, 6],
};
