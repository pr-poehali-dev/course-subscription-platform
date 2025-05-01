
import React from 'react';
import { Button } from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export type CourseType = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  imageUrl: string;
  duration: string;
  level: 'Начинающий' | 'Средний' | 'Продвинутый';
  rating: number;
};

interface CourseCardProps {
  course: CourseType;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-sm font-medium">
          {course.category}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{course.title}</h3>
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i} 
                name="Star" 
                size={16} 
                className={i < course.rating ? "fill-yellow-400" : "text-gray-300"} 
              />
            ))}
          </div>
          <span className="ml-1 text-sm text-gray-600">{course.rating.toFixed(1)}</span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Icon name="Clock" size={16} className="mr-1" />
            {course.duration}
          </div>
          <div className="text-sm text-gray-500">
            Уровень: {course.level}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-purple-600">{course.price} ₽</div>
          <Button 
            variant="default" 
            className="bg-purple-600 hover:bg-purple-700"
          >
            Подробнее
          </Button>
        </div>
      </div>
    </div>
  );
}
