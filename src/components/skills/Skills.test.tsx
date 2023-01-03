import { render, screen } from "@testing-library/react";
import { Skills } from "./Skills";

describe("skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];

  it("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  it("renders a list of items", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  it("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButtonElement = screen.getByRole("button", { name: "Login" });
    expect(loginButtonElement).toBeInTheDocument();
  });

  it("start learning button is not renered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  //   it("start learning button eventually displayed", async () => {
  //     render(<Skills skills={skills} />);
  //     const startLearningButton = await screen.findByRole("button", {
  //       name: "Start learning",
  //     });
  //     expect(startLearningButton).toBeInTheDocument();
  //   });

  it("start learning button eventually displayed", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
