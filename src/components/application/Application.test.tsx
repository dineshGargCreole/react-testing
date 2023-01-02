import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("application", () => {
  it("renders correctly", () => {
    render(<Application />);

    // getByRole query method

    // const pageHeading = screen.getByRole("heading", {
    //   name: "Job application form",
    // });
    // expect(pageHeading).toBeInTheDocument();

    // const sectionHeading = screen.getByRole("heading", { name: "Section 1" });
    // expect(sectionHeading).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", { name: "Name" });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();

    // getByLabelText querry method
    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    // const nameElement2 = screen.getByLabelText("Name", { selector: "input" });
    // expect(nameElement2).toBeInTheDocument();

    const bioElement2 = screen.getByLabelText("Bio");
    expect(bioElement2).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    // getByPlaceholder query method
    const nameElement3 = screen.getByPlaceholderText("FullName");
    expect(nameElement3).toBeInTheDocument();

    // getByText query method
    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();

    // getByDisplayValue query method
    const nameElement4 = screen.getByDisplayValue("Dinesh");
    expect(nameElement4).toBeInTheDocument();

    // getByAltText query method ==> only valid for who has alt attribute
    const imageElement = screen.getByAltText("A person with a laptop");
    expect(imageElement).toBeInTheDocument();

    // getByTitle query method
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    // getByTestId query method
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();
  });
});
