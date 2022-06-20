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
      <div>
        <img
          src="https://thispersondoesnotexist.com/image"
          width="100%"
          height="100%"
          alt=""
          style={{ objectFit: "cover", overflow: "hidden" }}
        />
      </div>
      <div style={{ padding: "1rem" }}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          blanditiis unde fugit cumque qui ex accusamus necessitatibus eum
        </div>

        <div style={{ textAlign: "center" }}>
          <Button view="action">Show</Button>
        </div>
      </div>
    </div>
  ),
};
