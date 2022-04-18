import { shallow } from "enzyme";
import Island from "@components/Island/Island";
import React from "react";

describe("Island testing", () => {
  type IslandSizeType = "xs" | "sm" | "md" | "lg" | "xl";
  type IslandAlignType = "left" | "center" | "right";
  type IslandTypeType = "shadow" | "border";
  it("Island size rendering", () => {
    const islandSizes: IslandSizeType[] = ["xs", "sm", "md", "lg", "xl"];
    islandSizes.forEach((size) => {
      const island = shallow(<Island size={size}>island-content</Island>);
      expect(island.find(`.island-size_${size}`).text()).toEqual(
        "island-content"
      );
    });
  });

  it("Island align rendering", () => {
    const islandAligns: IslandAlignType[] = ["left", "center", "right"];
    islandAligns.forEach((align) => {
      const island = shallow(<Island align={align}>island-content</Island>);
      expect(island.find(`.island-align_${align}`).text()).toEqual(
        "island-content"
      );
    });
  });

  it("Island type rendering", () => {
    const islandTypes: IslandTypeType[] = ["border", "shadow"];
    islandTypes.forEach((type) => {
      const island = shallow(<Island type={type}>island-content</Island>);
      expect(island.find(`.island-type_${type}`).text()).toEqual(
        "island-content"
      );
    });
  });
});
