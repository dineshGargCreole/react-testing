import { renderHook, act } from "@testing-library/react";
import { UseCounter } from "./useCounter";

describe("use counter", () => {
  it("should render initial count", () => {
    const { result } = renderHook(UseCounter);
    expect(result.current.count).toBe(0);
  });

  it("should accept and render intial count", () => {
    const { result } = renderHook(UseCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });

  it("should increment the count", () => {
    const { result } = renderHook(UseCounter);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
  });

  it("should decrement the count", () => {
    const { result } = renderHook(UseCounter);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(-1);
  });
});
