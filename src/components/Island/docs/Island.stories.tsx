import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Island from "../Island";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/Island/Playground",
  component: Island,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Island>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Island> = (args) => <Island {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem beatae
      blanditiis dolores ea excepturi id illum impedit laboriosam maxime nam optio
      quaerat rem, ullam? Accusantium asperiores at eius, exercitationem facilis
      illo magni minus quibusdam voluptas! Adipisci asperiores aut autem corporis
      deleniti dicta dolorum ducimus esse eum fugiat illum in iste iure maxime
      mollitia nam odit optio pariatur quia quis sapiente sint sit, soluta suscipit,
      tenetur velit veniam voluptatem. A accusantium amet asperiores, blanditiis
      cupiditate deleniti eaque earum esse et fugit harum illum impedit ipsam libero
      magni modi molestiae mollitia officia quae quam quisquam quod, recusandae
      soluta, tempore temporibus veritatis vitae voluptas? Accusantium alias autem
      beatae cumque cupiditate deserunt doloremque eius enim et ex expedita facere
      harum ipsa ipsam libero magni maiores nihil nulla optio placeat praesentium
      quibusdam quod sapiente similique soluta tempore, velit veritatis voluptas
      voluptates voluptatum. Ab alias aliquid asperiores beatae blanditiis culpa
      cupiditate dolor dolorum eos hic, impedit itaque iure laborum nulla officiis,
      porro quibusdam repellendus sed. Aut culpa cum cumque debitis delectus,
      dolorem eum ipsa, itaque iure iusto nihil nulla possimus provident sunt,
      tempore! Alias cupiditate dolorem eligendi, esse exercitationem illum
      inventore ipsum iste magnam maiores nemo nisi nulla odit officiis quam ratione
      rem sit sunt tenetur?
    </div>
  )
};
