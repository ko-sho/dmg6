var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { r as reactExports, j as jsxRuntimeExports, f as React, g as clientExports } from "./react-vendor-CL6OjrN_.js";
import { B as Box, h as Button, T as Typography, I as IconButton, S as SaveIcon, j as Stack, k as TextField, L as List, l as ListItem, m as ListItemText, D as DeleteIcon, n as Dialog, o as DialogTitle, p as DialogContent, q as TableContainer, P as Paper, t as Table, v as TableHead, w as TableRow, x as TableCell, y as TableBody, F as FormControl, z as InputLabel, A as Select, M as MenuItem, O as OutlinedInput, C as Checkbox, E as Tabs, G as Tab, H as ToggleButtonGroup, J as ToggleButton, K as FormControlLabel, N as FormGroup, Q as ListItemIcon, R as Accordion, U as AccordionSummary, V as ExpandMoreIcon, W as AccordionDetails } from "./vendor-CnJ3cJiK.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
class SkillData {
  constructor(category, name, levels) {
    __publicField(this, "category");
    __publicField(this, "name");
    __publicField(this, "levels");
    this.category = category;
    this.name = name;
    this.levels = levels;
  }
  // 必要に応じてスキルの情報を取得するメソッドを追加できます
}
const attackBoost = new SkillData(
  "weapon",
  "攻撃",
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 3,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+3"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 5,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+5"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          additionAttackBonus: 7,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+7"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.02,
          additionAttackBonus: 8,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+8、攻撃1.02倍"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.04,
          additionAttackBonus: 9,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+9、攻撃1.04倍"
        }
      ]
    }
  ]
);
const adrenalineRush = new SkillData(
  "armor",
  "火事場力",
  [
    {
      level: 1,
      skillBonuses: [
        {
          attackMultiplierBonus: 1,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃効果なし"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.05,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃1.05倍"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.05,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃1.05倍"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.1,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃1.10倍"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.3,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃1.30倍"
        }
      ]
    }
  ]
);
const chainCrit = new SkillData(
  "armor",
  "連撃",
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 8,
          elementAddition: 60,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+8、属性値+60"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 10,
          elementAddition: 80,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+10、属性値+80"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          additionAttackBonus: 12,
          elementAddition: 100,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+12、属性値+100"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          additionAttackBonus: 15,
          elementAddition: 120,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+15、属性値+120"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          additionAttackBonus: 18,
          elementAddition: 140,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+18、属性値+140"
        }
      ]
    }
  ]
);
const challenger = new SkillData(
  "armor",
  "挑戦者",
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 4,
          criticalRateBonus: 3,
          // 0.03 → 3
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+4、会心率+3%"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 8,
          criticalRateBonus: 5,
          // 0.05 → 5
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+8、会心率+5%"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          additionAttackBonus: 12,
          criticalRateBonus: 7,
          // 0.07 → 7
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+12、会心率+7%"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          additionAttackBonus: 16,
          criticalRateBonus: 10,
          // 0.1 → 10
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+16、会心率+10%"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          additionAttackBonus: 20,
          criticalRateBonus: 15,
          // 0.15 → 15
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+20、会心率+15%"
        }
      ]
    }
  ]
);
const counterstrike = new SkillData(
  "armor",
  "逆襲",
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 10,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+10"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 15,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+15"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          additionAttackBonus: 25,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+25"
        }
      ]
    }
  ]
);
const criticalBoost = new SkillData(
  "weapon",
  "超会心",
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalDamageModifier: 0.03,
          // 1.28 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心時ダメージ倍率+0.03（1.28倍）"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalDamageModifier: 0.06,
          // 1.31 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心時ダメージ倍率+0.06（1.31倍）"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalDamageModifier: 0.09,
          // 1.34 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心時ダメージ倍率+0.09（1.34倍）"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          criticalDamageModifier: 0.12,
          // 1.37 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心時ダメージ倍率+0.12（1.37倍）"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          criticalDamageModifier: 0.15,
          // 1.4 - 1.25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心時ダメージ倍率+0.15（1.40倍）"
        }
      ]
    }
  ]
);
const elementalAbsorption = new SkillData(
  "armor",
  "属性吸収",
  [
    {
      level: 1,
      skillBonuses: [
        {
          elementAddition: 40,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "発動時、属性値+40"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          elementAddition: 50,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "発動時、属性値+50"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          elementAddition: 60,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "発動時、属性値+60"
        }
      ]
    }
  ]
);
const latentPower = new SkillData(
  "armor",
  "力の開放",
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 10,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心率+10%"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalRateBonus: 20,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心率+20%"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalRateBonus: 30,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心率+30%"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          criticalRateBonus: 40,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心率+40%"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          criticalRateBonus: 50,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心率+50%"
        }
      ]
    }
  ]
);
const masterfulStrike = new SkillData(
  "armor",
  "巧撃",
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 10,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+10"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 15,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+15"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          additionAttackBonus: 20,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+20"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          additionAttackBonus: 25,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+25"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          additionAttackBonus: 30,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+30"
        }
      ]
    }
  ]
);
const maximumMight = new SkillData(
  "armor",
  "渾身",
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 10,
          // 0.1 → 10
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心率+10%"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalRateBonus: 20,
          // 0.2 → 20
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心率+20%"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalRateBonus: 30,
          // 0.3 → 30
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "会心率+30%"
        }
      ]
    }
  ]
);
const mindEye = new SkillData("weapon", "心眼", [
  {
    level: 1,
    skillBonuses: [
      {
        attackMultiplierBonus: 1.1,
        minHitZone: 0,
        maxHitZone: 44,
        applicableStates: ["normal", "wounded", "exposed"],
        description: "肉質44以下の部位: 攻撃1.1倍"
      }
    ]
  },
  {
    level: 2,
    skillBonuses: [
      {
        attackMultiplierBonus: 1.15,
        minHitZone: 0,
        maxHitZone: 44,
        applicableStates: ["normal", "wounded", "exposed"],
        description: "肉質44以下の部位: 攻撃1.15倍"
      }
    ]
  },
  {
    level: 3,
    skillBonuses: [
      {
        attackMultiplierBonus: 1.3,
        minHitZone: 0,
        maxHitZone: 44,
        applicableStates: ["normal", "wounded", "exposed"],
        description: "肉質44以下の部位: 攻撃1.3倍"
      }
    ]
  }
]);
const peakPerformance = new SkillData(
  "armor",
  "フルチャージ",
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 3,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+3"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 6,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+6"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          additionAttackBonus: 10,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+10"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          additionAttackBonus: 15,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+15"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          additionAttackBonus: 20,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+20"
        }
      ]
    }
  ]
);
const weaknessExploit = new SkillData("armor", "弱点特攻", [
  {
    level: 1,
    skillBonuses: [
      {
        criticalRateBonus: 5,
        // 0.05 → 5
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["normal"],
        description: "肉質45以上の部位（通常）: 会心率+5%"
      },
      {
        criticalRateBonus: 8,
        // 0.08 → 8
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["wounded", "exposed"],
        description: "肉質45以上の部位（傷/露出）: 会心率+8%"
      }
    ]
  },
  {
    level: 2,
    skillBonuses: [
      {
        criticalRateBonus: 10,
        // 0.1 → 10
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["normal"],
        description: "肉質45以上の部位（通常）: 会心率+10%"
      },
      {
        criticalRateBonus: 15,
        // 0.15 → 15
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["wounded", "exposed"],
        description: "肉質45以上の部位（傷/露出）: 会心率+15%"
      }
    ]
  },
  {
    level: 3,
    skillBonuses: [
      {
        criticalRateBonus: 15,
        // 0.15 → 15
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["normal"],
        description: "肉質45以上の部位（通常）: 会心率+15%"
      },
      {
        criticalRateBonus: 25,
        // 0.25 → 25
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["wounded", "exposed"],
        description: "肉質45以上の部位（傷/露出）: 会心率+25%"
      }
    ]
  },
  {
    level: 4,
    skillBonuses: [
      {
        criticalRateBonus: 20,
        // 0.2 → 20
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["normal"],
        description: "肉質45以上の部位（通常）: 会心率+20%"
      },
      {
        criticalRateBonus: 35,
        // 0.35 → 35
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["wounded", "exposed"],
        description: "肉質45以上の部位（傷/露出）: 会心率+35%"
      }
    ]
  },
  {
    level: 5,
    skillBonuses: [
      {
        criticalRateBonus: 30,
        // 0.3 → 30
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["normal"],
        description: "肉質45以上の部位（通常）: 会心率+30%"
      },
      {
        criticalRateBonus: 50,
        // 0.5 → 50
        minHitZone: 45,
        maxHitZone: 100,
        applicableStates: ["wounded", "exposed"],
        description: "肉質45以上の部位（傷/露出）: 会心率+50%"
      }
    ]
  }
]);
const zenState = new SkillData(
  "armor",
  "無我の境地",
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 18,
          // 0.18 → 18
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "克服時、会心率+18%"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalRateBonus: 21,
          // 0.21 → 21
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "克服時、会心率+21%"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalRateBonus: 25,
          // 0.25 → 25
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "克服時、会心率+25%"
        }
      ]
    }
  ]
);
const nushiSoul = new SkillData(
  "group",
  "ヌシの魂",
  [
    {
      level: 1,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.05,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃1.05倍"
        }
      ]
    }
  ]
);
const kokusyokuIttai = new SkillData(
  "series",
  "黒蝕一体",
  [
    {
      level: 1,
      skillBonuses: []
      // 効果なし
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 15,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "克服時、攻撃力+15"
        }
      ]
    }
  ]
);
const resentment = new SkillData(
  "armor",
  "逆恨み",
  [
    {
      level: 1,
      skillBonuses: [
        {
          additionAttackBonus: 5,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+5"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          additionAttackBonus: 10,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+10"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          additionAttackBonus: 15,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+15"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          additionAttackBonus: 20,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+20"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          additionAttackBonus: 25,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          description: "攻撃力+25"
        }
      ]
    }
  ]
);
const FireAttack = {
  category: "weapon",
  name: "火属性攻撃強化",
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: "火属性攻撃値+40" }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: "火属性攻撃値を1.1倍、火属性攻撃値+50" }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: "火属性攻撃値を1.2倍、火属性攻撃値+60" }] }
  ]
};
const WaterAttack = {
  category: "weapon",
  name: "水属性攻撃強化",
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: "水属性攻撃値+40" }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: "水属性攻撃値を1.1倍、水属性攻撃値+50" }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: "水属性攻撃値を1.2倍、水属性攻撃値+60" }] }
  ]
};
const ThunderAttack = {
  category: "weapon",
  name: "雷属性攻撃強化",
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: "雷属性攻撃値+40" }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: "雷属性攻撃値を1.1倍、雷属性攻撃値+50" }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: "雷属性攻撃値を1.2倍、雷属性攻撃値+60" }] }
  ]
};
const IceAttack = {
  category: "weapon",
  name: "氷属性攻撃強化",
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: "氷属性攻撃値+40" }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: "氷属性攻撃値を1.1倍、氷属性攻撃値+50" }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: "氷属性攻撃値を1.2倍、氷属性攻撃値+60" }] }
  ]
};
const DragonAttack = {
  category: "weapon",
  name: "龍属性攻撃強化",
  levels: [
    { level: 1, skillBonuses: [{ elementAddition: 40, minHitZone: 0, maxHitZone: 100, description: "龍属性攻撃値+40" }] },
    { level: 2, skillBonuses: [{ elementAddition: 50, elementModifier: 1.1, minHitZone: 0, maxHitZone: 100, description: "龍属性攻撃値を1.1倍、龍属性攻撃値+50" }] },
    { level: 3, skillBonuses: [{ elementAddition: 60, elementModifier: 1.2, minHitZone: 0, maxHitZone: 100, description: "龍属性攻撃値を1.2倍、龍属性攻撃値+60" }] }
  ]
};
const Hien = {
  category: "weapon",
  name: "飛燕",
  levels: [
    {
      level: 1,
      skillBonuses: [
        {
          attackMultiplierBonus: 1.1,
          minHitZone: 0,
          maxHitZone: 100,
          applicableStates: ["normal", "wounded", "exposed"],
          isJumpAttackOnly: true,
          description: "ジャンプ攻撃1.1倍"
        }
      ]
    }
  ]
};
const OffensiveGuard = new SkillData(
  "armor",
  "攻めの守勢",
  [
    {
      level: 1,
      skillBonuses: [
        {
          attackMultiplierBonus: 0.05,
          minHitZone: 0,
          maxHitZone: 100,
          description: "ガード成功直後、一定時間攻撃力が1.05倍"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          attackMultiplierBonus: 0.1,
          minHitZone: 0,
          maxHitZone: 100,
          description: "ガード成功直後、一定時間攻撃力が1.10倍"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          attackMultiplierBonus: 0.15,
          minHitZone: 0,
          maxHitZone: 100,
          description: "ガード成功直後、一定時間攻撃力が1.15倍"
        }
      ]
    }
  ]
);
const nurebaMon = new SkillData(
  "weapon",
  "濡れ刃紋",
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 7,
          minHitZone: 0,
          maxHitZone: 100,
          description: "泡状態の時、会心率+7%"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalRateBonus: 14,
          minHitZone: 0,
          maxHitZone: 100,
          description: "泡状態の時、会心率+14%"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalRateBonus: 21,
          minHitZone: 0,
          maxHitZone: 100,
          description: "泡状態の時、会心率+21%"
        }
      ]
    }
  ]
);
const criticalEye = new SkillData(
  "weapon",
  "見切り",
  [
    {
      level: 1,
      skillBonuses: [
        {
          criticalRateBonus: 4,
          minHitZone: 0,
          maxHitZone: 100,
          description: "会心率+4%"
        }
      ]
    },
    {
      level: 2,
      skillBonuses: [
        {
          criticalRateBonus: 8,
          minHitZone: 0,
          maxHitZone: 100,
          description: "会心率+8%"
        }
      ]
    },
    {
      level: 3,
      skillBonuses: [
        {
          criticalRateBonus: 12,
          minHitZone: 0,
          maxHitZone: 100,
          description: "会心率+12%"
        }
      ]
    },
    {
      level: 4,
      skillBonuses: [
        {
          criticalRateBonus: 16,
          minHitZone: 0,
          maxHitZone: 100,
          description: "会心率+16%"
        }
      ]
    },
    {
      level: 5,
      skillBonuses: [
        {
          criticalRateBonus: 20,
          minHitZone: 0,
          maxHitZone: 100,
          description: "会心率+20%"
        }
      ]
    }
  ]
);
const skillsByCategory = {
  weapon: [attackBoost, criticalBoost, Hien, mindEye, FireAttack, WaterAttack, ThunderAttack, IceAttack, DragonAttack, nurebaMon, criticalEye],
  armor: [adrenalineRush, challenger, counterstrike, maximumMight, peakPerformance, latentPower, masterfulStrike, weaknessExploit, chainCrit, elementalAbsorption, zenState, resentment, OffensiveGuard],
  group: [nushiSoul],
  series: [kokusyokuIttai]
};
const skillCategoryLabels = {
  weapon: "武器スキル",
  armor: "防具スキル",
  group: "グループスキル",
  series: "シリーズスキル"
};
const TACHI_MOTIONS = [
  { name: "縦斬り1", motionValue: 24, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "縦斬り2", motionValue: 18, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "逆袈裟斬り", motionValue: 32, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "赤刃斬り I 1", motionValue: 33, elementMultiplier: 0.7, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "赤刃斬り I 2", motionValue: 16, elementMultiplier: 0.7, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "赤刃斬り II 1", motionValue: 9, elementMultiplier: 0.7, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "赤刃斬り II 2", motionValue: 18, elementMultiplier: 0.7, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "赤刃斬り III 1", motionValue: 28, elementMultiplier: 0.7, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "赤刃斬り III 2", motionValue: 16, elementMultiplier: 0.7, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "赤刃斬り III 3", motionValue: 49, elementMultiplier: 0.7, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "突き", motionValue: 18, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "斬り上げ", motionValue: 18, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "切り下がり", motionValue: 22, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り I", motionValue: 31, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り II", motionValue: 30, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り III 1", motionValue: 14, elementMultiplier: 1, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り III 2", motionValue: 19, elementMultiplier: 1, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り III 3", motionValue: 34, elementMultiplier: 1, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り I (ゲージなし)", motionValue: 14, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り II (ゲージなし)", motionValue: 14, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り III 1 (ゲージなし)", motionValue: 8, elementMultiplier: 1, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り III 2 (ゲージなし)", motionValue: 11, elementMultiplier: 1, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "気刃斬り III 3 (ゲージなし)", motionValue: 19, elementMultiplier: 1, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "移動気刃斬り I 1", motionValue: 31, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "移動気刃斬りII 1", motionValue: 14, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "移動気刃斬りII 2", motionValue: 26, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "移動気刃斬りI 1 (ゲージなし)", motionValue: 14, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "移動気刃斬りII 1 (ゲージなし)", motionValue: 8, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "移動気刃斬りII 2 (ゲージなし)", motionValue: 18, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "気刃大回転斬り", motionValue: 38, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "気刃大回転斬り (ゲージなし)", motionValue: 19, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "赤刃旋転斬", motionValue: 55, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash", isJump: true },
  { name: "気刃踏み込み斬り", motionValue: 28, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "気刃踏み込み斬り (ゲージなし)", motionValue: 18, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "見切り切り", motionValue: 18, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "見切り切り (ゲージなし)", motionValue: 11, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "見切り切り (成功時)", motionValue: 23.4, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "見切り切り・旋1", motionValue: 22, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "見切り切り・旋2", motionValue: 13, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "見切り切り・旋1 (成功時)", motionValue: 28.6, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "見切り切り・旋2 (成功時)", motionValue: 16.9, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "居合抜刀斬り1", motionValue: 18, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "居合抜刀斬り2", motionValue: 13, elementMultiplier: 1, sharpnessModifier: 0.5, hitCount: 1, attackType: "slash" },
  { name: "居合抜刀気刃斬り1 (ゲージ段階：無)", motionValue: 17, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "居合抜刀気刃斬り1 (ゲージ段階：白)", motionValue: 19, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "居合抜刀気刃斬り2 (ゲージ段階：白)", motionValue: 55, elementMultiplier: 1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "居合抜刀気刃斬り1 (ゲージ段階：黄)", motionValue: 31, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "居合抜刀気刃斬り2 (ゲージ段階：黄)", motionValue: 72, elementMultiplier: 1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "居合抜刀気刃斬り1 (ゲージ段階：赤)", motionValue: 39, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "居合抜刀気刃斬り2 (ゲージ段階：赤)", motionValue: 86, elementMultiplier: 1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "気刃突き", motionValue: 19, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "兜割 (ゲージ段階：白) (x7)", motionValue: 15, elementMultiplier: 0.2, sharpnessModifier: 0, hitCount: 7, attackType: "slash", isJump: true },
  { name: "兜割 (ゲージ段階：黄) (x7)", motionValue: 20, elementMultiplier: 0.2, sharpnessModifier: 0, hitCount: 7, attackType: "slash", isJump: true },
  { name: "兜割 (ゲージ段階：赤) (x7)", motionValue: 23, elementMultiplier: 0.2, sharpnessModifier: 0, hitCount: 7, attackType: "slash", isJump: true },
  { name: "練気解放無双斬り1 (x2)", motionValue: 5, elementMultiplier: 1, sharpnessModifier: 0.3, hitCount: 2, attackType: "slash" },
  { name: "練気解放無双斬り2 (x3)", motionValue: 9, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 3, attackType: "slash" },
  { name: "練気解放無双斬り3 (x3)", motionValue: 14, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 3, attackType: "slash" },
  { name: "練気解放無双斬り4 (x3)", motionValue: 20, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 3, attackType: "slash" },
  { name: "練気解放無双斬り5 (x3)", motionValue: 32, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 3, attackType: "slash" }
];
const GREATSWORD_MOTIONS = [
  { name: "Charged Slash Lv0", motionValue: 78, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Charged Slash Lv1", motionValue: 101, elementMultiplier: 1.1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Charged Slash Lv2", motionValue: 129, elementMultiplier: 1.2, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Charged Slash Lv3", motionValue: 160, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Wide Slash", motionValue: 42, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Offset Rising Slash Lv0", motionValue: 38, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Offset Rising Slash Lv1", motionValue: 94, elementMultiplier: 1.1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Offset Rising Slash Lv2", motionValue: 121, elementMultiplier: 1.2, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Offset Rising Slash Lv3", motionValue: 151, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Follow-up Cross Slash 1 Lv1", motionValue: 44, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Follow-up Cross Slash 2 Lv1", motionValue: 180, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Follow-up Cross Slash 1 Lv2", motionValue: 49, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Follow-up Cross Slash 2 Lv2", motionValue: 200, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Follow-up Cross Slash 1 Lv3", motionValue: 58, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Follow-up Cross Slash 2 Lv3", motionValue: 230, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Kick", motionValue: 5, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "blunt" },
  { name: "Side Blow", motionValue: 16, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "blunt" },
  { name: "Strong Charged Slash Lv0 (Unavailable)", motionValue: 80, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Strong Charged Slash Lv1", motionValue: 108, elementMultiplier: 1.2, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Strong Charged Slash Lv2", motionValue: 140, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Strong Charged Slash Lv3", motionValue: 176, elementMultiplier: 1.4, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Strong Wide Slash Lv0 (Unavailable)", motionValue: 72, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Strong Wide Slash Lv1", motionValue: 87, elementMultiplier: 1.5, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Strong Wide Slash Lv2", motionValue: 105, elementMultiplier: 1.7, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Strong Wide Slash Lv3", motionValue: 130, elementMultiplier: 2, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Tackle Lv0", motionValue: 23, elementMultiplier: 0, sharpnessModifier: 1, hitCount: 1, attackType: "blunt" },
  { name: "Tackle Lv1", motionValue: 26, elementMultiplier: 0, sharpnessModifier: 1, hitCount: 1, attackType: "blunt" },
  { name: "Tackle Lv2", motionValue: 35, elementMultiplier: 0, sharpnessModifier: 1, hitCount: 1, attackType: "blunt" },
  { name: "Tackle Lv3", motionValue: 48, elementMultiplier: 0, sharpnessModifier: 1.2, hitCount: 1, attackType: "blunt" },
  { name: "Leaping Wide Slash Lv0", motionValue: 88, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Leaping Wide Slash Lv1", motionValue: 106, elementMultiplier: 2, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Leaping Wide Slash Lv2", motionValue: 128, elementMultiplier: 2.5, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Leaping Wide Slash Lv3", motionValue: 159, elementMultiplier: 3.1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "True Charged Slash 1 Lv0 (Unavailable)", motionValue: 10, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "True Charged Slash 1 Lv1", motionValue: 12, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "True Charged Slash 1 Lv2", motionValue: 14, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "True Charged Slash 1 Lv3", motionValue: 16, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "True Charged Slash 2 Lv0 (Unavailable)", motionValue: 82, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "True Charged Slash 2 Lv1", motionValue: 102, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "True Charged Slash 2 Lv2", motionValue: 149, elementMultiplier: 1.4, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "True Charged Slash 2 Lv3", motionValue: 190, elementMultiplier: 1.5, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Power True Charged Slash 2 Lv0 (Unavailable)", motionValue: 90, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Power True Charged Slash 2 Lv1", motionValue: 121, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Power True Charged Slash 2 Lv2", motionValue: 181, elementMultiplier: 1.4, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Power True Charged Slash 2 Lv3", motionValue: 241, elementMultiplier: 1.5, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Jumping Charged Slash Lv0", motionValue: 48, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Jumping Charged Slash Lv1", motionValue: 58, elementMultiplier: 1.1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Jumping Charged Slash Lv2", motionValue: 69, elementMultiplier: 1.2, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Jumping Charged Slash Lv3", motionValue: 87, elementMultiplier: 1.3, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Charged Rising Slash Lv0", motionValue: 48, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Charged Rising Slash Lv1", motionValue: 48, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Charged Rising Slash Lv2", motionValue: 72, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Charged Rising Slash Lv3", motionValue: 98, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Plunging Thrust Lv0", motionValue: 36, elementMultiplier: 0.4, sharpnessModifier: 0.2, hitCount: 1, attackType: "slash" },
  { name: "Plunging Thrust Lv1", motionValue: 42, elementMultiplier: 0.4, sharpnessModifier: 0.2, hitCount: 1, attackType: "slash" },
  { name: "Plunging Thrust Lv2", motionValue: 50, elementMultiplier: 0.4, sharpnessModifier: 0.2, hitCount: 1, attackType: "slash" },
  { name: "Plunging Thrust Lv3", motionValue: 58, elementMultiplier: 0.4, sharpnessModifier: 0.2, hitCount: 1, attackType: "slash" },
  { name: "Scaling Drop Slash 1", motionValue: 20, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Scaling Drop Slash 2", motionValue: 45, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Seikret Attack I", motionValue: 15, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Seikret Attack II", motionValue: 10, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Dismount Attack 1", motionValue: 20, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Dismount Attack 2", motionValue: 50, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv0", motionValue: 15, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv1", motionValue: 20, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv2", motionValue: 26, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv3", motionValue: 33, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv0 Extra Hit", motionValue: 14, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv1 Extra Hit", motionValue: 16, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv2 Extra Hit", motionValue: 18, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv3 Extra Hit", motionValue: 24, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv0 Multihit", motionValue: 10, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv1 Multihit", motionValue: 11, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv2 Multihit", motionValue: 12, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv3 Multihit", motionValue: 13, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv0 Finisher 1", motionValue: 15, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv1 Finisher 1", motionValue: 20, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv2 Finisher 1", motionValue: 22, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv3 Finisher 1", motionValue: 24, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv0 Finisher 2", motionValue: 6, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv1 Finisher 2", motionValue: 6, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv2 Finisher 2", motionValue: 6, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv3 Finisher 2", motionValue: 6, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv0 Finisher 3", motionValue: 2, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv1 Finisher 3", motionValue: 2, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv2 Finisher 3", motionValue: 2, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Focus Strike: Perforate Lv3 Finisher 3", motionValue: 2, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Aerial Focus Strike Lv0", motionValue: 15, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "Aerial Focus Strike Lv1", motionValue: 20, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "Aerial Focus Strike Lv2", motionValue: 26, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "Aerial Focus Strike Lv3", motionValue: 33, elementMultiplier: 0.4, sharpnessModifier: 0.3, hitCount: 1, attackType: "slash" },
  { name: "Aerial Focus Strike Extra Hit Lv0", motionValue: 14, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Aerial Focus Strike Extra Hit Lv1", motionValue: 16, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Aerial Focus Strike Extra Hit Lv2", motionValue: 18, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Aerial Focus Strike Extra Hit Lv3", motionValue: 24, elementMultiplier: 0.1, sharpnessModifier: 0, hitCount: 1, attackType: "slash" },
  { name: "Clash Finisher", motionValue: 90, elementMultiplier: 1, sharpnessModifier: 1, hitCount: 1, attackType: "slash" },
  { name: "Mount Attack", motionValue: 90, elementMultiplier: 1, sharpnessModifier: 0.1, hitCount: 1, attackType: "slash" },
  { name: "Mount Finisher 1", motionValue: 120, elementMultiplier: 1, sharpnessModifier: 0.1, hitCount: 1, attackType: "slash" },
  { name: "Mount Finisher Multihit", motionValue: 10, elementMultiplier: 1, sharpnessModifier: 0.1, hitCount: 1, attackType: "slash" },
  { name: "Mount Finisher 2", motionValue: 60, elementMultiplier: 1, sharpnessModifier: 0.1, hitCount: 1, attackType: "slash" }
];
const MOTIONS_BY_WEAPON_TYPE = {
  longsword: TACHI_MOTIONS,
  greatsword: GREATSWORD_MOTIONS
};
const Arshveldo = {
  name: "アルシュベルド",
  parts: [
    {
      name: "頭",
      states: [
        { state: "normal", slashHitZone: 45, bluntHitZone: 48, shotHitZone: 45, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 45, bluntHitZone: 48, shotHitZone: 45, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 }
      ]
    },
    {
      name: "胴体",
      states: [
        { state: "normal", slashHitZone: 28, bluntHitZone: 30, shotHitZone: 20, fireHitZone: 1, waterHitZone: 1, thunderHitZone: 1, iceHitZone: 1, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 60, bluntHitZone: 62, shotHitZone: 65, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 }
      ]
    },
    {
      name: "翼",
      states: [
        { state: "normal", slashHitZone: 42, bluntHitZone: 40, shotHitZone: 38, fireHitZone: 2, waterHitZone: 2, thunderHitZone: 2, iceHitZone: 2, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 60, bluntHitZone: 63, shotHitZone: 65, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 }
      ]
    },
    {
      name: "鎖翼刃",
      states: [
        { state: "normal", slashHitZone: 50, bluntHitZone: 50, shotHitZone: 45, fireHitZone: 0, waterHitZone: 0, thunderHitZone: 0, iceHitZone: 0, dragonHitZone: 0 },
        { state: "wounded", slashHitZone: 70, bluntHitZone: 70, shotHitZone: 68, fireHitZone: 30, waterHitZone: 3, thunderHitZone: 3, iceHitZone: 3, dragonHitZone: 38 },
        { state: "exposed", slashHitZone: 52, bluntHitZone: 52, shotHitZone: 48, fireHitZone: 20, waterHitZone: 20, thunderHitZone: 20, iceHitZone: 20, dragonHitZone: 25 }
      ]
    },
    {
      name: "脚",
      states: [
        { state: "normal", slashHitZone: 26, bluntHitZone: 25, shotHitZone: 20, fireHitZone: 2, waterHitZone: 2, thunderHitZone: 2, iceHitZone: 2, dragonHitZone: 4 },
        { state: "wounded", slashHitZone: 60, bluntHitZone: 62, shotHitZone: 65, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 }
      ]
    },
    {
      name: "尻尾",
      states: [
        { state: "normal", slashHitZone: 45, bluntHitZone: 40, shotHitZone: 42, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 60, bluntHitZone: 62, shotHitZone: 65, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 15 }
      ]
    }
  ]
};
const GoreMagala = {
  name: "ゴア・マガラ",
  parts: [
    {
      name: "頭",
      states: [
        { state: "normal", slashHitZone: 65, bluntHitZone: 55, shotHitZone: 45, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 },
        { state: "wounded", slashHitZone: 75, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 }
      ]
    },
    {
      name: "触角",
      states: [
        { state: "normal", slashHitZone: 75, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 25 },
        { state: "wounded", slashHitZone: 80, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 25 }
      ]
    },
    {
      name: "口",
      states: [
        { state: "exposed", slashHitZone: 75, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 15 }
      ]
    },
    {
      name: "首",
      states: [
        { state: "normal", slashHitZone: 45, bluntHitZone: 45, shotHitZone: 25, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "胴体",
      states: [
        { state: "normal", slashHitZone: 25, bluntHitZone: 25, shotHitZone: 20, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "翼",
      states: [
        { state: "normal", slashHitZone: 26, bluntHitZone: 26, shotHitZone: 15, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "翼脚",
      states: [
        { state: "normal", slashHitZone: 27, bluntHitZone: 27, shotHitZone: 20, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "翼脚（変化時）",
      states: [
        { state: "normal", slashHitZone: 60, bluntHitZone: 55, shotHitZone: 45, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 65, shotHitZone: 65, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "前脚",
      states: [
        { state: "normal", slashHitZone: 42, bluntHitZone: 42, shotHitZone: 25, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "後脚",
      states: [
        { state: "normal", slashHitZone: 38, bluntHitZone: 38, shotHitZone: 25, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "尻尾",
      states: [
        { state: "normal", slashHitZone: 38, bluntHitZone: 38, shotHitZone: 25, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 70, shotHitZone: 50, fireHitZone: 20, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 10 }
      ]
    }
  ]
};
const NekoTrainingTarupuncher = {
  name: "ネコ式訓練タルパンチャー",
  parts: [
    {
      name: "やわらかい",
      states: [
        {
          state: "normal",
          slashHitZone: 80,
          bluntHitZone: 80,
          shotHitZone: 80,
          fireHitZone: 30,
          waterHitZone: 30,
          thunderHitZone: 30,
          iceHitZone: 30,
          dragonHitZone: 30
        }
      ]
    },
    {
      name: "かたい",
      states: [
        {
          state: "normal",
          slashHitZone: 40,
          bluntHitZone: 40,
          shotHitZone: 40,
          fireHitZone: 15,
          waterHitZone: 15,
          thunderHitZone: 15,
          iceHitZone: 15,
          dragonHitZone: 15
        }
      ]
    },
    {
      name: "傷",
      states: [
        {
          state: "wounded",
          slashHitZone: 100,
          bluntHitZone: 100,
          shotHitZone: 100,
          fireHitZone: 30,
          waterHitZone: 30,
          thunderHitZone: 30,
          iceHitZone: 30,
          dragonHitZone: 30
        }
      ]
    }
  ]
};
const NuEgdra = {
  name: "ヌ・エグドラ",
  parts: [
    {
      name: "頭",
      states: [
        { state: "normal", slashHitZone: 70, bluntHitZone: 75, shotHitZone: 50, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: "wounded", slashHitZone: 80, bluntHitZone: 85, shotHitZone: 60, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "口",
      states: [
        { state: "normal", slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 0, waterHitZone: 20, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "胴体",
      states: [
        { state: "normal", slashHitZone: 50, bluntHitZone: 65, shotHitZone: 43, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 75, shotHitZone: 58, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "触腕",
      states: [
        { state: "normal", slashHitZone: 30, bluntHitZone: 43, shotHitZone: 25, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "傘膜",
      states: [
        { state: "normal", slashHitZone: 30, bluntHitZone: 43, shotHitZone: 25, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 75, shotHitZone: 58, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "腕6本",
      states: [
        { state: "normal", slashHitZone: 55, bluntHitZone: 48, shotHitZone: 48, fireHitZone: 0, waterHitZone: 15, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 },
        { state: "wounded", slashHitZone: 65, bluntHitZone: 75, shotHitZone: 58, fireHitZone: 0, waterHitZone: 25, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 10 }
      ]
    }
  ]
};
class Monster {
  // 部位情報
  constructor(name, parts) {
    __publicField(this, "name");
    // モンスター名
    __publicField(this, "parts");
    this.name = name;
    this.parts = parts;
  }
  // 必要に応じてモンスターの情報を取得するメソッドを追加できます
}
const Redau = new Monster("レ・ダウ", [
  {
    name: "頭",
    states: [
      {
        state: "normal",
        slashHitZone: 60,
        bluntHitZone: 65,
        shotHitZone: 50,
        fireHitZone: 5,
        waterHitZone: 15,
        iceHitZone: 20,
        thunderHitZone: 0,
        dragonHitZone: 5
      },
      {
        state: "wounded",
        slashHitZone: 70,
        bluntHitZone: 75,
        shotHitZone: 60,
        fireHitZone: 5,
        waterHitZone: 20,
        iceHitZone: 25,
        thunderHitZone: 0,
        dragonHitZone: 5
      },
      {
        state: "exposed",
        slashHitZone: 80,
        bluntHitZone: 80,
        shotHitZone: 70,
        fireHitZone: 5,
        waterHitZone: 20,
        iceHitZone: 25,
        thunderHitZone: 0,
        dragonHitZone: 5
      }
    ]
  },
  {
    name: "胴体",
    states: [
      {
        state: "normal",
        slashHitZone: 30,
        bluntHitZone: 30,
        shotHitZone: 25,
        fireHitZone: 5,
        waterHitZone: 5,
        iceHitZone: 5,
        thunderHitZone: 0,
        dragonHitZone: 5
      },
      {
        state: "wounded",
        slashHitZone: 65,
        bluntHitZone: 65,
        shotHitZone: 55,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5
      }
    ]
  },
  {
    name: "翼",
    states: [
      {
        state: "normal",
        slashHitZone: 45,
        bluntHitZone: 50,
        shotHitZone: 45,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5
      },
      {
        state: "wounded",
        slashHitZone: 65,
        bluntHitZone: 65,
        shotHitZone: 55,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5
      }
    ]
  },
  {
    name: "脚",
    states: [
      {
        state: "normal",
        slashHitZone: 37,
        bluntHitZone: 37,
        shotHitZone: 33,
        fireHitZone: 5,
        waterHitZone: 5,
        iceHitZone: 5,
        thunderHitZone: 0,
        dragonHitZone: 5
      },
      {
        state: "wounded",
        slashHitZone: 65,
        bluntHitZone: 65,
        shotHitZone: 55,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5
      }
    ]
  },
  {
    name: "尻尾",
    states: [
      {
        state: "normal",
        slashHitZone: 45,
        bluntHitZone: 40,
        shotHitZone: 45,
        fireHitZone: 5,
        waterHitZone: 5,
        iceHitZone: 10,
        thunderHitZone: 0,
        dragonHitZone: 5
      },
      {
        state: "wounded",
        slashHitZone: 65,
        bluntHitZone: 65,
        shotHitZone: 55,
        fireHitZone: 5,
        waterHitZone: 10,
        iceHitZone: 15,
        thunderHitZone: 0,
        dragonHitZone: 5
      }
    ]
  }
]);
const UzTunaParts = [
  {
    name: "頭",
    states: [
      { state: "normal", slashHitZone: 40, bluntHitZone: 60, shotHitZone: 50, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 20, iceHitZone: 5, dragonHitZone: 5 },
      { state: "wounded", slashHitZone: 88, bluntHitZone: 90, shotHitZone: 88, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      { state: "exposed", slashHitZone: 90, bluntHitZone: 90, shotHitZone: 86, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 }
    ]
  },
  {
    name: "胴体",
    states: [
      { state: "normal", slashHitZone: 50, bluntHitZone: 45, shotHitZone: 35, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 },
      { state: "wounded", slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 }
    ]
  },
  {
    name: "前脚",
    states: [
      { state: "normal", slashHitZone: 65, bluntHitZone: 65, shotHitZone: 55, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 10, iceHitZone: 5, dragonHitZone: 5 },
      { state: "wounded", slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 }
    ]
  },
  {
    name: "後脚",
    states: [
      { state: "normal", slashHitZone: 55, bluntHitZone: 55, shotHitZone: 45, fireHitZone: 10, waterHitZone: 0, thunderHitZone: 15, iceHitZone: 5, dragonHitZone: 5 },
      { state: "wounded", slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 }
    ]
  },
  {
    name: "尻尾",
    states: [
      { state: "normal", slashHitZone: 45, bluntHitZone: 45, shotHitZone: 40, fireHitZone: 5, waterHitZone: 0, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 5 },
      { state: "wounded", slashHitZone: 80, bluntHitZone: 80, shotHitZone: 80, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 }
    ]
  },
  {
    name: "ヴェール",
    states: [
      { state: "normal", slashHitZone: 90, bluntHitZone: 60, shotHitZone: 60, fireHitZone: 15, waterHitZone: 0, thunderHitZone: 25, iceHitZone: 5, dragonHitZone: 5 }
    ]
  }
];
const UzTuna = new Monster("ウズ・トゥナ", UzTunaParts);
const ZoShia = {
  name: "ゾ・シア",
  parts: [
    {
      name: "頭（白纏晶）",
      states: [
        { state: "normal", slashHitZone: 40, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 }
      ]
    },
    {
      name: "頭",
      states: [
        { state: "normal", slashHitZone: 60, bluntHitZone: 65, shotHitZone: 60, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
        { state: "wounded", slashHitZone: 70, bluntHitZone: 75, shotHitZone: 70, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 }
      ]
    },
    {
      name: "頭2",
      states: [
        { state: "normal", slashHitZone: 65, bluntHitZone: 70, shotHitZone: 65, fireHitZone: 15, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 10, dragonHitZone: 30 },
        { state: "wounded", slashHitZone: 75, bluntHitZone: 80, shotHitZone: 75, fireHitZone: 15, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 10, dragonHitZone: 30 }
      ]
    },
    {
      name: "首",
      states: [
        { state: "normal", slashHitZone: 30, bluntHitZone: 30, shotHitZone: 40, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 30 }
      ]
    },
    {
      name: "胴体",
      states: [
        { state: "normal", slashHitZone: 25, bluntHitZone: 25, shotHitZone: 5, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "前脚",
      states: [
        { state: "normal", slashHitZone: 45, bluntHitZone: 45, shotHitZone: 45, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 }
      ]
    },
    {
      name: "後脚",
      states: [
        { state: "normal", slashHitZone: 25, bluntHitZone: 25, shotHitZone: 25, fireHitZone: 5, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 }
      ]
    },
    {
      name: "翼碗（白纏晶）",
      states: [
        { state: "normal", slashHitZone: 40, bluntHitZone: 40, shotHitZone: 10, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 15 }
      ]
    },
    {
      name: "翼碗",
      states: [
        { state: "normal", slashHitZone: 80, bluntHitZone: 80, shotHitZone: 55, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 20 },
        { state: "wounded", slashHitZone: 90, bluntHitZone: 90, shotHitZone: 65, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 },
        { state: "exposed", slashHitZone: 100, bluntHitZone: 100, shotHitZone: 100, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 20 }
      ]
    },
    {
      name: "翼碗2",
      states: [
        { state: "normal", slashHitZone: 85, bluntHitZone: 85, shotHitZone: 60, fireHitZone: 20, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 30 },
        { state: "wounded", slashHitZone: 95, bluntHitZone: 95, shotHitZone: 70, fireHitZone: 20, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 15, dragonHitZone: 30 }
      ]
    },
    {
      name: "尻尾",
      states: [
        { state: "normal", slashHitZone: 35, bluntHitZone: 35, shotHitZone: 40, fireHitZone: 10, waterHitZone: 5, thunderHitZone: 5, iceHitZone: 5, dragonHitZone: 10 }
      ]
    }
  ]
};
const MONSTER_LIST = [
  NekoTrainingTarupuncher,
  Redau,
  UzTuna,
  NuEgdra,
  Arshveldo,
  GoreMagala,
  ZoShia
];
class DamageCalculator {
  static calculatePhysicalDamage(params) {
    const {
      baseWeaponMultiplier,
      additionAttackBonus,
      attackMultiplierBonus,
      motionValue,
      sharpnessModifier,
      criticalDamageModifier = 1,
      // デフォルト値を1.0に修正
      // 3種肉質
      slashHitZone,
      bluntHitZone,
      shotHitZone,
      attackType,
      hitcount = 1
    } = params;
    let physicalHitZone = 0;
    switch (attackType) {
      case "slash":
        physicalHitZone = slashHitZone;
        break;
      case "blunt":
        physicalHitZone = bluntHitZone;
        break;
      case "shot":
        physicalHitZone = shotHitZone;
        break;
      default:
        physicalHitZone = slashHitZone;
    }
    const effectiveWeaponMultiplier = baseWeaponMultiplier * attackMultiplierBonus + additionAttackBonus;
    const physicalDamage = effectiveWeaponMultiplier * motionValue * sharpnessModifier * criticalDamageModifier * physicalHitZone / 1e4;
    let totalPhysical = 0;
    for (let i = 0; i < hitcount; i++) {
      totalPhysical += Math.round(physicalDamage * 10) / 10;
    }
    return totalPhysical;
  }
  static calculateElementalDamage(params) {
    const {
      baseElementValue,
      elementMultiplier,
      elementAddition,
      elementModifier,
      elementalHitZone,
      elementalSharpnessModifier,
      elementalCriticalModifier = 1,
      // デフォルト1.0
      hitcount = 1
    } = params;
    let total = 0;
    for (let i = 0; i < hitcount; i++) {
      const perHit = (baseElementValue * elementMultiplier + elementAddition) * elementalSharpnessModifier * (elementModifier ?? 1) * (elementalHitZone / 100) * elementalCriticalModifier / 10;
      total += Math.round(perHit * 10) / 10;
    }
    return total;
  }
  static calculateTotalDamage(params) {
    const physicalDamage = this.calculatePhysicalDamage(params);
    const elementalDamage = this.calculateElementalDamage(params);
    return physicalDamage + elementalDamage;
  }
}
const SHARPNESS_LEVELS = [
  { color: "red", modifier: 0.5, elementModifier: 0.25 },
  { color: "orange", modifier: 0.75, elementModifier: 0.5 },
  { color: "yellow", modifier: 1, elementModifier: 0.75 },
  { color: "green", modifier: 1.05, elementModifier: 1 },
  { color: "blue", modifier: 1.2, elementModifier: 1.063 },
  { color: "white", modifier: 1.32, elementModifier: 1.15 }
];
const TACHI_SPIRIT_GAUGE_MODIFIER = {
  none: 1,
  white: 1.025,
  yellow: 1.05,
  red: 1.1
};
const ELEMENT_HITZONE_KEY = {
  fire: "fireHitZone",
  water: "waterHitZone",
  thunder: "thunderHitZone",
  ice: "iceHitZone",
  dragon: "dragonHitZone"
};
function getApplicableSkills(selectedSkills, motion, state) {
  return (selectedSkills || []).flatMap((skill) => {
    if (Array.isArray(skill.skillData)) {
      return skill.skillData.map((s) => ({
        ...s,
        key: skill.key,
        level: skill.level
      }));
    }
    return [];
  }).filter((skillParam) => {
    var _a;
    if (!!skillParam.isJumpAttackOnly && !motion.isJump) return false;
    if (skillParam.applicableStates && !((_a = skillParam.applicableStates) == null ? void 0 : _a.includes(state.state))) return false;
    const min = skillParam.minHitZone;
    const max = skillParam.maxHitZone;
    const hitZone = state[`${motion.attackType}HitZone`];
    return hitZone >= min && hitZone <= max;
  });
}
function getPhysicalParams(weaponInfo, motion, sharpnessModifier, elementalSharpnessModifier, state, applicableSkills) {
  const totalAttackBonus = applicableSkills.reduce(
    (sum, s) => sum + (s.additionAttackBonus ?? 0),
    0
  );
  let totalAttackMultiplierBonus = applicableSkills.reduce(
    (mul, s) => mul * (s.attackMultiplierBonus ?? 1),
    1
  );
  if (weaponInfo.weaponType === "longsword" && weaponInfo.tachiSpiritGauge) {
    totalAttackMultiplierBonus *= TACHI_SPIRIT_GAUGE_MODIFIER[weaponInfo.tachiSpiritGauge];
  }
  return {
    baseWeaponMultiplier: weaponInfo.weaponMultiplier,
    additionAttackBonus: totalAttackBonus,
    attackMultiplierBonus: totalAttackMultiplierBonus,
    motionValue: motion.motionValue,
    sharpnessModifier,
    elementalSharpnessModifier,
    // 追加
    criticalDamageModifier: 1,
    criticalRate: weaponInfo.criticalRate + applicableSkills.reduce((x, skill) => x + (skill.criticalRateBonus ?? 0), 0),
    criticalRateBonus: 0,
    slashHitZone: state.slashHitZone,
    bluntHitZone: state.bluntHitZone,
    shotHitZone: state.shotHitZone,
    attackType: motion.attackType,
    baseElementValue: weaponInfo.baseElementValue,
    elementMultiplier: motion.elementMultiplier,
    elementAddition: 0,
    elementModifier: 1,
    elementalHitZone: state.slashHitZone,
    // ←ここは属性ごとに上書きするので仮
    minHitZone: 0,
    maxHitZone: 100,
    applicableStates: [
      state.state
    ],
    elementalCriticalModifier: 1,
    hitcount: motion.hitCount ?? 1
  };
}
function calculateDamageTable(weaponInfo, selectedMotions, selectedMonster, sharpnessColor = "white", selectedSkills = []) {
  if (!selectedMonster || selectedMotions.length === 0) return [];
  const sharpnessObj = SHARPNESS_LEVELS.find((s) => s.color === sharpnessColor) ?? SHARPNESS_LEVELS[5];
  const damageTableRows = [];
  selectedMonster.parts.forEach((part) => {
    part.states.forEach((state) => {
      var _a;
      let totalPhysical = 0;
      let totalCritPhysical = 0;
      let totalElemental = 0;
      let totalCritElemental = 0;
      let totalMotionValue = 0;
      let maxCriticalBonus = Number.NEGATIVE_INFINITY;
      let totalCriticalDamageModifier = 0;
      selectedMotions.forEach((motion) => {
        const applicableSkills = getApplicableSkills(
          selectedSkills,
          motion,
          state
        );
        totalCriticalDamageModifier += applicableSkills.reduce(
          (sum, s) => sum + (s.criticalDamageModifier ?? 0),
          0
        );
        const critBonus = applicableSkills.reduce(
          (sum, s) => sum + (s.criticalRateBonus ?? 0),
          0
        );
        if (critBonus > maxCriticalBonus) {
          maxCriticalBonus = critBonus;
        }
        const physicalParams = getPhysicalParams(
          weaponInfo,
          motion,
          sharpnessObj.modifier,
          sharpnessObj.elementModifier,
          // 追加
          state,
          applicableSkills
        );
        let elementalHitZone = state.slashHitZone;
        if (weaponInfo.elementType && weaponInfo.elementType.key !== "none") {
          const key = weaponInfo.elementType.key;
          const hitZoneKey = ELEMENT_HITZONE_KEY[key] || "slashHitZone";
          if (state[hitZoneKey] !== void 0) {
            elementalHitZone = state[hitZoneKey];
          }
        }
        totalPhysical += DamageCalculator.calculatePhysicalDamage({
          ...physicalParams,
          criticalDamageModifier: 1
        });
        totalCritPhysical += DamageCalculator.calculatePhysicalDamage({
          ...physicalParams,
          criticalDamageModifier: 1.25 + totalCriticalDamageModifier
        });
        let elemental = 0;
        let critElemental = 0;
        if (weaponInfo.elementType && weaponInfo.elementType.key !== "none") {
          const elementalParams = {
            ...physicalParams,
            attackType: "slash",
            // 属性には影響しないのでダミー
            elementalSharpnessModifier: sharpnessObj.elementModifier,
            elementAddition: applicableSkills.reduce(
              (sum, s) => sum + (s.elementAddition ?? 0),
              0
            ),
            elementModifier: applicableSkills.reduce(
              (mul, s) => mul * (s.elementModifier ?? 1),
              1
            ),
            elementalHitZone,
            elementalCriticalModifier: applicableSkills.reduce(
              (mul, s) => mul * (s.elementalCriticalModifier ?? 1),
              1
            ),
            hitcount: motion.hitCount ?? 1
          };
          elemental = DamageCalculator.calculateElementalDamage(elementalParams);
          critElemental = DamageCalculator.calculateElementalDamage({
            ...elementalParams,
            elementModifier: elementalParams.elementModifier
          });
        }
        totalElemental += elemental;
        totalCritElemental += critElemental;
        totalMotionValue += motion.motionValue;
      });
      const critRate = Math.max(
        0,
        Math.min(1, (weaponInfo.criticalRate + (maxCriticalBonus === Number.NEGATIVE_INFINITY ? 0 : maxCriticalBonus)) / 100)
      );
      const total = totalPhysical + totalElemental;
      const critTotal = totalCritPhysical + totalCritElemental;
      const expected = Math.round((total * (1 - critRate) + critTotal * critRate) * 100) / 100;
      damageTableRows.push({
        part: part.name,
        state: state.state,
        damage: `${total} (${totalElemental})`,
        critDamage: `${critTotal} (${totalCritElemental})`,
        expected: `${expected} (${totalElemental})`,
        physical: totalPhysical,
        elemental: totalElemental,
        critRate,
        baseWeaponMultiplier: weaponInfo.weaponMultiplier,
        attackMultiplierBonus: 1,
        additionAttackBonus: 0,
        motionValue: totalMotionValue,
        sharpnessModifier: sharpnessObj.modifier,
        criticalDamageModifier: 1,
        baseElementValue: weaponInfo.baseElementValue,
        elementMultiplier: ((_a = selectedMotions[0]) == null ? void 0 : _a.elementMultiplier) ?? 1,
        elementAddition: 0,
        elementModifier: 1
      });
    });
  });
  return damageTableRows;
}
function useDamageCalculator() {
  const [weaponInfo, setWeaponInfo] = reactExports.useState({
    weaponType: "longsword",
    weaponMultiplier: 220,
    baseElementValue: 0,
    elementType: { key: "none", label: "無属性" },
    criticalRate: 5
  });
  const [selectedSkills, setSelectedSkills] = reactExports.useState([]);
  const [selectedMotions, setSelectedMotions] = reactExports.useState([]);
  const [selectedMonster, setSelectedMonster] = reactExports.useState(null);
  const [damageResult, setDamageResult] = reactExports.useState(null);
  const [damageTableRows, setDamageTableRows] = reactExports.useState([]);
  const [sharpness, setSharpness] = reactExports.useState("white");
  const [presetDialogOpen, setPresetDialogOpen] = reactExports.useState(false);
  const [tabIndex, setTabIndex] = reactExports.useState(0);
  const [results, setResults] = reactExports.useState([]);
  const [errorMessage, setErrorMessage] = reactExports.useState(null);
  const skillCategories = Object.keys(skillsByCategory);
  const [skillTab, setSkillTab] = reactExports.useState(0);
  const availableMotions = MOTIONS_BY_WEAPON_TYPE[weaponInfo.weaponType] || [];
  const handleLoadPreset = (preset) => {
    if (!preset) return;
    if (preset.weaponInfo) setWeaponInfo(preset.weaponInfo);
    if (preset.selectedSkills) setSelectedSkills(preset.selectedSkills);
    if (preset.selectedMotions) setSelectedMotions(preset.selectedMotions);
    if (preset.selectedMonster) {
      const found = MONSTER_LIST.find((m) => {
        var _a;
        return m.name === ((_a = preset.selectedMonster) == null ? void 0 : _a.name);
      });
      setSelectedMonster(found ? found : null);
    }
    if (preset.sharpness) setSharpness(preset.sharpness);
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
    const damageTableRows2 = calculateDamageTable(
      weaponInfo,
      selectedMotions,
      selectedMonster,
      sharpness,
      selectedSkills
    );
    const result = {
      weaponInfo,
      selectedSkills,
      selectedMotions,
      selectedMonster,
      sharpness,
      damageTableRows: damageTableRows2
    };
    setDamageResult(JSON.stringify(result, null, 2));
    setDamageTableRows(damageTableRows2);
    setResults((prev) => {
      const prev0 = prev[0];
      if (prev0 && JSON.stringify({
        weaponInfo: prev0.weaponInfo,
        selectedSkills: prev0.selectedSkills,
        selectedMotions: prev0.selectedMotions,
        selectedMonster: prev0.selectedMonster,
        sharpness: prev0.sharpness
      }) === JSON.stringify({
        weaponInfo: result.weaponInfo,
        selectedSkills: result.selectedSkills,
        selectedMotions: result.selectedMotions,
        selectedMonster: result.selectedMonster,
        sharpness: result.sharpness
      })) {
        return [{ ...result }, ...prev.slice(1)];
      }
      return [result, ...prev].slice(0, 20);
    });
    if (tabIndex !== 0) setTabIndex(0);
  };
  reactExports.useEffect(() => {
    setSelectedMotions(
      (prev) => prev.filter((motion) => availableMotions.some((m) => m.name === motion.name))
    );
  }, [weaponInfo.weaponType]);
  return {
    weaponInfo,
    setWeaponInfo,
    selectedSkills,
    setSelectedSkills,
    selectedMotions,
    setSelectedMotions,
    selectedMonster,
    setSelectedMonster,
    damageResult,
    setDamageResult,
    damageTableRows,
    setDamageTableRows,
    sharpness,
    setSharpness,
    presetDialogOpen,
    setPresetDialogOpen,
    tabIndex,
    setTabIndex,
    results,
    setResults,
    errorMessage,
    setErrorMessage,
    skillCategories,
    skillTab,
    setSkillTab,
    availableMotions,
    handleLoadPreset,
    handleCalculateDamage,
    MONSTER_LIST
  };
}
const CalculateButton = ({ onClick, errorMessage }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { textAlign: "center", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", color: "primary", onClick, children: "Calculate Damage" }),
  errorMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { color: "error.main", fontWeight: "bold", mt: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { children: errorMessage }) })
] });
const Header = ({ onOpenPresetDialog }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Box,
  {
    sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 2
    },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { style: { textAlign: "center", margin: 0, flex: 1, fontSize: "2.5rem" }, children: [
        "MH Wilds Damage Calculator",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: "1rem", color: "#888" }, children: "- モンスターハンターワイルズ ダメージ計算ツール -" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        IconButton,
        {
          "aria-label": "プリセット保存/読込",
          onClick: onOpenPresetDialog,
          size: "large",
          sx: {
            color: "text.primary",
            bgcolor: "background.paper",
            my: 2,
            "&:hover": { bgcolor: "action.hover" }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(SaveIcon, {})
        }
      )
    ]
  }
);
const STORAGE_KEY = "mhw-dmg-presets";
const SaveLoadPreset = ({ currentPreset, onLoad }) => {
  const [presetName, setPresetName] = reactExports.useState("");
  const [presets, setPresets] = reactExports.useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const handleSave = () => {
    if (!presetName.trim()) return;
    const newPresets = [...presets.filter((p) => p.name !== presetName.trim()), { name: presetName.trim(), data: currentPreset }];
    setPresets(newPresets);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPresets));
    setPresetName("");
  };
  const handleLoad = (data) => {
    onLoad(data);
  };
  const handleDelete = (name) => {
    const newPresets = presets.filter((p) => p.name !== name);
    setPresets(newPresets);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPresets));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 2, sx: { my: 2 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", children: "プリセット保存/読込" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        TextField,
        {
          label: "プリセット名",
          value: presetName,
          onChange: (e) => setPresetName(e.target.value),
          size: "small",
          inputProps: { maxLength: 32 }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "contained", onClick: handleSave, disabled: !presetName.trim(), children: "保存" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(List, { dense: true, children: presets.map((preset) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListItem, { secondaryAction: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "row", spacing: 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outlined", size: "small", onClick: () => handleLoad(preset.data), children: "呼び出し" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IconButton, { edge: "end", "aria-label": "delete", onClick: () => handleDelete(preset.name), size: "small", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeleteIcon, { fontSize: "small" }) })
    ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      ListItemText,
      {
        primary: preset.name
      }
    ) }, preset.name)) })
  ] });
};
const PresetDialog = ({ open, onClose, currentPreset, onLoad }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open, onClose, maxWidth: "sm", fullWidth: true, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "プリセット保存/読込" }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    SaveLoadPreset,
    {
      currentPreset,
      onLoad: (preset) => {
        onLoad(preset);
        onClose();
      }
    }
  ) })
] });
const getColor = (value) => {
  if (value === null) return "#eee";
  if (value > 30) return "#388e3c";
  if (value > 10) return "#7bc67e";
  if (value > 0) return "#c8e6c9";
  if (value < -30) return "#d32f2f";
  if (value < -10) return "#f88379";
  if (value < 0) return "#ffcdd2";
  return "#fff";
};
const stateLabels$1 = {
  normal: "通常",
  wounded: "傷口",
  exposed: "弱点露出"
};
const DamageHeatmap = ({
  currentRows,
  compareRows,
  valueType = "expected"
}) => {
  const parts = Array.from(new Set(currentRows.map((r) => r.part)));
  const states = Array.from(new Set(currentRows.map((r) => r.state)));
  const data = parts.map(
    (part) => states.map((state) => {
      const cur = currentRows.find((r) => r.part === part && r.state === state);
      const cmp = compareRows.find((r) => r.part === part && r.state === state);
      if (!cur || !cmp) return null;
      const getVal = (row) => {
        if (valueType === "expected") return Number(row.expected.split(" ")[0]);
        if (valueType === "damage") return Number(row.damage.split(" ")[0]);
        if (valueType === "critDamage")
          return Number(row.critDamage.split(" ")[0]);
        return 0;
      };
      const base = getVal(cmp);
      if (base === 0) return null;
      const diff = (getVal(cur) - base) / base * 100;
      return diff;
    })
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "subtitle2", sx: { mb: 0.5, mt: 2 }, children: [
      "部位×状態ごとの差分ヒートマップ（",
      valueType === "expected" ? "期待値" : valueType === "damage" ? "通常" : "会心",
      "）"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TableContainer, { component: Paper, sx: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", sx: { minWidth: 400 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: 700 }, children: "部位\\状態" }),
        states.map((state) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { align: "center", sx: { fontWeight: 700 }, children: stateLabels$1[state] || state }, state))
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: parts.map((part, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontWeight: 700 }, children: part }),
        states.map((state, j) => {
          const value = data[i][j];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            TableCell,
            {
              align: "center",
              sx: {
                background: getColor(value),
                color: value !== null && Math.abs(value) > 20 ? "#fff" : "#222",
                fontWeight: 600,
                border: "1px solid #ddd",
                minWidth: 48,
                minHeight: 32,
                fontSize: 14,
                p: 0.5
              },
              children: value === null ? "-" : `${value > 0 ? "+" : ""}${value.toFixed(1)}%`
            },
            state
          );
        })
      ] }, part)) })
    ] }) })
  ] });
};
const STATE_OPTIONS = [
  { value: "normal", label: "通常" },
  { value: "wounded", label: "傷口" },
  { value: "exposed", label: "弱点露出" }
];
const stateLabels = {
  normal: "通常",
  wounded: "傷口",
  exposed: "弱点露出"
};
const DamageTable = ({
  rows,
  allResults,
  currentIndex = 0
}) => {
  var _a;
  const [selectedStates, setSelectedStates] = React.useState(
    STATE_OPTIONS.map((opt) => opt.value)
  );
  const [compareIdx, setCompareIdx] = React.useState("");
  const hasAllResults = Array.isArray(allResults) && allResults.length > 1;
  const compareOptions = React.useMemo(() => {
    return hasAllResults ? allResults.map((_, idx) => ({
      label: idx === 0 ? "現在" : `履歴${allResults.length - idx}`,
      idx
    })).filter((opt) => opt.idx !== currentIndex) : [];
  }, [hasAllResults, allResults, currentIndex]);
  const compareRows = hasAllResults && compareIdx !== "" ? (_a = allResults[compareIdx]) == null ? void 0 : _a.damageTableRows : void 0;
  React.useEffect(() => {
    if (compareIdx !== "" && (compareIdx === currentIndex || !compareOptions.some((opt) => opt.idx === compareIdx))) {
      setCompareIdx("");
    }
  }, [currentIndex, compareIdx, compareOptions]);
  const filteredRows = rows.filter((row) => selectedStates.includes(row.state));
  const partRowSpans = {};
  filteredRows.forEach((row) => {
    partRowSpans[row.part] = (partRowSpans[row.part] || 0) + 1;
  });
  const renderedParts = {};
  const getCompareRow = (row) => {
    if (!compareRows) return void 0;
    return compareRows.find(
      (r) => r.part === row.part && r.state === row.state
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableContainer, { component: Paper, sx: { mt: 2, boxShadow: 0 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { p: 1 }, children: "ダメージ表" }),
    hasAllResults && /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { sx: { mb: 2, minWidth: 200 }, size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "compare-select-label", children: "比較対象" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          labelId: "compare-select-label",
          value: compareIdx,
          onChange: (e) => {
            const v = e.target.value;
            setCompareIdx(v === "" ? "" : parseInt(v, 10));
          },
          input: /* @__PURE__ */ jsxRuntimeExports.jsx(OutlinedInput, { label: "比較対象" }),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: "なし" }),
            compareOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: opt.idx, children: opt.label }, opt.idx))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { sx: { mb: 2, minWidth: 200 }, size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "state-filter-label", children: "部位状態フィルタ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          labelId: "state-filter-label",
          multiple: true,
          value: selectedStates,
          onChange: (e) => setSelectedStates(
            typeof e.target.value === "string" ? e.target.value.split(",") : e.target.value
          ),
          input: /* @__PURE__ */ jsxRuntimeExports.jsx(OutlinedInput, { label: "部位状態フィルタ" }),
          renderValue: (selected) => selected.map(
            (val) => {
              var _a2;
              return (_a2 = STATE_OPTIONS.find((opt) => opt.value === val)) == null ? void 0 : _a2.label;
            }
          ).join(", "),
          children: STATE_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: opt.value, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { checked: selectedStates.indexOf(opt.value) > -1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { primary: opt.label })
          ] }, opt.value))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TableContainer,
      {
        component: Paper,
        sx: { overflowX: "auto", boxShadow: 0 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", sx: { minWidth: "100%", width: "max-content" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableCell,
              {
                sx: { px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } },
                children: "部位"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableCell,
              {
                sx: { px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } },
                children: "状態"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableCell,
              {
                sx: { px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } },
                children: "通常"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableCell,
              {
                sx: { px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } },
                children: "会心"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableCell,
              {
                sx: { px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } },
                children: "会心率"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              TableCell,
              {
                sx: { px: { xs: 0.5, sm: 1.5 }, py: { xs: 0.5, sm: 1 } },
                children: "期待値"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: filteredRows.map((row) => {
            const showPart = !renderedParts[row.part];
            if (showPart) renderedParts[row.part] = true;
            const compareRow = typeof compareIdx === "number" && compareIdx >= 0 ? getCompareRow(row) : void 0;
            const percent = (val, base) => {
              if (base === void 0 || base === 0) return "";
              const diff = (val - base) / base * 100;
              const color = diff > 0 ? "#388e3c" : diff < 0 ? "#d32f2f" : void 0;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Typography,
                {
                  variant: "caption",
                  style: { color, fontWeight: 600 },
                  children: [
                    diff > 0 ? "+" : "",
                    diff.toFixed(1),
                    "%"
                  ]
                }
              );
            };
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              TableRow,
              {
                sx: {
                  "& td": {
                    px: { xs: 0.5, sm: 1.5 },
                    py: { xs: 0.5, sm: 1 },
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                    wordBreak: "keep-all"
                  }
                },
                children: [
                  showPart ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { rowSpan: partRowSpans[row.part], children: row.part }) : null,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: stateLabels[row.state] || row.state }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                    Number(row.damage.split(" ")[0]).toFixed(1),
                    row.elemental !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: row.elemental.toFixed(1) })
                    ] }),
                    compareRow && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      percent(
                        Number(row.damage.split(" ")[0]),
                        Number(compareRow.damage.split(" ")[0])
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                    Number(row.critDamage.split(" ")[0]).toFixed(1),
                    row.elemental !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: row.elemental.toFixed(1) })
                    ] }),
                    compareRow && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      percent(
                        Number(row.critDamage.split(" ")[0]),
                        Number(compareRow.critDamage.split(" ")[0])
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                    row.critRate !== void 0 ? `${Math.round(row.critRate * 100)}%` : "-",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    compareRow && (() => {
                      const base = compareRow.critRate ?? 0;
                      const val = row.critRate ?? 0;
                      const diff = Math.round((val - base) * 100);
                      if (diff === 0) return null;
                      const color = diff > 0 ? "#388e3c" : "#d32f2f";
                      return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", style: { color, fontWeight: 600 }, children: [
                        diff > 0 ? "+" : "",
                        diff
                      ] });
                    })()
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { children: [
                    Number(row.expected.split(" ")[0]).toFixed(1),
                    row.elemental !== 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: row.elemental.toFixed(1) })
                    ] }),
                    compareRow && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      percent(
                        Number(row.expected.split(" ")[0]),
                        Number(compareRow.expected.split(" ")[0])
                      )
                    ] })
                  ] })
                ]
              },
              `${row.part}-${row.state}`
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            TableRow,
            {
              sx: {
                "& td": {
                  px: { xs: 0.5, sm: 1.5 },
                  py: { xs: 1, sm: 1 },
                  fontSize: { xs: "0.85rem", sm: "1rem" },
                  wordBreak: "keep-all"
                }
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: 2, align: "left", children: "平均" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "left", children: [
                  filteredRows.length > 0 ? (filteredRows.reduce(
                    (sum, row) => sum + Number(row.damage.split(" ")[0]),
                    0
                  ) / filteredRows.length).toFixed(1) : "-",
                  compareRows && filteredRows.length > 0 && (() => {
                    const avg = filteredRows.reduce((sum, row) => sum + Number(row.damage.split(" ")[0]), 0) / filteredRows.length;
                    const compareAvgRows = compareRows.filter((row) => selectedStates.includes(row.state));
                    const compareAvg = compareAvgRows.length > 0 ? compareAvgRows.reduce((sum, row) => sum + Number(row.damage.split(" ")[0]), 0) / compareAvgRows.length : 0;
                    if (!compareAvg) return null;
                    const diff = (avg - compareAvg) / compareAvg * 100;
                    const color = diff > 0 ? "#388e3c" : diff < 0 ? "#d32f2f" : void 0;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", style: { color, fontWeight: 600 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      diff > 0 ? "+" : "",
                      diff.toFixed(1),
                      "%"
                    ] });
                  })()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "left", children: [
                  filteredRows.length > 0 ? (filteredRows.reduce(
                    (sum, row) => sum + Number(row.critDamage.split(" ")[0]),
                    0
                  ) / filteredRows.length).toFixed(1) : "-",
                  compareRows && filteredRows.length > 0 && (() => {
                    const avg = filteredRows.reduce((sum, row) => sum + Number(row.critDamage.split(" ")[0]), 0) / filteredRows.length;
                    const compareAvgRows = compareRows.filter((row) => selectedStates.includes(row.state));
                    const compareAvg = compareAvgRows.length > 0 ? compareAvgRows.reduce((sum, row) => sum + Number(row.critDamage.split(" ")[0]), 0) / compareAvgRows.length : 0;
                    if (!compareAvg) return null;
                    const diff = (avg - compareAvg) / compareAvg * 100;
                    const color = diff > 0 ? "#388e3c" : diff < 0 ? "#d32f2f" : void 0;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", style: { color, fontWeight: 600 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      diff > 0 ? "+" : "",
                      diff.toFixed(1),
                      "%"
                    ] });
                  })()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "left", children: [
                  filteredRows.length > 0 ? (filteredRows.reduce(
                    (sum, row) => sum + (row.critRate !== void 0 ? row.critRate : 0),
                    0
                  ) / filteredRows.length * 100).toFixed(0) + "%" : "-",
                  compareRows && filteredRows.length > 0 && (() => {
                    const avg = filteredRows.reduce((sum, row) => sum + (row.critRate ?? 0), 0) / filteredRows.length;
                    const compareAvgRows = compareRows.filter((row) => selectedStates.includes(row.state));
                    const compareAvg = compareAvgRows.length > 0 ? compareAvgRows.reduce((sum, row) => sum + (row.critRate ?? 0), 0) / compareAvgRows.length : 0;
                    const diff = Math.round((avg - compareAvg) * 100);
                    if (diff === 0) return null;
                    const color = diff > 0 ? "#388e3c" : "#d32f2f";
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", style: { color, fontWeight: 600 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      diff > 0 ? "+" : "",
                      diff
                    ] });
                  })()
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { align: "left", children: [
                  filteredRows.length > 0 ? (filteredRows.reduce(
                    (sum, row) => sum + Number(row.expected.split(" ")[0]),
                    0
                  ) / filteredRows.length).toFixed(1) : "-",
                  compareRows && filteredRows.length > 0 && (() => {
                    const avg = filteredRows.reduce((sum, row) => sum + Number(row.expected.split(" ")[0]), 0) / filteredRows.length;
                    const compareAvgRows = compareRows.filter((row) => selectedStates.includes(row.state));
                    const compareAvg = compareAvgRows.length > 0 ? compareAvgRows.reduce((sum, row) => sum + Number(row.expected.split(" ")[0]), 0) / compareAvgRows.length : 0;
                    if (!compareAvg) return null;
                    const diff = (avg - compareAvg) / compareAvg * 100;
                    const color = diff > 0 ? "#388e3c" : diff < 0 ? "#d32f2f" : void 0;
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(Typography, { variant: "caption", style: { color, fontWeight: 600 }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      diff > 0 ? "+" : "",
                      diff.toFixed(1),
                      "%"
                    ] });
                  })()
                ] })
              ]
            }
          ) })
        ] })
      }
    ),
    compareRows && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DamageHeatmap,
      {
        currentRows: filteredRows,
        compareRows: compareRows.filter((row) => selectedStates.includes(row.state)),
        valueType: "expected"
      }
    )
  ] });
};
const SkillLevelTable = ({ selectedSkills }) => {
  if (!selectedSkills || selectedSkills.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableContainer, { sx: { mt: 2, boxShadow: 0 }, component: Paper, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { p: 1 }, children: "適用スキル一覧" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "スキル" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "レベル" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: selectedSkills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: skill.key }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableCell, { sx: { fontSize: "0.95rem" }, children: [
          "Lv.",
          skill.level
        ] })
      ] }, skill.key)) })
    ] })
  ] });
};
const SelectedMotionsTable = ({ motions }) => {
  if (!motions.length) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableContainer, { component: Paper, sx: { mt: 2, boxShadow: 0 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { p: 1 }, children: "選択中モーション一覧" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "モーション名" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "モーション値" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "属性補正" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: "ヒット数" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: motions.map((motion, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: motion.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: motion.motionValue }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: motion.elementModifier !== void 0 ? motion.elementModifier : "-" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: motion.hits !== void 0 ? motion.hits : "-" })
      ] }, motion.name + idx)) })
    ] })
  ] });
};
const SelectedParamsSummary = ({ weapon, selectedSkills, selectedMotions, sharpnessColor }) => {
  var _a, _b;
  const allSkillParams = selectedSkills.flatMap((s) => s.skillData);
  const totalAttackBonus = allSkillParams.reduce((sum, p) => sum + (p.additionAttackBonus || 0), 0);
  const totalAttackMultiplierBonus = allSkillParams.reduce((prod, p) => prod * (p.attackMultiplierBonus ?? 1), 1);
  const totalElementAddition = allSkillParams.reduce((sum, p) => sum + (p.elementAddition || 0), 0);
  const totalElementModifier = allSkillParams.reduce((prod, p) => prod * (p.elementModifier ?? 1), 1);
  const totalCriticalDamageModifier = allSkillParams.reduce((sum, p) => sum + (p.criticalDamageModifier || 0), 0);
  const totalMotionValue = selectedMotions.reduce((sum, m) => sum + (m.motionValue || 0), 0);
  const avgElementMultiplier = selectedMotions.length > 0 ? (selectedMotions.reduce((sum, m) => sum + (m.elementMultiplier || 0), 0) / selectedMotions.length).toFixed(2) : "-";
  const sharpnessObj = SHARPNESS_LEVELS.find((s) => s.color === sharpnessColor) ?? SHARPNESS_LEVELS[5];
  const weaponTypeLabels = {
    longsword: "太刀",
    greatsword: "大剣"
    // 他の武器種があればここに追加
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TableContainer, { component: Paper, sx: { mt: 2, boxShadow: 0 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { p: 1 }, children: "選択中パラメータ（代表値）" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { size: "small", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "パラメーター" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "値" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TableBody, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "武器種" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: weaponTypeLabels[weapon.weaponType] || weapon.weaponType })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "切れ味補正" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: sharpnessObj.modifier })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "武器倍率" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: weapon.weaponMultiplier })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "加算攻撃力" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: totalAttackBonus })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "攻撃乗算補正" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: totalAttackMultiplierBonus })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "属性" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: ((_a = weapon.elementType) == null ? void 0 : _a.label) || "-" })
        ] }),
        ((_b = weapon.elementType) == null ? void 0 : _b.key) !== "none" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "属性値" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: weapon.baseElementValue })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "属性加算補正" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: totalElementAddition })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "属性乗算補正" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: totalElementModifier })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "モーション属性補正" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: selectedMotions.length > 0 ? avgElementMultiplier : "-" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "モーション値" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: selectedMotions.length > 0 ? totalMotionValue : "-" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: "会心ダメージ補正" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { sx: { fontSize: "0.95rem" }, children: 1.25 + totalCriticalDamageModifier })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "caption", color: "text.secondary", children: "※スキル補正は全て合算（攻撃乗算は掛け算）、モーション値は合計、モーション属性補正は平均値を表示。" })
  ] });
};
const ResultPanel = ({ result, fallback, allResults, currentIndex = 0 }) => {
  const rows = (result == null ? void 0 : result.damageTableRows) ?? (fallback == null ? void 0 : fallback.damageTableRows) ?? [];
  const selectedSkills = (result == null ? void 0 : result.selectedSkills) ?? (fallback == null ? void 0 : fallback.selectedSkills) ?? [];
  const selectedMotions = (result == null ? void 0 : result.selectedMotions) ?? (fallback == null ? void 0 : fallback.selectedMotions) ?? [];
  const selectedMonster = (result == null ? void 0 : result.selectedMonster) ?? (fallback == null ? void 0 : fallback.selectedMonster) ?? null;
  const weaponInfo = (result == null ? void 0 : result.weaponInfo) ?? (fallback == null ? void 0 : fallback.weaponInfo);
  const sharpness = (result == null ? void 0 : result.sharpness) ?? (fallback == null ? void 0 : fallback.sharpness);
  if (!selectedMonster || rows.length === 0 || !weaponInfo || !sharpness) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box,
    {
      sx: {
        px: { xs: 0.5, sm: 3 },
        py: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          DamageTable,
          {
            rows,
            allResults,
            currentIndex
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SkillLevelTable, { selectedSkills }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectedMotionsTable,
          {
            motions: selectedMotions.map((motion) => ({
              name: motion.name,
              motionValue: motion.motionValue,
              elementModifier: motion.elementMultiplier,
              hits: motion.hitCount
            }))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SelectedParamsSummary,
          {
            weapon: weaponInfo,
            selectedSkills,
            selectedMotions,
            sharpnessColor: sharpness
          }
        )
      ]
    }
  );
};
const DamageResultTabs = ({
  tabIndex,
  setTabIndex,
  results,
  onDeleteHistory
}) => {
  const currentResult = results[tabIndex] || results[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    results.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Tabs,
      {
        value: tabIndex,
        onChange: (_, v) => setTabIndex(v),
        sx: { mb: 2, bgcolor: "background.default", borderRadius: 2, boxShadow: 1 },
        textColor: "inherit",
        indicatorColor: "secondary",
        children: results.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Tab,
          {
            label: idx === 0 ? "現在の結果" : `履歴${results.length - idx}`,
            sx: { color: "text.primary" }
          },
          `result-${idx}`
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResultPanel,
      {
        result: currentResult,
        fallback: currentResult,
        allResults: results,
        currentIndex: tabIndex
      }
    ),
    tabIndex > 0 && results[tabIndex] && /* @__PURE__ */ jsxRuntimeExports.jsx(
      Box,
      {
        sx: {
          px: { xs: 0.5, sm: 3 },
          py: 2,
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 1
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { sx: { mb: 1 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outlined",
            color: "error",
            onClick: () => onDeleteHistory(tabIndex),
            children: "この履歴を削除"
          }
        ) })
      }
    )
  ] });
};
const ELEMENT_TYPES = [
  { key: "none", label: "無属性" },
  { key: "fire", label: "火" },
  { key: "water", label: "水" },
  { key: "ice", label: "氷" },
  { key: "thunder", label: "雷" },
  { key: "dragon", label: "龍" }
];
const colorLabels = {
  red: "赤",
  orange: "橙",
  yellow: "黄",
  green: "緑",
  blue: "青",
  white: "白"
};
const SharpnessSelector = ({ value, onChange }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { width: "100%", marginBottom: 4 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "subtitle2", sx: { mb: 1 }, color: "text.primary", children: "切れ味" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ToggleButtonGroup,
      {
        value,
        exclusive: true,
        onChange: (_, newValue) => {
          if (newValue) onChange(newValue);
        },
        size: "small",
        fullWidth: true,
        children: SHARPNESS_LEVELS.map((level) => /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleButton, { value: level.color, sx: { flex: 1 }, children: colorLabels[level.color] }, level.color))
      }
    )
  ] });
};
const WEAPON_TYPES = [
  { key: "longsword", label: "太刀" },
  { key: "greatsword", label: "大剣" }
];
const WeaponInput = ({ weapon, setWeapon, sharpnessColor, setSharpnessColor }) => {
  var _a;
  const handleInputChange = (field, value) => {
    setWeapon({ ...weapon, [field]: value });
  };
  const handleSpiritGaugeChange = (e) => {
    setWeapon({ ...weapon, tachiSpiritGauge: e.target.value });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "section", sx: { mb: 2 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { direction: "column", spacing: 2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { sx: { minWidth: 120 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "weapon-type-label", children: "武器種" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          labelId: "weapon-type-label",
          value: weapon.weaponType,
          label: "武器種",
          onChange: (e) => handleInputChange("weaponType", e.target.value),
          sx: { textAlign: "left", "& .MuiSelect-select": { textAlign: "left" } },
          children: WEAPON_TYPES.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: type.key, children: type.label }, type.key))
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SharpnessSelector, { value: sharpnessColor ?? "white", onChange: (color) => setSharpnessColor == null ? void 0 : setSharpnessColor(color) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextField,
      {
        type: "number",
        label: "武器倍率",
        value: weapon.weaponMultiplier,
        onChange: (e) => handleInputChange("weaponMultiplier", Number(e.target.value)),
        InputProps: { inputProps: { min: 0 } },
        sx: { minWidth: 120 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextField,
      {
        type: "number",
        label: "属性値",
        value: weapon.baseElementValue,
        onChange: (e) => {
          const val = e.target.value === "" ? 0 : Number(e.target.value);
          handleInputChange("baseElementValue", Math.max(0, val));
        },
        InputProps: { inputProps: { min: 0 } },
        sx: { minWidth: 120 }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { sx: { minWidth: 120 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "element-type-label", children: "属性" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          labelId: "element-type-label",
          value: ((_a = weapon.elementType) == null ? void 0 : _a.key) || "",
          label: "属性",
          onChange: (e) => handleInputChange(
            "elementType",
            ELEMENT_TYPES.find((type) => type.key === e.target.value)
          ),
          sx: { textAlign: "left", "& .MuiSelect-select": { textAlign: "left" } },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "属性を選択" }) }),
            ELEMENT_TYPES.map((type) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: type.key, children: type.label }, type.key))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      TextField,
      {
        type: "number",
        label: "会心率",
        value: weapon.criticalRate,
        onChange: (e) => handleInputChange("criticalRate", Number(e.target.value)),
        InputProps: { inputProps: { min: -100, max: 100 } },
        sx: { minWidth: 120 }
      }
    ),
    weapon.weaponType === "longsword" && /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { sx: { minWidth: 120 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "spirit-gauge-label", children: "練気ゲージ段階" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Select,
        {
          labelId: "spirit-gauge-label",
          value: weapon.tachiSpiritGauge ?? "none",
          label: "練気ゲージ段階",
          onChange: handleSpiritGaugeChange,
          sx: { textAlign: "left", "& .MuiSelect-select": { textAlign: "left" } },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "none", children: "無色" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "white", children: "白色" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "yellow", children: "黄色" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "red", children: "赤色" })
          ]
        }
      )
    ] })
  ] }) });
};
const WeaponSection = ({
  weapon,
  setWeapon,
  sharpnessColor,
  setSharpnessColor
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Box,
  {
    sx: {
      px: { xs: 0.5, sm: 3 },
      py: 2,
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 1
    },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 1 }, color: "text.primary", children: "武器" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WeaponInput,
        {
          weapon,
          setWeapon,
          sharpnessColor,
          setSharpnessColor
        }
      )
    ]
  }
);
const SkillItem = ({ skill, selectedSkill, setSelectedSkill }) => {
  const isSelected = !!selectedSkill;
  const level = (selectedSkill == null ? void 0 : selectedSkill.level) || 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { display: "flex", alignItems: "center", mb: 1, px: 1 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      FormControlLabel,
      {
        control: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Checkbox,
          {
            checked: isSelected,
            onChange: (e) => setSelectedSkill(skill.key, e.target.checked, 1),
            "data-testid": `skill-checkbox-${skill.key}`
          }
        ),
        label: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "inherit" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, { component: "span", sx: { color: "text.primary" }, children: skill.label }) })
      }
    ),
    isSelected && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      (() => {
        var _a, _b, _c;
        const desc = (_c = (_b = (_a = skill.skillLevels[level - 1]) == null ? void 0 : _a.skillBonuses) == null ? void 0 : _b[0]) == null ? void 0 : _c.description;
        return desc ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "data-testid": `skill-desc-${skill.key}`, style: { fontSize: "0.68em", color: "#888", marginLeft: "auto", width: "25%", textAlign: "right" }, children: desc }) : null;
      })(),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Select,
        {
          size: "small",
          value: level,
          onChange: (e) => setSelectedSkill(skill.key, true, Number(e.target.value)),
          sx: { minWidth: 72, ml: 2, marginLeft: 1 },
          "data-testid": `skill-level-select-${skill.key}`,
          children: Array.from({ length: skill.maxLevel }, (_, i) => i + 1).map((lv) => /* @__PURE__ */ jsxRuntimeExports.jsxs(MenuItem, { value: lv, "data-testid": `skill-level-item-${skill.key}-${lv}`, children: [
            "Lv",
            lv
          ] }, lv))
        }
      )
    ] })
  ] });
};
const SkillSelector = ({ skills, selectedSkills, setSelectedSkills }) => {
  const handleSkillChange = (key, isChecked, level) => {
    if (isChecked) {
      const skill = skills.find((s) => s.key === key);
      if (!skill) return;
      const skillLevel = skill.skillLevels[level - 1];
      if (!skillLevel) return;
      setSelectedSkills([
        ...selectedSkills.filter((s) => s.key !== key),
        { key, level, skillData: skillLevel.skillBonuses }
      ]);
    } else {
      setSelectedSkills(selectedSkills.filter((s) => s.key !== key));
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormGroup, { children: skills.map((skill) => {
    var _a;
    const selected = selectedSkills.find((s) => s.key === skill.key);
    const selectedSkill = selected ? { key: selected.key, level: selected.level, skillData: ((_a = skill.skillLevels[selected.level - 1]) == null ? void 0 : _a.skillBonuses) || [] } : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      SkillItem,
      {
        skill: {
          key: skill.key,
          label: skill.label,
          maxLevel: skill.maxLevel,
          skillLevels: skill.skillLevels
        },
        selectedSkill,
        setSelectedSkill: handleSkillChange
      },
      skill.key
    );
  }) });
};
const SkillSection = ({
  skillCategories,
  skillCategoryLabels: skillCategoryLabels2,
  skillTab,
  setSkillTab,
  skillsByCategory: skillsByCategory2,
  selectedSkills,
  setSelectedSkills
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Box,
  {
    sx: {
      px: { xs: 0.5, sm: 3 },
      py: 2,
      bgcolor: "background.paper",
      borderRadius: 2,
      boxShadow: 1
    },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", sx: { mb: 1 }, color: "text.primary", children: "スキル" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Tabs,
        {
          value: skillTab,
          onChange: (_, v) => setSkillTab(v),
          variant: "scrollable",
          scrollButtons: "auto",
          sx: { mb: 1 },
          children: skillCategories.map((category) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tab,
            {
              label: skillCategoryLabels2[category] || category
            },
            category
          ))
        }
      ),
      skillCategories.length > 0 && skillsByCategory2[skillCategories[skillTab]] ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        SkillSelector,
        {
          skills: skillsByCategory2[skillCategories[skillTab]].map((skill) => ({
            key: skill.name,
            label: skill.name,
            maxLevel: skill.levels.length,
            skillLevels: skill.levels
          })),
          selectedSkills,
          setSelectedSkills
        }
      ) : null
    ]
  }
);
const MotionSelector = ({ availableMotions, selectedMotions, setSelectedMotions }) => {
  const handleToggle = (motion) => {
    const exists = selectedMotions.some((m) => m.name === motion.name);
    if (exists) {
      setSelectedMotions(selectedMotions.filter((m) => m.name !== motion.name));
    } else {
      setSelectedMotions([...selectedMotions, motion]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(List, { children: availableMotions.map((motion) => /* @__PURE__ */ jsxRuntimeExports.jsxs(ListItem, { onClick: () => handleToggle(motion.motionData), disablePadding: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemIcon, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Checkbox,
      {
        edge: "start",
        checked: selectedMotions.some((m) => m.name === motion.motionData.name),
        tabIndex: -1,
        disableRipple: true,
        inputProps: { "aria-labelledby": `motion-checkbox-${motion.key}` }
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ListItemText, { id: `motion-checkbox-${motion.key}`, primary: motion.label })
  ] }, motion.key)) });
};
const MotionSection = ({
  availableMotions,
  selectedMotions,
  setSelectedMotions
}) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Accordion,
  {
    defaultExpanded: false,
    sx: { bgcolor: "background.paper", borderRadius: 2, boxShadow: 1 },
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionSummary, { expandIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(ExpandMoreIcon, {}), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography, { variant: "h6", color: "text.primary", sx: { m: 0 }, children: "モーション" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionDetails, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        MotionSelector,
        {
          availableMotions,
          selectedMotions,
          setSelectedMotions
        }
      ) })
    ]
  }
);
const MonsterSelector = ({
  availableMonsters,
  selectedMonster,
  setSelectedMonster
}) => {
  const handleMonsterChange = (monsterName) => {
    const monster = availableMonsters.find((m) => m.name === monsterName) || null;
    setSelectedMonster(monster);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormControl, { fullWidth: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel, { id: "monster-select-label", children: "モンスター" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Select,
      {
        labelId: "monster-select-label",
        value: (selectedMonster == null ? void 0 : selectedMonster.name) || "",
        label: "モンスター",
        onChange: (e) => handleMonsterChange(e.target.value),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "モンスターを選択" }) }),
          availableMonsters.map((monster) => /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { value: monster.name, children: monster.name }, monster.name))
        ]
      }
    )
  ] });
};
const DamageCalculatorUI = () => {
  const calc = useDamageCalculator();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Box, { sx: { maxWidth: 700, mx: "auto", my: 4 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { onOpenPresetDialog: () => calc.setPresetDialogOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PresetDialog,
      {
        open: calc.presetDialogOpen,
        onClose: () => calc.setPresetDialogOpen(false),
        currentPreset: {
          weaponInfo: calc.weaponInfo,
          selectedSkills: calc.selectedSkills,
          selectedMotions: calc.selectedMotions,
          selectedMonster: calc.selectedMonster,
          sharpness: calc.sharpness
        },
        onLoad: calc.handleLoadPreset
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Stack, { spacing: 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        WeaponSection,
        {
          weapon: calc.weaponInfo,
          setWeapon: calc.setWeaponInfo,
          sharpnessColor: calc.sharpness,
          setSharpnessColor: calc.setSharpness
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SkillSection,
        {
          skillCategories: calc.skillCategories,
          skillCategoryLabels,
          skillTab: calc.skillTab,
          setSkillTab: calc.setSkillTab,
          skillsByCategory,
          selectedSkills: calc.selectedSkills,
          setSelectedSkills: calc.setSelectedSkills
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        MotionSection,
        {
          availableMotions: calc.availableMotions.map((motion, idx) => ({
            key: `${motion.name}_${idx}`,
            label: motion.name,
            motionData: motion
          })),
          selectedMotions: calc.selectedMotions,
          setSelectedMotions: calc.setSelectedMotions
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Box,
        {
          sx: {
            px: { xs: 0.5, sm: 3 },
            py: 2,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 1
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            MonsterSelector,
            {
              availableMonsters: calc.MONSTER_LIST,
              selectedMonster: calc.selectedMonster,
              setSelectedMonster: calc.setSelectedMonster
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CalculateButton, { onClick: calc.handleCalculateDamage, errorMessage: calc.errorMessage }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        DamageResultTabs,
        {
          tabIndex: calc.tabIndex,
          setTabIndex: calc.setTabIndex,
          results: calc.results,
          onDeleteHistory: (idx) => {
            calc.setResults((prev) => prev.filter((_, i) => i !== idx));
            calc.setTabIndex(0);
          }
        }
      )
    ] })
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "App", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DamageCalculatorUI, {}) });
};
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
