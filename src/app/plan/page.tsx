"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { planTranslations, type PlanLang } from "@/lib/i18n/plan-translations";
import { CONTACT_INFO } from "@/lib/fusen/data";

// Country calling codes data
const COUNTRY_CODES: { code: string; dial: string; name: string }[] = [
  { code: "AF", dial: "+93", name: "Afghanistan 阿富汗" },
  { code: "AL", dial: "+355", name: "Albania 阿尔巴尼亚" },
  { code: "DZ", dial: "+213", name: "Algeria 阿尔及利亚" },
  { code: "AS", dial: "+1-684", name: "American Samoa 美属萨摩亚" },
  { code: "AD", dial: "+376", name: "Andorra 安道尔" },
  { code: "AO", dial: "+244", name: "Angola 安哥拉" },
  { code: "AI", dial: "+1-264", name: "Anguilla 安圭拉" },
  { code: "AQ", dial: "+672", name: "Antarctica 南极洲" },
  { code: "AG", dial: "+1-268", name: "Antigua and Barbuda 安提瓜和巴布达" },
  { code: "AR", dial: "+54", name: "Argentina 阿根廷" },
  { code: "AM", dial: "+374", name: "Armenia 亚美尼亚" },
  { code: "AW", dial: "+297", name: "Aruba 阿鲁巴" },
  { code: "AU", dial: "+61", name: "Australia 澳大利亚" },
  { code: "AT", dial: "+43", name: "Austria 奥地利" },
  { code: "AZ", dial: "+994", name: "Azerbaijan 阿塞拜疆" },
  { code: "BS", dial: "+1-242", name: "Bahamas 巴哈马" },
  { code: "BH", dial: "+973", name: "Bahrain 巴林" },
  { code: "BD", dial: "+880", name: "Bangladesh 孟加拉国" },
  { code: "BB", dial: "+1-246", name: "Barbados 巴巴多斯" },
  { code: "BY", dial: "+375", name: "Belarus 白俄罗斯" },
  { code: "BE", dial: "+32", name: "Belgium 比利时" },
  { code: "BZ", dial: "+501", name: "Belize 伯利兹" },
  { code: "BJ", dial: "+229", name: "Benin 贝宁" },
  { code: "BM", dial: "+1-441", name: "Bermuda 百慕大" },
  { code: "BT", dial: "+975", name: "Bhutan 不丹" },
  { code: "BO", dial: "+591", name: "Bolivia 玻利维亚" },
  { code: "BA", dial: "+387", name: "Bosnia and Herzegovina 波黑" },
  { code: "BW", dial: "+267", name: "Botswana 博茨瓦纳" },
  { code: "BR", dial: "+55", name: "Brazil 巴西" },
  { code: "IO", dial: "+246", name: "British Indian Ocean Territory 英属印度洋领地" },
  { code: "VG", dial: "+1-284", name: "British Virgin Islands 英属维尔京群岛" },
  { code: "BN", dial: "+673", name: "Brunei 文莱" },
  { code: "BG", dial: "+359", name: "Bulgaria 保加利亚" },
  { code: "BF", dial: "+226", name: "Burkina Faso 布基纳法索" },
  { code: "BI", dial: "+257", name: "Burundi 布隆迪" },
  { code: "KH", dial: "+855", name: "Cambodia 柬埔寨" },
  { code: "CM", dial: "+237", name: "Cameroon 喀麦隆" },
  { code: "CA", dial: "+1", name: "Canada 加拿大" },
  { code: "CV", dial: "+238", name: "Cape Verde 佛得角" },
  { code: "KY", dial: "+1-345", name: "Cayman Islands 开曼群岛" },
  { code: "CF", dial: "+236", name: "Central African Republic 中非共和国" },
  { code: "TD", dial: "+235", name: "Chad 乍得" },
  { code: "CL", dial: "+56", name: "Chile 智利" },
  { code: "CN", dial: "+86", name: "China 中国" },
  { code: "CX", dial: "+61", name: "Christmas Island 圣诞岛" },
  { code: "CC", dial: "+61", name: "Cocos Islands 科科斯群岛" },
  { code: "CO", dial: "+57", name: "Colombia 哥伦比亚" },
  { code: "KM", dial: "+269", name: "Comoros 科摩罗" },
  { code: "CG", dial: "+242", name: "Congo 刚果（布）" },
  { code: "CD", dial: "+243", name: "Congo (DRC) 刚果（金）" },
  { code: "CK", dial: "+682", name: "Cook Islands 库克群岛" },
  { code: "CR", dial: "+506", name: "Costa Rica 哥斯达黎加" },
  { code: "CI", dial: "+225", name: "Côte d'Ivoire 科特迪瓦" },
  { code: "HR", dial: "+385", name: "Croatia 克罗地亚" },
  { code: "CU", dial: "+53", name: "Cuba 古巴" },
  { code: "CW", dial: "+599", name: "Curaçao 库拉索" },
  { code: "CY", dial: "+357", name: "Cyprus 塞浦路斯" },
  { code: "CZ", dial: "+420", name: "Czech Republic 捷克" },
  { code: "DK", dial: "+45", name: "Denmark 丹麦" },
  { code: "DJ", dial: "+253", name: "Djibouti 吉布提" },
  { code: "DM", dial: "+1-767", name: "Dominica 多米尼克" },
  { code: "DO", dial: "+1-809", name: "Dominican Republic 多米尼加" },
  { code: "EC", dial: "+593", name: "Ecuador 厄瓜多尔" },
  { code: "EG", dial: "+20", name: "Egypt 埃及" },
  { code: "SV", dial: "+503", name: "El Salvador 萨尔瓦多" },
  { code: "GQ", dial: "+240", name: "Equatorial Guinea 赤道几内亚" },
  { code: "ER", dial: "+291", name: "Eritrea 厄立特里亚" },
  { code: "EE", dial: "+372", name: "Estonia 爱沙尼亚" },
  { code: "ET", dial: "+251", name: "Ethiopia 埃塞俄比亚" },
  { code: "FK", dial: "+500", name: "Falkland Islands 福克兰群岛" },
  { code: "FO", dial: "+298", name: "Faroe Islands 法罗群岛" },
  { code: "FJ", dial: "+679", name: "Fiji 斐济" },
  { code: "FI", dial: "+358", name: "Finland 芬兰" },
  { code: "FR", dial: "+33", name: "France 法国" },
  { code: "PF", dial: "+689", name: "French Polynesia 法属波利尼西亚" },
  { code: "GA", dial: "+241", name: "Gabon 加蓬" },
  { code: "GM", dial: "+220", name: "Gambia 冈比亚" },
  { code: "GE", dial: "+995", name: "Georgia 格鲁吉亚" },
  { code: "DE", dial: "+49", name: "Germany 德国" },
  { code: "GH", dial: "+233", name: "Ghana 加纳" },
  { code: "GI", dial: "+350", name: "Gibraltar 直布罗陀" },
  { code: "GR", dial: "+30", name: "Greece 希腊" },
  { code: "GL", dial: "+299", name: "Greenland 格陵兰" },
  { code: "GD", dial: "+1-473", name: "Grenada 格林纳达" },
  { code: "GU", dial: "+1-671", name: "Guam 关岛" },
  { code: "GT", dial: "+502", name: "Guatemala 危地马拉" },
  { code: "GG", dial: "+44-1481", name: "Guernsey 根西岛" },
  { code: "GN", dial: "+224", name: "Guinea 几内亚" },
  { code: "GW", dial: "+245", name: "Guinea-Bissau 几内亚比绍" },
  { code: "GY", dial: "+592", name: "Guyana 圭亚那" },
  { code: "HT", dial: "+509", name: "Haiti 海地" },
  { code: "HN", dial: "+504", name: "Honduras 洪都拉斯" },
  { code: "HK", dial: "+852", name: "Hong Kong 中国香港" },
  { code: "HU", dial: "+36", name: "Hungary 匈牙利" },
  { code: "IS", dial: "+354", name: "Iceland 冰岛" },
  { code: "IN", dial: "+91", name: "India 印度" },
  { code: "ID", dial: "+62", name: "Indonesia 印度尼西亚" },
  { code: "IR", dial: "+98", name: "Iran 伊朗" },
  { code: "IQ", dial: "+964", name: "Iraq 伊拉克" },
  { code: "IE", dial: "+353", name: "Ireland 爱尔兰" },
  { code: "IM", dial: "+44-1624", name: "Isle of Man 马恩岛" },
  { code: "IL", dial: "+972", name: "Israel 以色列" },
  { code: "IT", dial: "+39", name: "Italy 意大利" },
  { code: "JM", dial: "+1-876", name: "Jamaica 牙买加" },
  { code: "JP", dial: "+81", name: "Japan 日本" },
  { code: "JE", dial: "+44-1534", name: "Jersey 泽西岛" },
  { code: "JO", dial: "+962", name: "Jordan 约旦" },
  { code: "KZ", dial: "+7", name: "Kazakhstan 哈萨克斯坦" },
  { code: "KE", dial: "+254", name: "Kenya 肯尼亚" },
  { code: "KI", dial: "+686", name: "Kiribati 基里巴斯" },
  { code: "XK", dial: "+383", name: "Kosovo 科索沃" },
  { code: "KW", dial: "+965", name: "Kuwait 科威特" },
  { code: "KG", dial: "+996", name: "Kyrgyzstan 吉尔吉斯斯坦" },
  { code: "LA", dial: "+856", name: "Laos 老挝" },
  { code: "LV", dial: "+371", name: "Latvia 拉脱维亚" },
  { code: "LB", dial: "+961", name: "Lebanon 黎巴嫩" },
  { code: "LS", dial: "+266", name: "Lesotho 莱索托" },
  { code: "LR", dial: "+231", name: "Liberia 利比里亚" },
  { code: "LY", dial: "+218", name: "Libya 利比亚" },
  { code: "LI", dial: "+423", name: "Liechtenstein 列支敦士登" },
  { code: "LT", dial: "+370", name: "Lithuania 立陶宛" },
  { code: "LU", dial: "+352", name: "Luxembourg 卢森堡" },
  { code: "MO", dial: "+853", name: "Macau 中国澳门" },
  { code: "MK", dial: "+389", name: "North Macedonia 北马其顿" },
  { code: "MG", dial: "+261", name: "Madagascar 马达加斯加" },
  { code: "MW", dial: "+265", name: "Malawi 马拉维" },
  { code: "MY", dial: "+60", name: "Malaysia 马来西亚" },
  { code: "MV", dial: "+960", name: "Maldives 马尔代夫" },
  { code: "ML", dial: "+223", name: "Mali 马里" },
  { code: "MT", dial: "+356", name: "Malta 马耳他" },
  { code: "MH", dial: "+692", name: "Marshall Islands 马绍尔群岛" },
  { code: "MR", dial: "+222", name: "Mauritania 毛里塔尼亚" },
  { code: "MU", dial: "+230", name: "Mauritius 毛里求斯" },
  { code: "YT", dial: "+262", name: "Mayotte 马约特" },
  { code: "MX", dial: "+52", name: "Mexico 墨西哥" },
  { code: "FM", dial: "+691", name: "Micronesia 密克罗尼西亚" },
  { code: "MD", dial: "+373", name: "Moldova 摩尔多瓦" },
  { code: "MC", dial: "+377", name: "Monaco 摩纳哥" },
  { code: "MN", dial: "+976", name: "Mongolia 蒙古" },
  { code: "ME", dial: "+382", name: "Montenegro 黑山" },
  { code: "MS", dial: "+1-664", name: "Montserrat 蒙特塞拉特" },
  { code: "MA", dial: "+212", name: "Morocco 摩洛哥" },
  { code: "MZ", dial: "+258", name: "Mozambique 莫桑比克" },
  { code: "MM", dial: "+95", name: "Myanmar 缅甸" },
  { code: "NA", dial: "+264", name: "Namibia 纳米比亚" },
  { code: "NR", dial: "+674", name: "Nauru 瑙鲁" },
  { code: "NP", dial: "+977", name: "Nepal 尼泊尔" },
  { code: "NL", dial: "+31", name: "Netherlands 荷兰" },
  { code: "NC", dial: "+687", name: "New Caledonia 新喀里多尼亚" },
  { code: "NZ", dial: "+64", name: "New Zealand 新西兰" },
  { code: "NI", dial: "+505", name: "Nicaragua 尼加拉瓜" },
  { code: "NE", dial: "+227", name: "Niger 尼日尔" },
  { code: "NG", dial: "+234", name: "Nigeria 尼日利亚" },
  { code: "NU", dial: "+683", name: "Niue 纽埃" },
  { code: "NF", dial: "+672", name: "Norfolk Island 诺福克岛" },
  { code: "KP", dial: "+850", name: "North Korea 朝鲜" },
  { code: "MP", dial: "+1-670", name: "Northern Mariana Islands 北马里亚纳群岛" },
  { code: "NO", dial: "+47", name: "Norway 挪威" },
  { code: "OM", dial: "+968", name: "Oman 阿曼" },
  { code: "PK", dial: "+92", name: "Pakistan 巴基斯坦" },
  { code: "PW", dial: "+680", name: "Palau 帕劳" },
  { code: "PS", dial: "+970", name: "Palestine 巴勒斯坦" },
  { code: "PA", dial: "+507", name: "Panama 巴拿马" },
  { code: "PG", dial: "+675", name: "Papua New Guinea 巴布亚新几内亚" },
  { code: "PY", dial: "+595", name: "Paraguay 巴拉圭" },
  { code: "PE", dial: "+51", name: "Peru 秘鲁" },
  { code: "PH", dial: "+63", name: "Philippines 菲律宾" },
  { code: "PN", dial: "+64", name: "Pitcairn Islands 皮特凯恩群岛" },
  { code: "PL", dial: "+48", name: "Poland 波兰" },
  { code: "PT", dial: "+351", name: "Portugal 葡萄牙" },
  { code: "PR", dial: "+1-787", name: "Puerto Rico 波多黎各" },
  { code: "QA", dial: "+974", name: "Qatar 卡塔尔" },
  { code: "RE", dial: "+262", name: "Réunion 留尼汪" },
  { code: "RO", dial: "+40", name: "Romania 罗马尼亚" },
  { code: "RU", dial: "+7", name: "Russia 俄罗斯" },
  { code: "RW", dial: "+250", name: "Rwanda 卢旺达" },
  { code: "BL", dial: "+590", name: "Saint Barthélemy 圣巴泰勒米" },
  { code: "SH", dial: "+290", name: "Saint Helena 圣赫勒拿" },
  { code: "KN", dial: "+1-869", name: "Saint Kitts and Nevis 圣基茨和尼维斯" },
  { code: "LC", dial: "+1-758", name: "Saint Lucia 圣卢西亚" },
  { code: "MF", dial: "+590", name: "Saint Martin 圣马丁" },
  { code: "PM", dial: "+508", name: "Saint Pierre and Miquelon 圣皮埃尔和密克隆" },
  { code: "VC", dial: "+1-784", name: "Saint Vincent and the Grenadines 圣文森特和格林纳丁斯" },
  { code: "WS", dial: "+685", name: "Samoa 萨摩亚" },
  { code: "SM", dial: "+378", name: "San Marino 圣马力诺" },
  { code: "ST", dial: "+239", name: "São Tomé and Príncipe 圣多美和普林西比" },
  { code: "SA", dial: "+966", name: "Saudi Arabia 沙特阿拉伯" },
  { code: "SN", dial: "+221", name: "Senegal 塞内加尔" },
  { code: "RS", dial: "+381", name: "Serbia 塞尔维亚" },
  { code: "SC", dial: "+248", name: "Seychelles 塞舌尔" },
  { code: "SL", dial: "+232", name: "Sierra Leone 塞拉利昂" },
  { code: "SG", dial: "+65", name: "Singapore 新加坡" },
  { code: "SX", dial: "+1-721", name: "Sint Maarten 荷属圣马丁" },
  { code: "SK", dial: "+421", name: "Slovakia 斯洛伐克" },
  { code: "SI", dial: "+386", name: "Slovenia 斯洛文尼亚" },
  { code: "SB", dial: "+677", name: "Solomon Islands 所罗门群岛" },
  { code: "SO", dial: "+252", name: "Somalia 索马里" },
  { code: "ZA", dial: "+27", name: "South Africa 南非" },
  { code: "GS", dial: "+500", name: "South Georgia 南乔治亚" },
  { code: "KR", dial: "+82", name: "South Korea 韩国" },
  { code: "SS", dial: "+211", name: "South Sudan 南苏丹" },
  { code: "ES", dial: "+34", name: "Spain 西班牙" },
  { code: "LK", dial: "+94", name: "Sri Lanka 斯里兰卡" },
  { code: "SD", dial: "+249", name: "Sudan 苏丹" },
  { code: "SR", dial: "+597", name: "Suriname 苏里南" },
  { code: "SJ", dial: "+47", name: "Svalbard and Jan Mayen 斯瓦尔巴" },
  { code: "SZ", dial: "+268", name: "Eswatini 斯威士兰" },
  { code: "SE", dial: "+46", name: "Sweden 瑞典" },
  { code: "CH", dial: "+41", name: "Switzerland 瑞士" },
  { code: "SY", dial: "+963", name: "Syria 叙利亚" },
  { code: "TW", dial: "+886", name: "Taiwan 中国台湾" },
  { code: "TJ", dial: "+992", name: "Tajikistan 塔吉克斯坦" },
  { code: "TZ", dial: "+255", name: "Tanzania 坦桑尼亚" },
  { code: "TH", dial: "+66", name: "Thailand 泰国" },
  { code: "TL", dial: "+670", name: "Timor-Leste 东帝汶" },
  { code: "TG", dial: "+228", name: "Togo 多哥" },
  { code: "TK", dial: "+690", name: "Tokelau 托克劳" },
  { code: "TO", dial: "+676", name: "Tonga 汤加" },
  { code: "TT", dial: "+1-868", name: "Trinidad and Tobago 特立尼达和多巴哥" },
  { code: "TN", dial: "+216", name: "Tunisia 突尼斯" },
  { code: "TR", dial: "+90", name: "Turkey 土耳其" },
  { code: "TM", dial: "+993", name: "Turkmenistan 土库曼斯坦" },
  { code: "TC", dial: "+1-649", name: "Turks and Caicos Islands 特克斯和凯科斯群岛" },
  { code: "TV", dial: "+688", name: "Tuvalu 图瓦卢" },
  { code: "VI", dial: "+1-340", name: "U.S. Virgin Islands 美属维尔京群岛" },
  { code: "UG", dial: "+256", name: "Uganda 乌干达" },
  { code: "UA", dial: "+380", name: "Ukraine 乌克兰" },
  { code: "AE", dial: "+971", name: "United Arab Emirates 阿联酋" },
  { code: "GB", dial: "+44", name: "United Kingdom 英国" },
  { code: "US", dial: "+1", name: "United States 美国" },
  { code: "UY", dial: "+598", name: "Uruguay 乌拉圭" },
  { code: "UZ", dial: "+998", name: "Uzbekistan 乌兹别克斯坦" },
  { code: "VU", dial: "+678", name: "Vanuatu 瓦努阿图" },
  { code: "VA", dial: "+379", name: "Vatican City 梵蒂冈" },
  { code: "VE", dial: "+58", name: "Venezuela 委内瑞拉" },
  { code: "VN", dial: "+84", name: "Vietnam 越南" },
  { code: "WF", dial: "+681", name: "Wallis and Futuna 瓦利斯和富图纳" },
  { code: "YE", dial: "+967", name: "Yemen 也门" },
  { code: "ZM", dial: "+260", name: "Zambia 赞比亚" },
  { code: "ZW", dial: "+263", name: "Zimbabwe 津巴布韦" },
];
import { Navbar } from "@/components/fusen/Navbar";
import { Footer } from "@/components/fusen/Footer";

