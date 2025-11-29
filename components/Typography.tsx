import React from 'react';
import { Text, TextProps } from 'react-native';

interface TypographyProps extends TextProps {
  className?: string;
}

export const H1 = ({ className, ...props }: TypographyProps) => {
  return (
    <Text
      className={`text-4xl font-extrabold text-slate-900 dark:text-white ${className}`}
      {...props}
    />
  );
};

export const H2 = ({ className, ...props }: TypographyProps) => {
  return (
    <Text
      className={`text-2xl font-bold text-slate-800 dark:text-slate-100 ${className}`}
      {...props}
    />
  );
};

export const Body = ({ className, ...props }: TypographyProps) => {
  return (
    <Text
      className={`text-base text-slate-600 dark:text-slate-300 ${className}`}
      {...props}
    />
  );
};

export const Caption = ({ className, ...props }: TypographyProps) => {
  return (
    <Text
      className={`text-sm text-slate-500 dark:text-slate-400 ${className}`}
      {...props}
    />
  );
};
