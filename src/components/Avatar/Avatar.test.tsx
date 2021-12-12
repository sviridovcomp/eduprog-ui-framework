import { shallow } from "enzyme";
import Avatar from "@components/Avatar/Avatar";
import React from "react";

describe("Avatar testing", () => {
  it("Small avatar render", () => {
    const avatar = shallow(<Avatar rounded size="sm" text="Test Avatar" />);
    expect(avatar.text()).toEqual("T");
  });

  it("Large avatar render", () => {
    const avatar = shallow(<Avatar rounded size="xl" text="Test Avatar" />);
    expect(avatar.text()).toEqual("TA");
  });
});
