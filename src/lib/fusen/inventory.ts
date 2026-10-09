// ============================================================
// FUSEN - Real In-Stock Inventory
// Nut machines + multi-station bolt/screw formers
// ============================================================

export interface InventoryItem {
  id: string;
  category: "nut" | "bolt";
  brand: string;
  model: string;
  qty: number;
  note?: string;
}

export const NUT_STOCK: InventoryItem[] = [
  { id: "n1", category: "nut", brand: "Yeswin", model: "11B6S", qty: 4 },
  { id: "n2", category: "nut", brand: "Zhengyao (Jernyao)", model: "11B6S", qty: 1 },
  { id: "n3", category: "nut", brand: "Yeswin", model: "14B5S", qty: 1 },
  { id: "n4", category: "nut", brand: "Sijin", model: "14B6S", qty: 2 },
  { id: "n5", category: "nut", brand: "Tianbao", model: "14B6S", qty: 2 },
  { id: "n6", category: "nut", brand: "Jinggu", model: "14B6S", qty: 3 },
  { id: "n7", category: "nut", brand: "Songwei", model: "14B6S", qty: 1 },
  { id: "n8", category: "nut", brand: "Yeswin", model: "14B6S", qty: 5 },
  { id: "n9", category: "nut", brand: "Leilite", model: "14B6S", qty: 1 },
  { id: "n10", category: "nut", brand: "Duanya", model: "17B6S", qty: 1 },
  { id: "n11", category: "nut", brand: "Sijin", model: "17B6S", qty: 1 },
  { id: "n12", category: "nut", brand: "Jiaxin", model: "17B6S", qty: 1 },
  { id: "n13", category: "nut", brand: "Yeswin", model: "19B6S", qty: 4 },
  { id: "n14", category: "nut", brand: "Sijin", model: "19B6S", qty: 1 },
  { id: "n15", category: "nut", brand: "Junbiao", model: "19B6S", qty: 1 },
  { id: "n16", category: "nut", brand: "Zhengyao (Jernyao)", model: "19B6S", qty: 1 },
  { id: "n17", category: "nut", brand: "Jiaxin", model: "19B6S", qty: 1 },
  { id: "n18", category: "nut", brand: "Tenggong", model: "24B6S", qty: 1 },
  { id: "n19", category: "nut", brand: "Zhengyao (Jernyao)", model: "24B6S", qty: 2 },
  { id: "n20", category: "nut", brand: "Jiaxin", model: "24B6S", qty: 1 },
  { id: "n21", category: "nut", brand: "Yeswin", model: "24B6SL", qty: 1, note: "PKO" },
];

