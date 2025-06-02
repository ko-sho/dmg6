import { render, screen, fireEvent } from "@testing-library/react";
import MotionSelector from "./MotionSelector";
import type { MotionAttackType } from "../../models/Motion";
import { vi } from "vitest";

describe("MotionSelector", () => {
  const availableMotions = [
    {
      key: "a",
      label: "A",
      motionData: {
        name: "A",
        motionValue: 10,
        elementMultiplier: 1,
        sharpnessModifier: 1,
        hitCount: 1,
        attackType: "slash" as MotionAttackType,
      },
    },
    {
      key: "b",
      label: "B",
      motionData: {
        name: "B",
        motionValue: 20,
        elementMultiplier: 1,
        sharpnessModifier: 1,
        hitCount: 1,
        attackType: "slash" as MotionAttackType,
      },
    },
  ];
  it("モーションリストが表示される", () => {
    render(
      <MotionSelector
        availableMotions={availableMotions}
        selectedMotions={[]}
        setSelectedMotions={() => {}}
      />
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });
  it("選択時にsetSelectedMotionsが呼ばれる", () => {
    const setSelectedMotions = vi.fn();
    render(
      <MotionSelector
        availableMotions={availableMotions}
        selectedMotions={[]}
        setSelectedMotions={setSelectedMotions}
      />
    );
    fireEvent.click(screen.getByText("A"));
    expect(setSelectedMotions).toHaveBeenCalled();
  });
  it("空配列でも落ちない", () => {
    render(
      <MotionSelector
        availableMotions={[]}
        selectedMotions={[]}
        setSelectedMotions={() => {}}
      />
    );
    // Should render an empty list, so just check the list exists
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});

export {};
