
import React from 'react';
import * as LucideIcons from 'lucide-react';

type IconProps = {
  name: keyof typeof LucideIcons;
  fallback?: keyof typeof LucideIcons;
  size?: number;
  color?: string;
  className?: string;
  [key: string]: any;
};

const Icon: React.FC<IconProps> = ({ 
  name, 
  fallback = 'CircleAlert', 
  size = 24, 
  color,
  className = '',
  ...props 
}) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback];
  
  return (
    <IconComponent 
      size={size} 
      color={color} 
      className={className}
      {...props}
    />
  );
};

export default Icon;
