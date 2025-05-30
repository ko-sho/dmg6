import { useState } from "react";
import WeaponInput from "./WeaponInput";
import SkillSelector from "./SkillSelector";
import MotionSelector from "./MotionSelector";
import MonsterSelector from "./MonsterSelector";
import { skillsByCategory, skillCategoryLabels } from "../data/skills/index";
import { TACHI_MOTIONS } from "../data/weapons/TachiMotions";
import Redau from "../data/monsters/Redau";
import UzTuna from "../data/monsters/UzTuna";
import Arshveldo from "../data/monsters/Arshveldo";
import GoreMagala from "../data/monsters/GoreMagala";
import NuEgdra from "../data/monsters/NuEgdra";
import ZoShia from "../data/monsters/ZoShia";
import NekoTrainingTarupuncher from "../data/monsters/NekoTrainingTarupuncher";
import type { Motion } from "../models/Motion";
import type { Monster } from "../models/Monster";
import type { WeaponParameters } from "../models/Weapon";
import type { SkillParameters } from "../models/Skill";
import DamageTable from "./DamageTable";
import { calculateDamageTable } from "../services/DamageTableService";
import SelectedParamsSummary from "./SelectedParamsSummary";
import type { SharpnessColor } from "../models/Sharpness";
import SaveLoadPreset from "./SaveLoadPreset";
import type { PresetData } from "./SaveLoadPreset";
import SkillLevelTable from "./SkillLevelTable";
import type { SkillData } from "../models/Skill";
// MUI imports
import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SaveIcon from "@mui/icons-material/Save";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";

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
  // 例: greatsword: GREATSWORD_MOTIONS,
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
    if (preset.selectedMonster)
      setSelectedMonster(preset.selectedMonster as Monster);
    if (preset.sharpness) setSharpness(preset.sharpness as SharpnessColor);
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

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", my: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <h1 style={{ textAlign: "center", margin: 0, flex: 1 }}>
          Damage Calculator Tool
        </h1>
        <IconButton
          aria-label="プリセット保存/読込"
          onClick={() => setPresetDialogOpen(true)}
          size="large"
          sx={{
            color: "text.primary",
            bgcolor: "background.paper",
            "&:hover": { bgcolor: "action.hover" },
          }}
        >
          <SaveIcon />
        </IconButton>
      </Box>
      <Dialog
        open={presetDialogOpen}
        onClose={() => setPresetDialogOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>プリセット保存/読込</DialogTitle>
        <DialogContent>
          <SaveLoadPreset
            currentPreset={{
              weaponInfo,
              selectedSkills,
              selectedMotions,
              selectedMonster,
              sharpness, // 追加: 切れ味も保存
            }}
            onLoad={(preset) => {
              handleLoadPreset(preset);
              setPresetDialogOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>
      <Stack spacing={3}>
        {/* 武器入力: Boxでラップしダークモード対応の背景色。モバイル時は横マージン最小化 */}
        <Box
          sx={{
            px: { xs: 0.5, sm: 3 },
            py: 2,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }} color="text.primary">
            武器
          </Typography>
          <WeaponInput
            weapon={weaponInfo}
            setWeapon={setWeaponInfo}
            sharpnessColor={sharpness}
            setSharpnessColor={setSharpness}
          />
        </Box>
        {/* スキル入力: カテゴリータブで切り替え */}
        <Box
          sx={{
            px: { xs: 0.5, sm: 3 },
            py: 2,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography variant="h6" sx={{ mb: 1 }} color="text.primary">
            スキル
          </Typography>
          <Tabs
            value={skillTab}
            onChange={(_, v) => setSkillTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 1 }}
          >
            {skillCategories.map((category) => (
              <Tab
                key={category}
                label={skillCategoryLabels[category] || category}
              />
            ))}
          </Tabs>
          {/* 選択中カテゴリのスキルリストのみ表示（Accordion廃止） */}
          <SkillSelector
            skills={skillsByCategory[skillCategories[skillTab]].map(
              (skill: SkillData) => ({
                key: skill.name,
                label: skill.name,
                maxLevel: skill.levels.length,
                skillLevels: skill.levels,
              })
            )}
            selectedSkills={selectedSkills}
            setSelectedSkills={setSelectedSkills}
          />
        </Box>
        {/* モーション入力: Accordionのみでシンプル化 */}
        <Accordion
          defaultExpanded={false}
          sx={{ bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" color="text.primary" sx={{ m: 0 }}>
              モーション
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <MotionSelector
              availableMotions={availableMotions.map((motion, idx) => ({
                key: `${motion.name}_${idx}`,
                label: motion.name,
                motionData: motion,
              }))}
              selectedMotions={selectedMotions}
              setSelectedMotions={setSelectedMotions}
            />
          </AccordionDetails>
        </Accordion>
        {/* モンスター入力: Boxでラップしダークモード対応の背景色。モバイル時は横マージン最小化 */}
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
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={handleCalculateDamage}
          >
            Calculate Damage
          </Button>
          {errorMessage && (
            <Box sx={{ color: "error.main", fontWeight: "bold", mt: 1 }}>
              {errorMessage}
            </Box>
          )}
        </Box>
        {/* タブ追加型: 先頭は現在の入力状態, 以降は履歴 */}
        {(damageResult || history.length > 0) && (
          <Tabs
            value={tabIndex}
            onChange={(_, v) => setTabIndex(v)}
            sx={{
              mb: 2,
              bgcolor: "background.default",
              borderRadius: 2,
              boxShadow: 1,
            }}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="現在の結果" sx={{ color: "text.primary" }} />
            {history.map((_, idx) => (
              <Tab
                key={`history-${idx}`}
                label={`履歴${history.length - idx}`}
                sx={{ color: "text.primary" }}
              />
            ))}
          </Tabs>
        )}
        {/* タブ内容の切り替え */}
        {tabIndex === 0 && damageResult && (
          <Box
            sx={{
              px: { xs: 0.5, sm: 3 },
              py: 2,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            {selectedMonster && damageTableRows.length > 0 ? (
              <>
                {/* スキルテーブルを一番上に */}
                <SkillLevelTable selectedSkills={lastResult?.selectedSkills ?? selectedSkills} />
                {/* ダメージテーブル */}
                <DamageTable rows={lastResult?.damageTableRows ?? damageTableRows} />
                {/* パラメータサマリー */}
                <SelectedParamsSummary
                  weapon={lastResult?.weaponInfo ?? weaponInfo}
                  selectedSkills={lastResult?.selectedSkills ?? selectedSkills}
                  selectedMotions={lastResult?.selectedMotions ?? selectedMotions}
                  sharpnessColor={lastResult?.sharpness ?? sharpness}
                />
              </>
            ) : null}
          </Box>
        )}
        {tabIndex > 0 && history[tabIndex - 1] && (
          <Box
            sx={{
              px: { xs: 0.5, sm: 3 },
              py: 2,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Box sx={{ mb: 1 }}>
              <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                #{history.length - (tabIndex - 1)} 計算結果
              </Typography>
            </Box>
            {/* スキルテーブルを一番上に */}
            <SkillLevelTable
              selectedSkills={history[tabIndex - 1].selectedSkills}
            />
            {/* ダメージテーブル */}
            <DamageTable rows={history[tabIndex - 1].damageTableRows} />
            {/* パラメータサマリー */}
            <SelectedParamsSummary
              weapon={history[tabIndex - 1].weaponInfo}
              selectedSkills={history[tabIndex - 1].selectedSkills}
              selectedMotions={history[tabIndex - 1].selectedMotions}
              sharpnessColor={history[tabIndex - 1].sharpness}
            />
            {/* 履歴削除ボタン */}
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Button
                variant="outlined"
                color="error"
                onClick={() => {
                  setHistory((prev) =>
                    prev.filter((_, idx) => idx !== tabIndex - 1)
                  );
                  setTabIndex(0); // 削除後は現在の結果タブに戻す
                }}
              >
                この履歴を削除
              </Button>
            </Box>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default DamageCalculatorUI;
