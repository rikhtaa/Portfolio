"use client"
import React from "react";
import Link from "next/link";

export function HeroNav() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-center sm:justify-center md:justify-end">

      <nav
        className="
        mt-6 
        px-5 py-2 
        rounded-full 
        border border-white/10 
        bg-white/5 backdrop-blur-md
        
        md:bg-transparent 
        md:border-none 
        md:backdrop-blur-0
        md:rounded-none
        
        flex gap-6 
        text-sm text-neutral-300
        md:mr-10
        "
      >

        <Link href="/" className="hover:text-white transition">
          HOME
        </Link>
        <Link href="#about" className="hover:text-white transition">
          ABOUT
        </Link>

        <Link href="#services" className="hover:text-white transition">
          SERVICES
        </Link>

        <Link href="#resume" className="hover:text-white transition">
          RESUME
        </Link>

       
      </nav>

    </header>
  );
}
