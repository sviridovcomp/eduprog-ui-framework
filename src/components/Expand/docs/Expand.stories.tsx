import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Expand from "../Expand";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Expand/Playground",
  component: Expand,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Expand>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Expand> = (args) => <Expand {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      consequatur dicta earum enim, fugiat hic impedit ipsam ipsum itaque
      laudantium modi nihil numquam, omnis, perferendis quasi recusandae
      reprehenderit temporibus voluptates!
    </div>
  ),
};
