import { shallow } from "enzyme";
import React from "react";
import Expand from "./Expand";

describe("Expand tesing", () => {
  it("Expand open test", () => {
    let open = false;
    const component = shallow(<Expand open={open}>Content</Expand>);

    expect(component.contains(".collapse-content")).toBeFalsy();

    open = true;
    expect(component.find(".collapse-content").text()).toEqual("content");

    open = false;
    expect(component.contains(".collapse-content")).toBeFalsy();
  });
});
