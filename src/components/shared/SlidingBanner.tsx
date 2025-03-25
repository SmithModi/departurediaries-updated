
import React from 'react';

const SlidingBanner = ({ text }: { text: string }) => {
  return (
    <div className="bg-travel-800 text-white py-2 overflow-hidden">
      <div className="relative flex whitespace-nowrap animate-[sliding_20s_linear_infinite]">
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
        <span className="mx-4">{text}</span>
      </div>
    </div>
  );
};

export default SlidingBanner;
