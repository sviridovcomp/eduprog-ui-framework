import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Island from "../Island";
import Button from "@components/Button";
import Text from "@components/Typography/Text";

export default {
  title: "Components/Island",
  component: Island,
} as ComponentMeta<typeof Island>;

const PlaygroundTemplate: ComponentStory<typeof Island> = (args) => (
  <Island {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  style: {
    maxWidth: "40rem",
  },
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
          <Text as="h1" typography="headline-lg" color="var(--ep-text-color)">
            Person biography
          </Text>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium assumenda temporibus aliquid nemo saepe velit quis!
            Natus, similique velit? Non nam amet distinctio nostrum tempore
            inventore veniam. Nulla, laborum quisquam!
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <Button view="action">Show details...</Button>
        </div>
      </div>
    </div>
  ),
};
