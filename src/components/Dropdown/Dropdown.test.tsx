import { shallow } from "enzyme";
import Dropdown from "@components/Dropdown/Dropdown";
import Button from "@components/Button/Button";
import React from "react";

describe("Dropdown testing", () => {
  it("Dropdown direction render", () => {
    type dropdownDirectionType =
      | "bottom-left"
      | "bottom-center"
      | "bottom-right"
      | "top-left"
      | "top-center"
      | "top-right";

    const dropdownDirectionItems: dropdownDirectionType[] = [
      "bottom-left",
      "bottom-center",
      "bottom-right",
      "top-left",
      "top-center",
      "top-right",
    ];

    dropdownDirectionItems.forEach((direction) => {
      const dropdown = shallow(
        <Dropdown direction={direction} toggle={<Button>Open</Button>}>
          dropdown-content
        </Dropdown>
      );

      expect(
        dropdown.find(`.dropdown-item-direction_${direction}`).text()
      ).toEqual("dropdown-content");
    });
  });

  it("Dropdown additional rendering", () => {
    const dropdown = shallow(
      <Dropdown
        direction="bottom-center"
        toggle={<Button>Open</Button>}
        clearly
        fullwidth
      >
        dropdown-content
      </Dropdown>
    );

    expect(dropdown.find(".dropdown-item-clearly").text()).toEqual(
      "dropdown-content"
    );
    expect(dropdown.find(".dropdown-item.dropdown-fullwidth").text()).toEqual(
      "dropdown-content"
    );
  });
});
