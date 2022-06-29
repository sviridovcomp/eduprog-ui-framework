import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Backdrop from "../Backdrop";
import Spinner from "@components/Spinner/Spinner";

export default {
  title: "Components/Backdrop",
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

const PlaygroundTemplate: ComponentStory<typeof Backdrop> = (args) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Backdrop {...args}></Backdrop>

      <Spinner mode="border" color="primary" size="lg" />
    </div>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  open: true,
};
