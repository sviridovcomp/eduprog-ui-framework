import { shallow } from "enzyme";
import React from "react";
import Dialog from "./Dialog";

describe("Dialog testing", () => {
  it("Dialog open test", () => {
    let open = true;

    const component = shallow(
      <Dialog open={open} size="xs">
        content
      </Dialog>
    );

    expect(component.find(".dialog-content").text()).toEqual("content");

    open = false;

    expect(component.contains(".dialog-content")).toBeFalsy();
  });
});
