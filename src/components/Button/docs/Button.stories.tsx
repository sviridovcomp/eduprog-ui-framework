import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../Button";
import CarouselButton from "@components/Carousel/CarouselButton/CarouselButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  component: Button,

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PlaygroundTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Playground = PlaygroundTemplate.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: "Button",
};

const ViewTemplate: ComponentStory<typeof Button> = () => {
  return (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      <Button view="default">Button</Button>
      <Button view="action">Button</Button>
      <Button view="link">Button</Button>
      <Button view="pseudo">Button</Button>
      <Button view="clear">Button</Button>
      <Button view="raised">Button</Button>{" "}
    </div>
  );
};

export const View = ViewTemplate.bind({});
// @ts-ignore
View.parameters = {
  docs: {
    description: {
      story:
        "To change the appearance of the button, set the `view` to one of the following values: `default`, `action`, `link`, `pseudo`, `clear`, `raised`.",
    },
  },
};

const SizeTemplate: ComponentStory<typeof Button> = () => {
  return (
    <div style={{ display: "flex", gap: "0.25rem" }}>
      <Button size="xl">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="md">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="xs">Button</Button>
    </div>
  );
};

export const Size = SizeTemplate.bind({});
// @ts-ignore
Size.parameters = {
  docs: {
    description: {
      story:
        "To resize the button, set the the `size` property to one of the following values: `xl`, `lg`, `md`, `sm`, `xs`.",
    },
  },
};

const WidthTemplate: ComponentStory<typeof Button> = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "0.25rem",
      }}
    >
      <div>
        <Button width="available">Button</Button>
      </div>
      <div>
        <Button width="auto">Button</Button>
      </div>
    </div>
  );
};

export const Width = WidthTemplate.bind({});
// @ts-ignore
Width.parameters = {
  docs: {
    description: {
      story:
        "To change the width of the button, set the `width` property to one of the following values: \
        <ul> \
        <li>`auto` — the width is determined by the width of the text. The width of the button cannot be greater than the width of the container. If the width of the text is larger than the width of the container, the text is trimmed with an ellipsis.</li> \
        <li>`available` — the width is determined by the width of the container. If the width of the text is larger than the width of the container, the text is trimmed with an ellipsis.</li></ul>",
    },
  },
};

const CarouselButtonTemplate: ComponentStory<typeof CarouselButton> = (
  args
) => <CarouselButton {...args} />;

export const CarouselButtons = CarouselButtonTemplate.bind({});
