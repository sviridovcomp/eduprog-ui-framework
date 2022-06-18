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

const WithAnimationTemplate: ComponentStory<typeof Progress> = (args) => {
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

export const WithAnimation = WithAnimationTemplate.bind({});
WithAnimation.args = {
  color: "secondary",
  animated: true,
  striped: true,
};
// @ts-ignore
WithAnimation.parameters = {
  docs: {
    description: {
      story:
        "You can enhance the perception of the loading effect of the content by using animations on Progress. To do this, set `animated` for your Progress.",
    },
  },
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
// @ts-ignore
Gradient.parameters = {
  docs: {
    description: {
      story:
        "Set component's input property `color` to get more complex color combinations.",
    },
  },
};
