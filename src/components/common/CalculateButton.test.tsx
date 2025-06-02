import { render, screen, fireEvent } from "@testing-library/react";
import CalculateButton from "./CalculateButton";
import { vi } from "vitest";

describe("CalculateButton", () => {
  it("renders the button", () => {
    render(<CalculateButton onClick={() => {}} errorMessage={null} />);
    expect(screen.getByText("Calculate Damage")).toBeInTheDocument();
  });

  it("calls onClick when button is clicked", () => {
    const onClick = vi.fn();
    render(<CalculateButton onClick={onClick} errorMessage={null} />);
    fireEvent.click(screen.getByText("Calculate Damage"));
    expect(onClick).toHaveBeenCalled();
  });

  it("shows error message when errorMessage is set", () => {
    render(<CalculateButton onClick={() => {}} errorMessage="エラーです" />);
    expect(screen.getByText("エラーです")).toBeInTheDocument();
  });
});
