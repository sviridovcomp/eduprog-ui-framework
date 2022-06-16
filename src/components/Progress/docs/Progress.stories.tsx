import React, { useEffect, useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import random from "lodash/random";

import Progress from "../Progress";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Progress",
  component: Progress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Progress>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PlaygroundTemplate: ComponentStory<typeof Progress> = (args) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fillingProgressBar = setInterval(() => {
      if (value >= 100) {
        setValue(100);
        return;
      }
      setValue(value + random(1, 5));
    }, 100);
    return () => clearInterval(fillingProgressBar);
  }, [value]);

  return <Progress {...args} value={value} />;
};

export const Playground = PlaygroundTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  color: "primary",
};

const GradientTemplate: ComponentStory<typeof Progress> = (args) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const fillingProgressBar = setInterval(() => {
      if (value >= 100) {
        setValue(100);
        return;
      }
      setValue(value + random(1, 5));
    }, 100);
    return () => clearInterval(fillingProgressBar);
  }, [value]);

  return <Progress {...args} value={value} />;
};


export const Gradient = GradientTemplate.bind({});
Gradient.args = {
  color: "linear-gradient(to right, #ff0000, #ffbb00, #ffff00)",
};
