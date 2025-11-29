import React from 'react';
import { View } from 'react-native';
import { H2, Body, H1 } from './Typography';
import { Card } from './Card';
import { Button } from './Button';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/mo',
    features: ['Basic Workouts', 'Community Access', 'Ad-supported'],
    recommended: false,
  },
  {
    name: 'Pro Athlete',
    price: '$29',
    period: '/mo',
    features: ['AI Coaching', 'Nutrition Plans', 'No Ads', 'Priority Support'],
    recommended: true,
  },
];

export const PlansSection = () => {
  return (
    <View className="px-6 py-16 bg-white dark:bg-black">
      <View className="mb-12">
        <H2 className="text-center text-3xl">Simple Pricing</H2>
        <Body className="mt-2 text-center text-slate-500">
          Start for free, upgrade when you're ready.
        </Body>
      </View>

      <View className="gap-8">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden border ${
              plan.recommended
                ? 'border-blue-500 bg-slate-900 dark:bg-slate-900'
                : 'border-slate-200 bg-white dark:bg-slate-800'
            }`}
          >
            {plan.recommended && (
              <View className="absolute right-0 top-0 rounded-bl-xl bg-blue-500 px-3 py-1">
                <Body className="text-xs font-bold text-white">POPULAR</Body>
              </View>
            )}

            <Body
              className={`mb-2 font-bold ${
                plan.recommended ? 'text-blue-400' : 'text-slate-500'
              }`}
            >
              {plan.name}
            </Body>

            <View className="mb-6 flex-row items-end">
              <H1
                className={`text-5xl ${
                  plan.recommended
                    ? 'text-white'
                    : 'text-slate-900 dark:text-white'
                }`}
              >
                {plan.price}
              </H1>
              <Body className="mb-2 ml-1 text-slate-500">{plan.period}</Body>
            </View>

            <View className="mb-8 gap-3">
              {plan.features.map((feature, idx) => (
                <View key={idx} className="flex-row items-center">
                  <View className="mr-3 h-2 w-2 rounded-full bg-blue-500" />
                  <Body
                    className={
                      plan.recommended ? 'text-slate-300' : 'text-slate-600'
                    }
                  >
                    {feature}
                  </Body>
                </View>
              ))}
            </View>

            <Button
              label={plan.recommended ? 'Get Started' : 'Try Free'}
              variant={plan.recommended ? 'primary' : 'outline'}
              className="w-full"
            />
          </Card>
        ))}
      </View>
    </View>
  );
};
