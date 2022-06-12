import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import TabsWithToggles, { TabsWithTogglesOptions } from "../TabsWithToggles";
import { v4 as uuid } from "uuid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Tabs/TabsWithToggles",
  component: TabsWithToggles,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TabsWithToggles>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TabsWithToggles> = (args) => {
  const [option, setOption] = useState<TabsWithTogglesOptions<number>>();

  return (
    <>
      <TabsWithToggles
        {...args}
        onChange={(data) => {
          setOption(data);
          args.onChange && args.onChange(data);
        }}
      />
      Selected value: {option?.name}
    </>
  );
};

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Playground.args = {
  options: [
    {
      id: uuid(),
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <path d="M8,21c0.55,0,1-0.45,1-1v-2h3c0.55,0,1-0.45,1-1s-0.45-1-1-1H9v-2h4.5c3.22,0,5.79-2.76,5.47-6.04 C18.7,5.1,16.14,3,13.26,3l-0.96,0H8C7.45,3,7,3.45,7,4v8H6c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h1v2H6c-0.55,0-1,0.45-1,1 s0.45,1,1,1h1v2C7,20.55,7.45,21,8,21z M13.5,12H9V5h4.5C15.43,5,17,6.57,17,8.5S15.43,12,13.5,12z" />
            </g>
          </svg>
          Рубль
        </>
      ),
      value: 1,
    },
    {
      id: uuid(),
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.42 0 2.13.54 2.39 1.4.12.4.45.7.87.7h.3c.66 0 1.13-.65.9-1.27-.42-1.18-1.4-2.16-2.96-2.54V4.5c0-.83-.67-1.5-1.5-1.5S10 3.67 10 4.5v.66c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-1.65 0-2.5-.59-2.83-1.43-.15-.39-.49-.67-.9-.67h-.28c-.67 0-1.14.68-.89 1.3.57 1.39 1.9 2.21 3.4 2.53v.67c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.65c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
          </svg>
          Доллар
        </>
      ),
      value: 2,
    },
    {
      id: uuid(),
      name: (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <rect fill="none" height="24" width="24" />
              <rect fill="none" height="24" width="24" />
            </g>
            <g>
              <g />
              <path d="M15,18.5c-2.51,0-4.68-1.42-5.76-3.5h5.14c0.38,0,0.73-0.21,0.89-0.55l0,0c0.33-0.66-0.15-1.45-0.89-1.45h-5.8 c-0.05-0.33-0.08-0.66-0.08-1s0.03-0.67,0.08-1h5.8c0.38,0,0.73-0.21,0.89-0.55l0,0C15.61,9.78,15.13,9,14.38,9H9.24 C10.32,6.92,12.5,5.5,15,5.5c1.25,0,2.42,0.36,3.42,0.97c0.5,0.31,1.15,0.26,1.57-0.16l0,0c0.58-0.58,0.45-1.53-0.25-1.96 C18.36,3.5,16.73,3,15,3c-3.92,0-7.24,2.51-8.48,6h-2.9C3.24,9,2.89,9.21,2.72,9.55l0,0C2.39,10.22,2.87,11,3.62,11h2.44 C6.02,11.33,6,11.66,6,12s0.02,0.67,0.06,1H3.62c-0.38,0-0.73,0.21-0.89,0.55l0,0C2.39,14.22,2.87,15,3.62,15h2.9 c1.24,3.49,4.56,6,8.48,6c1.74,0,3.36-0.49,4.74-1.35c0.69-0.43,0.82-1.39,0.24-1.97l0,0c-0.42-0.42-1.07-0.47-1.57-0.15 C17.42,18.15,16.26,18.5,15,18.5z" />
            </g>
          </svg>{" "}
          Евро
        </>
      ),
      value: 3,
    },
  ],
};
