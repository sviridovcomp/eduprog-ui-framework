import Button from "@components/Button/Button";
import { shallow } from "enzyme";
import React from "react";

describe("Button testing", () => {
  it("Button content", () => {
    const button = shallow(<Button>Test</Button>);

    expect(button.text()).toEqual("Test");
  });

  it("Button clicking", () => {
    let isClicked = false;

    const onClick = () => {
      isClicked = true;
    };
    const button = shallow(<Button onClick={onClick}>Test</Button>);

    button.find("button").simulate("click");

    expect(isClicked).toBe(true);
  });
});
