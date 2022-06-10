import { mount, render, shallow } from "enzyme";
import React from "react";
import Checkbox from "./Checkbox";

describe("Checkbox testing", () => {
  it("Checkbox initial", () => {
    let active = true;
    const component = shallow(<Checkbox type="base" checked={active} />);
    expect(component.find(`input[type="checkbox"]`).exists()).toBeTruthy();
    active = false;
    expect(component.contains(`input[type="checkbox"]`)).toBeFalsy();
  });

  it("Checkbox pressing test", () => {
    let active = false;
    const component = shallow(
      <Checkbox type="base" onChange={() => (active = !active)} />
    );

    expect(active).toBeFalsy();

    component
      .find("input")
      .find({ type: "checkbox" })
      .simulate("change", { target: { checked: active } });
    expect(active).toBeTruthy();

    component
      .find("input")
      .find({ type: "checkbox" })
      .simulate("change", { target: { checked: active } });
    expect(active).toBeFalsy();
  });
});
