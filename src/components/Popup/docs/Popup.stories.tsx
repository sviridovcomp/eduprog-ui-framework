import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Popup from "../Popup";
import Button from "@components/Button";
import "./PopupStory.scss";
import Input from "@components/Inputs/Input/Input";
import InputPassword from "@components/Inputs/InputPassword/InputPassword";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Popup/Playground",
  component: Popup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Popup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popup> = (args) => <Popup {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  wrapperClassName: "StoryPopup",
  children: (
    <div
      style={{
        padding: "1rem",
        width: 200,
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <Input label="login:" />
      <InputPassword label="password:" />

      <Button size="xl" view="action">
        Привет
      </Button>
    </div>
  ),
};
