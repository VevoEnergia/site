"use client";
import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Image from "next/image";
import HamburguerMenu from "./HamburguerMenu";

export default function Nav() {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    const handleTouchMove = () => {
      const currentScrollY = window.scrollY;
      setScrollingDown(currentScrollY > lastScrollY && currentScrollY > 1);
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-screen fixed top-0 h-20 z-50 bg-primary lg:px-48 flex items-center justify-between drop-shadow-md transition-transform data-[scrollingdown=true]:-translate-y-20`}
      data-scrollingdown={scrollingDown}
    >
      <Link
        className="overflow-hidden bg-cover h-20 lg:h-14 w-40 lg:w-96 px-8"
        href={"/"}
      >
        <Image
          src={"/logo branca.svg"}
          width={150}
          height={52}
          alt="Logo da Vevo Energia Fotovoltaica."
          className="object-center h-full w-auto scale-125 lg:scale-100"
        />
      </Link>
      <NavLinks />
      <HamburguerMenu />
    </nav>
  );
}
