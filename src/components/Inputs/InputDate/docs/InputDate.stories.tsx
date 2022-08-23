import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InputDate from "../InputDate";

export default {
  title: "Components/Inputs/InputDate",
  component: InputDate,
} as ComponentMeta<typeof InputDate>;

const PlaygroundTemplate: ComponentStory<typeof InputDate> = (args) => {
  return (
    <>
      <div style={{ maxWidth: 300, margin: "auto" }}>
        <InputDate label="Choose date:" />
      </div>
    </>
  );
};
export const Playground = PlaygroundTemplate.bind({});
