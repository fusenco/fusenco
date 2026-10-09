// ============================================================
// FUSEN - Used Cold Heading Machines Data
// ============================================================

export interface MachineProduct {
  id: string;
  model: string;
  brand: string;
  type: "nut" | "bolt" | "screw";
  station: string;
  spec: string;
  year: string;
  image: string;
  featured?: boolean;
}

export const CONTACT_INFO = {
  email: "info@fusenco.com",
  whatsapp: "+86 133-6576-4352",
  phone: "+86 133-6576-4352",
  whatsappLink: "https://wa.me/8613365764352",
  companyName: "FUSEN",
  companyNameCn: "风泉",
  address: "Dongguan, Guangdong, China",
} as const;

export const MACHINE_PRODUCTS: MachineProduct[] = [
  {
    id: "sijin-105s",
    model: "Sijin 105S",
    brand: "Sijin",
    type: "nut",
    station: "5-Station Nut Former",
    spec: "Max wire dia. 10mm · M5–M10 nuts",
    year: "2018",
    image: "/machines/nut-cold-header.jpg",
    featured: true,
  },
  {
    id: "bolt-2d4b",
    model: "2D4B Bolt Former",
    brand: "Spring",
    type: "bolt",
    station: "2-Die 4-Blow",
    spec: "Max dia. 8mm · Length 80mm",
    year: "2019",
    image: "/machines/bolt-heading-machine.jpg",
    featured: true,
  },
  {
    id: "screw-1d2b",
    model: "1D2B Screw Header",
    brand: "Sijin",
    type: "screw",
    station: "1-Die 2-Blow",
    spec: "Max dia. 5mm · Length 50mm",
    year: "2020",
    image: "/machines/screw-heading-machine.jpg",
  },
  {
    id: "former-6d6b",
    model: "6D6B Cold Former",
    brand: "Spring",
    type: "bolt",
    station: "6-Die 6-Blow",
    spec: "Max dia. 19mm · Length 200mm",
    year: "2017",
    image: "/machines/six-die-former.jpg",
  },
  {
    id: "nut-14b",
    model: "Nut Machine 14B",
    brand: "National",
    type: "nut",
    station: "5-Station Nut Former",
    spec: "Max dia. 14mm · M8–M14 nuts",
    year: "2016",
    image: "/machines/nut-cold-header.jpg",
  },
  {
    id: "nut-19b",
    model: "Nut Machine 19B",
    brand: "National",
    type: "nut",
    station: "6-Station Nut Former",
    spec: "Max dia. 19mm · M12–M19 nuts",
    year: "2015",
    image: "/machines/six-die-former.jpg",
  },
  {
    id: "bolt-3d3b",
    model: "3D3B Part Former",
    brand: "Sijin",
    type: "bolt",
    station: "3-Die 3-Blow",
    spec: "Max dia. 10mm · Length 120mm",
    year: "2018",
    image: "/machines/bolt-heading-machine.jpg",
  },
  {
    id: "bolt-4d4b",
    model: "4D4B Cold Header",
    brand: "Spring",
    type: "bolt",
    station: "4-Die 4-Blow",
    spec: "Max dia. 13mm · Length 150mm",
    year: "2017",
    image: "/machines/screw-heading-machine.jpg",
  },
];

export interface BrandInfo {
  name: string;
  origin: string;
}

// Real brands currently in stock (from inventory.ts). Kept compact and
// representative — the full listing lives in inventory.ts.
export const MACHINE_BRANDS: BrandInfo[] = [
  { name: "Sijin (思进)", origin: "China (Ningbo)" },
  { name: "Chunzu (春日)", origin: "China (Taiwan)" },
  { name: "Yeswin (联翔)", origin: "China (Zhejiang)" },
  { name: "Jernyao (正曜)", origin: "China (Taiwan)" },
  { name: "BIAULI (标利)", origin: "China (Taiwan)" },
  { name: "Tenggong (腾丰)", origin: "China (Guangdong)" },
  { name: "ESSEBI (意士比)", origin: "Italy" },
  { name: "Shengtuo (盛拓)", origin: "China (Wenzhou)" },
];

export interface MachineCategory {
  key: string;
  label: string;
}

export const MACHINE_CATEGORIES: MachineCategory[] = [
  { key: "nut", label: "Nut Cold Headers" },
  { key: "bolt", label: "Bolt Heading Machines" },
  { key: "1d2b", label: "1-Die 2-Blow" },
  { key: "2d4b", label: "2-Die 4-Blow" },
  { key: "3d3b", label: "3-Die 3-Blow" },
  { key: "4d4b", label: "4-Die 4-Blow" },
  { key: "5d5b", label: "5-Die 5-Blow" },
  { key: "6d6b", label: "6-Die 6-Blow" },
];
