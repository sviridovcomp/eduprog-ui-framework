import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useClickAway } from "./useClickAway";

describe("useOutsideClick", () => {
  test("should handle outside click", () => {
    const target = document.createElement("div");
    document.body.appendChild(target);

    const outside = document.createElement("div");
    document.body.appendChild(outside);

    const ref = {
      current: target,
    };
    const callback = jest.fn();

    const view = renderHook(() => useClickAway(ref, callback));

    expect(callback).toHaveBeenCalledTimes(0);
    fireEvent.click(outside);
    expect(callback).toHaveBeenCalledTimes(1);

    jest.spyOn(document, "removeEventListener");

    view.unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);

    fireEvent.click(outside);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("should do nothing after click on the target element", () => {
    const target = document.createElement("div");
    document.body.appendChild(target);

    const ref = {
      current: target,
    };
    const callback = jest.fn();

    renderHook(() => useClickAway(ref, callback));

    expect(callback).toHaveBeenCalledTimes(0);
    fireEvent.click(target);
    expect(callback).toHaveBeenCalledTimes(0);
  });
});
