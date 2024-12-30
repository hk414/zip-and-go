import React from "react";
import "../styles/MovingBanner.css";

const MovingBanner = () => {
  return (
    <div className="bg-gray-800 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-hidden">
          <div className="animate-marquee whitespace-nowrap space-x-8 text-lg">
            <span>🚀 Launching Soon! Stay tuned for exciting updates and features!</span>
            <span>🚀 Coming Soon: New Features for Zip&Go Users!</span>
            <span>🚀 Join Zip&Go for exclusive early access benefits!</span>
            <span>🚀 Don&apos;t miss out! Stay updated with Zip&Go news!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingBanner;
