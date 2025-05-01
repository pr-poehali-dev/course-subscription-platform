
import React from 'react';
import Navigation from '@/components/Navigation';
import CourseCard, { CourseType } from '@/components/CourseCard';
import SubscriptionForm from '@/components/SubscriptionForm';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

const Index = () => {
  // Примеры курсов для демонстрации
  const featuredCourses: CourseType[] = [
    {
      id: 1,
      title: 'Введение в веб-разработку',
      category: 'Программирование',
      description: 'Изучите основы HTML, CSS и JavaScript для создания современных веб-сайтов.',
      price: 4900,
      imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80',
      duration: '6 недель',
      level: 'Начинающий',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Дизайн пользовательского интерфейса',
      category: 'Дизайн',
      description: 'Научитесь создавать красивые и функциональные интерфейсы для веб и мобильных приложений.',
      price: 5900,
      imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80',
      duration: '8 недель',
      level: 'Средний',
      rating: 4.6
    },
    {
      id: 3,
      title: 'Продвинутый Python для аналитики данных',
      category: 'Аналитика',
      description: 'Изучите продвинутые методы анализа данных с использованием Python и библиотек Pandas, NumPy, Matplotlib.',
      price: 6900,
      imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80',
      duration: '10 недель',
      level: 'Продвинутый',
      rating: 4.9
    }
  ];

  const categories = [
    { id: 1, name: 'Программирование', icon: 'Code2' },
    { id: 2, name: 'Дизайн', icon: 'Paintbrush' },
    { id: 3, name: 'Маркетинг', icon: 'TrendingUp' },
    { id: 4, name: 'Бизнес', icon: 'Briefcase' },
    { id: 5, name: 'Фотография', icon: 'Camera' },
    { id: 6, name: 'Музыка', icon: 'Music' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Учитесь новому и развивайтесь с нами</h1>
            <p className="text-xl mb-8">Более 1000 онлайн-курсов от ведущих экспертов и преподавателей</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
              alt="Студенты обучаются" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>
      
      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Популярные категории</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {categories.map(category => (
              <div key={category.id} className="flex flex-col items-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-50 cursor-pointer">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name={category.icon as any} size={30} className="text-purple-600" />
                </div>
                <h3 className="font-medium text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Популярные курсы</h2>
            <Button variant="outline" className="border-purple-600 text-purple-600">
              Смотреть все
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Users" size={30} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Опытные преподаватели</h3>
              <p className="text-gray-600">Наши курсы ведут эксперты с многолетним опытом работы в индустрии</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="BookOpen" size={30} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Практические навыки</h3>
              <p className="text-gray-600">Все курсы включают практические задания и проекты для закрепления материала</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Icon name="Certificate" size={30} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Сертификаты</h3>
              <p className="text-gray-600">По окончании курса вы получите сертификат, подтверждающий ваши навыки</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subscription Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Будьте в курсе новинок</h2>
              <p className="text-lg text-gray-700 mb-4">Подпишитесь на нашу рассылку, чтобы первыми узнавать о новых курсах, акциях и специальных предложениях</p>
              <div className="flex items-center text-purple-600 mb-2">
                <Icon name="Check" size={20} className="mr-2" />
                <span>Персональные подборки курсов</span>
              </div>
              <div className="flex items-center text-purple-600 mb-2">
                <Icon name="Check" size={20} className="mr-2" />
                <span>Скидки для подписчиков</span>
              </div>
              <div className="flex items-center text-purple-600">
                <Icon name="Check" size={20} className="mr-2" />
                <span>Полезные статьи для саморазвития</span>
              </div>
            </div>
            
            <div className="md:w-5/12">
              <SubscriptionForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Graduation" size={28} className="text-purple-400 mr-2" />
                <span className="text-xl font-bold">ЭдуКурс</span>
              </div>
              <p className="text-gray-400 mb-4">Платформа для онлайн-обучения и развития профессиональных навыков</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Преподаватели</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Карьера</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Блог</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Категории</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Программирование</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Дизайн</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Маркетинг</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Бизнес</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Связаться с нами</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Политика конфиденциальности</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Условия использования</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
            <p>© 2025 ЭдуКурс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
