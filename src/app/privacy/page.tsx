'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LanguageSelector } from '@/components/LanguageSelector';
import { translations } from '@/data/languages';
import Link from "next/link";

export default function PrivacyPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const t = translations[selectedLanguage];

  const privacyContent = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: January 2025',
      sections: [
        {
          title: '1. Information We Collect',
          content: 'We collect information you provide directly to us, such as when you use our application features or contact us for support.'
        },
        {
          title: '2. How We Use Your Information',
          content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new features.'
        },
        {
          title: '3. Information Sharing',
          content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.'
        },
        {
          title: '4. Data Security',
          content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
        },
        {
          title: '5. Your Rights',
          content: 'You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.'
        }
      ]
    },
    zh: {
      title: '隐私政策',
      lastUpdated: '最后更新：2025年1月',
      sections: [
        {
          title: '1. 我们收集的信息',
          content: '我们收集您直接提供给我们的信息，例如当您使用我们的应用程序功能或联系我们寻求支持时。'
        },
        {
          title: '2. 我们如何使用您的信息',
          content: '我们使用收集的信息来提供、维护和改进我们的服务，与您沟通，并开发新功能。'
        },
        {
          title: '3. 信息共享',
          content: '未经您的同意，我们不会向第三方出售、交易或以其他方式转让您的个人信息，除非本政策中另有说明。'
        },
        {
          title: '4. 数据安全',
          content: '我们实施适当的安全措施来保护您的个人信息免受未经授权的访问、更改、披露或破坏。'
        },
        {
          title: '5. 您的权利',
          content: '您有权访问、更新或删除您的个人信息。您也可以选择退出我们的某些通信。'
        }
      ]
    }
  };

  const content = privacyContent[selectedLanguage as keyof typeof privacyContent] || privacyContent.en;

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