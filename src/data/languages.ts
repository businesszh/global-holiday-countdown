export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface Translation {
  // 页面标题和描述
  title: string;
  subtitle: string;
  currentTime: string;

  // 导航标签
  upcoming: string;
  allHolidays: string;
  upcomingHolidays: string;

  // 筛选和选择
  selectCountry: string;
  allCountries: string;
  selectLanguage: string;

  // 时间单位
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  day: string;
  hour: string;
  minute: string;
  second: string;

  // 倒计时相关
  daysUntil: string;
  comingSoon: string;
  passed: string;

  // 节日类型
  national: string;
  religious: string;
  cultural: string;
  international: string;

  // 底部信息
  totalCountries: string;
  totalHolidays: string;
  realtimeUpdates: string;
  dataBasedOn: string;

  // 法律页面
  termsOfService: string;
  privacyPolicy: string;
  backToHome: string;
}

export const languages: Language[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: '🌍'
  },
  {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    flag: '🇨🇳'
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵'
  },
  {
    code: 'ko',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷'
  },
  {
    code: 'th',
    name: 'Thai',
    nativeName: 'ไทย',
    flag: '🇹🇭'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸'
  }
];

export const translations: Record<string, Translation> = {
  en: {
    title: 'Global Holiday Countdown',
    subtitle: 'Track important holidays from around the world in real-time',
    currentTime: 'Current Time',

    upcoming: 'Upcoming',
    allHolidays: 'All Holidays',
    upcomingHolidays: 'Upcoming Holidays',

    selectCountry: 'Select Country',
    allCountries: 'All Countries',
    selectLanguage: 'Select Language',

    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    day: 'Day',
    hour: 'Hour',
    minute: 'Minute',
    second: 'Second',

    daysUntil: 'days until',
    comingSoon: 'Coming Soon',
    passed: 'Passed',

    national: 'National',
    religious: 'Religious',
    cultural: 'Cultural',
    international: 'International',

    totalCountries: 'countries and regions with',
    totalHolidays: 'important holidays',
    realtimeUpdates: 'Real-time updates every second',
    dataBasedOn: 'Data based on 2025 calendar',

    termsOfService: 'Terms of Service',
    privacyPolicy: 'Privacy Policy',
    backToHome: 'Back to Home'
  },

  zh: {
    title: '全球节日倒计时',
    subtitle: '实时追踪世界各国重要节日，与全球同步庆祝',
    currentTime: '当前时间',

    upcoming: '即将到来',
    allHolidays: '所有节日',
    upcomingHolidays: '即将到来的节日',

    selectCountry: '选择国家',
    allCountries: '所有国家',
    selectLanguage: '选择语言',

    days: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒',
    day: '天',
    hour: '时',
    minute: '分',
    second: '秒',

    daysUntil: '天后到来',
    comingSoon: '即将到来',
    passed: '已过去',

    national: '国家',
    religious: '宗教',
    cultural: '文化',
    international: '国际',

    totalCountries: '个国家和地区的',
    totalHolidays: '个重要节日',
    realtimeUpdates: '实时倒计时，每秒更新',
    dataBasedOn: '数据基于 2025 年日历',

    termsOfService: '服务条款',
    privacyPolicy: '隐私政策',
    backToHome: '返回首页'
  },

  ja: {
    title: '世界の祝日カウントダウン',
    subtitle: '世界各国の重要な祝日をリアルタイムで追跡',
    currentTime: '現在時刻',

    upcoming: '近日予定',
    allHolidays: 'すべての祝日',
    upcomingHolidays: '近日予定の祝日',

    selectCountry: '国を選択',
    allCountries: 'すべての国',
    selectLanguage: '言語を選択',

    days: '日',
    hours: '時間',
    minutes: '分',
    seconds: '秒',
    day: '日',
    hour: '時間',
    minute: '分',
    second: '秒',

    daysUntil: '日後',
    comingSoon: 'もうすぐ',
    passed: '終了',

    national: '国民',
    religious: '宗教',
    cultural: '文化',
    international: '国際',

    totalCountries: 'か国・地域の',
    totalHolidays: 'の重要な祝日',
    realtimeUpdates: 'リアルタイム更新、毎秒',
    dataBasedOn: '2025年カレンダーに基づくデータ',

    termsOfService: '利用規約',
    privacyPolicy: 'プライバシーポリシー',
    backToHome: 'ホームに戻る'
  },

  ko: {
    title: '세계 휴일 카운트다운',
    subtitle: '전 세계 중요한 휴일을 실시간으로 추적하세요',
    currentTime: '현재 시간',

    upcoming: '다가오는',
    allHolidays: '모든 휴일',
    upcomingHolidays: '다가오는 휴일',

    selectCountry: '국가 선택',
    allCountries: '모든 국가',
    selectLanguage: '언어 선택',

    days: '일',
    hours: '시간',
    minutes: '분',
    seconds: '초',
    day: '일',
    hour: '시간',
    minute: '분',
    second: '초',

    daysUntil: '일 후',
    comingSoon: '곧 다가옴',
    passed: '지나감',

    national: '국가',
    religious: '종교',
    cultural: '문화',
    international: '국제',

    totalCountries: '개 국가 및 지역의',
    totalHolidays: '개 중요한 휴일',
    realtimeUpdates: '매초 실시간 업데이트',
    dataBasedOn: '2025년 달력 기준 데이터',

    termsOfService: '서비스 약관',
    privacyPolicy: '개인정보 처리방침',
    backToHome: '홈으로 돌아가기'
  },

  hi: {
    title: 'वैश्विक छुट्टी काउंटडाउन',
    subtitle: 'दुनिया भर की महत्वपूर्ण छुट्टियों को वास्तविक समय में ट्रैक करें',
    currentTime: 'वर्तमान समय',

    upcoming: 'आगामी',
    allHolidays: 'सभी छुट्टियां',
    upcomingHolidays: 'आगामी छुट्टियां',

    selectCountry: 'देश चुनें',
    allCountries: 'सभी देश',
    selectLanguage: 'भाषा चुनें',

    days: 'दिन',
    hours: 'घंटे',
    minutes: 'मिनट',
    seconds: 'सेकंड',
    day: 'दिन',
    hour: 'घंटा',
    minute: 'मिनट',
    second: 'सेकंड',

    daysUntil: 'दिन बाकी',
    comingSoon: 'जल्द आने वाला',
    passed: 'बीत गया',

    national: 'राष्ट्रीय',
    religious: 'धार्मिक',
    cultural: 'सांस्कृतिक',
    international: 'अंतर्राष्ट्रीय',

    totalCountries: 'देशों और क्षेत्रों के',
    totalHolidays: 'महत्वपूर्ण छुट्टियां',
    realtimeUpdates: 'हर सेकंड रियल-टाइम अपडेट',
    dataBasedOn: '2025 कैलेंडर पर आधारित डेटा',

    termsOfService: 'सेवा की शर्तें',
    privacyPolicy: 'गोपनीयता नीति',
    backToHome: 'होम पर वापस जाएं'
  },

  fr: {
    title: 'Compte à rebours des fêtes mondiales',
    subtitle: 'Suivez les fêtes importantes du monde entier en temps réel',
    currentTime: 'Heure actuelle',

    upcoming: 'À venir',
    allHolidays: 'Toutes les fêtes',
    upcomingHolidays: 'Fêtes à venir',

    selectCountry: 'Sélectionner un pays',
    allCountries: 'Tous les pays',
    selectLanguage: 'Sélectionner la langue',

    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
    day: 'Jour',
    hour: 'Heure',
    minute: 'Minute',
    second: 'Seconde',

    daysUntil: 'jours restants',
    comingSoon: 'Bientôt',
    passed: 'Passé',

    national: 'National',
    religious: 'Religieux',
    cultural: 'Culturel',
    international: 'International',

    totalCountries: 'pays et régions avec',
    totalHolidays: 'fêtes importantes',
    realtimeUpdates: 'Mises à jour en temps réel chaque seconde',
    dataBasedOn: 'Données basées sur le calendrier 2025',

    termsOfService: 'Conditions d\'utilisation',
    privacyPolicy: 'Politique de confidentialité',
    backToHome: 'Retour à l\'accueil'
  },

  th: {
    title: 'นับถอยหลังวันหยุดทั่วโลก',
    subtitle: 'ติดตามวันหยุดสำคัญจากทั่วโลกแบบเรียลไทม์',
    currentTime: 'เวลาปัจจุบัน',

    upcoming: 'กำลังจะมาถึง',
    allHolidays: 'วันหยุดทั้งหมด',
    upcomingHolidays: 'วันหยุดที่กำลังจะมาถึง',

    selectCountry: 'เลือกประเทศ',
    allCountries: 'ทุกประเทศ',
    selectLanguage: 'เลือกภาษา',

    days: 'วัน',
    hours: 'ชั่วโมง',
    minutes: 'นาที',
    seconds: 'วินาที',
    day: 'วัน',
    hour: 'ชั่วโมง',
    minute: 'นาที',
    second: 'วินาที',

    daysUntil: 'วันเหลือ',
    comingSoon: 'กำลังจะมาถึง',
    passed: 'ผ่านไปแล้ว',

    national: 'ชาติ',
    religious: 'ศาสนา',
    cultural: 'วัฒนธรรม',
    international: 'นานาชาติ',

    totalCountries: 'ประเทศและภูมิภาคที่มี',
    totalHolidays: 'วันหยุดสำคัญ',
    realtimeUpdates: 'อัปเดตเรียลไทม์ทุกวินาที',
    dataBasedOn: 'ข้อมูลอิงจากปฏิทิน 2025',

    termsOfService: 'ข้อกำหนดการใช้งาน',
    privacyPolicy: 'นโยบายความเป็นส่วนตัว',
    backToHome: 'กลับหน้าหลัก'
  },

  es: {
    title: 'Cuenta Regresiva de Festivales Mundiales',
    subtitle: 'Sigue los días festivos importantes de todo el mundo en tiempo real',
    currentTime: 'Hora Actual',

    upcoming: 'Próximos',
    allHolidays: 'Todos los Festivales',
    upcomingHolidays: 'Festivales Próximos',

    selectCountry: 'Seleccionar País',
    allCountries: 'Todos los Países',
    selectLanguage: 'Seleccionar Idioma',

    days: 'Días',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos',
    day: 'Día',
    hour: 'Hora',
    minute: 'Minuto',
    second: 'Segundo',

    daysUntil: 'días hasta',
    comingSoon: 'Próximamente',
    passed: 'Pasado',

    national: 'Nacional',
    religious: 'Religioso',
    cultural: 'Cultural',
    international: 'Internacional',

    totalCountries: 'países y regiones con',
    totalHolidays: 'festivales importantes',
    realtimeUpdates: 'Actualizaciones en tiempo real cada segundo',
    dataBasedOn: 'Datos basados en el calendario 2025',

    termsOfService: 'Términos de Servicio',
    privacyPolicy: 'Política de Privacidad',
    backToHome: 'Volver al Inicio'
  }
};

// 根据语言获取推荐的国家列表
export const getPreferredCountriesByLanguage = (languageCode: string): string[] => {
  switch (languageCode) {
    case 'en':
      return ['GLOBAL', 'US', 'GB', 'CA', 'AU', 'IN'];
    case 'zh':
      return ['GLOBAL', 'CN', 'KR', 'JP', 'TH', 'IN'];
    case 'ja':
      return ['GLOBAL', 'JP', 'CN', 'KR', 'TH', 'US'];
    case 'ko':
      return ['GLOBAL', 'KR', 'JP', 'CN', 'US', 'TH'];
    case 'hi':
      return ['GLOBAL', 'IN', 'CN', 'TH', 'US', 'GB'];
    case 'fr':
      return ['GLOBAL', 'FR', 'CA', 'US', 'GB', 'CN'];
    case 'th':
      return ['GLOBAL', 'TH', 'CN', 'JP', 'KR', 'IN'];
    case 'es':
      return ['GLOBAL', 'MX', 'BR', 'US', 'ES', 'FR'];
    default:
      return ['GLOBAL', 'US', 'CN', 'JP', 'GB', 'DE'];
  }
};
