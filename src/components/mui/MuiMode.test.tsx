import { render, screen } from "@testing-library/react";
import { AppProviders } from "../../providers/AppProviders";
// import { render, screen } from "../../test.utils";
import { MuiMode } from "./MuiMode";

describe("muimode", () => {
  it("render text correctly  ", () => {
    render(<MuiMode />, { wrapper: AppProviders });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});

// describe("muiMode", () => {
//   it("render text correctly", () => {
//     render(<MuiMode />);
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toHaveTextContent("dark mode");
//   });
// });
