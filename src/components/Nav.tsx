"use client"
import { useState, useEffect } from 'react';
import NavLinks from './NavLinks';
import Link from 'next/link';

export default function Nav() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-screen fixed top-0 h-20 z-50 bg-white px-48 flex items-center justify-between drop-shadow-md transition-transform ${
        scrollingDown ? '-translate-y-20' : 'translate-y-0'
      }`}
    >
      <Link className="font-black text-3xl text-text" href={"/"}>
        LOGO
      </Link>
      <NavLinks />
    </nav>
  );
}