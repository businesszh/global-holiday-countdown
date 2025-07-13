'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LanguageSelector } from '@/components/LanguageSelector';
import { translations } from '@/data/languages';
import Link from "next/link";

export default function TermsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const t = translations[selectedLanguage];

  const termsContent = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: January 2025',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: 'By accessing and using the Global Holiday Countdown application, you accept and agree to be bound by the terms and provision of this agreement.'
        },
        {
          title: '2. Use License',
          content: 'Permission is granted to temporarily download one copy of the application for personal, non-commercial transitory viewing only.'
        },
        {
          title: '3. Disclaimer',
          content: 'The materials on the Global Holiday Countdown application are provided on an \'as is\' basis. We make no warranties, expressed or implied.'
        }
      ]
    },
    zh: {
      title: '服务条款',
      lastUpdated: '最后更新：2025年1月',
      sections: [
        {
          title: '1. 条款接受',
          content: '通过访问和使用全球节日倒计时应用程序，您接受并同意受本协议条款和规定的约束。'
        },
        {
          title: '2. 使用许可',
          content: '仅允许临时下载一份应用程序副本用于个人、非商业的临时查看。'
        },
        {
          title: '3. 免责声明',
          content: '全球节日倒计时应用程序上的材料按"原样"提供。我们不提供任何明示或暗示的保证。'
        }
      ]
    }
  };

  const content = termsContent[selectedLanguage as keyof typeof termsContent] || termsContent.en;

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">
            {content.title}
          </h1>
          <div className="flex justify-center gap-4 items-center flex-wrap">
            <Badge variant="outline" className="text-sm">
              {content.lastUpdated}
            </Badge>
            <LanguageSelector
              currentLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              placeholder="Select Language"
            />
          </div>
        </div>

        <div className="space-y-6">
          {content.sections.map((section, index) => (
            <Card key={index} className="bg-white border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-black">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

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