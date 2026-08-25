import React from 'react';

interface WaveProps {
  fillColor?: string;
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
  height?: number | string;
}

export const OrganicWaveTop: React.FC<WaveProps> = ({
  fillColor = '#FAF7F2',
  className = '',
  flipX = false,
  flipY = false,
}) => {
  const transform = `${flipX ? 'scaleX(-1) ' : ''}${flipY ? 'scaleY(-1)' : ''}`.trim();

  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none ${className}`} style={{ transform: transform || undefined }}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-20 lg:h-28 block preserve-3d"
        preserveAspectRatio="none"
      >
        <path
          d="M0,32 C280,95 450,15 720,55 C990,95 1200,10 1440,45 L1440,0 L0,0 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export const OrganicWaveBottom: React.FC<WaveProps> = ({
  fillColor = '#FAF7F2',
  className = '',
  flipX = false,
}) => {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-14 md:h-24 lg:h-32 block preserve-3d ${flipX ? 'transform -scale-x-100' : ''}`}
        preserveAspectRatio="none"
      >
        <path
          d="M0,45 C320,130 580,20 860,70 C1140,120 1320,35 1440,80 L1440,140 L0,140 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export const AsymmetricWaveTransition: React.FC<{
  topColor?: string;
  bottomColor: string;
  className?: string;
  variant?:
    | 'hero-to-body'
    | 'body-to-dark'
    | 'dark-to-light'
    | 'light-to-sand'
    | 'sand-to-light'
    | 'sand-to-terracotta'
    | 'terracotta-to-light'
    | 'gentle'
    | 'curved-crest';
}> = ({ bottomColor, className = '', variant = 'hero-to-body' }) => {
  if (variant === 'hero-to-body') {
    return (
      <div className={`w-full overflow-hidden leading-none relative z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 md:h-24 lg:h-32 block -mb-px"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q360,135 760,60 T1440,90 L1440,140 L0,140 Z"
            fill={bottomColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'body-to-dark') {
    return (
      <div className={`w-full overflow-hidden leading-none relative z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-28 lg:h-36 block -mb-px"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C320,160 620,10 980,95 C1220,150 1360,60 1440,75 L1440,160 L0,160 Z"
            fill={bottomColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'dark-to-light') {
    return (
      <div className={`w-full overflow-hidden leading-none relative z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-16 md:h-24 lg:h-32 block -mb-px"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C420,130 760,20 1100,85 C1260,115 1380,50 1440,65 L1440,150 L0,150 Z"
            fill={bottomColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'light-to-sand') {
    return (
      <div className={`w-full overflow-hidden leading-none relative z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-20 lg:h-28 block -mb-px"
          preserveAspectRatio="none"
        >
          <path
            d="M0,35 C280,90 540,10 820,55 C1100,100 1300,25 1440,65 L1440,130 L0,130 Z"
            fill={bottomColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'sand-to-light') {
    return (
      <div className={`w-full overflow-hidden leading-none relative z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-20 lg:h-28 block -mb-px"
          preserveAspectRatio="none"
        >
          <path
            d="M0,55 C340,15 620,95 940,45 C1180,10 1340,75 1440,40 L1440,130 L0,130 Z"
            fill={bottomColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'sand-to-terracotta') {
    return (
      <div className={`w-full overflow-hidden leading-none relative z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 md:h-24 lg:h-32 block -mb-px"
          preserveAspectRatio="none"
        >
          <path
            d="M0,45 C300,120 620,15 960,80 C1200,125 1360,40 1440,70 L1440,140 L0,140 Z"
            fill={bottomColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'terracotta-to-light') {
    return (
      <div className={`w-full overflow-hidden leading-none relative z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-14 md:h-24 lg:h-32 block -mb-px"
          preserveAspectRatio="none"
        >
          <path
            d="M0,70 C360,20 700,110 1020,40 C1240,-10 1380,60 1440,45 L1440,140 L0,140 Z"
            fill={bottomColor}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'curved-crest') {
    return (
      <div className={`w-full overflow-hidden leading-none relative z-10 pointer-events-none ${className}`}>
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 md:h-20 lg:h-24 block -mb-px"
          preserveAspectRatio="none"
        >
          <path
            d="M0,25 C320,80 640,0 960,65 C1220,110 1380,35 1440,50 L1440,120 L0,120 Z"
            fill={bottomColor}
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-none relative z-10 pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-12 md:h-20 block -mb-px"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C360,100 720,20 1080,80 C1260,105 1380,55 1440,60 L1440,120 L0,120 Z"
          fill={bottomColor}
        />
      </svg>
    </div>
  );
};
