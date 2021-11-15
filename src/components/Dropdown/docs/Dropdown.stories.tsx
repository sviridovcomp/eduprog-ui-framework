import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Dropdown from "../Dropdown";
import Button from "../../Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Dropdown/Playground",
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam
      aperiam aspernatur consequuntur corporis culpa deserunt dolorem eligendi
      enim, eos fugit, hic magnam maxime minima perspiciatis quasi saepe ut
      voluptates.
    </div>
  ),
	toggle: (
		<Button>Dropdown</Button>
	)
};
