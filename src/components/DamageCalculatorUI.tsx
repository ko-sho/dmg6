import { useState } from 'react';
import WeaponInput from './WeaponInput';
import SkillSelector from './SkillSelector';
import MotionSelector from './MotionSelector';
import MonsterSelector from './MonsterSelector';
import { skillsByCategory } from '../data/skills/index';
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
import { Card, CardHeader, CardContent, Stack, Box, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
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
        <Card>
          <CardHeader title="Weapon" />
          <CardContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <SharpnessSelector value={sharpness} onChange={setSharpness} />
              <WeaponInput weapon={weaponInfo} setWeapon={setWeaponInfo} sharpnessColor={sharpness} setSharpnessColor={setSharpness} />
            </Box>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Skills" />
          <CardContent>
            {/* スキルカテゴリごとにアコーディオンで表示 */}
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <Accordion key={category} defaultExpanded sx={{ mb: 2 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <h3 style={{ margin: 0 }}>{category}</h3>
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
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Motion" />
          <CardContent>
            {/* モーションもアコーディオンでまとめる */}
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
          </CardContent>
        </Card>
        <Card>
          <CardHeader title="Monster" />
          <CardContent>
            <MonsterSelector
              availableMonsters={[Redau]}
              selectedMonster={selectedMonster}
              setSelectedMonster={setSelectedMonster}
            />
          </CardContent>
        </Card>
        <Box textAlign="center">
          <Button variant="contained" color="primary" onClick={handleCalculateDamage}>
            Calculate Damage
          </Button>
        </Box>
        {damageResult && (
          <Card>
            <CardHeader title="Calculation Result" />
            <CardContent>
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
            </CardContent>
          </Card>
        )}
      </Stack>
    </Box>
  );
};

export default DamageCalculatorUI;
