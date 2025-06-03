import { useDamageCalculator } from "../hooks/useDamageCalculator";
import { skillsByCategory, skillCategoryLabels } from "../data/skills/index";
import CalculateButton from "./common/CalculateButton";
import Header from "./common/Header";
import PresetDialog from "./common/PresetDialog";
import { Box, Stack } from "@mui/material";
import DamageResultTabs from "./results/DamageResultTabs";
import WeaponSection from "./inputs/WeaponSection";
import SkillSection from "./inputs/SkillSection";
import MotionSection from "./inputs/MotionSection";
import MonsterSelector from "./inputs/MonsterSelector";
import SelectedMotionsTable from "./results/SelectedMotionsTable";
import ItemBuffSection from "./inputs/ItemBuffSection";
import type { FullDataMotion } from '../models/FullDataMotion';
import wp00GS from '../data/fullDataWeapons/wp00GS.json';
import wp01Sns from '../data/fullDataWeapons/wp01Sns.json';
import wp02DB from '../data/fullDataWeapons/wp02DB.json';
import wp03LS from '../data/fullDataWeapons/wp03LS.json';
import wp04Ham from '../data/fullDataWeapons/wp04Ham.json';
import wp05HH from '../data/fullDataWeapons/wp05HH.json';
import wp06Lan from '../data/fullDataWeapons/wp06Lan.json';
import wp07GL from '../data/fullDataWeapons/wp07GL.json';
import wp08SA from '../data/fullDataWeapons/wp08SA.json';
import wp09CB from '../data/fullDataWeapons/wp09CB.json';
import wp10IG from '../data/fullDataWeapons/wp10IG.json';
import wp11Bow from '../data/fullDataWeapons/wp11Bow.json';
import wp12HBG from '../data/fullDataWeapons/wp12HBG.json';
import wp13LBG from '../data/fullDataWeapons/wp13LBG.json';

// weaponTypeToMotionsのキーをすべて小文字に統一し、weaponTypeも小文字で参照
const weaponTypeToMotions: Record<string, FullDataMotion[]> = {
  greatsword: wp00GS,
  sword: wp01Sns,
  dualblades: wp02DB,
  longsword: wp03LS,
  hammer: wp04Ham,
  huntinghorn: wp05HH,
  lance: wp06Lan,
  gunlance: wp07GL,
  switchaxe: wp08SA,
  chargeblade: wp09CB,
  insectglaive: wp10IG,
  bow: wp11Bow,
  heavybowgun: wp12HBG,
  lightbowgun: wp13LBG,
};

const DamageCalculatorUI = () => {
  const calc = useDamageCalculator();
  // weaponTypeを小文字化して参照
  const motions = weaponTypeToMotions[calc.weaponInfo.weaponType.toLowerCase?.() ?? calc.weaponInfo.weaponType] || [];

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", my: 4 }}>
      <Header onOpenPresetDialog={() => calc.setPresetDialogOpen(true)} />
      <PresetDialog
        open={calc.presetDialogOpen}
        onClose={() => calc.setPresetDialogOpen(false)}
        currentPreset={{
          weaponInfo: calc.weaponInfo,
          selectedSkills: calc.selectedSkills,
          selectedMotions: calc.selectedMotions,
          selectedMonster: calc.selectedMonster,
          sharpness: calc.sharpness,
        }}
        onLoad={calc.handleLoadPreset}
      />
      <Stack spacing={3}>
        <WeaponSection
          weapon={calc.weaponInfo}
          setWeapon={calc.setWeaponInfo}
          sharpnessColor={calc.sharpness}
          setSharpnessColor={calc.setSharpness}
        />
        <ItemBuffSection selectedBuffs={calc.selectedBuffs} setSelectedBuffs={calc.setSelectedBuffs} />
        <SkillSection
          skillCategories={calc.skillCategories}
          skillCategoryLabels={skillCategoryLabels}
          skillTab={calc.skillTab}
          setSkillTab={calc.setSkillTab}
          skillsByCategory={skillsByCategory}
          selectedSkills={calc.selectedSkills}
          setSelectedSkills={calc.setSelectedSkills}
          weaponType={calc.weaponInfo.weaponType}
        />
        {/* モーション選択欄を履歴タブの外にグローバルで表示 */}
        <MotionSection
          availableMotions={motions}
          selectedMotions={calc.selectedMotions as FullDataMotion[]}
          setSelectedMotions={calc.setSelectedMotions as React.Dispatch<React.SetStateAction<FullDataMotion[]>>}
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
            availableMonsters={calc.MONSTER_LIST}
            selectedMonster={calc.selectedMonster}
            setSelectedMonster={calc.setSelectedMonster}
          />
        </Box>
        <CalculateButton onClick={calc.handleCalculateDamage} errorMessage={calc.errorMessage} />
        {/* 現在選択中のモーションセットをグローバルに1つだけ表示 */}
        <SelectedMotionsTable motions={calc.selectedMotions as FullDataMotion[]} />
        <DamageResultTabs
          tabIndex={calc.tabIndex}
          setTabIndex={calc.setTabIndex}
          results={calc.results}
          onDeleteHistory={(idx) => {
            // idx: 1 = first history, 2 = second history, ... (index 0 is always current)
            calc.setResults((prev) => prev.filter((_, i) => i !== idx));
            calc.setTabIndex(0);
          }}
        />
      </Stack>
    </Box>
  );
};

export default DamageCalculatorUI;
