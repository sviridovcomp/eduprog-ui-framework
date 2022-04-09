import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Expand from "../Expand";
import Button from "../../Button/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Expand/Example",
  component: Expand,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Expand>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Playground = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Open</Button>

      <Expand open={open} transition="slide">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
        corporis, quae voluptas quaerat veniam ipsam, rem qui unde magni ducimus
        quas placeat tenetur doloribus. Explicabo accusantium officiis accusamus
        debitis quidem. Expedita voluptatum voluptate officiis quod. Alias
        provident unde magnam aspernatur distinctio quibusdam facere similique
        et ab, illo minima pariatur ipsum nemo maxime? Accusamus mollitia
        cupiditate est obcaecati non inventore doloribus sapiente quae, ut eaque
        aliquam perferendis quasi, eveniet sequi a eligendi aspernatur autem
        laboriosam voluptate? Officiis, dolor quis, consequuntur ab odit in
        consequatur sunt similique sed quos libero unde veniam eligendi illum,
        vero aperiam voluptates. Labore voluptate autem temporibus provident!
      </Expand>
    </div>
  );
};
