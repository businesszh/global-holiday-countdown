'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LanguageSelector } from '@/components/LanguageSelector';
import { holidays2025, countries, type Holiday } from '@/data/holidays';
import { translations, getPreferredCountriesByLanguage } from '@/data/languages';
import { calculateCountdown, formatCountdown, formatDate, getNextUpcomingHolidays, type CountdownTime } from '@/utils/countdown';

interface HolidayWithCountdown extends Holiday {
  countdown: CountdownTime;
}

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en'); // 默认改为英语
  const [currentTime, setCurrentTime] = useState(new Date());
  const [upcomingHolidays, setUpcomingHolidays] = useState<HolidayWithCountdown[]>([]);
  const [filteredHolidays, setFilteredHolidays] = useState<HolidayWithCountdown[]>([]);

  const t = translations[selectedLanguage];

  // 更新时间的函数
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 当语言改变时，重置国家选择为该语言的推荐国家列表
  // biome-ignore lint/correctness/useExhaustiveDependencies: We want to reset country selection when language changes
  useEffect(() => {
    setSelectedCountry('ALL');
  }, [selectedLanguage]);

  // 计算和更新倒计时
  useEffect(() => {
    const holidaysWithCountdown = holidays2025.map(holiday => ({
      ...holiday,
      countdown: calculateCountdown(holiday.date)
    }));

    const upcoming = getNextUpcomingHolidays(holidays2025, 10);
    setUpcomingHolidays(upcoming);

    // 根据选择的语言获取推荐的国家列表
    const preferredCountries = getPreferredCountriesByLanguage(selectedLanguage);

    // 根据选择的国家和语言过滤节日
    let filtered = holidaysWithCountdown;

    if (selectedCountry !== 'ALL') {
      filtered = holidaysWithCountdown.filter(
        holiday => holiday.countryCode === selectedCountry || holiday.countryCode === 'GLOBAL'
      );
    } else {
      // 如果是"所有国家"，优先显示当前语言推荐的国家
      const priorityHolidays = holidaysWithCountdown.filter(
        holiday => preferredCountries.includes(holiday.countryCode)
      );
      const otherHolidays = holidaysWithCountdown.filter(
        holiday => !preferredCountries.includes(holiday.countryCode)
      );
      filtered = [...priorityHolidays, ...otherHolidays];
    }

    // 按倒计时天数排序
    filtered.sort((a, b) => {
      if (a.countdown.isPast && !b.countdown.isPast) return 1;
      if (!a.countdown.isPast && b.countdown.isPast) return -1;
      return a.countdown.totalDays - b.countdown.totalDays;
    });

    setFilteredHolidays(filtered);
  }, [selectedCountry, selectedLanguage]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'national': return 'bg-gray-900 text-white border border-gray-700';
      case 'religious': return 'bg-black text-white border border-gray-600';
      case 'cultural': return 'bg-gray-800 text-gray-100 border border-gray-600';
      case 'international': return 'bg-gray-700 text-white border border-gray-500';
      default: return 'bg-gray-600 text-white border border-gray-500';
    }
  };

  const getCountryFlag = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode);
    return country?.flag || '🏳️';
  };

  const getLocalizedHolidayName = (holiday: Holiday) => {
    return holiday.name[selectedLanguage as keyof typeof holiday.name] || holiday.name.en;
  };

  const getLocalizedCountryName = (holiday: Holiday) => {
    return holiday.country[selectedLanguage as keyof typeof holiday.country] || holiday.country.en;
  };

  const getLocalizedDescription = (holiday: Holiday) => {
    return holiday.description[selectedLanguage as keyof typeof holiday.description] || holiday.description.en;
  };

  const getLocalizedCountryNameByCode = (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode);
    if (!country) return countryCode;
    return country.name[selectedLanguage as keyof typeof country.name] || country.name.en;
  };

  const getTypeTranslation = (type: string) => {
    switch (type) {
      case 'national': return t.national;
      case 'religious': return t.religious;
      case 'cultural': return t.cultural;
      case 'international': return t.international;
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <div className="max-w-7xl mx-auto">
        {/* 头部 */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-4 mb-4">
            <h1 className="text-4xl font-bold text-black">
              {t.title}
            </h1>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            {t.subtitle}
          </p>
          <div className="flex justify-center gap-4 items-center flex-wrap">
            <div className="text-sm text-gray-600">
              {t.currentTime}：{currentTime.toLocaleString(selectedLanguage === 'zh' ? 'zh-CN' : selectedLanguage)}
            </div>
            <LanguageSelector
              currentLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              placeholder={t.selectLanguage}
            />
          </div>
        </div>

        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-gray-100 border border-gray-300">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-black data-[state=active]:text-white">{t.upcoming}</TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-black data-[state=active]:text-white">{t.allHolidays}</TabsTrigger>
          </TabsList>

          {/* 即将到来的节日 */}
          <TabsContent value="upcoming">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-black mb-4">
                🎉 {t.upcomingHolidays}
              </h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {upcomingHolidays.slice(0, 6).map((holiday) => (
                  <Card key={holiday.id} className="hover:shadow-lg transition-shadow duration-200 bg-white border-2 border-gray-200">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center gap-2 text-black">
                          <span className="text-2xl">{getCountryFlag(holiday.countryCode)}</span>
                          {getLocalizedHolidayName(holiday)}
                        </CardTitle>
                        <Badge className={getTypeColor(holiday.type)}>
                          {getTypeTranslation(holiday.type)}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600">
                        {getLocalizedCountryName(holiday)} • {formatDate(holiday.date)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-black mb-2">
                          {holiday.countdown.totalDays}
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                          {t.daysUntil}
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-center">
                          <div className="bg-gray-100 border border-gray-300 rounded p-2">
                            <div className="font-semibold text-lg text-black">{holiday.countdown.days}</div>
                            <div className="text-xs text-gray-600">{t.day}</div>
                          </div>
                          <div className="bg-gray-100 border border-gray-300 rounded p-2">
                            <div className="font-semibold text-lg text-black">{holiday.countdown.hours}</div>
                            <div className="text-xs text-gray-600">{t.hour}</div>
                          </div>
                          <div className="bg-gray-100 border border-gray-300 rounded p-2">
                            <div className="font-semibold text-lg text-black">{holiday.countdown.minutes}</div>
                            <div className="text-xs text-gray-600">{t.minute}</div>
                          </div>
                          <div className="bg-gray-100 border border-gray-300 rounded p-2">
                            <div className="font-semibold text-lg text-black">{holiday.countdown.seconds}</div>
                            <div className="text-xs text-gray-600">{t.second}</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-3">
                          {getLocalizedDescription(holiday)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* 所有节日 */}
          <TabsContent value="all">
            <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <h2 className="text-2xl font-semibold text-black">
                🌍 {t.allHolidays} ({filteredHolidays.length})
              </h2>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-[200px] bg-white border-2 border-gray-300">
                  <SelectValue placeholder={t.selectCountry} />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-300">
                  <SelectItem value="ALL">{t.allCountries}</SelectItem>
                  {countries
                    .filter(country => {
                      // 根据当前语言过滤显示的国家
                      const preferredCountries = getPreferredCountriesByLanguage(selectedLanguage);
                      return preferredCountries.includes(country.code) ||
                             holidays2025.some(h => h.countryCode === country.code);
                    })
                    .map((country) => (
                      <SelectItem key={country.code} value={country.code}>
                        {country.flag} {getLocalizedCountryNameByCode(country.code)}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredHolidays.map((holiday) => (
                <Card key={holiday.id} className={`hover:shadow-lg transition-shadow duration-200 bg-white border-2 border-gray-200 ${holiday.countdown.isPast ? 'opacity-75' : ''}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{getCountryFlag(holiday.countryCode)}</span>
                        <div>
                          <CardTitle className="text-base leading-tight text-black">
                            {getLocalizedHolidayName(holiday)}
                          </CardTitle>
                          <CardDescription className="text-xs text-gray-600">
                            {getLocalizedCountryName(holiday)}
                          </CardDescription>
                        </div>
                      </div>
                      <Badge className={getTypeColor(holiday.type)}>
                        {getTypeTranslation(holiday.type)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="text-center">
                      <div className="text-sm text-gray-600 mb-2">
                        {formatDate(holiday.date)}
                      </div>
                      {!holiday.countdown.isPast ? (
                        <div className="space-y-2">
                          <div className="text-2xl font-bold text-black">
                            {holiday.countdown.totalDays}
                          </div>
                          <div className="text-xs text-gray-600">
                            {t.daysUntil}
                          </div>
                          <div className="grid grid-cols-4 gap-1 text-center">
                            <div className="bg-gray-100 border border-gray-300 rounded p-1">
                              <div className="font-semibold text-sm text-black">{holiday.countdown.days}</div>
                              <div className="text-xs text-gray-600">{t.day}</div>
                            </div>
                            <div className="bg-gray-100 border border-gray-300 rounded p-1">
                              <div className="font-semibold text-sm text-black">{holiday.countdown.hours}</div>
                              <div className="text-xs text-gray-600">{t.hour}</div>
                            </div>
                            <div className="bg-gray-100 border border-gray-300 rounded p-1">
                              <div className="font-semibold text-sm text-black">{holiday.countdown.minutes}</div>
                              <div className="text-xs text-gray-600">{t.minute}</div>
                            </div>
                            <div className="bg-gray-100 border border-gray-300 rounded p-1">
                              <div className="font-semibold text-sm text-black">{holiday.countdown.seconds}</div>
                              <div className="text-xs text-gray-600">{t.second}</div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-lg font-semibold text-gray-500">
                          {t.passed}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* 底部信息 */}
        <div className="mt-12 text-center text-sm text-gray-600 space-y-2">
          <p>
            {t.totalCountries.includes('countries') ? `${countries.length - 1} ${t.totalCountries} ${holidays2025.length} ${t.totalHolidays}` : `包含 ${countries.length - 1} ${t.totalCountries} ${holidays2025.length} ${t.totalHolidays}`}
          </p>
          <p>
            {t.realtimeUpdates} • {t.dataBasedOn}
          </p>
          {/* 底部导航链接 */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-center gap-6 text-xs flex-wrap">
              <a 
                href="/blog" 
                className="text-gray-500 hover:text-black transition-colors"
              >
                Blog
              </a>
              <a 
                href="/ai" 
                className="text-gray-500 hover:text-black transition-colors"
              >
                AI Project
              </a>
              <a 
                href="/tools" 
                className="text-gray-500 hover:text-black transition-colors"
              >
                Tools
              </a>
              <a 
                href="/terms" 
                className="text-gray-500 hover:text-black transition-colors"
              >
                {t.termsOfService}
              </a>
              <a 
                href="/privacy" 
                className="text-gray-500 hover:text-black transition-colors"
              >
                {t.privacyPolicy}
              </a>
            </div>
          </div>
          {/* 关键词百科内容，提升正文关键词密度和覆盖 */}
          <div className="mt-12 text-left text-xs text-gray-400 max-w-5xl mx-auto" style={{lineHeight:'1.8'}}>
            <h2 className="font-bold text-gray-500 mb-2">Holiday Encyclopedia & Tools Glossary</h2>
            <p>
              Christmas, New Year, Thanksgiving, Halloween, Easter, Valentine’s Day, Diwali, Chinese New Year, Ramadan, Hanukkah, Kwanzaa, Independence Day, Labor Day, Memorial Day, Veterans Day, Presidents Day, Martin Luther King Day, Columbus Day, Groundhog Day, St Patrick’s Day, Mother’s Day, Father’s Day, Grandparents Day, Children’s Day, Teachers Day, Nurses Day, Doctors Day, World Health Day, Earth Day, World Environment Day, International Women’s Day, International Men’s Day, World Peace Day, World Food Day, World Water Day, World Book Day, World Music Day, World Dance Day, World Theatre Day, World Cinema Day, World Photography Day, World Art Day, World Poetry Day, World Literature Day, World Science Day, World Mathematics Day, World Engineering Day, World Architecture Day, World Design Day, World Creativity Day, World Innovation Day, World Technology Day, World Internet Day, World Social Media Day, World Communication Day, World Press Day, World Radio Day, World Television Day, World Film Day, World Animation Day, World Gaming Day, World Esports Day, World Sports Day, World Olympics Day, World Football Day, World Basketball Day, World Tennis Day, World Golf Day, World Swimming Day, World Running Day, World Cycling Day, World Hiking Day, World Camping Day, World Fishing Day, World Hunting Day, World Gardening Day, World Farming Day, World Cooking Day, World Baking Day, World Coffee Day, World Tea Day, World Wine Day, World Beer Day, World Chocolate Day, World Pizza Day, World Hamburger Day, World Sushi Day, World Pasta Day, World Rice Day, World Bread Day, World Milk Day, World Egg Day, World Meat Day, World Vegetarian Day, World Vegan Day, World Organic Day, World Fair Trade Day, World Recycling Day, World Conservation Day, World Wildlife Day, World Animal Day, World Pet Day, World Dog Day, World Cat Day, World Bird Day, World Fish Day, World Insect Day, World Plant Day, World Tree Day, World Flower Day, World Seed Day, World Soil Day, World Water Day, World Air Day, World Climate Day, World Weather Day, World Storm Day, World Hurricane Day, World Tornado Day, World Earthquake Day, World Volcano Day, World Tsunami Day, World Flood Day, World Drought Day, World Fire Day, World Ice Day, World Snow Day, World Rain Day, World Sunshine Day, World Cloud Day, World Rainbow Day, World Lightning Day, World Thunder Day, World Fog Day, World Mist Day, World Dew Day, World Frost Day, World Hail Day, World Sleet Day, World Blizzard Day, World Avalanche Day, World Landslide Day, World Mudslide Day, World Rockslide Day, World Sinkhole Day, World Cave Day, World Mountain Day, World Hill Day, World Valley Day, World Canyon Day, World Gorge Day, World Ravine Day, World Cliff Day, World Bluff Day, World Ridge Day, World Peak Day, World Summit Day, World Crest Day, World Top Day, World Height Day, World Elevation Day, World Altitude Day, World Depth Day, World Bottom Day, World Base Day, World Foundation Day, World Ground Day, World Floor Day, World Surface Day, World Level Day, World Plane Day, World Flat Day, World Smooth Day, World Rough Day, World Bumpy Day, World Uneven Day, World Irregular Day, World Regular Day, World Normal Day, World Standard Day, World Typical Day, World Usual Day, World Common Day, World Ordinary Day, World Average Day, World Median Day, World Middle Day, World Center Day, World Central Day, World Core Day, World Heart Day, World Soul Day, World Spirit Day, World Mind Day, World Brain Day, World Head Day, World Face Day, World Eye Day, World Ear Day, World Nose Day, World Mouth Day, World Tongue Day, World Tooth Day, World Lip Day, World Cheek Day, World Chin Day, World Jaw Day, World Neck Day, World Throat Day, World Shoulder Day, World Arm Day, World Elbow Day, World Wrist Day, World Hand Day, World Finger Day, World Thumb Day, World Palm Day, World Back Day, World Chest Day, World Stomach Day, World Belly Day, World Waist Day, World Hip Day, World Leg Day, World Knee Day, World Ankle Day, World Foot Day, World Toe Day, World Heel Day, World Sole Day, World Arch Day, World Ball Day, World Joint Day, World Bone Day, World Muscle Day, World Tendon Day, World Ligament Day, World Nerve Day, World Vein Day, World Artery Day, World Blood Day, World Heart Day, World Lung Day, World Liver Day, World Kidney Day, World Stomach Day, World Intestine Day, World Colon Day, World Bladder Day, World Uterus Day, World Ovary Day, World Testicle Day, World Prostate Day, World Breast Day, World Nipple Day, World Skin Day, World Hair Day, World Nail Day, World Sweat Day, World Tear Day, World Saliva Day, World Mucus Day, World Phlegm Day, World Bile Day, World Urine Day, World Feces Day, World Gas Day, World Wind Day, World Breath Day, World Air Day, World Oxygen Day, World Carbon Day, World Nitrogen Day, World Hydrogen Day, World Helium Day, World Neon Day, World Argon Day, World Krypton Day, World Xenon Day, World Radon Day, World Uranium Day, World Plutonium Day, World Thorium Day, World Radium Day, World Polonium Day, World Actinium Day, World Protactinium Day, World Neptunium Day, World Americium Day, World Curium Day, World Berkelium Day, World Californium Day, World Einsteinium Day, World Fermium Day, World Mendelevium Day, World Nobelium Day, World Lawrencium Day, World Rutherfordium Day, World Dubnium Day, World Seaborgium Day, World Bohrium Day, World Hassium Day, World Meitnerium Day, World Darmstadtium Day, World Roentgenium Day, World Copernicium Day, World Nihonium Day, World Flerovium Day, World Moscovium Day, World Livermorium Day, World Tennessine Day, World Oganesson Day, financial calculator, mortgage calculator, investment calculator, budget planner, time management tools, schedule planner, countdown timer, task manager, unit converter, length converter, weight converter, currency converter, health calculator, bmi calculator, calorie calculator, fitness tracker, free online tools, web calculator, online timer, digital countdown, holiday planner, event countdown, celebration tracker, festival countdown, global celebrations, world festivals, cultural holidays, religious holidays, national holidays, international holidays, seasonal celebrations, annual events, countdown app, timer app, holiday app, calendar app, reminder app, notification app, alarm app, stopwatch app, chronometer app, timekeeper app.
            </p>
          </div>
          {/* 相关文章/专栏 */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Holiday & Tools Knowledge Base</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">The Global Magic of New Year Celebrations</h3>
                <p className="text-gray-600 text-sm">
                  New Year is celebrated worldwide with fireworks, countdowns, and family gatherings. In the United States, the Times Square Ball Drop is iconic, while in China, the Spring Festival marks the lunar new year with dragon dances and red lanterns. From Sydney’s Harbour Bridge to London’s Big Ben, every country has unique traditions. Popular keywords: new year countdown, global celebrations, lunar new year, fireworks, family reunion, holiday traditions.
                </p>
              </article>
              <article className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Christmas: A Festival of Joy and Giving</h3>
                <p className="text-gray-600 text-sm">
                  Christmas is one of the most celebrated holidays, observed by billions. It features Christmas trees, gift exchanges, Santa Claus, and festive meals. In Europe, Christmas markets are famous, while in the US, families decorate homes with lights. Keywords: christmas countdown, holiday gifts, santa claus, christmas tree, festive meals, holiday shopping, winter holidays.
                </p>
              </article>
              <article className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Financial Calculators: Plan Your Future</h3>
                <p className="text-gray-600 text-sm">
                  Online financial calculators help users plan mortgages, investments, and budgets. Tools like mortgage calculators, ROI estimators, and budget planners are essential for personal finance. Keywords: financial calculator, mortgage calculator, investment calculator, budget planner, loan calculator, compound interest, retirement planning.
                </p>
              </article>
              <article className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Time Management Tools for Productivity</h3>
                <p className="text-gray-600 text-sm">
                  Effective time management relies on tools like schedule planners, countdown timers, and Pomodoro clocks. These tools boost productivity, help track deadlines, and organize daily tasks. Keywords: time management tools, schedule planner, countdown timer, task manager, pomodoro timer, productivity app, deadline tracker.
                </p>
              </article>
              <article className="bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Unit Converters and Health Calculators</h3>
                <p className="text-gray-600 text-sm">
                  Unit converters make it easy to switch between length, weight, and currency. Health calculators like BMI and calorie counters support fitness goals. Keywords: unit converter, length converter, weight converter, currency converter, health calculator, bmi calculator, calorie calculator, fitness tracker.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
