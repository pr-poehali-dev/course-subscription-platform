
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Icon name="Graduation" size={32} className="text-purple-600 mr-2" />
            <span className="text-2xl font-bold text-gray-800">ЭдуКурс</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium">Главная</Link>
            <Link to="/courses" className="text-gray-700 hover:text-purple-600 font-medium">Все курсы</Link>
            <Link to="/categories" className="text-gray-700 hover:text-purple-600 font-medium">Категории</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium">О нас</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Войти
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Регистрация
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-purple-600 font-medium py-2">Главная</Link>
              <Link to="/courses" className="text-gray-700 hover:text-purple-600 font-medium py-2">Все курсы</Link>
              <Link to="/categories" className="text-gray-700 hover:text-purple-600 font-medium py-2">Категории</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium py-2">О нас</Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 w-full">
                  Войти
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                  Регистрация
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
