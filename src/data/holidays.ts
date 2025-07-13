export interface Holiday {
  id: string;
  name: {
    en: string;
    zh: string;
    ja: string;
    ko: string;
    hi: string;
    fr: string;
    th: string;
    es: string;
  };
  country: {
    en: string;
    zh: string;
    ja: string;
    ko: string;
    hi: string;
    fr: string;
    th: string;
    es: string;
  };
  countryCode: string;
  date: string; // YYYY-MM-DD format
  type: 'national' | 'religious' | 'cultural' | 'international';
  description: {
    en: string;
    zh: string;
    ja: string;
    ko: string;
    hi: string;
    fr: string;
    th: string;
    es: string;
  };
  recurring: 'yearly' | 'lunar' | 'calculated';
}

export const holidays2025: Holiday[] = [
  // 国际节日
  {
    id: 'new-year-2025',
    name: {
      en: 'New Year',
      zh: '新年',
      ja: '新年',
      ko: '신정',
      hi: 'नया साल',
      fr: 'Nouvel An',
      th: 'ปีใหม่',
      es: 'Año Nuevo'
    },
    country: {
      en: 'Global',
      zh: '全球',
      ja: '世界',
      ko: '전 세계',
      hi: 'वैश्विक',
      fr: 'Mondial',
      th: 'ทั่วโลก',
      es: 'Global'
    },
    countryCode: 'GLOBAL',
    date: '2025-01-01',
    type: 'international',
    description: {
      en: 'Gregorian New Year, celebrated globally',
      zh: '公历新年，全球庆祝',
      ja: 'グレゴリオ暦の新年、世界中で祝われる',
      ko: '그레고리력 신년, 전 세계에서 축하',
      hi: 'ग्रेगोरियन नया साल, विश्व स्तर पर मनाया जाता है',
      fr: 'Nouvel An grégorien, célébré dans le monde entier',
      th: 'ปีใหม่เกรกอเรียน ฉลองทั่วโลก',
      es: 'Año Nuevo gregoriano, celebrado globalmente'
    },
    recurring: 'yearly'
  },
  {
    id: 'valentines-day-2025',
    name: {
      en: 'Valentine\'s Day',
      zh: '情人节',
      ja: 'バレンタインデー',
      ko: '발렌타인데이',
      hi: 'वैलेंटाइन दिवस',
      fr: 'Saint-Valentin',
      th: 'วันแห่งความรัก',
      es: 'Día de San Valentín'
    },
    country: {
      en: 'Global',
      zh: '全球',
      ja: '世界',
      ko: '전 세계',
      hi: 'वैश्विक',
      fr: 'Mondial',
      th: 'ทั่วโลก',
      es: 'Global'
    },
    countryCode: 'GLOBAL',
    date: '2025-02-14',
    type: 'cultural',
    description: {
      en: 'Day of love and romance',
      zh: '情人节，爱情节日',
      ja: '愛とロマンスの日',
      ko: '사랑과 로맨스의 날',
      hi: 'प्रेम और रोमांस का दिन',
      fr: 'Jour de l\'amour et de la romance',
      th: 'วันแห่งความรักและโรแมนติก',
      es: 'Día del amor y el romance'
    },
    recurring: 'yearly'
  },
  {
    id: 'international-womens-day-2025',
    name: {
      en: 'International Women\'s Day',
      zh: '国际妇女节',
      ja: '国際女性デー',
      ko: '국제 여성의 날',
      hi: 'अंतर्राष्ट्रीय महिला दिवस',
      fr: 'Journée internationale des femmes',
      th: 'วันสตรีสากล',
      es: 'Día Internacional de la Mujer'
    },
    country: {
      en: 'Global',
      zh: '全球',
      ja: '世界',
      ko: '전 세계',
      hi: 'वैश्विक',
      fr: 'Mondial',
      th: 'ทั่วโลก',
      es: 'Global'
    },
    countryCode: 'GLOBAL',
    date: '2025-03-08',
    type: 'international',
    description: {
      en: 'Celebrating women\'s achievements',
      zh: '国际妇女节',
      ja: '女性の功績を祝う日',
      ko: '여성의 성취를 기념하는 날',
      hi: 'महिलाओं की उपलब्धियों का जश्न',
      fr: 'Célébration des réalisations des femmes',
      th: 'การเฉลิมฉลองความสำเร็จของผู้หญิง',
      es: 'Celebrando los logros de las mujeres'
    },
    recurring: 'yearly'
  },

  // 中国节日
  {
    id: 'chinese-new-year-2025',
    name: {
      en: 'Chinese New Year',
      zh: '春节 (农历新年)',
      ja: '春節（旧正月）',
      ko: '춘절 (음력 설날)',
      hi: 'चीनी नववर्ष',
      fr: 'Nouvel An chinois',
      th: 'ตรุษจีน',
      es: 'Año Nuevo Chino'
    },
    country: {
      en: 'China',
      zh: '中国',
      ja: '中国',
      ko: '중국',
      hi: 'चीन',
      fr: 'Chine',
      th: 'จีน',
      es: 'China'
    },
    countryCode: 'CN',
    date: '2025-01-29',
    type: 'cultural',
    description: {
      en: 'Chinese Lunar New Year, Year of the Snake',
      zh: '中国农历新年，蛇年',
      ja: '中国の旧正月、蛇年',
      ko: '중국 음력 신년, 뱀띠 해',
      hi: 'चीनी चंद्र नववर्ष, साँप का वर्ष',
      fr: 'Nouvel An lunaire chinois, Année du Serpent',
      th: 'ตรุษจีนตามปฏิทินจันทรคติ ปีงู',
      es: 'Año Nuevo Lunar Chino, Año de la Serpiente'
    },
    recurring: 'lunar'
  },

  // 美国节日
  {
    id: 'independence-day-2025',
    name: {
      en: 'Independence Day',
      zh: '独立日',
      ja: '独立記念日',
      ko: '독립기념일',
      hi: 'स्वतंत्रता दिवस',
      fr: 'Jour de l\'Indépendance',
      th: 'วันประกาศอิสรภาพ',
      es: 'Día de la Independencia'
    },
    country: {
      en: 'United States',
      zh: '美国',
      ja: 'アメリカ',
      ko: '미국',
      hi: 'संयुक्त राज्य अमेरिका',
      fr: 'États-Unis',
      th: 'สหรัฐอเมริกา',
      es: 'Estados Unidos'
    },
    countryCode: 'US',
    date: '2025-07-04',
    type: 'national',
    description: {
      en: 'US Independence from Britain',
      zh: '美国独立日',
      ja: 'アメリカのイギリスからの独立',
      ko: '영국으로부터의 미국 독립',
      hi: 'ब्रिटेन से अमेरिकी स्वतंत्रता',
      fr: 'Indépendance des États-Unis de la Grande-Bretagne',
      th: 'การประกาศอิสรภาพของสหรัฐฯ จากอังกฤษ',
      es: 'Independencia de EE.UU. de Gran Bretaña'
    },
    recurring: 'yearly'
  },

  // 日本节日
  {
    id: 'coming-of-age-day-2025',
    name: {
      en: 'Coming of Age Day',
      zh: '成人节',
      ja: '成人の日',
      ko: '성인의 날',
      hi: 'वयस्कता दिवस',
      fr: 'Jour de la Majorité',
      th: 'วันเข้าสู่วัยผู้ใหญ่',
      es: 'Día de la Mayoría de Edad'
    },
    country: {
      en: 'Japan',
      zh: '日本',
      ja: '日本',
      ko: '일본',
      hi: 'जापान',
      fr: 'Japon',
      th: 'ญี่ปุ่น',
      es: 'Japón'
    },
    countryCode: 'JP',
    date: '2025-01-13',
    type: 'national',
    description: {
      en: 'Celebrating new adults',
      zh: '成人节',
      ja: '新成人を祝う',
      ko: '새로운 성인을 축하하는 날',
      hi: 'नए वयस्कों का जश्न',
      fr: 'Célébration des nouveaux adultes',
      th: 'การเฉลิมฉลองผู้ใหญ่ใหม่',
      es: 'Celebrando nuevos adultos'
    },
    recurring: 'calculated'
  },

  // 韩国节日
  {
    id: 'korean-new-year-2025',
    name: {
      en: 'Korean New Year',
      zh: '韩国新年',
      ja: '韓国の正月',
      ko: '설날',
      hi: 'कोरियाई नव वर्ष',
      fr: 'Nouvel An coréen',
      th: 'ปีใหม่เกาหลี',
      es: 'Año Nuevo Coreano'
    },
    country: {
      en: 'South Korea',
      zh: '韩国',
      ja: '韓国',
      ko: '대한민국',
      hi: 'दक्षिण कोरिया',
      fr: 'Corée du Sud',
      th: 'เกาหลีใต้',
      es: 'Corea del Sur'
    },
    countryCode: 'KR',
    date: '2025-01-29',
    type: 'cultural',
    description: {
      en: 'Korean Lunar New Year',
      zh: '韩国农历新年',
      ja: '韓国の旧正月',
      ko: '한국의 음력 설날',
      hi: 'कोरियाई चंद्र नव वर्ष',
      fr: 'Nouvel An lunaire coréen',
      th: 'ตรุษเกาหลีตามปฏิทินจันทรคติ',
      es: 'Año Nuevo Lunar Coreano'
    },
    recurring: 'lunar'
  },

  // 印度节日
  {
    id: 'republic-day-india-2025',
    name: {
      en: 'Republic Day',
      zh: '共和国日',
      ja: '共和国記念日',
      ko: '공화국 기념일',
      hi: 'गणतंत्र दिवस',
      fr: 'Jour de la République',
      th: 'วันสาธารณรัฐ',
      es: 'Día de la República'
    },
    country: {
      en: 'India',
      zh: '印度',
      ja: 'インド',
      ko: '인도',
      hi: 'भारत',
      fr: 'Inde',
      th: 'อินเดีย',
      es: 'India'
    },
    countryCode: 'IN',
    date: '2025-01-26',
    type: 'national',
    description: {
      en: 'India\'s Republic Day',
      zh: '印度共和国日',
      ja: 'インド共和国記念日',
      ko: '인도 공화국 기념일',
      hi: 'भारत का गणतंत्र दिवस',
      fr: 'Jour de la République de l\'Inde',
      th: 'วันสาธารณรัฐอินเดีย',
      es: 'Día de la República de India'
    },
    recurring: 'yearly'
  },

  // 法国节日
  {
    id: 'bastille-day-2025',
    name: {
      en: 'Bastille Day',
      zh: '法国国庆日',
      ja: 'フランス革命記念日',
      ko: '바스티유 데이',
      hi: 'बैस्टील दिवस',
      fr: 'Fête nationale',
      th: 'วันบาสติล',
      es: 'Día de la Bastilla'
    },
    country: {
      en: 'France',
      zh: '法国',
      ja: 'フランス',
      ko: '프랑스',
      hi: 'फ्रांस',
      fr: 'France',
      th: 'ฝรั่งเศส',
      es: 'Francia'
    },
    countryCode: 'FR',
    date: '2025-07-14',
    type: 'national',
    description: {
      en: 'French National Day',
      zh: '法国国庆日，巴士底日',
      ja: 'フランス建国記念日',
      ko: '프랑스 국경일',
      hi: 'फ्रांसीसी राष्ट्रीय दिवस',
      fr: 'Fête nationale française',
      th: 'วันชาติฝรั่งเศส',
      es: 'Día Nacional Francés'
    },
    recurring: 'yearly'
  },

  // 加拿大节日
  {
    id: 'canada-day-2025',
    name: {
      en: 'Canada Day',
      zh: '加拿大日',
      ja: 'カナダデー',
      ko: '캐나다 데이',
      hi: 'कनाडा दिवस',
      fr: 'Fête du Canada',
      th: 'วันแคนาดา',
      es: 'Día de Canadá'
    },
    country: {
      en: 'Canada',
      zh: '加拿大',
      ja: 'カナダ',
      ko: '캐나다',
      hi: 'कनाडा',
      fr: 'Canada',
      th: 'แคนาดา',
      es: 'Canadá'
    },
    countryCode: 'CA',
    date: '2025-07-01',
    type: 'national',
    description: {
      en: 'Canada\'s national day',
      zh: '加拿大日',
      ja: 'カナダの建国記念日',
      ko: '캐나다의 국경일',
      hi: 'कनाडा का राष्ट्रीय दिवस',
      fr: 'Fête nationale du Canada',
      th: 'วันชาติแคนาดา',
      es: 'Día nacional de Canadá'
    },
    recurring: 'yearly'
  },

  // 泰国节日
  {
    id: 'songkran-2025',
    name: {
      en: 'Songkran',
      zh: '宋干节',
      ja: 'ソンクラーン',
      ko: '송크란',
      hi: 'सोंगक्रान',
      fr: 'Songkran',
      th: 'สงกรานต์',
      es: 'Songkran'
    },
    country: {
      en: 'Thailand',
      zh: '泰国',
      ja: 'タイ',
      ko: '태국',
      hi: 'थाईलैंड',
      fr: 'Thaïlande',
      th: 'ประเทศไทย',
      es: 'Tailandia'
    },
    countryCode: 'TH',
    date: '2025-04-13',
    type: 'cultural',
    description: {
      en: 'Thai New Year',
      zh: '宋干节，泰国新年',
      ja: 'タイの新年',
      ko: '태국의 신년',
      hi: 'थाई नव वर्ष',
      fr: 'Nouvel An thaïlandais',
      th: 'วันขึ้นปีใหม่ไทย',
      es: 'Año Nuevo tailandés'
    },
    recurring: 'yearly'
  }
];

