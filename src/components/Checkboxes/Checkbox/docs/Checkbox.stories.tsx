import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Checkbox from "../Checkbox";

import CheckboxDocs from "./CheckboxDocs.mdx";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "<Components/Checkboxes/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      page: CheckboxDocs,
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PlaygroundTemplate: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const ViewTemplate = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      <div>
        <Checkbox view="base" checked />
      </div>
      <div>
        <Checkbox view="primary" checked />
      </div>
      <div>
        <Checkbox view="secondary" checked />
      </div>
      <div>
        <Checkbox view="accent" checked />
      </div>
    </div>
  );
};

export const View = ViewTemplate.bind({});
