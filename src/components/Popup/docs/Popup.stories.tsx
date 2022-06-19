import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Popup from "../Popup";
import Button from "@components/Button";
import "./PopupStory.scss";
import Input from "@components/Inputs/Input/Input";
import InputPassword from "@components/Inputs/InputPassword/InputPassword";
import { ClickAwayListener } from "@utils/hooks/useClickAway/useClickAway";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Popup",
  component: Popup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Popup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popup> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <span>
        <Button onClick={() => setOpen(!open)}>Sign in</Button>
        <div>
          <Popup {...args} open={open} />
        </div>
      </span>
    </ClickAwayListener>
  );
};

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

      <Button view="action">Sign up</Button>
    </div>
  ),
};
