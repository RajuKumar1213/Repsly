import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary' | 'outline';
  label: string;
  className?: string;
  textClassName?: string;
  icon?: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  label,
  className,
  textClassName,
  icon,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'flex-row items-center justify-center rounded-2xl py-4 px-6 active:opacity-80';

  const variants = {
    primary: 'bg-blue-600 shadow-lg shadow-blue-500/30',
    secondary: 'bg-slate-800',
    outline: 'border-2 border-slate-200 dark:border-slate-700 bg-transparent',
  };

  const textBaseStyles = 'font-bold text-center text-lg';

  const textVariants = {
    primary: 'text-white',
    secondary: 'text-white',
    outline: 'text-slate-900 dark:text-white',
  };

  return (
    <TouchableOpacity
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <View className="mr-2">{icon}</View>}
      <Text
        className={`${textBaseStyles} ${textVariants[variant]} ${textClassName}`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};
