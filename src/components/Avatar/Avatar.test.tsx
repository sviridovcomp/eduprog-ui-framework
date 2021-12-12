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

  it("Image can't found", () => {
    const avatarWithNotFoundImage = shallow(
      <Avatar size="md" text="Test Avatar" avatarUrl="https://test.ru" />
    );
    expect(avatarWithNotFoundImage.find("img").props().alt).toEqual(
      "Test Avatar"
    );
  });

  it("Avatar testing classNames render", () => {
    const avatarClasses = shallow(
      <Avatar
        size="xs"
        text="Avatar Test"
        rounded
        className={"test-class-name"}
      />
    );
    const receivedClasses = [
      "avatar",
      "avatar-size_xs",
      "avatar-rounded",
      "test-class-name",
    ];

    receivedClasses.forEach((item) => {
      expect(avatarClasses.hasClass(item));
    });
  });
});