export const countries = [
  { code: 'GLOBAL', name: { en: 'Global', zh: '全球', ja: '世界', ko: '전 세계', hi: 'वैश्विक', fr: 'Mondial', th: 'ทั่วโลก', es: 'Global' }, flag: '🌍' },
  { code: 'CN', name: { en: 'China', zh: '中国', ja: '中国', ko: '중국', hi: 'चीन', fr: 'Chine', th: 'จีน', es: 'China' }, flag: '🇨🇳' },
  { code: 'US', name: { en: 'United States', zh: '美国', ja: 'アメリカ', ko: '미국', hi: 'संयुक्त राज्य अमेरिका', fr: 'États-Unis', th: 'สหรัฐอเมริกา', es: 'Estados Unidos' }, flag: '🇺🇸' },
  { code: 'JP', name: { en: 'Japan', zh: '日本', ja: '日本', ko: '일본', hi: 'जापान', fr: 'Japon', th: 'ญี่ปุ่น', es: 'Japón' }, flag: '🇯🇵' },
  { code: 'KR', name: { en: 'South Korea', zh: '韩国', ja: '韓国', ko: '대한민국', hi: 'दक्षिण कोरिया', fr: 'Corée du Sud', th: 'เกาหลีใต้', es: 'Corea del Sur' }, flag: '🇰🇷' },
  { code: 'IN', name: { en: 'India', zh: '印度', ja: 'インド', ko: '인도', hi: 'भारत', fr: 'Inde', th: 'อินเดีย', es: 'India' }, flag: '🇮🇳' },
  { code: 'GB', name: { en: 'United Kingdom', zh: '英国', ja: 'イギリス', ko: '영국', hi: 'यूनाइटेड किंगडम', fr: 'Royaume-Uni', th: 'สหราชอาณาจักร', es: 'Reino Unido' }, flag: '🇬🇧' },
  { code: 'DE', name: { en: 'Germany', zh: '德国', ja: 'ドイツ', ko: '독일', hi: 'जर्मनी', fr: 'Allemagne', th: 'เยอรมนี', es: 'Alemania' }, flag: '🇩🇪' },
  { code: 'FR', name: { en: 'France', zh: '法国', ja: 'フランス', ko: '프랑스', hi: 'फ्रांस', fr: 'France', th: 'ฝรั่งเศส', es: 'Francia' }, flag: '🇫🇷' },
  { code: 'CA', name: { en: 'Canada', zh: '加拿大', ja: 'カナダ', ko: '캐나다', hi: 'कनाडा', fr: 'Canada', th: 'แคนาดา', es: 'Canadá' }, flag: '🇨🇦' },
  { code: 'AU', name: { en: 'Australia', zh: '澳大利亚', ja: 'オーストラリア', ko: '호주', hi: 'ऑस्ट्रेलिया', fr: 'Australie', th: 'ออสเตรเลีย', es: 'Australia' }, flag: '🇦🇺' },
  { code: 'BR', name: { en: 'Brazil', zh: '巴西', ja: 'ブラジル', ko: '브라질', hi: 'ब्राजील', fr: 'Brésil', th: 'บราซิล', es: 'Brasil' }, flag: '🇧🇷' },
  { code: 'RU', name: { en: 'Russia', zh: '俄罗斯', ja: 'ロシア', ko: '러시아', hi: 'रूस', fr: 'Russie', th: 'รัสเซีย', es: 'Rusia' }, flag: '🇷🇺' },
  { code: 'MX', name: { en: 'Mexico', zh: '墨西哥', ja: 'メキシコ', ko: '멕시코', hi: 'मेक्सिको', fr: 'Mexique', th: 'เม็กซิโก', es: 'México' }, flag: '🇲🇽' },
  { code: 'TH', name: { en: 'Thailand', zh: '泰国', ja: 'タイ', ko: '태국', hi: 'थाईलैंड', fr: 'Thaïlande', th: 'ประเทศไทย', es: 'Tailandia' }, flag: '🇹🇭' }
];
