import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Island from "../Island";
import Button from "@components/Button";

export default {
  title: "Components/Island",
  component: Island,
} as ComponentMeta<typeof Island>;

const PlaygroundTemplate: ComponentStory<typeof Island> = (args) => (
  <Island {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  size: "sm",
  children: (
    <div style={{ display: "flex" }}>
      <div style={{ width: "40%" }}>
        <img
          src="https://thispersondoesnotexist.com/image"
          width="100%"
          height="100%"
          alt=""
          style={{ overflow: "hidden" }}
        />
      </div>
      <div style={{ width: "60%", padding: "1rem", color: "#fff" }}>
        <div style={{ fontFamily: "Nunito", fontSize: "1.125rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur
          facere provident quibusdam laborum fugit adipisci nihil quis omnis
        </div>

        <div style={{ textAlign: "center" }}>
          <Button view="action">Show</Button>
        </div>
      </div>
    </div>
  ),
};
