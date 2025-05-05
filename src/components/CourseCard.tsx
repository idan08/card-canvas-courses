
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { type Course } from '@/data/coursesData';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const levelColor = {
    beginner: "bg-green-100 text-green-800",
    intermediate: "bg-blue-100 text-blue-800",
    advanced: "bg-purple-100 text-purple-800"
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full flex flex-col">
      <div className="relative h-44 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="flex-grow p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold mb-2 text-right">{course.title}</h3>
          <Badge className={`${levelColor[course.level]} border-0`}>
            {course.level === 'beginner' ? 'מתחילים' : 
             course.level === 'intermediate' ? 'בינוני' : 'מתקדם'}
          </Badge>
        </div>
        <p className="text-gray-600 text-right">{course.description}</p>
      </CardContent>
      <CardFooter className="bg-gray-50 px-5 py-3 flex justify-between items-center">
        <Badge variant="outline" className="flex items-center gap-1">
          <Users size={14} />
          <span>{course.students.toLocaleString()}</span>
        </Badge>
        <span className="text-sm text-gray-500">קטגוריה: {course.category}</span>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
