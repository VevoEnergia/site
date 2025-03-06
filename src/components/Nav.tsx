"use client";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

import Link from "next/link";
import Image from "next/image";

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

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-screen fixed top-0 h-20 z-50 bg-primary px-48 flex items-center justify-between drop-shadow-md transition-transform data-[scrollingdown=true]:-translate-y-20`}
      data-scrollingdown={scrollingDown}
    >
      <Link
        className="overflow-hidden relative flex items-center justify-start h-14 w-96"
        href={"/"}
      >
        <Image
          src={"/logo branca.svg"}
          width={300}
          height={52}
          alt="Logo da Vevo Energia Fotovoltaica."
          className="bg-cover"
        />
      </Link>
      <NavLinks />
    </nav>
  );
}
