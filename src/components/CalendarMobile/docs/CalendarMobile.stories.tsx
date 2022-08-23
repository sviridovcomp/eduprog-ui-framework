import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CalendarMobile from "../CalendarMobile";

export default {
  title: "Components/CalendarMobile",
  component: CalendarMobile,
} as ComponentMeta<typeof CalendarMobile>;

const PlaygroundTemplate: ComponentStory<typeof CalendarMobile> = (args) => {
  const [dates, setDates] = useState<Array<Date>>([new Date(2022, 7, 3)]);
  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <CalendarMobile
        {...args}
        defaultValue={dates}
        // onChange={(currentDates: Array<Date>) => setDates(currentDates)}
      />
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {};
