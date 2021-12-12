import Button from "@components/Button/Button";
import { shallow } from "enzyme";
import React from "react";

describe("Button testing", () => {
  it("Button content", () => {
    const button = shallow(<Button>Test</Button>);

    expect(button.text()).toEqual("Test");
  });
});
