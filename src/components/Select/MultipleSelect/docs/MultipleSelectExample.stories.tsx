import { ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import MultipleSelect from "../MultipleSelect";

export default {
  title: "Компоненты/Select/MultipleSelect/Examples",
  component: MultipleSelect,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof MultipleSelect>;

export const Playground = () => {
  const [selected, setSelected] = useState([]);

  return (
    <MultipleSelect
      options={[
        { name: "Ozon", value: 1 },
        { name: "Пятерочка", value: 2 },
      ]}
      label={"Выберите категории кэшбека"}
      zIndex={9999}
      onChange={(value) => {
        // @ts-ignore
        setSelected(value);
      }}
    ></MultipleSelect>
  );
};
