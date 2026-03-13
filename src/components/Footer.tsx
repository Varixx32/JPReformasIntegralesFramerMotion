import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a2a26] text-white/80 py-16 px-6 md:px-12 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col items-center border-[rgba(255,255,255,0.1)]">

        {/* Brand */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold font-serif text-white tracking-widest uppercase mb-2">JP Reformas integrales</h2>
          <p className="text-white/50 text-sm font-light uppercase tracking-widest">Reformas & Diseño</p>
        </div>

        {/* Info grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm font-light mb-12 w-full">
          <span className="hover:text-white transition-colors cursor-pointer">Calle Colón, 1, Gandia</span>
          <span className="hidden md:inline text-white/20">•</span>
          <span className="hover:text-white transition-colors cursor-pointer">671 24 69 20</span>
          <span className="hidden md:inline text-white/20">•</span>
          <a href="mailto:info@jpmultitareas.com" className="hover:text-white transition-colors cursor-pointer">info@jpmultitareas.com</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 mb-12">
          <a href="https://www.facebook.com/share/16nBHtJkLV/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a2a26] transition-all duration-300 transform hover:scale-110">
            <FaFacebookF className="text-lg" />
          </a>
          <a href="https://www.instagram.com/jpmultitareas?igsh=MTR6ajE5djgzeHp4aw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a2a26] transition-all duration-300 transform hover:scale-110">
            <FaInstagram className="text-lg" />
          </a>
          <a href="https://www.tiktok.com/@jpmultitareas" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0a2a26] transition-all duration-300 transform hover:scale-110">
            <SiTiktok className="text-lg" />
          </a>
        </div>

        {/* Copyright */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <span>© {new Date().getFullYear()} JP Reformas integrales. Todos los derechos reservados.</span>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-white/80 cursor-pointer transition-colors">Aviso Legal</span>
            <span className="hover:text-white/80 cursor-pointer transition-colors">Privacidad</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
