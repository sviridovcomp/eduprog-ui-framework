import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputCard, { CardDetails } from "../InputCard";

export default {
  title: "Components/Inputs/InputCard",
  component: InputCard,
} as ComponentMeta<typeof InputCard>;

const PlaygroundTemplate: ComponentStory<typeof InputCard> = (args) => {
  const [value, setValue] = useState<CardDetails>({
    number: "",
    cvc: "",
    expireAt: "",
  });

  return (
    <>
      <div style={{ maxWidth: 900, display: "flex", margin: "auto" }}>
        <InputCard defaultValue={value} onChange={(value) => setValue(value)} />
      </div>
      <ul style={{ color: "var(--ep-text-color)" }}>
        <li>Card number: {value.number}</li>
        <li>Card expires at: {value.expireAt}</li>
        <li>Card CVC: {value.cvc}</li>
      </ul>
    </>
  );
};
export const Playground = PlaygroundTemplate.bind({});
