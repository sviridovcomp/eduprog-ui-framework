import { asyncSleep, removeArrayItem } from "@utils/utils/utils";

test("async sleep testing", async () => {
  const content = async () => {
    return asyncSleep(100).then(() => {
      return "test-content";
    });
  };

  await expect(content()).resolves.toBe("test-content");
});

test("remove item from array test", () => {
  const array = ["1", "2", "3", "4", "5"];
  removeArrayItem(array, "3");
  expect(["1", "2", "4", "5"]).toEqual(array);
});
