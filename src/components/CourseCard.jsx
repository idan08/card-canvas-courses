
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';

const CourseCard = ({ title, description, imageUrl, link }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <Button 
          className="w-full" 
          onClick={() => window.location.href = link}
        >
          למידע נוסף
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
