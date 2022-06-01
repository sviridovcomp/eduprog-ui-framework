import { ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import MultipleSelect from "../MultipleSelect";
import { KeyValue } from "@utils/utils/common/types";

export default {
  title: "Компоненты/Select/MultipleSelect/Examples",
  component: MultipleSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MultipleSelect>;

export const Playground = () => {
  const [selected, setSelected] = useState([]);

  return (
    <MultipleSelect
      options={
        new Map([
          ["5% - Аптеки", 1],
          ["5% - Ozon", 2],
        ])
      }
      label={"Выберите категории кэшбека"}
      zIndex={9999}
      onChange={(value) => {
        // @ts-ignore
        setSelected(value);
        console.log(selected);
      }}
    ></MultipleSelect>
  );
};
