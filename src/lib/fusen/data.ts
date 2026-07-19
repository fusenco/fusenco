/**
 * FUSEN static data - Guides, destinations, contact info
 */

export interface GuideData {
  name: string;
  language: string;
  languageCode: string;
  city: string;
  experience: number;
  specialty: string;
  avatar: string;
}

export const GUIDES: GuideData[] = [
  {
    name: "Li Wei",
    language: "English",
    languageCode: "EN",
    city: "Beijing",
    experience: 8,
    specialty: "History & Culture",
    avatar: "/guides/guide-en.jpg",
  },
  {
    name: "Wang Mei",
    language: "Spanish",
    languageCode: "ES",
    city: "Shanghai",
    experience: 6,
    specialty: "Food & Shopping",
    avatar: "/guides/guide-es.jpg",
  },
  {
    name: "Zhang Hao",
    language: "French",
    languageCode: "FR",
    city: "Xi'an",
    experience: 10,
    specialty: "History & Art",
    avatar: "/guides/guide-fr.jpg",
  },
  {
    name: "Chen Yu",
    language: "Japanese & Korean",
    languageCode: "JA/KO",
    city: "Chengdu",
    experience: 5,
    specialty: "Nature & Cuisine",
    avatar: "/guides/guide-ja.jpg",
  },
  {
    name: "Liu Ming",
    language: "Arabic",
    languageCode: "AR",
    city: "Guangzhou",
    experience: 7,
    specialty: "Trade & Business",
    avatar: "/guides/guide-ar.jpg",
  },
  {
    name: "Zhao Lin",
    language: "Russian",
    languageCode: "RU",
    city: "Harbin",
    experience: 9,
    specialty: "Culture & Architecture",
    avatar: "/guides/guide-ru.jpg",
  },
  {
    name: "Sun Qiang",
    language: "Portuguese",
    languageCode: "PT",
    city: "Shenzhen",
    experience: 6,
    specialty: "Tech & Business",
    avatar: "/guides/guide-pt.jpg",
  },
  {
    name: "Wu Jie",
    language: "Polish",
    languageCode: "PL",
    city: "Hangzhou",
    experience: 4,
    specialty: "Tea Culture & Heritage",
    avatar: "/guides/guide-pl.jpg",
  },
  {
    name: "Zhou Lei",
    language: "Turkish",
    languageCode: "TR",
    city: "Beijing",
    experience: 5,
    specialty: "Silk Road & Culture",
    avatar: "/guides/guide-tr.jpg",
  },
];

export const CONTACT_INFO = {
  whatsapp: "+86 131-1671-6778",
  whatsappLink: "https://wa.me/8613365764352",
  email: "info@fusenco.com",
  phone: "+86 131-1671-6778",
};

export const DESTINATION_IMAGES: Record<string, string> = {
  Beijing: "/destinations/dest-beijing.jpg",
  Shanghai: "/destinations/dest-shanghai.jpg",
  "Xi'an": "/destinations/dest-xian.jpg",
  Chengdu: "/destinations/dest-chengdu.jpg",
  Guangzhou: "/destinations/dest-guangzhou.jpg",
  Hangzhou: "/destinations/dest-hangzhou.jpg",
  Shenzhen: "/destinations/dest-shenzhen.jpg",
  Guilin: "/destinations/dest-guilin.jpg",
};

export const HERO_IMAGES = [
  { src: "/hero-mountain.jpg", alt: "China mountain landscape" },
  { src: "/hero-hongyadong.jpg", alt: "Chongqing Hongyadong night view" },
  { src: "/hero-potala.jpg", alt: "Tibet Potala Palace panorama" },
];

export const SERVICE_BACKGROUNDS = [
  "/destinations/dest-beijing.jpg",
  "/destinations/dest-shanghai.jpg",
  "/destinations/dest-shenzhen.jpg",
  "/destinations/dest-guangzhou.jpg",
];

// Service icons - using emoji for simplicity, can be replaced with SVG
export const SERVICE_ICONS = [
  "translate",
  "explore",
  "business",
  "flight",
];
