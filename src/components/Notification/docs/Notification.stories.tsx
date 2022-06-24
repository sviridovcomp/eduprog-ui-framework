// @ts-nocheck
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Notify } from "../Notification";
import Button from "@components/Button";
import NotificationBox, {
  INotificationBoxProps,
} from "../NotificationBox/NotificationBox";
import { NotificationPropsType } from "../NotificationItem";

export default {
  title: "Components/Notification",
  component: NotificationBox,
} as ComponentMeta<typeof NotificationBox>;

type NotificationProps = NotificationPropsType & INotificationBoxProps;

const PlaygroundTemplate: ComponentStory<typeof NotificationBox> = (
  args: NotificationProps
) => {
  const showNotification = () => [
    Notify({
      title: args.title,
      content: args.content,
      status: args.status,
      hasCloser: args.hasCloser,
    }),
  ];

  return (
    <>
      <NotificationBox
        position={args.position}
        rootStyle={args.NotificationBoxRootStyle}
      />

      <div style={{ display: "grid", placeItems: "center" }}>
        <Button onClick={showNotification}>Open notification</Button>
      </div>
    </>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  NotificationBoxRootStyle: {
    zIndex: 10,
  },
  title: "Documentation Example",
  content: (
    <>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsa ullam aut
      reprehenderit sapiente veniam voluptatem, nostrum deleniti aliquam nemo
      molestias expedita accusamus consequatur iure deserunt similique est quod
      assumenda!
    </>
  ),
  status: "ok",
  hasCloser: true,
};
