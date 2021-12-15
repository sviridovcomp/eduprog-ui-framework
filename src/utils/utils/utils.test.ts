import { asyncSleep } from "@utils/utils/utils";

test("async sleep testing", async () => {
  const content = async () => {
    return asyncSleep(100).then(() => {
      return "test-content";
    });
  };

  await expect(content()).resolves.toBe("test-content");
});
