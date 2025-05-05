
import React from 'react';
import HeroSection from '@/components/HeroSection';
import CourseGrid from '@/components/CourseGrid';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8 px-4">
        <HeroSection />
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2 text-center">הקורסים שלנו</h2>
          <p className="text-gray-600 text-center mb-8">בחר מתוך מגוון הקורסים המקצועיים שלנו</p>
          <CourseGrid />
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-semibold mb-4">מרכז הלמידה שלנו</h3>
          <p className="mb-6">הצטרף לאלפי סטודנטים שכבר לומדים איתנו</p>
          <div className="flex justify-center space-x-4 rtl:space-x-reverse mb-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition-colors">
              הירשם עכשיו
            </button>
          </div>
          <p className="text-sm text-gray-400">© 2025 מרכז הלמידה. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
