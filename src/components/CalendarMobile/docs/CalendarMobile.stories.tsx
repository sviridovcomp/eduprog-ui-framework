import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CalendarMobile from "../CalendarMobile";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Button from "@components/Button";
import dayjs from "dayjs";

export default {
  title: "Components/Calendar/Mobile",
  component: CalendarMobile,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
} as ComponentMeta<typeof CalendarMobile>;

const PlaygroundTemplate: ComponentStory<typeof CalendarMobile> = (args) => {
  const [dates, setDates] = useState<Array<Date>>([new Date(2022, 7, 3)]);
  const [open, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Button
          onClick={() => setOpen(!open)}
          rounded
          style={{ width: 44, height: 44 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path d="M12 14q-.425 0-.712-.288Q11 13.425 11 13t.288-.713Q11.575 12 12 12t.713.287Q13 12.575 13 13t-.287.712Q12.425 14 12 14Zm-4 0q-.425 0-.713-.288Q7 13.425 7 13t.287-.713Q7.575 12 8 12t.713.287Q9 12.575 9 13t-.287.712Q8.425 14 8 14Zm8 0q-.425 0-.712-.288Q15 13.425 15 13t.288-.713Q15.575 12 16 12t.712.287Q17 12.575 17 13t-.288.712Q16.425 14 16 14Zm-4 4q-.425 0-.712-.288Q11 17.425 11 17t.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17t-.287.712Q12.425 18 12 18Zm-4 0q-.425 0-.713-.288Q7 17.425 7 17t.287-.712Q7.575 16 8 16t.713.288Q9 16.575 9 17t-.287.712Q8.425 18 8 18Zm8 0q-.425 0-.712-.288Q15 17.425 15 17t.288-.712Q15.575 16 16 16t.712.288Q17 16.575 17 17t-.288.712Q16.425 18 16 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10Z" />
          </svg>
        </Button>

        <span>
          {dates.map((date) => dayjs(date).format("D.MM.YYYY")).join(", ")}
        </span>
      </div>

      {open && (
        <CalendarMobile
          {...args}
          defaultValue={dates}
          onClose={() => setOpen(false)}
          onChange={(currentDates: Array<Date>) => setDates(currentDates)}
        />
      )}
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {};
