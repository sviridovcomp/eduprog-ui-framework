import { shallow } from "enzyme";
import Island from "@components/Island/Island";
import React from "react";

describe("Island testing", () => {
  type IslandAlignType = "left" | "center" | "right";
  type IslandTypeType = "shadow" | "border";

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
    islandTypes.forEach((view) => {
      const island = shallow(<Island view={view}>island-content</Island>);
      expect(island.find(`.island-view_${view}`).text()).toEqual(
        "island-content"
      );
    });
  });
});
