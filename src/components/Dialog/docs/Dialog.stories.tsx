import React, { useEffect, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Dialog from "../Dialog";
import Button from "../../Button/Button";
import Expand from "../../Expand/Expand";
import { StorybookSizes } from "@utils/utils/common/storybook";

export default {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    label: { control: "text" },
    size: {
      control: "select",
      options: [...StorybookSizes(), "fluid", "page"],
    },
    open: { control: "boolean" },
    verticalAlign: { options: ["top", "center", "bottom"] },
  },
} as ComponentMeta<typeof Dialog>;

const PlaygroundTemplate: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);
  const [expandOpen, setExpandOpen] = useState(false);

  useEffect(() => {
    setOpen(Boolean(args.open));
  }, [args.open]);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>open</Button>

      <Dialog
        {...args}
        open={open}
        rootStyle={{ zIndex: 9999 }}
        onClose={() => {
          setOpen(false);

          args.onClose && args.onClose();
        }}
      >
        <div>
          <p>
            Dialog has <code>Observer</code> in its context to call{" "}
            <code>next</code>, <code>complete</code> or <code>error</code> of
            stream.There is also a <code>completeWith</code> method to pass data
            and close dialog with one action
          </p>

          <p style={{ fontStyle: "italic" }}>
            There is no need in input data for template dialog because you can
            set it in template. But if you use a component, context is the only
            way to get data from outside
          </p>

          <Button onClick={() => setExpandOpen(!expandOpen)}>
            Dynamic height change
          </Button>

          <Expand open={expandOpen}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab animi
            aperiam asperiores aspernatur atque commodi ea esse, et
            exercitationem fugit harum hic laboriosam magni maiores minima
            molestiae nisi omnis perferendis, placeat porro reprehenderit sit
            ullam. Ab adipisci beatae culpa delectus eum hic iusto obcaecati
            odit pariatur, provident quaerat quas reiciendis repellat vitae
            voluptas. Aliquid, animi asperiores aspernatur at deleniti
            dignissimos, dolor doloribus dolorum eaque earum eligendi et eveniet
            harum inventore iste laborum magnam modi natus nobis nulla officia
            pariatur quasi quidem quo quos repellat reprehenderit saepe sed
            suscipit temporibus tenetur ullam vero voluptatibus! Ab aspernatur
            corporis deleniti doloribus earum enim ex fugiat illum ipsum iusto
            laborum magni, non numquam perferendis, quas quia quos sequi vel
            vitae voluptates. Expedita fugit illo, illum maiores minus soluta.
            Animi consequatur neque quae quibusdam recusandae. Ad adipisci
            asperiores autem blanditiis consectetur consequuntur, cupiditate,
            deserunt doloribus ducimus eligendi explicabo facilis fugiat impedit
            libero natus necessitatibus odit officia, placeat quae quasi quidem
            rem repellendus saepe sapiente vero! Aliquid impedit maxime quam
            veniam. Architecto commodi consectetur est ex exercitationem fugiat
            iste maxime minus modi neque, nobis nostrum officia sit, totam ut
            veniam voluptatem? Animi architecto cupiditate dolorem ea eos eum
            id, molestias nesciunt officia possimus quod tempora!
          </Expand>
        </div>
      </Dialog>
    </>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  label: "Label",
  size: "md",
};

const MobileTemplate: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);
  const [expandOpen, setExpandOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open</Button>
      <Dialog
        {...args}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div>
          <p>
            Dialog has <code>Observer</code> in its context to call{" "}
            <code>next</code>, <code>complete</code> or <code>error</code> of
            stream.There is also a <code>completeWith</code> method to pass data
            and close dialog with one action
          </p>

          <p style={{ fontStyle: "italic" }}>
            There is no need in input data for template dialog because you can
            set it in template. But if you use a component, context is the only
            way to get data from outside
          </p>

          <Button onClick={() => setExpandOpen(!expandOpen)}>
            Dynamic height change
          </Button>

          <Expand open={expandOpen}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab animi
            aperiam asperiores aspernatur atque commodi ea esse, et
            exercitationem fugit harum hic laboriosam magni maiores minima
            molestiae nisi omnis perferendis, placeat porro reprehenderit sit
            ullam. Ab adipisci beatae culpa delectus eum hic iusto obcaecati
            odit pariatur, provident quaerat quas reiciendis repellat vitae
            voluptas. Aliquid, animi asperiores aspernatur at deleniti
            dignissimos, dolor doloribus dolorum eaque earum eligendi et eveniet
            harum inventore iste laborum magnam modi natus nobis nulla officia
            pariatur quasi quidem quo quos repellat reprehenderit saepe sed
            suscipit temporibus tenetur ullam vero voluptatibus! Ab aspernatur
            corporis deleniti doloribus earum enim ex fugiat illum ipsum iusto
            laborum magni, non numquam perferendis, quas quia quos sequi vel
            vitae voluptates. Expedita fugit illo, illum maiores minus soluta.
            Animi consequatur neque quae quibusdam recusandae. Ad adipisci
            asperiores autem blanditiis consectetur consequuntur, cupiditate,
            deserunt doloribus ducimus eligendi explicabo facilis fugiat impedit
            libero natus necessitatibus odit officia, placeat quae quasi quidem
            rem repellendus saepe sapiente vero! Aliquid impedit maxime quam
            veniam. Architecto commodi consectetur est ex exercitationem fugiat
            iste maxime minus modi neque, nobis nostrum officia sit, totam ut
            veniam voluptatem? Animi architecto cupiditate dolorem ea eos eum
            id, molestias nesciunt officia possimus quod tempora!
          </Expand>
        </div>
      </Dialog>
    </>
  );
};

export const Mobile = MobileTemplate.bind({});
Mobile.args = {
  hasCloser: false,
  bodyStyle: { maxWidth: 350, bottom: "1em" },
};
