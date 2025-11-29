import React from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import { HeroSection } from '../components/HeroSection';
import { FeaturesSection } from '../components/FeaturesSection';
import { PlansSection } from '../components/PlansSection';
import { Body } from '../components/Typography';

export const LandingPage = () => {
  return (
    <View className="flex-1 bg-white dark:bg-black">
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <HeroSection />
        <FeaturesSection />
        <PlansSection />

        {/* Footer */}
        <View className="bg-slate-900 py-10 items-center">
          <Body className="text-slate-500">
            © 2025 Repsly. All rights reserved.
          </Body>
        </View>
      </ScrollView>
    </View>
  );
};
