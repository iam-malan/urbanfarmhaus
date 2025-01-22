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
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 flex-shrink-0">
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
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-2">
            <div className="px-4 py-2">
              {['Home', 'About', 'Rooms', 'Facilities', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-gray-50 transition-colors rounded-lg"
                >
                  {item}
                </button>
              ))}
              <div className="px-4 py-3">
                <a
                  href="https://book.nightsbridge.com/36746"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;