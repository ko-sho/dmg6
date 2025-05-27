import { useState } from 'react';
import WeaponInput from './WeaponInput';
import SkillSelector from './SkillSelector';
import MotionSelector from './MotionSelector';
import MonsterSelector from './MonsterSelector';
import { skillsByCategory, skillCategoryLabels } from '../data/skills/index';
import { TACHI_MOTIONS } from '../data/weapons/TachiMotions';
import Redau from '../data/monsters/Redau';
import type { Motion } from '../models/Motion';
import type { Monster } from '../models/Monster';
import type { WeaponParameters } from '../models/Weapon';
import type { SkillParameters } from '../models/Skill';
import DamageTable from './DamageTable';
import { calculateDamageTable } from '../services/DamageTableService';
import SelectedParamsSummary from './SelectedParamsSummary';
import SharpnessSelector from './SharpnessSelector';
import type { SharpnessColor } from '../models/Sharpness';
// MUI imports
import { Box, Button, Accordion, AccordionSummary, AccordionDetails, Stack, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

const DamageCalculatorUI = () => {
  const [weaponInfo, setWeaponInfo] = useState<WeaponParameters>({
    weaponMultiplier: 220,
    baseElementValue: 0,
    elementType: { key: 'none', label: '無属性' },
    criticalRate: 5,
  });
  const [selectedSkills, setSelectedSkills] = useState<{ key: string; level: number; skillData: SkillParameters[] }[]>([]);
  const [selectedMotions, setSelectedMotions] = useState<Motion[]>([]);
  const [selectedMonster, setSelectedMonster] = useState<Monster | null>(null);
  const [damageResult, setDamageResult] = useState<string | null>(null);
  const [damageTableRows, setDamageTableRows] = useState<DamageTableRow[]>([]);
  const [sharpness, setSharpness] = useState<SharpnessColor>('white');

  const handleCalculateDamage = () => {
    type ResultType = {
      weaponInfo: WeaponParameters;
      selectedSkills: SkillParameters[];
      selectedMotions: Motion[];
      selectedMonster: Monster | null;
    };

    // 選択中のモーション・モンスターがなければ何もしない
    if (!selectedMonster || selectedMotions.length === 0) {
      setDamageResult(null);
      setDamageTableRows([]);
      return;
    }

    // DamageTableServiceでダメージ表を計算
    const damageTableRows = calculateDamageTable(
      weaponInfo,
      selectedSkills,
      selectedMotions,
      selectedMonster,
      sharpness // 追加: 切れ味
    );

    // 結果JSON
    const result: ResultType = {
      weaponInfo,
      selectedSkills: selectedSkills.flatMap(s => s.skillData),
      selectedMotions,
      selectedMonster,
    };
    setDamageResult(JSON.stringify(result, null, 2));
    setDamageTableRows(damageTableRows);
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', my: 4 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 32 }}>Damage Calculator Tool</h1>
      <Stack spacing={3}>
        {/* 武器入力: Boxでラップしダークモード対応の背景色。モバイル時は横マージン最小化 */}
        <Box sx={{ px: { xs: 0.5, sm: 3 }, py: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" sx={{ mb: 1 }} color="text.primary">武器情報</Typography>
          <SharpnessSelector value={sharpness} onChange={setSharpness} />
          <WeaponInput weapon={weaponInfo} setWeapon={setWeaponInfo} sharpnessColor={sharpness} setSharpnessColor={setSharpness} />
        </Box>
        {/* スキル入力: Boxでラップしダークモード対応の背景色。モバイル時は横マージン最小化 */}
        <Box sx={{ px: { xs: 0.5, sm: 3 }, py: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <Accordion key={category} defaultExpanded sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <h3 style={{ margin: 0 }}>{skillCategoryLabels[category] || category}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <SkillSelector
                  skills={skills.map(skill => ({
                    key: skill.name,
                    label: skill.name,
                    maxLevel: skill.levels.length,
                    skillLevels: skill.levels // SkillLevel[] を渡す
                  }))}
                  selectedSkills={selectedSkills}
                  setSelectedSkills={setSelectedSkills}
                />
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
        {/* モーション入力: Boxでラップしダークモード対応の背景色。モバイル時は横マージン最小化 */}
        <Box sx={{ px: { xs: 0.5, sm: 3 }, py: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h3 style={{ margin: 0 }}>モーション選択</h3>
            </AccordionSummary>
            <AccordionDetails>
              <MotionSelector
                availableMotions={TACHI_MOTIONS.map((motion, idx) => ({
                  key: `${motion.name}_${idx}`,
                  label: motion.name,
                  motionData: motion,
                }))}
                selectedMotions={selectedMotions}
                setSelectedMotions={setSelectedMotions}
              />
            </AccordionDetails>
          </Accordion>
        </Box>
        {/* モンスター入力: Boxでラップしダークモード対応の背景色。モバイル時は横マージン最小化 */}
        <Box sx={{ px: { xs: 0.5, sm: 3 }, py: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
          <MonsterSelector
            availableMonsters={[Redau]}
            selectedMonster={selectedMonster}
            setSelectedMonster={setSelectedMonster}
          />
        </Box>
        <Box textAlign="center">
          <Button variant="contained" color="primary" onClick={handleCalculateDamage}>
            Calculate Damage
          </Button>
        </Box>
        {damageResult && (
          <Box sx={{ px: { xs: 0.5, sm: 3 }, py: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
            {/* DamageTableでダメージ表を表示。未実装部分はモック値。*/}
            {selectedMonster && damageTableRows.length > 0 ? (
              <>
                <SelectedParamsSummary
                  weapon={weaponInfo}
                  selectedSkills={selectedSkills}
                  selectedMotions={selectedMotions}
                  sharpnessColor={sharpness}
                />
                <DamageTable rows={damageTableRows} />
              </>
            ) : (
              <Box sx={{ color: 'text.secondary', my: 2 }}>
                {/* DamageTable未実装時のモック表示 */}
                ダメージ表（モック）
              </Box>
            )}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default DamageCalculatorUI;
