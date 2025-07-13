'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LanguageSelector } from '@/components/LanguageSelector';
import { translations } from '@/data/languages';
import Link from "next/link";

export default function ToolsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  const t = translations[selectedLanguage];

  const tools = [
    {
      id: 1,
      title: 'Financial Calculator',
      description: 'Calculate mortgage payments, investment returns, and budget planning',
      icon: '💰',
      category: 'Finance',
      features: [
        'Mortgage Calculator',
        'Investment ROI Calculator',
        'Budget Planner',
        'Loan Calculator',
        'Compound Interest Calculator',
        'Retirement Planning'
      ],
      status: 'Coming Soon'
    },
    {
      id: 2,
      title: 'Time Management Tools',
      description: 'Schedule planning and countdown reminders for better productivity',
      icon: '⏰',
      category: 'Productivity',
      features: [
        'Schedule Planner',
        'Countdown Timer',
        'Task Manager',
        'Pomodoro Timer',
        'Meeting Scheduler',
        'Deadline Tracker'
      ],
      status: 'Coming Soon'
    },
    {
      id: 3,
      title: 'Unit Converter',
      description: 'Convert between different units of length, weight, currency, and more',
      icon: '📏',
      category: 'Utility',
      features: [
        'Length Converter',
        'Weight Converter',
        'Currency Converter',
        'Temperature Converter',
        'Volume Converter',
        'Area Converter'
      ],
      status: 'Coming Soon'
    },
    {
      id: 4,
      title: 'Health Calculator',
      description: 'Calculate BMI, calorie consumption, and other health metrics',
      icon: '🏥',
      category: 'Health',
      features: [
        'BMI Calculator',
        'Calorie Calculator',
        'BMR Calculator',
        'Body Fat Calculator',
        'Ideal Weight Calculator',
        'Nutrition Tracker'
      ],
      status: 'Coming Soon'
    }
  ];

  const quickTools = [
    {
      name: 'Mortgage Calculator',
      description: 'Calculate monthly mortgage payments',
      icon: '🏠',
      category: 'Finance'
    },
    {
      name: 'BMI Calculator',
      description: 'Calculate Body Mass Index',
      icon: '⚖️',
      category: 'Health'
    },
    {
      name: 'Currency Converter',
      description: 'Convert between world currencies',
      icon: '💱',
      category: 'Utility'
    },
    {
      name: 'Countdown Timer',
      description: 'Simple countdown timer',
      icon: '⏱️',
      category: 'Productivity'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-black mb-4">
            Useful Tools & Calculators
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Free online tools for finance, time management, unit conversion, and health calculations
          </p>
          <div className="flex justify-center gap-4 items-center flex-wrap">
            <LanguageSelector
              currentLanguage={selectedLanguage}
              onLanguageChange={setSelectedLanguage}
              placeholder="Select Language"
            />
          </div>
        </div>

        {/* Quick Tools */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Quick Tools</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickTools.map((tool, index) => (
              <Card key={index} className="bg-white border-2 border-gray-200 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                <CardHeader className="text-center">
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <CardTitle className="text-lg text-black">
                    {tool.name}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {tool.category}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Main Tools */}
        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Card key={tool.id} className="bg-white border-2 border-gray-200 hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <div>
                      <CardTitle className="text-xl text-black mb-2">
                        {tool.title}
                      </CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {tool.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge 
                    variant={tool.status === 'Coming Soon' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {tool.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  {tool.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-black">Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Tool Categories</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">💰</div>
                <CardTitle className="text-lg text-black">Finance</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">
                  Mortgage, investment, and budget calculators
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">⏰</div>
                <CardTitle className="text-lg text-black">Productivity</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">
                  Time management and scheduling tools
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">📏</div>
                <CardTitle className="text-lg text-black">Utility</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">
                  Unit conversion and measurement tools
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200">
              <CardHeader className="text-center">
                <div className="text-3xl mb-2">🏥</div>
                <CardTitle className="text-lg text-black">Health</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600">
                  BMI, calorie, and fitness calculators
                </p>
              </CardContent>
            </Card>
          </div>
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