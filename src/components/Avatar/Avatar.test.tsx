import { shallow } from "enzyme";
import Avatar from "@components/Avatar/Avatar";
import React from "react";

describe("Avatar testing", () => {
  type avatarSizes = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

  it("Small avatar render", () => {
    const avatarSmallSizes: avatarSizes[] = ["xs", "sm"];

    avatarSmallSizes.forEach((item: avatarSizes) => {
      const avatar = shallow(<Avatar rounded size={item} text="Test Avatar" />);
      expect(avatar.text()).toEqual("T");
    });
  });

  it("Large avatar render", () => {
    const avatarLargeSizes: avatarSizes[] = ["md", "lg", "xl", "xxl"];

    avatarLargeSizes.forEach((item: avatarSizes) => {
      const avatar = shallow(<Avatar rounded size={item} text="Test Avatar" />);
      expect(avatar.text()).toEqual("TA");
    });
  });
});
