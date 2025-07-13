'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LanguageSelector } from '@/components/LanguageSelector';
import { translations } from '@/data/languages';
import Link from "next/link";

export default function BlogPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const t = translations[selectedLanguage];

  const blogPosts = [
    {
      id: 1,
      title: 'Chinese New Year: The Most Important Festival in Chinese Culture',
      excerpt: 'Chinese New Year, also known as Spring Festival, is the most significant traditional festival in Chinese culture. It marks the beginning of the lunar new year and is celebrated by over 1.5 billion people worldwide.',
      content: `Chinese New Year, also known as Spring Festival (春节), is the most important traditional festival in Chinese culture. Celebrated by over 1.5 billion people worldwide, it marks the beginning of the lunar new year and typically falls between January 21 and February 20.

The festival is deeply rooted in Chinese mythology and tradition. According to legend, a mythical beast called Nian would come out on New Year's Eve to eat people and livestock. To protect themselves, people would put red decorations on their doors and set off firecrackers to scare the beast away.

Key traditions include:
• Family reunion dinners on New Year's Eve
• Red envelopes (hongbao) containing money for children
• Lion and dragon dances
• Lantern festivals
• Traditional foods like dumplings and fish

The festival lasts for 15 days, with each day having specific customs and meanings. The 15th day marks the Lantern Festival, which officially ends the New Year celebrations.`,
      date: '2025-01-15',
      category: 'Cultural',
      country: 'China',
      flag: '🇨🇳'
    },
    {
      id: 2,
      title: 'Diwali: The Festival of Lights in India',
      excerpt: 'Diwali, the Festival of Lights, is one of the most important Hindu festivals celebrated across India and by Indian communities worldwide. It symbolizes the victory of light over darkness.',
      content: `Diwali, also known as Deepavali, is one of the most significant Hindu festivals celebrated across India and by Indian communities worldwide. The name "Diwali" comes from the Sanskrit word "Deepavali," meaning "row of lights."

The festival typically lasts for five days and is celebrated in the Hindu month of Kartika (October/November). Diwali symbolizes the victory of light over darkness, good over evil, and knowledge over ignorance.

The festival is associated with several Hindu legends, most notably the return of Lord Rama to Ayodhya after defeating the demon king Ravana. To welcome him, the people of Ayodhya lit oil lamps (diyas) throughout the city.

Key celebrations include:
• Lighting oil lamps and candles
• Decorating homes with rangoli (colorful patterns)
• Exchanging gifts and sweets
• Fireworks displays
• Prayers and religious ceremonies
• Family gatherings and feasts

Diwali is also celebrated by Jains, Sikhs, and some Buddhists, each with their own religious significance. The festival promotes unity, forgiveness, and the renewal of relationships.`,
      date: '2025-01-10',
      category: 'Religious',
      country: 'India',
      flag: '🇮🇳'
    },
    {
      id: 3,
      title: 'Thanksgiving: America\'s Harvest Celebration',
      excerpt: 'Thanksgiving is a national holiday in the United States that celebrates the harvest and blessings of the past year. It\'s a time for family gatherings and expressing gratitude.',
      content: `Thanksgiving is a national holiday celebrated primarily in the United States and Canada. In the United States, it's observed on the fourth Thursday of November and marks the beginning of the holiday season.

The holiday has its roots in the early 17th century when English Pilgrims and Native Americans shared a harvest feast in 1621. This three-day celebration in Plymouth, Massachusetts, is often considered the first Thanksgiving.

Modern Thanksgiving celebrations typically include:
• Family gatherings and reunions
• Traditional turkey dinner with stuffing, cranberry sauce, and pumpkin pie
• Watching the Macy's Thanksgiving Day Parade
• American football games
• Expressing gratitude for blessings
• Volunteering and helping those in need

The holiday emphasizes gratitude, family, and community. Many people use this time to reflect on their blessings and give thanks for the good things in their lives. It's also a time when many Americans travel long distances to be with family members.

The day after Thanksgiving, known as Black Friday, marks the beginning of the Christmas shopping season.`,
      date: '2025-01-05',
      category: 'Cultural',
      country: 'United States',
      flag: '🇺🇸'
    },
    {
      id: 4,
      title: 'Christmas: A Global Celebration of Peace and Joy',
      excerpt: 'Christmas is celebrated by billions of people worldwide, both as a religious holiday commemorating the birth of Jesus Christ and as a cultural celebration of peace, love, and giving.',
      content: `Christmas is one of the most widely celebrated holidays in the world, observed by billions of people across different cultures and religions. While it's primarily a Christian holiday commemorating the birth of Jesus Christ, it has also become a significant cultural celebration.

The holiday is celebrated on December 25th in most countries, though some Eastern Orthodox churches celebrate it on January 7th. The word "Christmas" comes from "Christ's Mass," referring to the religious service celebrating Christ's birth.

Key traditions include:
• Decorating Christmas trees with lights and ornaments
• Exchanging gifts with family and friends
• Attending church services
• Singing Christmas carols
• Displaying nativity scenes
• Special holiday meals and feasts
• Santa Claus bringing gifts to children

Christmas has evolved to include many secular traditions while maintaining its religious significance for Christians. The holiday promotes values of peace, love, generosity, and family unity.

In many countries, Christmas is a public holiday, and celebrations often extend beyond December 25th, with the Christmas season beginning in early December and continuing through New Year's Day.`,
      date: '2024-12-20',
      category: 'Religious',
      country: 'Global',
      flag: '🌍'
    },
    {
      id: 5,
      title: 'Holi: India\'s Colorful Festival of Spring',
      excerpt: 'Holi, the Festival of Colors, is a vibrant Hindu spring festival celebrated across India and Nepal. It symbolizes the arrival of spring and the victory of good over evil.',
      content: `Holi, also known as the Festival of Colors, is one of the most vibrant and joyous festivals celebrated in India and Nepal. This Hindu spring festival typically falls in March and marks the arrival of spring and the victory of good over evil.

The festival is associated with several Hindu legends, particularly the story of Prahlada and Holika. According to legend, Prahlada's devotion to Lord Vishnu protected him from his evil aunt Holika's attempt to burn him alive.

Holi celebrations typically last for two days:
• Holika Dahan (Chhoti Holi): A bonfire is lit on the eve of Holi to symbolize the burning of evil
• Rangwali Holi (Dhulandi): The main day of color throwing and celebrations

Key traditions include:
• Throwing colored powders and water at each other
• Singing and dancing to traditional Holi songs
• Special Holi delicacies like gujiya and thandai
• Visiting friends and family
• Playing with water guns and balloons filled with colored water

The festival promotes unity, forgiveness, and the breaking down of social barriers. People of all ages, castes, and social statuses come together to celebrate, making it one of the most inclusive festivals in India.

Holi has gained international popularity and is now celebrated in many countries around the world, often as a celebration of spring and cultural diversity.`,
      date: '2024-12-15',
      category: 'Cultural',
      country: 'India',
      flag: '🇮🇳'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">
            Global Holiday Blog
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Explore the rich traditions and fascinating stories behind world holidays
          </p>
          <div className="flex justify-center gap-4 items-center flex-wrap">
            <LanguageSelector
              currentLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              placeholder="Select Language"
            />
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-white border-2 border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{post.flag}</span>
                    <div>
                      <CardTitle className="text-2xl text-black mb-2">
                        {post.title}
                      </CardTitle>
                      <div className="flex gap-2 mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {post.country}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {new Date(post.date).toLocaleDateString()}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4 text-lg">
                  {post.excerpt}
                </p>
                <div className="prose prose-gray max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
          >
            ← {t.backToHome}
          </Link>
        </div>
      </div>
    </div>
  );
} 