export const BOLT_STOCK: InventoryItem[] = [
  { id: "b1", category: "bolt", brand: "Jernyao (Taiwan)", model: "10B2S", qty: 3 },
  { id: "b2", category: "bolt", brand: "ESSEBI (Italy)", model: "63S", qty: 5 },
  { id: "b3", category: "bolt", brand: "Chaoyue (Dujiangyan)", model: "62S", qty: 2 },
  { id: "b4", category: "bolt", brand: "Tenggong (Ningbo)", model: "63S", qty: 3 },
  { id: "b5", category: "bolt", brand: "Sijin (Ningbo)", model: "63S", qty: 2 },
  { id: "b6", category: "bolt", brand: "Chunzu (Taiwan)", model: "63S", qty: 6 },
  { id: "b7", category: "bolt", brand: "BIAULI (Taiwan)", model: "10B3S", qty: 4 },
  { id: "b8", category: "bolt", brand: "BIAULI (Taiwan)", model: "13B3S", qty: 1 },
  { id: "b9", category: "bolt", brand: "Tengfeng (Hubei)", model: "64S", qty: 1 },
  { id: "b10", category: "bolt", brand: "Haixing (Ningbo)", model: "63S", qty: 1 },
  { id: "b11", category: "bolt", brand: "Jernyao (Taiwan)", model: "13B2S", qty: 2 },
  { id: "b12", category: "bolt", brand: "Chunzu (Shanghai)", model: "83S", qty: 6 },
  { id: "b13", category: "bolt", brand: "Hengya (Wenzhou)", model: "13B3S", qty: 1, note: "Cut-off 100mm" },
  { id: "b14", category: "bolt", brand: "Haixing (Ningbo)", model: "83S", qty: 1 },
  { id: "b15", category: "bolt", brand: "Tenggong (Ningbo)", model: "83S", qty: 2 },
  { id: "b16", category: "bolt", brand: "Chunzu", model: "83L", qty: 3, note: "Cut-off 110mm" },
  { id: "b17", category: "bolt", brand: "Sijin (Ningbo)", model: "83L", qty: 2, note: "Cut-off 110mm" },
  { id: "b18", category: "bolt", brand: "Hongtong (Wenzhou)", model: "83L", qty: 2, note: "Cut-off 100mm" },
  { id: "b19", category: "bolt", brand: "Yili (Wenzhou)", model: "84S", qty: 1 },
  { id: "b20", category: "bolt", brand: "Junma (Yixing)", model: "84SL", qty: 1, note: "Cut-off 150mm" },
  { id: "b21", category: "bolt", brand: "Tianwei (Wenzhou)", model: "84SL", qty: 1, note: "Cut-off 100mm" },
  { id: "b22", category: "bolt", brand: "Hengya (Wenzhou)", model: "13B4S", qty: 1 },
  { id: "b23", category: "bolt", brand: "Sijin (Ningbo)", model: "133S", qty: 1 },
  { id: "b24", category: "bolt", brand: "Haixing (Ningbo)", model: "103S", qty: 2 },
  { id: "b25", category: "bolt", brand: "Chunzu (Shanghai)", model: "103L", qty: 1, note: "Cut-off 150mm" },
  { id: "b26", category: "bolt", brand: "Sijin (Ningbo)", model: "104S", qty: 2 },
  { id: "b27", category: "bolt", brand: "Shengtuo (Wenzhou)", model: "104S", qty: 3 },
  { id: "b28", category: "bolt", brand: "Shengtuo (Wenzhou)", model: "104SL", qty: 1, note: "Cut-off 150mm" },
  { id: "b29", category: "bolt", brand: "Sijin (Ningbo)", model: "134L", qty: 1 },
  { id: "b30", category: "bolt", brand: "Chunzu (Shanghai)", model: "133S", qty: 1 },
  { id: "b31", category: "bolt", brand: "Tenggong (Ningbo)", model: "133S", qty: 1 },
  { id: "b32", category: "bolt", brand: "Tenggong (Ningbo)", model: "134L", qty: 1 },
  { id: "b33", category: "bolt", brand: "Chunzu (Taiwan)", model: "134L", qty: 3 },
  { id: "b34", category: "bolt", brand: "Shengrui (Wenzhou)", model: "135LL", qty: 1, note: "Cut-off 250mm, new" },
  { id: "b35", category: "bolt", brand: "Sijin (Ningbo)", model: "163S", qty: 1 },
  { id: "b36", category: "bolt", brand: "Jernyao (Taiwan)", model: "24B3S", qty: 1 },
  { id: "b37", category: "bolt", brand: "Sijin (Ningbo)", model: "164S", qty: 1 },
  { id: "b38", category: "bolt", brand: "Shengrui (Wenzhou)", model: "164S", qty: 1 },
  { id: "b39", category: "bolt", brand: "Tenggong (Ningbo)", model: "164S", qty: 1 },
  { id: "b40", category: "bolt", brand: "Chunzu", model: "164S", qty: 3 },
  { id: "b41", category: "bolt", brand: "Dongrui (Wenzhou)", model: "165S", qty: 1 },
  { id: "b42", category: "bolt", brand: "Baotuo (Jiaxing)", model: "165S", qty: 1 },
  { id: "b43", category: "bolt", brand: "Xiuqing (Wenzhou)", model: "165S", qty: 1 },
  { id: "b44", category: "bolt", brand: "Sijin (Ningbo)", model: "204L", qty: 3 },
  { id: "b45", category: "bolt", brand: "Xiuqing (Wenzhou)", model: "203L", qty: 1 },
  { id: "b46", category: "bolt", brand: "Dali (Shanghai)", model: "203L", qty: 1 },
  { id: "b47", category: "bolt", brand: "Sijin (Ningbo)", model: "254SL", qty: 2 },
  { id: "b48", category: "bolt", brand: "Dali (Shanghai)", model: "24/4", qty: 3 },
  { id: "b49", category: "bolt", brand: "Chunzu", model: "5L", qty: 80 },
];

