import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";

import Dialog from "../Dialog";
import Button from "../../Button/Button";
import Expand from "../../Expand/Expand";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Dialog/Playground",
  component: Dialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Dialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Playground = () => {
  const [open, setOpen] = useState(false);
  const [expandOpen, setExpandOpen] = useState(false);

  return (
    <>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
        laboriosam ullam. Eveniet, consequuntur repellendus. Voluptas dicta
        aperiam aliquid hic quaerat deleniti soluta eum, blanditiis qui, itaque
        nesciunt alias accusantium quo omnis ab corporis molestiae sapiente
        mollitia ea numquam vero officiis dolores deserunt. Maiores sequi
        veritatis modi totam quae quos error temporibus quibusdam voluptatum
        delectus molestias, natus, similique quis qui at distinctio. A
        blanditiis, tempore laboriosam nulla recusandae ipsam unde dolores neque
        excepturi tempora odit, atque facilis itaque distinctio cum cumque velit
        ipsa delectus eveniet? Nam repellat magni, sunt neque corporis in
        dolorum asperiores praesentium facilis rem consectetur qui cupiditate!
        Nobis iure, dolores, doloremque repudiandae dolorem asperiores explicabo
        fugit voluptatum praesentium, ullam quis. Nisi sit quod expedita error
        laudantium. Aperiam consectetur iusto nesciunt ab eveniet mollitia
        inventore, quibusdam similique! Officiis saepe tempore, labore atque
        dolores repellat doloribus deserunt, vel, eveniet modi ullam molestias
        temporibus voluptate consequatur fuga exercitationem in. Dolores, sequi!
      </div>
      <Button onClick={() => setOpen(true)}>open</Button>
      <Dialog size="xs" label="Тест" open={open} onClose={() => setOpen(false)}>
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam
      labore quibusdam minima sequi excepturi atque pariatur, esse at qui
      dolorum soluta perspiciatis voluptas veritatis distinctio alias dolore nam
      ad.
    </>
  );
};
