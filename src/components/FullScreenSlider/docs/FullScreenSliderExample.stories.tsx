import Button from "@components/Button";
import { ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import FullScreenSlider from "../FullScreenSlider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/FullScreenSlider/Example",
  component: FullScreenSlider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof FullScreenSlider>;

export const Playground = () => {
  const [open, setOpen] = useState(false);

  const [data, _] = useState([
    <div
      style={{
        background: `url(https://res.cloudinary.com/dixvycrtj/image/upload/c_scale,q_60,w_1080,h_2340/v1654440501/stories/image_2022-06-05_17-46-15_rhti1s.webp) center center / cover no-repeat fixed`,
        width: "100%",
        height: "100%",
      }}
    />,
    <div
      style={{
        background: `url(https://res.cloudinary.com/dixvycrtj/image/upload/c_scale,h_2340,q_60,w_1080/v1653508345/stories/image_2022-05-25_22-46-17-_1__dit2kv.webp) center center / cover no-repeat fixed`,
        width: "100%",
        height: "100%",
      }}
    />,
  ]);

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Open</Button>
      <FullScreenSlider
        open={open}
        slides={data}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};
