import React from "react";
import { shallow } from "enzyme";
import Backdrop from "./Backdrop";

describe("Backdrop testing", () => {
  it("Backdrop open testing", () => {
    const backdrop = shallow(<Backdrop open />);
    expect(backdrop.find(".backdrop").exists()).toBeTruthy();
  });
});
