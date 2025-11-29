import React from 'react';
import { View, ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  className?: string;
}

export const Card = ({ className, ...props }: CardProps) => {
  return (
    <View
      className={`rounded-3xl bg-white/90 p-6 shadow-xl shadow-slate-200/50 dark:bg-slate-800/90 dark:shadow-none ${className}`}
      {...props}
    />
  );
};
