import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../Card";
import {ICardProps} from "@common/CreditCard";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Card/Playground",
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  card: {
    number: "",
    cvc: "",
    expireDate: ""
  } as ICardProps,

};
