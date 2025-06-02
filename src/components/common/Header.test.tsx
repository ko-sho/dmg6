import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Header from "./Header";

describe("Header", () => {
  it("renders the main title and subtitle", () => {
    render(<Header onOpenPresetDialog={() => {}} />);
    expect(screen.getByText(/MH Wilds Damage Calculator/i)).toBeInTheDocument();
    expect(screen.getByText(/モンスターハンターワイルズ ダメージ計算ツール/)).toBeInTheDocument();
  });

  it("renders the save/load icon button", () => {
    render(<Header onOpenPresetDialog={() => {}} />);
    const button = screen.getByRole("button", { name: /プリセット保存\/読込/ });
    expect(button).toBeInTheDocument();
  });

  it("calls onOpenPresetDialog when the icon button is clicked", () => {
    const handleOpen = vi.fn();
    render(<Header onOpenPresetDialog={handleOpen} />);
    const button = screen.getByRole("button", { name: /プリセット保存\/読込/ });
    fireEvent.click(button);
    expect(handleOpen).toHaveBeenCalledTimes(1);
  });
});

export {}; // Ensure this file is treated as a module
