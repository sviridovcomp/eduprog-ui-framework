import React from "react";
import Expand from "./Expand";
import Button from "@components/Button/Button";
import { shallow } from "enzyme";

describe("Test expand content", () => {
  it("should render without problems", () => {
    const expand = shallow(
      <Expand toggle={<Button>Open</Button>}>test-content</Expand>
    );

    expect(expand.find(".collapse-content")).toEqual({});

    expand.find(".collapse-toggle").simulate("click");

    expect(expand.find(".collapse-content").text()).toEqual("test-content");
  });
});
