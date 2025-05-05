
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-4 rounded-lg mb-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">מרכז הלמידה שלנו</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          בחר מבין הקורסים האיכותיים שלנו והתחל ללמוד עוד היום
        </p>
        <div className="flex justify-center space-x-4 rtl:space-x-reverse">
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all">
            התחל ללמוד
          </button>
          <button className="border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition-all">
            גלה עוד
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
