
import React, { useState } from 'react';
import CourseCard from './CourseCard';
import { Course, courses } from '@/data/coursesData';
import { Button } from '@/components/ui/button';

type FilterCategory = 'all' | string;
type FilterLevel = 'all' | 'beginner' | 'intermediate' | 'advanced';

const CourseGrid: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = useState<FilterCategory>('all');
  const [levelFilter, setLevelFilter] = useState<FilterLevel>('all');

  // Extract unique categories from courses
  const categories = [...new Set(courses.map(course => course.category))];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory = categoryFilter === 'all' || course.category === categoryFilter;
    const matchesLevel = levelFilter === 'all' || course.level === levelFilter;
    return matchesCategory && matchesLevel;
  });

  const handleCategoryChange = (category: FilterCategory) => {
    setCategoryFilter(category);
  };

  const handleLevelChange = (level: FilterLevel) => {
    setLevelFilter(level);
  };

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={categoryFilter === 'all' ? "default" : "outline"} 
            onClick={() => handleCategoryChange('all')}
          >
            הכל
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={categoryFilter === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Button 
            size="sm"
            variant={levelFilter === 'all' ? "secondary" : "outline"} 
            onClick={() => handleLevelChange('all')}
          >
            כל הרמות
          </Button>
          <Button 
            size="sm"
            variant={levelFilter === 'beginner' ? "secondary" : "outline"} 
            onClick={() => handleLevelChange('beginner')}
          >
            מתחילים
          </Button>
          <Button 
            size="sm"
            variant={levelFilter === 'intermediate' ? "secondary" : "outline"} 
            onClick={() => handleLevelChange('intermediate')}
          >
            בינוני
          </Button>
          <Button 
            size="sm"
            variant={levelFilter === 'advanced' ? "secondary" : "outline"} 
            onClick={() => handleLevelChange('advanced')}
          >
            מתקדם
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
      
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">לא נמצאו קורסים התואמים את הסינון שלך.</p>
          <Button 
            variant="link" 
            onClick={() => {
              setCategoryFilter('all');
              setLevelFilter('all');
            }}
          >
            נקה סינון
          </Button>
        </div>
      )}
    </div>
  );
};

export default CourseGrid;
