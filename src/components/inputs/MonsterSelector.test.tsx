import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import MonsterSelector from "./MonsterSelector";
import type { Monster } from "../../models/Monster";

describe("MonsterSelector", () => {
  const monsters: Monster[] = [
    { name: "A", parts: [] },
    { name: "B", parts: [] },
  ];

  it("モンスターリストが正しく表示される", () => {
    render(
      <MonsterSelector
        availableMonsters={monsters}
        selectedMonster={null}
        setSelectedMonster={() => {}}
      />
    );
    // プルダウンに全モンスター名が表示される
    fireEvent.mouseDown(screen.getByLabelText("モンスター"));
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });

  it("選択状態が反映される", () => {
    render(
      <MonsterSelector
        availableMonsters={monsters}
        selectedMonster={monsters[1]}
        setSelectedMonster={() => {}}
      />
    );
    // セレクトのvalueがBになっていることを確認
    const select = screen.getByLabelText("モンスター");
    // value属性はSelectのpropsに反映されている
    expect(select).toHaveTextContent("B");
  });

  it("モンスター選択時にsetSelectedMonsterが呼ばれる", () => {
    const setSelectedMonster = vi.fn();
    render(
      <MonsterSelector
        availableMonsters={monsters}
        selectedMonster={null}
        setSelectedMonster={setSelectedMonster}
      />
    );
    fireEvent.mouseDown(screen.getByLabelText("モンスター"));
    fireEvent.click(screen.getByText("B"));
    expect(setSelectedMonster).toHaveBeenCalledWith(monsters[1]);
  });
});

export {}; // Ensure this file is treated as a module
