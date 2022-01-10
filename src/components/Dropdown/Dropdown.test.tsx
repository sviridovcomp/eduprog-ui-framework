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

  it("Dropdown blur rendering", () => {
    const dropdown = shallow(
      <Dropdown direction="bottom-center" toggle={<Button>Open</Button>}>
        dropdown-content
      </Dropdown>
    );

    dropdown.find(".dropdown-toggle").simulate("click");

    expect(dropdown.find(".dropdown-transition-active").text()).toEqual(
      "dropdown-content"
    );

    dropdown.simulate("blur");

    expect(dropdown.find(".dropdown-transition-active").length).toEqual(0);
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
