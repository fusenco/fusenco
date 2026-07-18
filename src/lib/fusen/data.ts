/**
 * FUSEN static data - Guides and other content
 */

export interface GuideData {
  name: string;
  city: string;
  languages: string[];
  experience: number;
  specialty: string;
  avatar: string;
}

export const GUIDES: GuideData[] = [
  {
    name: "Li Wei",
    city: "Beijing",
    languages: ["EN", "RU"],
    experience: 8,
    specialty: "History & Culture",
    avatar: "",
  },
  {
    name: "Zhang Mei",
    city: "Shanghai",
    languages: ["EN", "JA", "KO"],
    experience: 6,
    specialty: "Food & Shopping",
    avatar: "",
  },
  {
    name: "Wang Qiang",
    city: "Shenzhen",
    languages: ["EN", "ES", "PT"],
    experience: 10,
    specialty: "Business & Tech",
    avatar: "",
  },
  {
    name: "Chen Yu",
    city: "Chengdu",
    languages: ["EN", "FR"],
    experience: 5,
    specialty: "Nature & Cuisine",
    avatar: "",
  },
];

export const CONTACT_INFO = {
  whatsapp: "+8613800138000",
  whatsappLink: "https://wa.me/8613800138000",
  email: "contact@fusen-guide.com",
  phone: "+86 138-0013-8000",
};

export const DESTINATION_IMAGES: Record<string, string> = {
  Beijing: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=600&fit=crop",
  Shanghai: "https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=800&h=600&fit=crop",
  "Xi'an": "https://images.unsplash.com/photo-1591018653567-1ea24239fbab?w=800&h=600&fit=crop",
  Chengdu: "https://images.unsplash.com/photo-1545566239-0b103e75ee2c?w=800&h=600&fit=crop",
  Guangzhou: "https://images.unsplash.com/photo-1584189029912-0300d5072026?w=800&h=600&fit=crop",
  Hangzhou: "https://images.unsplash.com/photo-1598871132748-8632726ce0a5?w=800&h=600&fit=crop",
  Shenzhen: "https://images.unsplash.com/photo-1563867460685-f6b3a3b5d7e8?w=800&h=600&fit=crop",
  Guilin: "https://images.unsplash.com/photo-1537531383496-f4749b8032cf?w=800&h=600&fit=crop",
};

// Service icons - using emoji for simplicity, can be replaced with SVG
export const SERVICE_ICONS = [
  "translate",
  "explore",
  "business",
  "flight",
];
