import openpyxl
import os
import json

MV_FILE = "MV_1.0.11.xlsx"
DATA_DIR = "src/data/fullDataWeapons"

# 1. MV_1.0.11.xlsxを読み込む
wb = openpyxl.load_workbook(MV_FILE, data_only=True)
ws = wb.active  # シート名は適宜調整

# 2. 名称→複数ヒット数の辞書を作る（日本語名・英語名両方で引けるように）
mv_map = {}
for row in ws.iter_rows(min_row=2, values_only=True):
    name_ja = row[0]  # 1列目: 日本語名
    name_en = row[1] if len(row) > 1 else None  # 2列目: 英語名（なければNone）
    hit_count = row[2] if len(row) > 2 else (row[1] if len(row) > 1 else None)  # 3列目: 複数ヒット数
    if name_ja and hit_count is not None:
        mv_map[str(name_ja).strip()] = hit_count
    if name_en and hit_count is not None:
        mv_map[str(name_en).strip()] = hit_count

# 3. 全武器JSONを走査
for fname in os.listdir(DATA_DIR):
    if not fname.endswith(".json"):
        continue
    path = os.path.join(DATA_DIR, fname)
    with open(path, encoding="utf-8") as f:
        motions = json.load(f)
    for m in motions:
        # 名称で突き合わせ（日本語名優先、なければ英語名）
        key_ja = str(m.get("name", "")).strip()
        key_en = str(m.get("enName", "")).strip()
        hit_count = None
        if key_ja in mv_map:
            hit_count = mv_map[key_ja]
        elif key_en in mv_map:
            hit_count = mv_map[key_en]
        if hit_count is not None:
            m["HitCount"] = hit_count
    # 4. 上書き保存
    with open(path, "w", encoding="utf-8") as f:
        json.dump(motions, f, ensure_ascii=False, indent=2)
print("[INFO] HitCount merge complete.")