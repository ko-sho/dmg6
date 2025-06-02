import { useState, useEffect } from "react";
import { skillsByCategory } from "../data/skills/index";
import { TACHI_MOTIONS } from "../data/weapons/TachiMotions";
import { GREATSWORD_MOTIONS } from "../data/weapons/GreatswordMotions";
import { NekoTrainingTarupuncher, Redau, UzTuna, NuEgdra, Arshveldo, GoreMagala, ZoShia } from "../data/monsters";
import { calculateDamageTable } from "../services/DamageTableService";
import type { Motion } from "../models/Motion";
import type { WeaponParameters } from "../models/Weapon";
import type { SkillParameters } from "../models/Skill";
import type { Monster } from "../models/Monster";
import type { SharpnessColor } from "../models/Sharpness";
import type { PresetData } from "../components/common/SaveLoadPreset";
import type { DamageTableRow, ResultType } from "../models/DamageCalculatorTypes";

const MOTIONS_BY_WEAPON_TYPE: Record<string, Motion[]> = {
  longsword: TACHI_MOTIONS,
  greatsword: GREATSWORD_MOTIONS,
};

const MONSTER_LIST = [
  NekoTrainingTarupuncher,
  Redau,
  UzTuna,
  NuEgdra,
  Arshveldo,
  GoreMagala,
  ZoShia,
];

export function useDamageCalculator() {
  const [weaponInfo, setWeaponInfo] = useState<WeaponParameters>({
    weaponType: "longsword",
    weaponMultiplier: 220,
    baseElementValue: 0,
    elementType: { key: "none", label: "無属性" },
    criticalRate: 5,
  });
  const [selectedSkills, setSelectedSkills] = useState<
    { key: string; level: number; skillData: SkillParameters[] }[]
  >([]);
  const [selectedMotions, setSelectedMotions] = useState<Motion[]>([]);
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [damageResult, setDamageResult] = useState<string | null>(null);
  const [damageTableRows, setDamageTableRows] = useState<DamageTableRow[]>([]);
  const [sharpness, setSharpness] = useState<SharpnessColor>("white");
  const [presetDialogOpen, setPresetDialogOpen] = useState(false);
  const [tabIndex, setTabIndex] = useState(0);
  const [history, setHistory] = useState<ResultType[]>([]);
  const [lastResult, setLastResult] = useState<ResultType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const skillCategories = Object.keys(skillsByCategory) as (keyof typeof skillsByCategory)[];
  const [skillTab, setSkillTab] = useState(0);

  const availableMotions = MOTIONS_BY_WEAPON_TYPE[weaponInfo.weaponType] || [];

  const handleLoadPreset = (preset: PresetData) => {
    if (!preset) return;
    if (preset.weaponInfo) setWeaponInfo(preset.weaponInfo as WeaponParameters);
    if (preset.selectedSkills)
      setSelectedSkills(
        Array.isArray(preset.selectedSkills)
          ? (preset.selectedSkills as {
              key: string;
              level: number;
              skillData: SkillParameters[];
            }[])
          : []
      );
    if (preset.selectedMotions)
      setSelectedMotions(preset.selectedMotions as Motion[]);
    if (preset.selectedMonster) {
      const found = MONSTER_LIST.find((m) => m.name === (preset.selectedMonster as { name: string }).name);
      setSelectedMonster(found ? found : null);
    }
    if (preset.sharpness) setSharpness(preset.sharpness as SharpnessColor);
  };

  const handleCalculateDamage = () => {
    if (selectedMotions.length === 0) {
      setErrorMessage("モーションを1つ以上選択してください");
      return;
    }
    if (!selectedMonster) {
      setErrorMessage("モンスターを選択してください");
      return;
    }
    setErrorMessage(null);
    const damageTableRows = calculateDamageTable(
      weaponInfo,
      selectedMotions,
      selectedMonster,
      sharpness,
      selectedSkills
    );
    const result: ResultType = {
      weaponInfo,
      selectedSkills,
      selectedMotions,
      selectedMonster,
      sharpness,
      damageTableRows,
    };
    setDamageResult(JSON.stringify(result, null, 2));
    setDamageTableRows(damageTableRows);
    setHistory((prev) => (lastResult ? [lastResult, ...prev] : prev));
    setLastResult(result);
    if (tabIndex !== 0) setTabIndex(0);
  };

  useEffect(() => {
    setSelectedMotions((prev) =>
      prev.filter((motion) => availableMotions.some((m) => m.name === motion.name))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weaponInfo.weaponType]);

  return {
    weaponInfo, setWeaponInfo,
    selectedSkills, setSelectedSkills,
    selectedMotions, setSelectedMotions,
    selectedMonster, setSelectedMonster,
    damageResult, setDamageResult,
    damageTableRows, setDamageTableRows,
    sharpness, setSharpness,
    presetDialogOpen, setPresetDialogOpen,
    tabIndex, setTabIndex,
    history, setHistory,
    lastResult, setLastResult,
    errorMessage, setErrorMessage,
    skillCategories, skillTab, setSkillTab,
    availableMotions,
    handleLoadPreset,
    handleCalculateDamage,
    MONSTER_LIST,
  };
}
