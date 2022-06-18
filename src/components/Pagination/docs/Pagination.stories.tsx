import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Pagination from "../Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const PlaygroundTemplate: ComponentStory<typeof Pagination> = (args) => {
  const [page, setPage] = useState(1);
  return (
    <>
      <Pagination
        {...args}
        defaultValue={page}
        onChange={(page) => {
          setPage(page);
          args.onChange && args.onChange(page);
        }}
      />
      <p style={{ color: "#fff", fontFamily: "Nunito" }}>
        Selected page: {page}
      </p>
    </>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  count: 200,
  siblingCount: 10,
};
