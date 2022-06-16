import { shallow } from "enzyme";
import Menu from "./Menu";
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
        <Menu direction={direction} toggle={<Button>Open</Button>}>
          dropdown-content
        </Menu>
      );

      expect(
        dropdown.find(`.dropdown-item-direction_${direction}`).text()
      ).toEqual("dropdown-content");
    });
  });

  it("Dropdown additional rendering", () => {
    const dropdown = shallow(
      <Menu
        direction="bottom-center"
        toggle={<Button>Open</Button>}
        clearly
        fullwidth
      >
        dropdown-content
      </Menu>
    );

    expect(dropdown.find(".dropdown-item-clearly").text()).toEqual(
      "dropdown-content"
    );
    expect(dropdown.find(".dropdown-item.dropdown-fullwidth").text()).toEqual(
      "dropdown-content"
    );
  });

  it("Dropdown click away test", () => {
    const component = shallow(
      <div className="outside">
        <Menu
          direction="bottom-center"
          dismissible="outside"
          toggle={<Button>Open</Button>}
        >
          dropdrop-content
        </Menu>
      </div>
    );

    component.find(Menu).dive().find(".dropdown-toggle").simulate("click");
    component.find(".outside").simulate("click");

    expect(component.find(".dropdown-content").exists()).toBeFalsy();
  });

  it("Dropdown onOpen test", () => {
    let open = false;

    const dropdown = shallow(
      <Menu
        direction="bottom-center"
        dismissible="outside"
        toggle={<Button>Open</Button>}
        onOpen={() => (open = true)}
      >
        dropdrop-content
      </Menu>
    );

    dropdown.find(".dropdown-toggle").simulate("click");

    expect(open).toBeTruthy();
  });

  it("Dropdown blur", () => {
    const dropdown = shallow(
      <Menu
        direction="bottom-center"
        dismissible="always"
        toggle={<Button>Open</Button>}
      >
        dropdrop-content
      </Menu>
    );

    dropdown.find(".dropdown-toggle").simulate("click");
    expect(dropdown.find(".dropdown-item-content").exists()).toBeTruthy();

    dropdown.simulate("blur");
    expect(dropdown.contains(".dropdown-item-content")).toBeFalsy();
  });
});
