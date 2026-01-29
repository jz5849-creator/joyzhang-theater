import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';

interface HeroProps {
  onExplore?: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // 将切换间隔延长至 6 秒，配合更慢的过渡动画，营造沉浸感
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1F1F1F]">
      {/* Slides */}
      {HERO_IMAGES.map((img, index) => (
        <div
          key={index}
          // 核心优化：
          // 1. duration-[2500ms]: 延长过渡时间，更加柔和。
          // 2. z-10 vs z-0: 确保当前图片永远在最上层淡入(Fade In)，覆盖住旧图片，避免出现黑底。
          // 3. scale-105 vs scale-100: 添加轻微的“呼吸感”缩放效果 (Ken Burns effect)。
          className={`absolute inset-0 w-full h-full transition-all duration-[2500ms] ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 z-10 scale-105' 
              : 'opacity-0 z-0 scale-100'
          }`}
        >
          <img 
            src={img} 
            alt={`Hero Slide ${index + 1}`} 
            className="w-full h-full object-cover opacity-90"
          />
          {/* 渐变遮罩，确保顶部导航栏文字清晰 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/20" />
        </div>
      ))}
    </div>
  );
};

export default Hero;