import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

test("Greet renders correctly", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders correctly with name", () => {
  render(<Greet name="Dinesh" />);
  const textElement = screen.getByText("Hello Dinesh");
  expect(textElement).toBeInTheDocument();
});
