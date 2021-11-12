import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Collapse from "../Collapse";
import Button from "../../Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Collapse/Playground",
  component: Collapse,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Collapse>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args} />
);

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
	toggle: (
		<Button>Открыть</Button>
	)
};
