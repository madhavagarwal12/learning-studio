
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 md:mb-20 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-4xl md:text-5xl nohemi-extrabold mb-4 tracking-tight text-neutral-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-neutral-600 nohemi-regular max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-[#8B1538] mt-6 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
