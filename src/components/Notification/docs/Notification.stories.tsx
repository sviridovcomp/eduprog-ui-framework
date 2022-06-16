import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Notification from "../Notification";
import { Container, Row, Column } from "@components/Grid";
import Button from "@components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Notification",
  component: Notification,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Notification>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const PlaygroundTemplate: ComponentStory<typeof Notification> = (args) => (
  <Notification {...args} />
);

export const Playground = PlaygroundTemplate.bind({});

const ExampleTemplate = () => {
  interface INotificatonShow {
    first: boolean;
    second: boolean;
  }

  const [notification, setNotification] = useState<INotificatonShow>({
    first: false,
    second: false,
  });

  return (
    <>
      <Container adaptive>
        <Row>
          <Column col={6}>
            <Button
              onClick={() => setNotification({ ...notification, first: true })}
            >
              Show notification one
            </Button>
          </Column>
          <Column col={6}>
            <Button
              onClick={() => setNotification({ ...notification, second: true })}
            >
              Show notification two
            </Button>
          </Column>
        </Row>
      </Container>
      <Notification
        open={notification.first}
        hasCloser
        status={"ok"}
        title={""}
        stickTo={"left"}
        onCloserClick={() => setNotification({ ...notification, first: false })}
        onCloseTimeout={() =>
          setNotification({ ...notification, first: false })
        }
      >
        Notification one
      </Notification>

      <Notification
        open={notification.second}
        hasCloser
        status={"ok"}
        title={""}
        stickTo={"left"}
      >
        Notification one
      </Notification>
    </>
  );
};

export const Example = ExampleTemplate.bind({});
