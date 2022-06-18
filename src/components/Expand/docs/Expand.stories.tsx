import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Expand from "../Expand";
import Button from "@components/Button";

export default {
  title: "Components/Expand",
  component: Expand,
} as ComponentMeta<typeof Expand>;

const Template: ComponentStory<typeof Expand> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Open</Button>

      <Expand open={open} {...args}></Expand>
    </div>
  );
};

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: (
    <p style={{ color: "#fff", fontFamily: "Nunito" }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      consequatur dicta earum enim, fugiat hic impedit ipsam ipsum itaque
      laudantium modi nihil numquam, omnis, perferendis quasi recusandae
      reprehenderit temporibus voluptates!
    </p>
  ),
};
