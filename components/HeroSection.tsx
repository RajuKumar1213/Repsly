import React from 'react';
import { View, ImageBackground } from 'react-native';
import { H1, Body } from './Typography';
import { Button } from './Button';

export const HeroSection = () => {
  return (
    <View className="relative h-[600px] w-full overflow-hidden rounded-b-[40px] bg-slate-900">
      {/* Background Gradient/Image Placeholder */}
      <View className="absolute inset-0 bg-blue-900 opacity-50" />
      <View className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-500 blur-3xl opacity-30" />
      <View className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-purple-500 blur-3xl opacity-30" />

      <View className="flex-1 items-center justify-center px-6 pt-20">
        <View className="mb-6 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
          <Body className="text-blue-300 font-semibold">
            #1 Fitness App in 2025
          </Body>
        </View>

        <H1 className="mb-4 text-center text-5xl text-white leading-tight">
          Transform Your Body,{'\n'}
          <Body className="text-5xl font-extrabold text-blue-500">
            Master Your Life
          </Body>
        </H1>

        <Body className="mb-10 text-center text-lg text-slate-300 max-w-xs">
          Join the elite community of athletes and achieve your dream physique
          with AI-powered workouts.
        </Body>

        <Button
          label="Start Your Journey"
          className="w-full max-w-xs bg-blue-500"
        />
        <Button
          label="Learn More"
          variant="outline"
          className="mt-4 w-full max-w-xs border-slate-600"
          textClassName="text-slate-300"
        />
      </View>
    </View>
  );
};
