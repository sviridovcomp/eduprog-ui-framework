import { shallow } from "enzyme";
import Spinner from "@components/Spinner/Spinner";
import React from "react";

describe("Spinner testing", () => {
  type spinnerColorType = "primary" | "secondary" | "accent";
  type spinnerModeType = "border" | "growing";

  it("Spinner types rendering", () => {
    const targetModes: spinnerModeType[] = ["border", "growing"];
    const targetColors: spinnerColorType[] = ["primary", "secondary", "accent"];

    targetModes.forEach((mode) => {
      targetColors.forEach((color) => {
        const spinner = shallow(<Spinner color={color} mode={mode} />);
        expect(spinner.hasClass(`Spinner-${mode}`)).toEqual(true);
        expect(spinner.hasClass(`Spinner-${mode}-${color}`)).toEqual(true);
      });
    });
  });
});
