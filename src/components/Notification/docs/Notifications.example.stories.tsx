import Button from "@components/Button";
import { Column, Container, Row } from "@components/Grid";
import { ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import Notification from "../Notification";

export default {
  title: "Компоненты/Notification/Example",
  component: Notification,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Notification>;

export const Playground = () => {
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
        visible={notification.first}
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
        visible={notification.second}
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
