import Button from "@components/Button/Button";
import { asyncSleep } from "@utils/utils";
import { shallow } from "enzyme";
import React from "react";

describe("Button testing", () => {
  it("Button content", () => {
    const button = shallow(<Button>Test</Button>);

    expect(button.text()).toEqual("Test");
  });

  it("Button clicking", async () => {
    let isClicked = false;

    const onClick = () => {
      isClicked = true;
    };
    const button = shallow(<Button onClick={onClick}>Test</Button>);

    button.find("button").simulate("click");

    expect(isClicked).toBe(true);
    expect(button.hasClass("Button-clicking"));

    await asyncSleep(400);
    expect(button.hasClass("Button-clicking")).toEqual(false);
  });
  it("Button MouseDown event testing", () => {
    const Events = new Set([
      "click",
      "mousedown",
      "mouseleave",
      "mouseup",
      "blur",
    ]);
    const eventMap = new Map<string, boolean>();

    for (const event in Events) {
      eventMap.set(event, false);
    }

    const component = shallow(
      <Button
        onClick={() => eventMap.set("click", true)}
        onPointerDown={() => eventMap.set("mousedown", true)}
        onPointerLeave={() => eventMap.set("mouseleave", true)}
        onPointerUp={() => eventMap.set("mouseup", true)}
        onBlur={() => eventMap.set("blur", true)}
      >
        Test
      </Button>
    );

    component.simulate("click");
    component.simulate("pointerDown");
    component.simulate("pointerLeave");
    component.simulate("pointerUp");
    component.simulate("blur");

    for (const event in Events) {
      expect(eventMap.get(event)).toBeTruthy();
    }
  });
});