export const ALL_STOCK: InventoryItem[] = [...NUT_STOCK, ...BOLT_STOCK];

export const NUT_TOTAL = NUT_STOCK.reduce((s, i) => s + i.qty, 0);
export const BOLT_TOTAL = BOLT_STOCK.reduce((s, i) => s + i.qty, 0);
export const TOTAL_UNITS = NUT_TOTAL + BOLT_TOTAL;
export const TOTAL_MODELS = ALL_STOCK.length;

// ------------------------------------------------------------
// NEW Bolt Heading Machines (brand new, with full spec sheets)
// Series: PT / GS / HM (合模机). Specs read from supplier documents.
// ------------------------------------------------------------

export interface NewMachineSpec {
  id: string;
  series: "PT" | "GS" | "HM";
  model: string;
  maxDia: string; // 可制外径 (mm)
  maxLength: string; // 可制长度 / 合模长度 (mm)
  output: string; // 产量 (pcs/min)
  mainDie: string; // 主模 / 夹模尺寸
  punchDie: string; // 冲模尺寸
  shearDie: string; // 剪模外径 / 剪模尺寸
  shearBlade: string; // 剪刀尺寸
  shearHole: string; // 剪刀孔位 / 模具螺丝
  motor: string; // 电机功率
  tableSize: string; // 台身尺寸 (mm)
  weight: string; // 重量 (kg)
  image: string;
}

// PT 普通机系列
const PT_SERIES: NewMachineSpec[] = [
  { id: "pt2", series: "PT", model: "PT-2", maxDia: "4", maxLength: "25", output: "170–200", mainDie: "Ø25×45", punchDie: "Ø20×48", shearDie: "Ø13", shearBlade: "8×25×60", shearHole: "M8×15", motor: "0.75kW", tableSize: "1300×950×1100", weight: "650", image: "/machines/hero-workshop.jpg" },
  { id: "pt38", series: "PT", model: "PT-3.8", maxDia: "5", maxLength: "40", output: "150–180", mainDie: "Ø30×60", punchDie: "Ø25×55", shearDie: "Ø16", shearBlade: "10×35×65", shearHole: "M8×20", motor: "1.5kW", tableSize: "1500×1100×1200", weight: "820", image: "/machines/hero-workshop.jpg" },
  { id: "pt4", series: "PT", model: "PT-4", maxDia: "6", maxLength: "60", output: "110–130", mainDie: "Ø35×80", punchDie: "Ø30×80", shearDie: "Ø18", shearBlade: "10×35×80", shearHole: "M10×20", motor: "2.2kW", tableSize: "2000×1200×1300", weight: "1500", image: "/machines/hero-workshop.jpg" },
  { id: "pt4a", series: "PT", model: "PT-4A", maxDia: "6", maxLength: "80", output: "100–120", mainDie: "Ø35×100", punchDie: "Ø30×88", shearDie: "Ø18", shearBlade: "10×35×80", shearHole: "M10×20", motor: "2.2kW", tableSize: "1900×1150×1300", weight: "2000", image: "/machines/hero-workshop.jpg" },
  { id: "pt6", series: "PT", model: "PT-6", maxDia: "8", maxLength: "110", output: "90–110", mainDie: "Ø45×120", punchDie: "Ø32×113", shearDie: "Ø22", shearBlade: "12×40×90", shearHole: "M12×22", motor: "3kW", tableSize: "2400×1300×1400", weight: "2000", image: "/machines/hero-workshop.jpg" },
];

