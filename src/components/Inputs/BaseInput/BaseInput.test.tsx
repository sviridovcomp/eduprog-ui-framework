import { shallow } from "enzyme";
import React from "react";
import BaseInput from "./BaseInput";

describe("BaseInput testing", () => {
  it("Initial state", () => {
    const component = shallow(<BaseInput label="label" defaultValue="input" />);
    expect(component.find("input").find({ value: "input" })).toBeTruthy();
  });

  it("Change value", () => {
    let value = "";
    const component = shallow(
      <BaseInput
        label="label"
        onChange={(data: string) => (value = data)}
        defaultValue={value}
      />
    );

    component.find("input").simulate("change", { target: { value: "test" } });
    expect(value).toEqual("test");
  });

  it("Events", () => {
    const eventMap = [];
    for (let i = 0; i < 7; i++) {
      eventMap.push(false);
    }

    const component = shallow(
      <BaseInput
        label="label"
        defaultValue="input"
        onPointerDown={() => (eventMap[0] = true)}
        onPointerUp={() => (eventMap[1] = true)}
        onPointerLeave={() => (eventMap[2] = true)}
        onClick={() => (eventMap[3] = true)}
        onKeyDown={() => (eventMap[4] = true)}
        onFocus={() => (eventMap[5] = true)}
        onBlur={() => (eventMap[6] = true)}
        onPaste={() => (eventMap[7] = true)}
      />
    );

    eventMap.forEach((item) => {
      expect(item).toBeFalsy();
    });

    component.find("input").simulate("pointerDown");
    expect(eventMap[0]).toBeTruthy();

    component.find("input").simulate("pointerUp");
    expect(eventMap[1]).toBeTruthy();

    component.find("input").simulate("pointerLeave");
    expect(eventMap[2]).toBeTruthy();

    component.find("input").simulate("click");
    expect(eventMap[3]).toBeTruthy();

    component.find("input").simulate("keyDown");
    expect(eventMap[4]).toBeTruthy();

    component.find("input").simulate("focus");
    expect(eventMap[5]).toBeTruthy();

    component.find("input").simulate("blur");
    expect(eventMap[6]).toBeTruthy();

    component.find("input").simulate("paste");
    expect(eventMap[7]).toBeTruthy();
  });
});
