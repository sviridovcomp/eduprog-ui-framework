import classList from "@utils/classList/classList";

describe("classList testing", () => {
  it("classList array", () => {
    const classes = ["test1", "test2", "test3", ""];

    expect(classList(classes)).toEqual("test1 test2 test3");
  });

  it("classList empty array", () => {
    const classes: string[] = [];
    expect(classList(classes)).toEqual("");
  });
});
