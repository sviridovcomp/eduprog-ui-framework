import { shallow } from "enzyme";
import Dropdown from "@components/Dropdown/Dropdown";
import Button from "@components/Button/Button";
import React from "react";

describe("Dropdown testing", () => {
  it("Dropdown toggle", () => {
    const dropdown = shallow(
      <Dropdown direction="top-center" toggle={<Button>Open</Button>}>
        dropdown-content
      </Dropdown>
    );

    expect(
      dropdown
        .find(".dropdown-transition")
        .hasClass("dropdown-transition-active")
    ).toEqual(false);

    dropdown.find(".dropdown-toggle").simulate("click");

    expect(
      dropdown
        .find(".dropdown-transition")
        .hasClass("dropdown-transition-active")
    ).toEqual(true);
  });
});