// GS 高速机系列
const GS_SERIES: NewMachineSpec[] = [
  { id: "gs3", series: "GS", model: "GS-3", maxDia: "4", maxLength: "30", output: "200–240", mainDie: "Ø25×45", punchDie: "Ø20×45", shearDie: "Ø13", shearBlade: "8×25×50", shearHole: "M8×12", motor: "1.5kW", tableSize: "1300×900×1050", weight: "700", image: "/machines/hero-workshop.jpg" },
  { id: "gs4", series: "GS", model: "GS-4", maxDia: "5", maxLength: "40", output: "180–220", mainDie: "Ø30×60", punchDie: "Ø25×55", shearDie: "Ø16", shearBlade: "10×30×65", shearHole: "M10×17", motor: "2.2kW", tableSize: "1600×1100×1300", weight: "1200", image: "/machines/hero-workshop.jpg" },
  { id: "gs5", series: "GS", model: "GS-5", maxDia: "6", maxLength: "60", output: "150–180", mainDie: "Ø35×88", punchDie: "Ø31×90", shearDie: "Ø19", shearBlade: "10×35×75", shearHole: "M10×20", motor: "2.2kW", tableSize: "1800×1250×1350", weight: "1500", image: "/machines/hero-workshop.jpg" },
  { id: "gs6", series: "GS", model: "GS-6", maxDia: "8", maxLength: "80", output: "120–140", mainDie: "Ø45×105", punchDie: "Ø36×75", shearDie: "Ø28", shearBlade: "12×40×80", shearHole: "M12×22", motor: "3kW", tableSize: "2000×1400×1500", weight: "2700", image: "/machines/hero-workshop.jpg" },
  { id: "gs6a", series: "GS", model: "GS-6A", maxDia: "8", maxLength: "100", output: "100–120", mainDie: "Ø45×140", punchDie: "Ø36×75", shearDie: "Ø28", shearBlade: "12×40×80", shearHole: "M12×22", motor: "4kW", tableSize: "2200×1400×1500", weight: "3000", image: "/machines/hero-workshop.jpg" },
  { id: "gs8", series: "GS", model: "GS-8", maxDia: "10", maxLength: "90", output: "80–100", mainDie: "Ø55×130", punchDie: "Ø40×70", shearDie: "Ø30", shearBlade: "14×45×90", shearHole: "M14×25", motor: "7.5kW", tableSize: "2800×1600×1800", weight: "4000", image: "/machines/hero-workshop.jpg" },
];

// HM 合模机系列
const HM_SERIES: NewMachineSpec[] = [
  { id: "hm05", series: "HM", model: "HM-05", maxDia: "7", maxLength: "50", output: "80–100", mainDie: "40×40×50", punchDie: "Ø35×90", shearDie: "—", shearBlade: "20×24", shearHole: "M8×55", motor: "2.2kW", tableSize: "2600×1250×1650", weight: "2200", image: "/machines/hero-workshop.jpg" },
];

export const NEW_BOLT_MACHINES: NewMachineSpec[] = [
  ...PT_SERIES,
  ...GS_SERIES,
  ...HM_SERIES,
];

export const NEW_MACHINE_SERIES = {
  PT: PT_SERIES,
  GS: GS_SERIES,
  HM: HM_SERIES,
} as const;

// Representative real photo per category
export const CATEGORY_IMAGE = {
  nut: "/real/sijin-19b6s-front.jpg",
  bolt: "/real/shipping-yard.jpg",
} as const;