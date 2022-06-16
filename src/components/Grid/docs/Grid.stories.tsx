/* eslint-disable react/prop-types */

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container, Row, Column } from "@components/Grid";
import range from "lodash/range";
import Island from "@components/Island/Island";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Grid",
  Component: Container,
  parameters: {
    docs: {
      description: {
        component:
          "Responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.",
      },
    },
  },
} as ComponentMeta<typeof Row>;

// @ts-ignore
const PlaygroundTemplate: ComponentStory<typeof Container> = (props) => {
  return (
    <Container adaptive>
      <Row adaptive>
        {/* @ts-ignore */}
        {range(props.colsCount).map((currentCol) => (
          // @ts-ignore
          <Column key={currentCol} col={props.colSize}>
            <div
              style={{
                height: "100vh",
                backgroundColor: "#6320ee",
                margin: "1rem 0",
              }}
            />
          </Column>
        ))}
      </Row>
    </Container>
  );
};

export const Playground = PlaygroundTemplate.bind({});
Playground.args = {
  // eslint-disable-line react/prop-types
  // @ts-ignore
  colsCount: 12,
  colSize: 1,
};

const AdaptiveFormTemplate = () => {
  return (
    <Container adaptive style={{ color: "#fff", fontFamily: "Nunito" }}>
      <Row>
        {range(10).map((_, index) => (
          <Column
            lg={4}
            md={6}
            xs={12}
            key={index}
            style={{ margin: "0.5rem 0" }}
          >
            <Island style={{ padding: "1rem" }}>
              <Row>
                <Column col={12}>
                  <div
                    style={{
                      width: "100%",
                      height: 272,
                      borderRadius: "1rem",
                      background:
                        "url('https://eda.yandex.ru/images/1387779/12efe6f1332d68c9de511c58b4f9ed55-680x500.png') center center / cover no-repeat",
                    }}
                  />
                </Column>
                <Column col={12}>
                  <b>Cheese Whopper</b>
                </Column>
                <Column col={12}>
                  <span>644 kcal</span>
                </Column>
                <Column col={12}>$7.89</Column>
              </Row>
            </Island>
          </Column>
        ))}
      </Row>
    </Container>
  );
};

export const AdaptiveForm = AdaptiveFormTemplate.bind({});
// @ts-ignore
AdaptiveForm.parameters = {
  docs: {
    description: {
      story:
        "Below you can see an example of adaptive layout using the grid system:",
    },
  },
};
