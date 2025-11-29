import React from 'react';
import { View } from 'react-native';
import { H2, Body, Caption } from './Typography';
import { Card } from './Card';

const features = [
  {
    title: 'AI Coaching',
    description: 'Personalized workout plans that adapt to your progress.',
    icon: '🤖',
  },
  {
    title: 'Nutrition Tracking',
    description: 'Log your meals and get macro recommendations instantly.',
    icon: '🍎',
  },
  {
    title: 'Community Challenges',
    description: 'Compete with friends and earn rewards for consistency.',
    icon: '🏆',
  },
];

export const FeaturesSection = () => {
  return (
    <View className="px-6 py-16 bg-slate-50 dark:bg-slate-900">
      <View className="mb-12">
        <Caption className="mb-2 text-center font-bold uppercase tracking-widest text-blue-500">
          Why Choose Us
        </Caption>
        <H2 className="text-center text-3xl">Unleash Your Potential</H2>
      </View>

      <View className="gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border border-slate-100 dark:border-slate-800"
          >
            <View className="mb-4 h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
              <Body className="text-2xl">{feature.icon}</Body>
            </View>
            <H2 className="mb-2 text-xl">{feature.title}</H2>
            <Body className="text-slate-500">{feature.description}</Body>
          </Card>
        ))}
      </View>
    </View>
  );
};