export default function PlanPage() {
  const { lang } = useLanguage();
  const t = planTranslations[(lang as PlanLang) || "en"];

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    nationality: "",
    visitorCount: "1",
    email: "",
    phoneCountryCode: "+86",
    phone: "",
    whatsapp: "",
    wechat: "",
    emergencyName: "",
    emergencyPhone: "",
    emergencyRelation: "",
    entryDate: "",
    exitDate: "",
    duration: "4h",
    customDuration: "",
    cities: [] as string[],
    customCity: "",
    dietary: [] as string[],
    religion: "",
    services: [] as string[],
    specificInterests: "",
    tripType: "",
    budgetRange: "mid",
    accommodation: [] as string[],
    transportation: [] as string[],
    specialNotes: "",
    medicalNeeds: "",
    hearAbout: "",
    agree: false,
  });

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleArray = (key: "cities" | "dietary" | "services" | "accommodation" | "transportation", value: string) => {
    setForm((prev) => {
      const arr = prev[key];
      return { ...prev, [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value] };
    });
  };

  const localeMap: Record<string, string> = {
    en: "en-US",
    ru: "ru-RU",
    ja: "ja-JP",
    ko: "ko-KR",
    es: "es-ES",
    pt: "pt-PT",
    fr: "fr-FR",
    ar: "ar-SA",
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("Full Name", form.fullName);
      formData.append("Nationality", form.nationality);
      formData.append("Visitor Count", form.visitorCount);
      formData.append("Email", form.email);
      formData.append("Phone", form.phoneCountryCode ? form.phoneCountryCode + " " + form.phone : form.phone);
      formData.append("WhatsApp", form.whatsapp);
      formData.append("WeChat", form.wechat);
      formData.append("Emergency Contact Name", form.emergencyName);
      formData.append("Emergency Contact Phone", form.emergencyPhone);
      formData.append("Emergency Contact Relation", form.emergencyRelation);
      formData.append("Entry Date", form.entryDate);
      formData.append("Exit Date", form.exitDate);
      formData.append("Service Duration", form.duration === "custom" ? form.customDuration : form.duration);
      formData.append("Cities", form.cities.join(", "));
      if (form.customCity) formData.append("Custom City", form.customCity);
      formData.append("Dietary Restrictions", form.dietary.join(", "));
      formData.append("Religion", form.religion);
      formData.append("Services", form.services.join(", "));
      formData.append("Specific Interests", form.specificInterests);
      formData.append("Trip Type", form.tripType);
      formData.append("Budget", form.budgetRange);
      formData.append("Accommodation", form.accommodation.join(", "));
      formData.append("Transportation", form.transportation.join(", "));
      formData.append("Special Notes", form.specialNotes);
      formData.append("Medical Needs", form.medicalNeeds);
      formData.append("How did you hear", form.hearAbout);

      const res = await fetch("https://formspree.io/f/xwvgoavg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`, "_blank");
      }
    } catch {
      window.open(`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`, "_blank");
    } finally {
      setSubmitting(false);
    }
  };

  const locale = localeMap[lang] || "en-US";

  // ─── Success Page ───
  if (success) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#F8F5F0] pt-28 pb-16 px-4 flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-50 border-4 border-green-100">
              <svg className="h-12 w-12 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="font-serif text-4xl text-[#1A1410] mb-4">{t.thankYou}</h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.successMessage}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 font-semibold text-white transition-all hover:bg-[#1EBE5A] hover:shadow-lg"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                {t.chatWhatsApp}
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#8B1A1A] px-8 py-3.5 font-semibold text-[#8B1A1A] transition-all hover:bg-[#8B1A1A] hover:text-white"
              >
                {t.backToHome}
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const DURATIONS = ["4h", "8h", "3d", "5d", "7d", "custom"];
  const CITY_KEYS = ["Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chengdu", "Xi'an", "Hangzhou", "Chongqing", "Lhasa (Tibet)", "Guilin", "Hong Kong", "Kunming", "Suzhou", "Nanjing", "Harbin"];
  const BUDGET_VALUES = ["budget", "mid", "premium", "luxury"];
  const ACCOMMODATION_VALUES = ["hotel5", "hotel4", "boutique", "homestay", "apartment"];
  const TRANSPORTATION_VALUES = ["private", "train", "flight", "public"];
  const HEAR_VALUES = ["friend", "social", "search", "forum", "blog", "other"];

  const COUNTRY_CODES = [
    { code: "CN", dial: "+86", name: "China 中国" },
    { code: "US", dial: "+1", name: "United States 美国" },
    { code: "CA", dial: "+1", name: "Canada 加拿大" },
    { code: "GB", dial: "+44", name: "United Kingdom 英国" },
    { code: "DE", dial: "+49", name: "Germany 德国" },
    { code: "FR", dial: "+33", name: "France 法国" },
    { code: "ES", dial: "+34", name: "Spain 西班牙" },
    { code: "IT", dial: "+39", name: "Italy 意大利" },
    { code: "PT", dial: "+351", name: "Portugal 葡萄牙" },
    { code: "RU", dial: "+7", name: "Russia 俄罗斯" },
    { code: "JP", dial: "+81", name: "Japan 日本" },
    { code: "KR", dial: "+82", name: "Korea 韩国" },
    { code: "AU", dial: "+61", name: "Australia 澳大利亚" },
    { code: "NZ", dial: "+64", name: "New Zealand 新西兰" },
    { code: "BR", dial: "+55", name: "Brazil 巴西" },
    { code: "MX", dial: "+52", name: "Mexico 墨西哥" },
    { code: "AR", dial: "+54", name: "Argentina 阿根廷" },
    { code: "CL", dial: "+56", name: "Chile 智利" },
    { code: "CO", dial: "+57", name: "Colombia 哥伦比亚" },
    { code: "PE", dial: "+51", name: "Peru 秘鲁" },
    { code: "VE", dial: "+58", name: "Venezuela 委内瑞拉" },
    { code: "IN", dial: "+91", name: "India 印度" },
    { code: "PK", dial: "+92", name: "Pakistan 巴基斯坦" },
    { code: "BD", dial: "+880", name: "Bangladesh 孟加拉国" },
    { code: "ID", dial: "+62", name: "Indonesia 印度尼西亚" },
    { code: "MY", dial: "+60", name: "Malaysia 马来西亚" },
    { code: "SG", dial: "+65", name: "Singapore 新加坡" },
    { code: "TH", dial: "+66", name: "Thailand 泰国" },
    { code: "VN", dial: "+84", name: "Vietnam 越南" },
    { code: "PH", dial: "+63", name: "Philippines 菲律宾" },
    { code: "TR", dial: "+90", name: "Turkey 土耳其" },
    { code: "SA", dial: "+966", name: "Saudi Arabia 沙特阿拉伯" },
    { code: "AE", dial: "+971", name: "UAE 阿联酋" },
    { code: "IL", dial: "+972", name: "Israel 以色列" },
    { code: "EG", dial: "+20", name: "Egypt 埃及" },
    { code: "ZA", dial: "+27", name: "South Africa 南非" },
    { code: "NG", dial: "+234", name: "Nigeria 尼日利亚" },
    { code: "KE", dial: "+254", name: "Kenya 肯尼亚" },
    { code: "MA", dial: "+212", name: "Morocco 摩洛哥" },
    { code: "DZ", dial: "+213", name: "Algeria 阿尔及利亚" },
    { code: "TN", dial: "+216", name: "Tunisia 突尼斯" },
    { code: "GH", dial: "+233", name: "Ghana 加纳" },
    { code: "ET", dial: "+251", name: "Ethiopia 埃塞俄比亚" },
    { code: "TZ", dial: "+255", name: "Tanzania 坦桑尼亚" },
    { code: "UG", dial: "+256", name: "Uganda 乌干达" },
    { code: "AO", dial: "+244", name: "Angola 安哥拉" },
    { code: "SD", dial: "+249", name: "Sudan 苏丹" },
    { code: "LY", dial: "+218", name: "Libya 利比亚" },
    { code: "MZ", dial: "+258", name: "Mozambique 莫桑比克" },
    { code: "MG", dial: "+261", name: "Madagascar 马达加斯加" },
    { code: "CM", dial: "+237", name: "Cameroon 喀麦隆" },
    { code: "CI", dial: "+225", name: "Côte d'Ivoire 科特迪瓦" },
    { code: "NE", dial: "+227", name: "Niger 尼日尔" },
    { code: "BF", dial: "+226", name: "Burkina Faso 布基纳法索" },
    { code: "ML", dial: "+223", name: "Mali 马里" },
    { code: "MW", dial: "+265", name: "Malawi 马拉维" },
    { code: "ZM", dial: "+260", name: "Zambia 赞比亚" },
    { code: "SN", dial: "+221", name: "Senegal 塞内加尔" },
    { code: "TD", dial: "+235", name: "Chad 乍得" },
    { code: "SO", dial: "+252", name: "Somalia 索马里" },
    { code: "ZW", dial: "+263", name: "Zimbabwe 津巴布韦" },
    { code: "GN", dial: "+224", name: "Guinea 几内亚" },
    { code: "RW", dial: "+250", name: "Rwanda 卢旺达" },
    { code: "BJ", dial: "+229", name: "Benin 贝宁" },
    { code: "BI", dial: "+257", name: "Burundi 布隆迪" },
    { code: "TG", dial: "+228", name: "Togo 多哥" },
    { code: "SL", dial: "+232", name: "Sierra Leone 塞拉利昂" },
    { code: "LR", dial: "+231", name: "Liberia 利比里亚" },
    { code: "CF", dial: "+236", name: "Central African Republic 中非共和国" },
    { code: "MR", dial: "+222", name: "Mauritania 毛里塔尼亚" },
    { code: "ER", dial: "+291", name: "Eritrea 厄立特里亚" },
    { code: "NA", dial: "+264", name: "Namibia 纳米比亚" },
    { code: "BW", dial: "+267", name: "Botswana 博茨瓦纳" },
    { code: "GM", dial: "+220", name: "Gambia 冈比亚" },
    { code: "GW", dial: "+245", name: "Guinea-Bissau 几内亚比绍" },
    { code: "GA", dial: "+241", name: "Gabon 加蓬" },
    { code: "LS", dial: "+266", name: "Lesotho 莱索托" },
    { code: "GQ", dial: "+240", name: "Equatorial Guinea 赤道几内亚" },
    { code: "MU", dial: "+230", name: "Mauritius 毛里求斯" },
    { code: "SZ", dial: "+268", name: "Eswatini 斯威士兰" },
    { code: "DJ", dial: "+253", name: "Djibouti 吉布提" },
    { code: "KM", dial: "+269", name: "Comoros 科摩罗" },
    { code: "CV", dial: "+238", name: "Cape Verde 佛得角" },
    { code: "ST", dial: "+239", name: "São Tomé and Príncipe 圣多美和普林西比" },
    { code: "SC", dial: "+248", name: "Seychelles 塞舌尔" },
    { code: "RE", dial: "+262", name: "Réunion 留尼汪" },
    { code: "YT", dial: "+262", name: "Mayotte 马约特" },
    { code: "UZ", dial: "+998", name: "Uzbekistan 乌兹别克斯坦" },
    { code: "KZ", dial: "+7", name: "Kazakhstan 哈萨克斯坦" },
    { code: "KG", dial: "+996", name: "Kyrgyzstan 吉尔吉斯斯坦" },
    { code: "TJ", dial: "+992", name: "Tajikistan 塔吉克斯坦" },
    { code: "TM", dial: "+993", name: "Turkmenistan 土库曼斯坦" },
    { code: "AF", dial: "+93", name: "Afghanistan 阿富汗" },
    { code: "IR", dial: "+98", name: "Iran 伊朗" },
    { code: "IQ", dial: "+964", name: "Iraq 伊拉克" },
    { code: "SY", dial: "+963", name: "Syria 叙利亚" },
    { code: "JO", dial: "+962", name: "Jordan 约旦" },
    { code: "LB", dial: "+961", name: "Lebanon 黎巴嫩" },
    { code: "KW", dial: "+965", name: "Kuwait 科威特" },
    { code: "BH", dial: "+973", name: "Bahrain 巴林" },
    { code: "QA", dial: "+974", name: "Qatar 卡塔尔" },
    { code: "OM", dial: "+968", name: "Oman 阿曼" },
    { code: "YE", dial: "+967", name: "Yemen 也门" },
    { code: "PS", dial: "+970", name: "Palestine 巴勒斯坦" },
    { code: "CY", dial: "+357", name: "Cyprus 塞浦路斯" },
    { code: "AM", dial: "+374", name: "Armenia 亚美尼亚" },
    { code: "AZ", dial: "+994", name: "Azerbaijan 阿塞拜疆" },
    { code: "GE", dial: "+995", name: "Georgia 格鲁吉亚" },
    { code: "MD", dial: "+373", name: "Moldova 摩尔多瓦" },
    { code: "UA", dial: "+380", name: "Ukraine 乌克兰" },
    { code: "BY", dial: "+375", name: "Belarus 白俄罗斯" },
    { code: "LT", dial: "+370", name: "Lithuania 立陶宛" },
    { code: "LV", dial: "+371", name: "Latvia 拉脱维亚" },
    { code: "EE", dial: "+372", name: "Estonia 爱沙尼亚" },
    { code: "FI", dial: "+358", name: "Finland 芬兰" },
    { code: "SE", dial: "+46", name: "Sweden 瑞典" },
    { code: "NO", dial: "+47", name: "Norway 挪威" },
    { code: "DK", dial: "+45", name: "Denmark 丹麦" },
    { code: "IS", dial: "+354", name: "Iceland 冰岛" },
    { code: "IE", dial: "+353", name: "Ireland 爱尔兰" },
    { code: "NL", dial: "+31", name: "Netherlands 荷兰" },
    { code: "BE", dial: "+32", name: "Belgium 比利时" },
    { code: "LU", dial: "+352", name: "Luxembourg 卢森堡" },
    { code: "CH", dial: "+41", name: "Switzerland 瑞士" },
    { code: "AT", dial: "+43", name: "Austria 奥地利" },
    { code: "PL", dial: "+48", name: "Poland 波兰" },
    { code: "CZ", dial: "+420", name: "Czech Republic 捷克" },
    { code: "SK", dial: "+421", name: "Slovakia 斯洛伐克" },
    { code: "HU", dial: "+36", name: "Hungary 匈牙利" },
    { code: "RO", dial: "+40", name: "Romania 罗马尼亚" },
    { code: "BG", dial: "+359", name: "Bulgaria 保加利亚" },
    { code: "RS", dial: "+381", name: "Serbia 塞尔维亚" },
    { code: "HR", dial: "+385", name: "Croatia 克罗地亚" },
    { code: "BA", dial: "+387", name: "Bosnia and Herzegovina 波黑" },
    { code: "SI", dial: "+386", name: "Slovenia 斯洛文尼亚" },
    { code: "MK", dial: "+389", name: "North Macedonia 北马其顿" },
    { code: "AL", dial: "+355", name: "Albania 阿尔巴尼亚" },
    { code: "ME", dial: "+382", name: "Montenegro 黑山" },
    { code: "XK", dial: "+383", name: "Kosovo 科索沃" },
    { code: "GR", dial: "+30", name: "Greece 希腊" },
    { code: "MT", dial: "+356", name: "Malta 马耳他" },
    { code: "AD", dial: "+376", name: "Andorra 安道尔" },
    { code: "MC", dial: "+377", name: "Monaco 摩纳哥" },
    { code: "SM", dial: "+378", name: "San Marino 圣马力诺" },
    { code: "VA", dial: "+379", name: "Vatican City 梵蒂冈" },
    { code: "LI", dial: "+423", name: "Liechtenstein 列支敦士登" },
    { code: "GI", dial: "+350", name: "Gibraltar 直布罗陀" },
    { code: "FO", dial: "+298", name: "Faroe Islands 法罗群岛" },
    { code: "GL", dial: "+299", name: "Greenland 格陵兰" },
    { code: "AX", dial: "+358", name: "Åland Islands 奥兰群岛" },
    { code: "SJ", dial: "+47", name: "Svalbard and Jan Mayen 斯瓦尔巴和扬马延" },
    { code: "CW", dial: "+599", name: "Curaçao 库拉索" },
    { code: "BQ", dial: "+599", name: "Bonaire, Sint Eustatius and Saba 博奈尔、圣尤斯特歇斯和萨巴" },
    { code: "SX", dial: "+1", name: "Sint Maarten 荷属圣马丁" },
    { code: "AW", dial: "+297", name: "Aruba 阿鲁巴" },
    { code: "BL", dial: "+590", name: "Saint Barthélemy 圣巴泰勒米" },
    { code: "MF", dial: "+590", name: "Saint Martin 法属圣马丁" },
    { code: "PM", dial: "+508", name: "Saint Pierre and Miquelon 圣皮埃尔和密克隆" },
    { code: "GP", dial: "+590", name: "Guadeloupe 瓜德罗普" },
    { code: "MQ", dial: "+596", name: "Martinique 马提尼克" },
    { code: "GF", dial: "+594", name: "French Guiana 法属圭亚那" },
    { code: "SR", dial: "+597", name: "Suriname 苏里南" },
    { code: "GY", dial: "+592", name: "Guyana 圭亚那" },
    { code: "FK", dial: "+500", name: "Falkland Islands 福克兰群岛" },
    { code: "EC", dial: "+593", name: "Ecuador 厄瓜多尔" },
    { code: "BO", dial: "+591", name: "Bolivia 玻利维亚" },
    { code: "PY", dial: "+595", name: "Paraguay 巴拉圭" },
    { code: "UY", dial: "+598", name: "Uruguay 乌拉圭" },
    { code: "CR", dial: "+506", name: "Costa Rica 哥斯达黎加" },
    { code: "PA", dial: "+507", name: "Panama 巴拿马" },
    { code: "NI", dial: "+505", name: "Nicaragua 尼加拉瓜" },
    { code: "HN", dial: "+504", name: "Honduras 洪都拉斯" },
    { code: "GT", dial: "+502", name: "Guatemala 危地马拉" },
    { code: "BZ", dial: "+501", name: "Belize 伯利兹" },
    { code: "SV", dial: "+503", name: "El Salvador 萨尔瓦多" },
    { code: "CU", dial: "+53", name: "Cuba 古巴" },
    { code: "JM", dial: "+1", name: "Jamaica 牙买加" },
    { code: "HT", dial: "+509", name: "Haiti 海地" },
    { code: "DO", dial: "+1", name: "Dominican Republic 多米尼加共和国" },
    { code: "PR", dial: "+1", name: "Puerto Rico 波多黎各" },
    { code: "TT", dial: "+1", name: "Trinidad and Tobago 特立尼达和多巴哥" },
    { code: "BB", dial: "+1", name: "Barbados 巴巴多斯" },
    { code: "LC", dial: "+1", name: "Saint Lucia 圣卢西亚" },
    { code: "VC", dial: "+1", name: "Saint Vincent and the Grenadines 圣文森特和格林纳丁斯" },
    { code: "GD", dial: "+1", name: "Grenada 格林纳达" },
    { code: "AG", dial: "+1", name: "Antigua and Barbuda 安提瓜和巴布达" },
    { code: "DM", dial: "+1", name: "Dominica 多米尼克" },
    { code: "KN", dial: "+1", name: "Saint Kitts and Nevis 圣基茨和尼维斯" },
    { code: "BS", dial: "+1", name: "Bahamas 巴哈马" },
    { code: "TC", dial: "+1", name: "Turks and Caicos Islands 特克斯和凯科斯群岛" },
    { code: "KY", dial: "+1", name: "Cayman Islands 开曼群岛" },
    { code: "BM", dial: "+1", name: "Bermuda 百慕大" },
    { code: "VG", dial: "+1", name: "British Virgin Islands 英属维尔京群岛" },
    { code: "VI", dial: "+1", name: "U.S. Virgin Islands 美属维尔京群岛" },
    { code: "AI", dial: "+1", name: "Anguilla 安圭拉" },
    { code: "MS", dial: "+1", name: "Montserrat 蒙特塞拉特" },
    { code: "GS", dial: "+500", name: "South Georgia and the South Sandwich Islands 南乔治亚和南桑威奇群岛" },
    { code: "PN", dial: "+870", name: "Pitcairn Islands 皮特凯恩群岛" },
    { code: "CK", dial: "+682", name: "Cook Islands 库克群岛" },
    { code: "NU", dial: "+683", name: "Niue 纽埃" },
    { code: "TK", dial: "+690", name: "Tokelau 托克劳" },
    { code: "WS", dial: "+685", name: "Samoa 萨摩亚" },
    { code: "AS", dial: "+1", name: "American Samoa 美属萨摩亚" },
    { code: "TO", dial: "+676", name: "Tonga 汤加" },
    { code: "FJ", dial: "+679", name: "Fiji 斐济" },
    { code: "VU", dial: "+678", name: "Vanuatu 瓦努阿图" },
    { code: "NC", dial: "+687", name: "New Caledonia 新喀里多尼亚" },
    { code: "PF", dial: "+689", name: "French Polynesia 法属波利尼西亚" },
    { code: "WF", dial: "+681", name: "Wallis and Futuna 瓦利斯和富图纳" },
    { code: "PG", dial: "+675", name: "Papua New Guinea 巴布亚新几内亚" },
    { code: "SB", dial: "+677", name: "Solomon Islands 所罗门群岛" },
    { code: "TV", dial: "+688", name: "Tuvalu 图瓦卢" },
    { code: "NR", dial: "+674", name: "Nauru 瑙鲁" },
    { code: "KI", dial: "+686", name: "Kiribati 基里巴斯" },
    { code: "MH", dial: "+692", name: "Marshall Islands 马绍尔群岛" },
    { code: "FM", dial: "+691", name: "Micronesia 密克罗尼西亚" },
    { code: "PW", dial: "+680", name: "Palau 帕劳" },
    { code: "GU", dial: "+1", name: "Guam 关岛" },
    { code: "MP", dial: "+1", name: "Northern Mariana Islands 北马里亚纳群岛" },
    { code: "HK", dial: "+852", name: "Hong Kong 香港" },
    { code: "MO", dial: "+853", name: "Macau 澳门" },
    { code: "TW", dial: "+886", name: "Taiwan 台湾" },
    { code: "MN", dial: "+976", name: "Mongolia 蒙古" },
    { code: "KP", dial: "+850", name: "North Korea 朝鲜" },
    { code: "MM", dial: "+95", name: "Myanmar 缅甸" },
    { code: "LA", dial: "+856", name: "Laos 老挝" },
    { code: "KH", dial: "+855", name: "Cambodia 柬埔寨" },
    { code: "BN", dial: "+673", name: "Brunei 文莱" },
    { code: "MV", dial: "+960", name: "Maldives 马尔代夫" },
    { code: "LK", dial: "+94", name: "Sri Lanka 斯里兰卡" },
    { code: "NP", dial: "+977", name: "Nepal 尼泊尔" },
    { code: "BT", dial: "+975", name: "Bhutan 不丹" },
    { code: "TL", dial: "+670", name: "East Timor 东帝汶" },
  ];

  // ─── Form Page ───
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F8F5F0] pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-100 px-4 py-1.5 text-sm font-medium text-green-700 mb-4">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {t.incentiveBadge}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl text-[#1A1410] mb-3">{t.pageTitle}</h1>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">{t.pageSubtitle}</p>
            <p className="text-xs text-muted-foreground/60 mt-2">* {t.requiredFields}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ═══════════ Section 1: Personal Information ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">1</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s1Title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.fullName} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="text" required value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.nationality} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="text" required value={form.nationality} onChange={(e) => update("nationality", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.visitorCount} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="number" min="1" required value={form.visitorCount} onChange={(e) => update("visitorCount", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.email} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
