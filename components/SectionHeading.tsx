
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  label?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true, label }) => {
  return (
    <div className={`mb-12 md:mb-20 ${centered ? 'text-center' : 'text-left'}`}>
      {label && (
        <p className={`jetbrains text-[11px] font-medium tracking-[0.1em] uppercase text-[#f472b6] mb-4 ${centered ? '' : ''}`}>
          {label}
        </p>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold text-[#111111] mb-5"
        style={{ letterSpacing: '-0.02em', lineHeight: '1.12' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg text-[#555555] font-normal leading-relaxed ${centered ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`h-px w-10 bg-[#f472b6] mt-7 ${centered ? 'mx-auto' : ''}`}
        style={{ opacity: 0.5 }}
      />
    </div>
  );
};

export default SectionHeading;
