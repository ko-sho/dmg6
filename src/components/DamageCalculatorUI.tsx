import { useState, useEffect } from "react";
import MonsterSelector from "./inputs/MonsterSelector";
import { skillsByCategory, skillCategoryLabels } from "../data/skills/index";
import { TACHI_MOTIONS } from "../data/weapons/TachiMotions";
import { GREATSWORD_MOTIONS } from "../data/weapons/GreatswordMotions";
import { NekoTrainingTarupuncher, Redau, UzTuna, NuEgdra, Arshveldo, GoreMagala, ZoShia } from "../data/monsters";
import { Monster } from "../models/Monster";
import type { Motion } from "../models/Motion";
import type { WeaponParameters } from "../models/Weapon";
import type { SkillParameters } from "../models/Skill";
import { calculateDamageTable } from "../services/DamageTableService";
import CalculateButton from "./common/CalculateButton";
import Header from "./common/Header";
import PresetDialog from "./common/PresetDialog";
import { Box, Stack } from "@mui/material";
import DamageResultTabs from "./results/DamageResultTabs";
import WeaponSection from "./inputs/WeaponSection";
import SkillSection from "./inputs/SkillSection";
import MotionSection from "./inputs/MotionSection";
import type { SharpnessColor } from "../models/Sharpness";
import type { PresetData } from "./common/SaveLoadPreset";

interface DamageTableRow {
  part: string;
  state: string;
  damage: string; // 合計ダメージ（物理+属性）
  critDamage: string;
  expected: string;
  physical: number; // 物理ダメージ
  elemental: number; // 属性ダメージ
  critRate: number; // 期待会心率
}

type ResultType = {
  weaponInfo: WeaponParameters;
  selectedSkills: {
    key: string;
    level: number;
    skillData: SkillParameters[];
  }[];
  selectedMotions: Motion[];
  selectedMonster: Monster | null;
  sharpness: SharpnessColor;
  damageTableRows: DamageTableRow[];
};

// 今後他武器種追加時のためのモーションマップ
const MOTIONS_BY_WEAPON_TYPE: Record<string, Motion[]> = {
  longsword: TACHI_MOTIONS,
  greatsword: GREATSWORD_MOTIONS,
};

const DamageCalculatorUI = () => {
  const [weaponInfo, setWeaponInfo] = useState<WeaponParameters>({
    weaponType: "longsword", // 追加: デフォルト武器種
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
  const skillCategories = Object.keys(
    skillsByCategory
  ) as (keyof typeof skillsByCategory)[];
  const [skillTab, setSkillTab] = useState(0);

  // プリセット読込時のハンドラ
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
      // プリセットのselectedMonsterを正しいインスタンスに復元
      const monsterList = [
        NekoTrainingTarupuncher,
        Redau,
        UzTuna,
        NuEgdra,
        Arshveldo,
        GoreMagala,
        ZoShia,
      ];
      const presetMonster = preset.selectedMonster as { name: string };
      const found = monsterList.find((m) => m.name === presetMonster.name);
      setSelectedMonster(found ? found : null);
    }
    if (preset.sharpness) setSharpness(preset.sharpness as SharpnessColor);
    // プリセット読込後にダメージ計算は自動実行しない
    // setTimeout(() => {
    //   handleCalculateDamage();
    // }, 0);
  };

  // 履歴保存時はselectedSkillsをSkillSelectorの型（key/level/skillData[]）で保存する
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
    setHistory((prev) => {
      if (lastResult) {
        return [lastResult, ...prev];
      } else {
        return prev;
      }
    });
    setLastResult(result);
    if (tabIndex !== 0) {
      setTabIndex(0);
    }
  };

  // 選択中武器種に応じたモーションリストを取得
  const availableMotions = MOTIONS_BY_WEAPON_TYPE[weaponInfo.weaponType] || [];

  // 武器種変更時にselectedMotionsを有効なものだけにフィルタ
  useEffect(() => {
    setSelectedMotions((prev) =>
      prev.filter((motion) =>
        availableMotions.some((m) => m.name === motion.name)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weaponInfo.weaponType]);

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", my: 4 }}>
      <Header onOpenPresetDialog={() => setPresetDialogOpen(true)} />
      <PresetDialog
        open={presetDialogOpen}
        onClose={() => setPresetDialogOpen(false)}
        currentPreset={{
          weaponInfo,
          selectedSkills,
          selectedMotions,
          selectedMonster,
          sharpness,
        }}
        onLoad={handleLoadPreset}
      />
      <Stack spacing={3}>
        <WeaponSection
          weapon={weaponInfo}
          setWeapon={setWeaponInfo}
          sharpnessColor={sharpness}
          setSharpnessColor={setSharpness}
        />
        <SkillSection
          skillCategories={skillCategories}
          skillCategoryLabels={skillCategoryLabels}
          skillTab={skillTab}
          setSkillTab={setSkillTab}
          skillsByCategory={skillsByCategory}
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
        />
        <MotionSection
          availableMotions={availableMotions.map((motion, idx) => ({
            key: `${motion.name}_${idx}`,
            label: motion.name,
            motionData: motion,
          }))}
          selectedMotions={selectedMotions}
          setSelectedMotions={setSelectedMotions}
        />
        <Box
          sx={{
            px: { xs: 0.5, sm: 3 },
            py: 2,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <MonsterSelector
            availableMonsters={[
              NekoTrainingTarupuncher,
              Redau,
              UzTuna,
              NuEgdra,
              Arshveldo,
              GoreMagala,
              ZoShia,
            ]}
            selectedMonster={selectedMonster}
            setSelectedMonster={setSelectedMonster}
          />
        </Box>
        <CalculateButton onClick={handleCalculateDamage} errorMessage={errorMessage} />
        <DamageResultTabs
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          damageResult={damageResult}
          history={history}
          lastResult={lastResult}
          damageTableRows={damageTableRows}
          selectedSkills={selectedSkills}
          selectedMotions={selectedMotions}
          selectedMonster={selectedMonster}
          weaponInfo={weaponInfo}
          sharpness={sharpness}
          onDeleteHistory={(idx) => {
            setHistory((prev) => prev.filter((_, i) => i !== idx));
            setTabIndex(0);
          }}
        />
      </Stack>
    </Box>
  );
};

export default DamageCalculatorUI;