<<<<<<< HEAD
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.phone}</label>
                  <div className="flex gap-2">
                    <select value={form.phoneCountryCode} onChange={(e) => update("phoneCountryCode", e.target.value)} className="w-40 rounded-lg border border-border bg-white px-2 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30">
                      <option value="">Code</option>
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.dial}>{c.dial} {c.name}</option>
                      ))}
                    </select>
                    <input type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder={t.phPhoneNumber} className="flex-1 rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
=======
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.phone} <span className="text-[#8B1A1A]">*</span></label>
                  <div className="flex gap-2">
                    <select value={form.phoneCountryCode} onChange={(e) => update("phoneCountryCode", e.target.value)} className="w-32 rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30">
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code + c.dial} value={c.dial}>{c.dial}</option>
                      ))}
                    </select>
                    <input type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="flex-1 rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
>>>>>>> a720950 (重构电话字段：添加国家区号下拉选择（241 个国家）+ 新增独立 WhatsApp 字段 + 清空所有 placeholder)
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.whatsapp}</label>
<<<<<<< HEAD
                  <input type="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} placeholder={t.phWhatsapp} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
=======
                  <input type="tel" value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
>>>>>>> a720950 (重构电话字段：添加国家区号下拉选择（241 个国家）+ 新增独立 WhatsApp 字段 + 清空所有 placeholder)
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.wechat}</label>
                  <input type="text" value={form.wechat} onChange={(e) => update("wechat", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-foreground/80 mb-3">{t.emergencyContact}</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input type="text" value={form.emergencyName} onChange={(e) => update("emergencyName", e.target.value)} placeholder={t.emergencyName} className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                  <input type="tel" value={form.emergencyPhone} onChange={(e) => update("emergencyPhone", e.target.value)} placeholder={t.emergencyPhone} className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                  <input type="text" value={form.emergencyRelation} onChange={(e) => update("emergencyRelation", e.target.value)} placeholder={t.phRelation} className="rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
              </div>
            </section>

            {/* ═══════════ Section 2: Trip Details ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">2</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s2Title}</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.entryDate} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="date" required value={form.entryDate} onChange={(e) => update("entryDate", e.target.value)} lang={locale} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.exitDate} <span className="text-[#8B1A1A]">*</span></label>
                  <input type="date" required value={form.exitDate} onChange={(e) => update("exitDate", e.target.value)} lang={locale} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.serviceDuration} <span className="text-[#8B1A1A]">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {DURATIONS.map((d) => (
                    <button key={d} type="button" onClick={() => update("duration", d)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${form.duration === d ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {d === "custom" ? t.customDuration : t.durationOptions[DURATIONS.indexOf(d)]}
                    </button>
                  ))}
                </div>
                {form.duration === "custom" && (
                  <input type="text" value={form.customDuration} onChange={(e) => update("customDuration", e.target.value)} placeholder={t.phCustomDuration} className="mt-3 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
                )}
                <p className="mt-2 text-xs text-muted-foreground/70">{t.overtimeNotice}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.cities}</label>
                <div className="flex flex-wrap gap-2">
                  {CITY_KEYS.map((key) => (
                    <button key={key} type="button" onClick={() => toggleArray("cities", key)} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.cities.includes(key) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {t.cityNames[key]}
                    </button>
                  ))}
                </div>
                <input type="text" value={form.customCity} onChange={(e) => update("customCity", e.target.value)} placeholder={t.phCustomCity} className="mt-3 w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30" />
              </div>
            </section>

            {/* ═══════════ Section 3: Preferences ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">3</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s3Title}</h2>
              </div>

              {/* Dietary */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.dietary}</label>
                <div className="flex flex-wrap gap-2">
                  {t.dietaryOptions.map((opt: string, i: number) => (
                    <button key={i} type="button" onClick={() => toggleArray("dietary", String(i))} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.dietary.includes(String(i)) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Religion */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.religion}</label>
                <div className="flex flex-wrap gap-2">
                  {t.religionOptions.map((opt: string, i: number) => (
                    <button key={i} type="button" onClick={() => update("religion", opt)} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.religion === opt ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground/80 mb-2">{t.services}</label>
                <div className="flex flex-wrap gap-2">
                  {t.serviceOptions.map((opt: string, i: number) => (
                    <button key={i} type="button" onClick={() => toggleArray("services", String(i))} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.services.includes(String(i)) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specific interests */}
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.specificInterests}</label>
                <textarea value={form.specificInterests} onChange={(e) => update("specificInterests", e.target.value)} rows={3} placeholder={t.phInterests} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 resize-none" />
              </div>
            </section>

            {/* ═══════════ Section 4: Trip Type ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">4</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s4Title}</h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {t.tripTypeOptions.map((opt: string, i: number) => (
                  <button key={i} type="button" onClick={() => update("tripType", opt)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${form.tripType === opt ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </section>

            {/* ═══════════ Section 5: Additional Info ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B1A1A] text-sm font-bold text-white">5</span>
                <h2 className="font-serif text-2xl text-[#1A1410]">{t.s5Title}</h2>
              </div>

              <div className="space-y-6">
                {/* Budget */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.budget}</label>
                  <select value={form.budgetRange} onChange={(e) => update("budgetRange", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30">
                    {BUDGET_VALUES.map((v, i) => (
                      <option key={v} value={v}>{t.budgetOptions[i]}</option>
                    ))}
                  </select>
                </div>

                {/* Accommodation */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.accommodation}</label>
                  <div className="flex flex-wrap gap-2">
                    {ACCOMMODATION_VALUES.map((v, i) => (
                      <button key={v} type="button" onClick={() => toggleArray("accommodation", v)} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.accommodation.includes(v) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                        {t.accommodationOptions[i]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Transportation */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">{t.transportation}</label>
                  <div className="flex flex-wrap gap-2">
                    {TRANSPORTATION_VALUES.map((v, i) => (
                      <button key={v} type="button" onClick={() => toggleArray("transportation", v)} className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-all ${form.transportation.includes(v) ? "bg-[#8B1A1A] text-white border border-[#8B1A1A]" : "bg-white text-foreground border border-border hover:border-brand-gold"}`}>
                        {t.transportationOptions[i]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Notes */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.specialNotes}</label>
                  <textarea value={form.specialNotes} onChange={(e) => update("specialNotes", e.target.value)} rows={3} placeholder={t.phSpecialNotes} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 resize-none" />
                </div>

                {/* Medical */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.medical}</label>
                  <textarea value={form.medicalNeeds} onChange={(e) => update("medicalNeeds", e.target.value)} rows={2} placeholder={t.phMedical} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30 resize-none" />
                </div>

                {/* How did you hear */}
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-1.5">{t.hearAbout}</label>
                  <select value={form.hearAbout} onChange={(e) => update("hearAbout", e.target.value)} className="w-full rounded-lg border border-border bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-gold focus:ring-1 focus:ring-brand-gold/30">
                    {HEAR_VALUES.map((v, i) => (
                      <option key={v} value={v}>{t.hearOptions[i]}</option>
                    ))}
                  </select>
                </div>
              </div>
            </section>

            {/* ═══════════ Section 6: Submit ═══════════ */}
            <section className="rounded-2xl bg-white border border-border shadow-sm p-6 sm:p-8">
              {/* Privacy Notice */}
              <div className="mb-6 flex items-start gap-3 rounded-lg bg-blue-50/50 border border-blue-100 p-4">
                <svg className="h-5 w-5 text-blue-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-blue-800">{t.privacyTitle}</p>
                  <p className="text-xs text-blue-600/80 mt-1">{t.privacyText}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 mb-6">
                <input type="checkbox" id="agree" checked={form.agree} onChange={(e) => update("agree", e.target.checked)} required className="mt-1 h-4 w-4 rounded border-border text-brand-red focus:ring-brand-gold" />
                <label htmlFor="agree" className="text-sm text-muted-foreground">
                  {t.agreeText}{" "}
                  <a href="#" className="text-brand-red underline mx-1">{t.termsOfService}</a>{" "}
                  <a href="#" className="text-brand-red underline mx-1">{t.privacyPolicy}</a>.
                  <span className="text-brand-red"> *</span>
                </label>
              </div>

              <button type="submit" disabled={!form.agree || submitting} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#8B1A1A] px-10 py-3.5 text-base font-semibold text-white transition-all hover:bg-[#A52A2A] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                {submitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {t.submitting}
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                    {t.submit}
                  </>
                )}
              </button>
            </section>

            <div className="h-8" />
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
