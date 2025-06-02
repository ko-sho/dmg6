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

const DamageCalculatorUI = () => {
  const calc = useDamageCalculator();

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
        <SkillSection
          skillCategories={calc.skillCategories}
          skillCategoryLabels={skillCategoryLabels}
          skillTab={calc.skillTab}
          setSkillTab={calc.setSkillTab}
          skillsByCategory={skillsByCategory}
          selectedSkills={calc.selectedSkills}
          setSelectedSkills={calc.setSelectedSkills}
        />
        <MotionSection
          availableMotions={calc.availableMotions.map((motion, idx) => ({
            key: `${motion.name}_${idx}`,
            label: motion.name,
            motionData: motion,
          }))}
          selectedMotions={calc.selectedMotions}
          setSelectedMotions={calc.setSelectedMotions}
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
