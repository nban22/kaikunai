import React from 'react';

interface KaikunLogoProps {
  className?: string;
}

export const KaikunLogo: React.FC<KaikunLogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg 
      viewBox="0 0 60 60" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M30 10C18.954 10 10 18.954 10 30C10 41.046 18.954 50 30 50C41.046 50 50 41.046 50 30C50 18.954 41.046 10 30 10Z" 
        fill="#3B82F6" 
      />
      <path 
        d="M38 22C34.686 22 32 24.686 32 28C32 31.314 34.686 34 38 34C41.314 34 44 31.314 44 28C44 24.686 41.314 22 38 22Z" 
        fill="#F97316" 
      />
      <path 
        d="M22 26C18.686 26 16 28.686 16 32C16 35.314 18.686 38 22 38C25.314 38 28 35.314 28 32C28 28.686 25.314 26 22 26Z" 
        fill="#EF4444" 
      />
      <path 
        d="M30 38C26.686 38 24 40.686 24 44C24 47.314 26.686 50 30 50C33.314 50 36 47.314 36 44C36 40.686 33.314 38 30 38Z" 
        fill="#14B8A6" 
      />
      <path 
        d="M30 10C26.686 10 24 12.686 24 16C24 19.314 26.686 22 30 22C33.314 22 36 19.314 36 16C36 12.686 33.314 10 30 10Z" 
        fill="#A855F7" 
      />
    </svg>
  );
};