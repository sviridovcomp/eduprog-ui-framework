import Button from "@components/Button/Button";
import { mount, shallow } from "enzyme";
import React from "react";
import { asyncSleep } from "@utils/utils/utils";
import { clear, mockUserAgent } from "jest-useragent-mock";

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

    for (let event in Events) {
      eventMap.set(event, false);
    }

    const component = shallow(
      <Button
        onClick={() => eventMap.set("click", true)}
        onMouseDown={() => eventMap.set("mousedown", true)}
        onMouseLeave={() => eventMap.set("mouseleave", true)}
        onMouseUp={() => eventMap.set("mouseup", true)}
        onBlur={() => eventMap.set("blur", true)}
      >
        Test
      </Button>
    );

    component.simulate("click");
    component.simulate("mousedown");
    component.simulate("mouseleave");
    component.simulate("mouseup");
    component.simulate("blur");

    for (let event in Events) {
      expect(eventMap.get(event)).toBeTruthy();
    }
  });
});
