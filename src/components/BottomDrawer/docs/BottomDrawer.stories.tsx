import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BottomDrawer from "../BottomDrawer";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Компоненты/BottomDrawer/Playground",
  component: BottomDrawer,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: "iphone6",
    },
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BottomDrawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomDrawer> = (args) => (
  <BottomDrawer {...args} />
);

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  children: (
    <div>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, fugit
      distinctio? Nostrum eligendi possimus ducimus quidem similique, blanditiis
      labore. Aperiam quis libero id nulla ducimus, accusantium quidem earum
      repellat nam assumenda architecto, ipsa distinctio consequatur temporibus
      rem a nemo ex ratione modi iste expedita iusto numquam? Molestias officiis
      quidem perspiciatis excepturi, hic exercitationem provident beatae
      deleniti quod nobis tenetur voluptatum numquam dicta officia accusantium.
      Impedit, quod consequatur facilis asperiores, veritatis perferendis
      voluptate excepturi dolorem non quos vero iste reiciendis velit aliquam?
      Soluta quos dicta cupiditate adipisci aspernatur saepe iusto non rerum
      qui, quas ab cumque dolorum nulla molestias, fuga, et ipsa vel.
      Exercitationem temporibus provident voluptatem, sapiente laborum
      dignissimos ipsam id ex veritatis quisquam aut, officiis nemo quis
      voluptatibus? Expedita excepturi sequi nemo temporibus at nesciunt.
      Explicabo, repudiandae nobis iste ullam fuga quod et ratione suscipit
      possimus sunt? Nesciunt praesentium repellendus provident. Laudantium quas
      reprehenderit earum fugiat eius dignissimos, vero sit eligendi. Molestias
      aliquam hic dolores nemo officiis, doloribus sequi, voluptates cumque quia
      distinctio possimus officia fuga quasi! Consequatur odit officia quae
      temporibus voluptas vero sapiente sunt corporis, eaque fugit nulla
      deserunt exercitationem ab dolor sed atque dicta neque inventore veritatis
      doloremque? Laudantium nobis temporibus sequi quo vitae praesentium eius
      totam repellendus et dolorum repudiandae minima, commodi, magni
      consectetur odio facilis dolore debitis, ab doloribus saepe. Nemo,
      perspiciatis quam neque animi voluptates repellat pariatur autem eaque
      exercitationem iusto architecto incidunt, maxime natus itaque eveniet!
      Aspernatur cumque accusamus pariatur sequi iste temporibus! At ut itaque
      ea quasi officiis voluptate, dolore fuga dignissimos mollitia nulla culpa,
      perferendis qui fugiat architecto velit, tempora ipsam alias! Earum,
      tenetur laborum! Debitis facilis quasi at placeat, cupiditate optio maxime
      ipsam adipisci eos, consectetur saepe minus earum cumque excepturi.
      Accusamus aut sed voluptatem amet tempora, nam consequuntur ut quae? Ab
      eaque iusto necessitatibus eius quod, tenetur in.
    </div>
  ),
};
