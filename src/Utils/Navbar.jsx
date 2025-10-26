import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', link: '/' },
    { id: 'products', label: 'Products', link: '/product' },
    { id: 'partner', label: 'Partner', link: '/partner' },
    { id: 'contact', label: 'Contact', link: '/contact' }
  ];

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Premium Navbar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out`}>
        <div className='relative'>
          <div 
            className={`relative overflow-hidden transition-all duration-700 ${
              isScrolled 
                ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
                : 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
            }`}
            style={{
              borderRadius: '0 0 40px 40px',
              fontFamily: 'Georgia, serif',
              borderBottom: '1px solid rgba(251, 191, 36, 0.1)'
            }}
          >
            {/* Subtle Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>

            {/* Desktop Navbar */}
            <div className='hidden md:flex items-center justify-between px-16 py-6 relative'>
              {/* Left Side - Navigation Links */}
              <div className='flex items-center gap-16'>
                {navLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.id}
                    to={link.link}
                    onClick={() => setActiveLink(link.id)}
                    className='relative group cursor-pointer'
                  >
                    <div className='relative'>
                      <span className={`text-lg font-medium tracking-wide transition-all duration-300 ${
                        activeLink === link.id 
                          ? 'text-amber-500' 
                          : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {link.label}
                      </span>
                      
                      {/* Elegant Underline */}
                      <div className={`absolute -bottom-1 left-0 h-[2px] bg-amber-500 transition-all duration-500 ease-out ${
                        activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Center Logo */}
              <Link to="/" onClick={() => setActiveLink('home')} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer'>
                <div className='relative'>
                  <div className='text-3xl font-bold tracking-[0.15em] transition-all duration-500 group-hover:tracking-[0.2em]'>
                    <span className='text-amber-500'>SAF</span>
                    <span className='text-slate-200'>RAA</span>
                    <span className='text-amber-500'>NA</span>
                  </div>
                  {/* Subtle Bottom Border on Hover */}
                  <div className='absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500'></div>
                </div>
              </Link>

              {/* Right Side */}
              <div className='flex items-center gap-16'>
                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.id}
                    to={link.link}
                    onClick={() => setActiveLink(link.id)}
                    className='relative group cursor-pointer'
                  >
                    <div className='relative'>
                      <span className={`text-lg font-medium tracking-wide transition-all duration-300 ${
                        activeLink === link.id 
                          ? 'text-amber-500' 
                          : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {link.label}
                      </span>
                      
                      <div className={`absolute -bottom-1 left-0 h-[2px] bg-amber-500 transition-all duration-500 ease-out ${
                        activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Navbar */}
            <div className='md:hidden relative'>
              <div className='flex items-center justify-between px-6 py-5'>
                {/* Mobile Logo */}
                <Link to="/" onClick={() => handleLinkClick('home')} className='flex items-center'>
                  <span className='text-xl font-bold tracking-wider'>
                    <span className='text-amber-500'>SAF</span>
                    <span className='text-slate-200'>RAA</span>
                    <span className='text-amber-500'>NA</span>
                  </span>
                </Link>

                {/* Minimalist Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className='relative w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white transition-colors duration-300'
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Mobile Menu */}
              <div className={`overflow-hidden transition-all duration-500 ${
                isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className='px-6 pb-6 pt-2 space-y-1 bg-slate-950/50'>
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      to={link.link}
                      onClick={() => handleLinkClick(link.id)}
                      className={`block relative px-6 py-4 cursor-pointer transition-all duration-300 ${
                        activeLink === link.id 
                          ? 'bg-amber-500/10 border-l-2 border-amber-500' 
                          : 'hover:bg-slate-800/50 border-l-2 border-transparent hover:border-slate-700'
                      }`}
                    >
                      <span className={`text-base font-medium tracking-wide transition-all duration-300 ${
                        activeLink === link.id ? 'text-amber-500' : 'text-slate-300'
                      }`}>
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-600/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className={`transition-all duration-700 ${isScrolled ? 'h-20' : 'h-24'}`}></div>
    </>
  );
}

export default Navbar;