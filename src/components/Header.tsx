import React, { useState, useEffect } from 'react';
import { Menu, X, DoorClosed } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <DoorClosed className="h-8 w-8 text-red-600" />
            <span className={`text-xl font-semibold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Urban Farm Haus</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Rooms', 'Facilities', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-600 transition-colors`}
              >
                {item}
              </button>
            ))}
            <a
              href="https://book.nightsbridge.com/36746"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Book Now
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            {['Home', 'About', 'Rooms', 'Facilities', 'Gallery', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left py-2 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-red-600 transition-colors`}
              >
                {item}
              </button>
            ))}
            <a
              href="https://book.nightsbridge.com/36746"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors mt-4"
            >
              Book Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;