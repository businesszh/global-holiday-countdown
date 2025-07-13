'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LanguageSelector } from '@/components/LanguageSelector';
import { translations } from '@/data/languages';
import Link from "next/link";

export default function AIPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const t = translations[selectedLanguage];

  const aiFeatures = [
    {
      id: 1,
      title: 'AI Holiday Predictor',
      description: 'Predict upcoming holidays and their significance using machine learning algorithms.',
      status: 'Coming Soon',
      features: [
        'Analyze historical holiday patterns',
        'Predict holiday popularity trends',
        'Generate personalized holiday recommendations',
        'Forecast cultural significance'
      ]
    },
    {
      id: 2,
      title: 'Smart Holiday Assistant',
      description: 'AI-powered chatbot to answer questions about holidays, traditions, and celebrations.',
      status: 'In Development',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Cultural context awareness',
        'Real-time holiday information'
      ]
    },
    {
      id: 3,
      title: 'Holiday Sentiment Analysis',
      description: 'Analyze social media sentiment around different holidays and celebrations.',
      status: 'Planned',
      features: [
        'Social media monitoring',
        'Sentiment trend analysis',
        'Cultural impact assessment',
        'Global celebration insights'
      ]
    },
    {
      id: 4,
      title: 'Personalized Holiday Calendar',
      description: 'AI-generated personalized holiday calendar based on user preferences and location.',
      status: 'Coming Soon',
      features: [
        'User preference learning',
        'Location-based recommendations',
        'Cultural background consideration',
        'Smart notification system'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">
            AI Holiday Intelligence
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Exploring the future of holiday tracking with artificial intelligence
          </p>
          <div className="flex justify-center gap-4 items-center flex-wrap">
            <LanguageSelector
              currentLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              placeholder="Select Language"
            />
          </div>
        </div>

        {/* AI Features */}
        <div className="grid gap-6 md:grid-cols-2">
          {aiFeatures.map((feature) => (
            <Card key={feature.id} className="bg-white border-2 border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl text-black mb-2">
                      {feature.title}
                    </CardTitle>
                    <Badge 
                      variant={feature.status === 'Coming Soon' ? 'default' : 
                              feature.status === 'In Development' ? 'secondary' : 'outline'}
                      className="mb-2"
                    >
                      {feature.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-black">Key Features:</h4>
                  <ul className="space-y-1">
                    {feature.features.map((feat, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <Card className="mt-8 bg-white border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl text-black">
              Technology Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h4 className="font-semibold text-black mb-2">Frontend</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Next.js 15</li>
                  <li>• React 18</li>
                  <li>• TypeScript</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">AI/ML</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• TensorFlow.js</li>
                  <li>• Natural Language Processing</li>
                  <li>• Sentiment Analysis</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-black mb-2">Backend</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Node.js</li>
                  <li>• Python (AI models)</li>
                  <li>• PostgreSQL</li>
                  <li>• Redis (caching)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap */}
        <Card className="mt-8 bg-white border-2 border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl text-black">
              Development Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge className="bg-green-500">Q1 2025</Badge>
                <span className="text-gray-700">AI Holiday Predictor MVP</span>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-blue-500">Q2 2025</Badge>
                <span className="text-gray-700">Smart Holiday Assistant Beta</span>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-purple-500">Q3 2025</Badge>
                <span className="text-gray-700">Sentiment Analysis Platform</span>
              </div>
              <div className="flex items-center gap-4">
                <Badge className="bg-orange-500">Q4 2025</Badge>
                <span className="text-gray-700">Personalized Calendar Launch</span>
              </div>
            </div>
          </CardContent>
        </Card>

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