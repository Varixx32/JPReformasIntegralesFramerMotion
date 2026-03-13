import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Initial animation
    const header = document.getElementById('main-header');
    if (header) {
      setTimeout(() => {
        header.style.transform = 'translateY(0)';
      }, 100);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Especialidades', href: '#galeria' },
    { name: 'Sobre nosotros', href: '#about-us' },
    { name: 'Contacto', href: '#footer' },
  ];

  return (
    <>
      <header
        id="main-header"
        style={{ transform: 'translateY(-100%)', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s, padding 0.3s, box-shadow 0.3s' }}
        className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#hero-image" className="relative z-50 group">
            <img
              src="/assets/Logo.png"
              alt="JP Logo"
              className={`h-12 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${scrolled ? '' : 'brightness-0 invert drop-shadow-lg'}`}
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-[#0F3D38] ${scrolled ? 'text-gray-800' : 'text-white drop-shadow-md'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-50 p-2 rounded-full focus:outline-none transition-all active:scale-90 ${scrolled ? 'text-gray-900 bg-gray-100' : 'text-white bg-white/10 backdrop-blur-sm'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        <div className="absolute inset-0 bg-white/90 backdrop-blur-xl" />

        <nav className="relative h-full flex flex-col items-center justify-center gap-10 px-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms',
                transform: isOpen ? 'translateY(0)' : 'translateY(30px)',
                opacity: isOpen ? 1 : 0,
                transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="group relative"
            >
              <span className="text-4xl font-bold text-[#0F3D38] uppercase tracking-tighter active:opacity-60 transition-opacity">
                {link.name}
              </span>
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-[#0F3D38] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          <div
            className={`mt-12 transition-all duration-700 delay-500 flex gap-6 ${isOpen ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Simple social icons or info could go here for "flawless" feel */}
            <p className="text-[#0F3D38] text-xs tracking-widest uppercase">Barcelona • JP Reformas</p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
