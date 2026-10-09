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

// Representative image per category (AI placeholder until real photos arrive)
export const CATEGORY_IMAGE = {
  nut: "/machines/nut-cold-header.jpg",
  bolt: "/machines/bolt-heading-machine.jpg",
} as const;