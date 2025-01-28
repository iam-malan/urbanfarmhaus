import React, { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState('');

  useEffect(() => {
    // Convert the original image path to WebP path
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/, '.webp');
    const thumbSrc = webpSrc.replace('.webp', '-thumb.webp');
    
    // Start with thumbnail if not priority
    if (!priority) {
      setCurrentSrc(thumbSrc);
    }

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
  }, [src, priority]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={currentSrc || src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        className={`
          w-full h-full object-cover
          ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}
          transition-all duration-700 ease-in-out
        `}
      />
    </div>
  );
};
