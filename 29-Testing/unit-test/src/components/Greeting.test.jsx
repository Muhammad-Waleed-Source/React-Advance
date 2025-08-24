import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import { describe, expect } from "vitest";

describe("Greeting Component", () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('renders "good to see you" if the button was not clicked.', () => {
    render(<Greeting />);

    const outputElement = screen.getByText("good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', async () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test('deos not render "good to see you" if the button was clicked', async () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you", { exact: false })
    expect(outputElement).not.toBeInTheDocument();
  });
});
