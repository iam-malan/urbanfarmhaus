import React, { useState, useEffect } from 'react';

interface OptimizedBackgroundProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
}

export const OptimizedBackground: React.FC<OptimizedBackgroundProps> = ({
  src,
  className = '',
  children
}) => {
  const [currentSrc, setCurrentSrc] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Convert the original image path to WebP path
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
    
    // Load the full resolution image
    const fullImage = new Image();
    fullImage.src = webpSrc;
    
    fullImage.onload = () => {
      setCurrentSrc(webpSrc);
      setIsLoading(false);
    };

    // Fallback to original format if WebP fails
    fullImage.onerror = () => {
      setCurrentSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div 
      className={`${className} transition-opacity duration-700 ease-in-out`}
      style={{
        backgroundImage: `url(${currentSrc || src})`,
        opacity: isLoading ? 0.5 : 1,
      }}
    >
      {children}
    </div>
  );
};
