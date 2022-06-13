// import { Meta } from "@storybook/addon-docs";
// import { Row, Column, Container } from "@components/Grid";

// <Meta title="Компоненты/Grid" />

// <Container adaptive>
//   <Row col={12}>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//     <Column col={1}>
//       <div style={{ height: "100vh", backgroundColor: "#6320ee" }} />
//     </Column>
//   </Row>
// </Container>

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Container, Row, Column } from "@components/Grid";
import _ from "lodash";
import Island from "@components/Island/Island";
import Input from "@components/Inputs/Input/Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Grid",
  Component: Container,
} as ComponentMeta<typeof Row>;

// @ts-ignore
const PlaygroundTemplate: ComponentStory<typeof Container> = (props) => {
  return (
    <Container adaptive>
      <Row adaptive>
        {_.range(props.colsCount).map(() => (
          <Column col={props.colSize}>
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
  colsCount: 12,
  colSize: 1,
};

const AdaptiveFormTemplate = () => {
  return (
    <Container adaptive>
      <Row>
        {_.range(10).map((_, index) => (
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
