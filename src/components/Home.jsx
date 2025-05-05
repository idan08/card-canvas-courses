
import React from 'react';
import Navbar from './Navbar';
import CourseCard from './CourseCard';
import SubscriptionCard from './Bauman';

const courses = [
  {
    id: 1,
    title: 'אלגוריתמים',
    description: 'קורס מקיף באלגוריתמים ומבני נתונים',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    link: '/algorithms'
  },
  {
    id: 2,
    title: 'מבני נתונים',
    description: 'עקרונות מבני נתונים ואלגוריתמים',
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    link: '/data-structures'
  },
  {
    id: 3,
    title: 'אוטומטים ושפות פורמליות',
    description: 'מבוא לתורת האוטומטים והשפות הפורמליות',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    link: '/automata'
  },
  {
    id: 4,
    title: 'לוגיקה',
    description: 'יסודות הלוגיקה המתמטית והיישומים שלה',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
    link: '/logic'
  }
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar courseType="cs" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-4">פלטפורמת קורסים CS24</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            המקום המוביל ללמידה של מדעי המחשב - קורסים, חומרי עזר, ומדריכים
          </p>
        </div>
        
        <SubscriptionCard />
        
        <h2 className="text-2xl font-bold mt-12 mb-6">הקורסים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map(course => (
            <CourseCard 
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              link={course.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
