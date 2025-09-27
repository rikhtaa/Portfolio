"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "E-commerce Website",
    title: "Smart Online Shopping Experience",
    src: "https://plus.unsplash.com/premium_photo-1700056213816-0fd7a8171b01?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://e-commerce-website-u9cv.vercel.app/"
  },
  {
    category: "Hotel Booking UI",
    title: "Seamless Travel Reservation Design",
    src: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fHww",
    link: "https://react10-hotel-booking-ui.vercel.app/"
  },
  {
    category: "Textile Factory System",
    title: "Efficient Production Management App",
    src: "https://images.unsplash.com/photo-1567429159658-8c4f96a3d756?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRleHRpbGUlMjBmYWN0b3J5fGVufDB8fDB8fHww",
    link: "https://textile-factory-ui.vercel.app/login"
  },
  {
    category: "Spline Animation",
    title: "Immersive 3D Interactive Design",
    src: "https://images.unsplash.com/photo-1754343063447-3ca1091ad2f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxzcGxpbmUlMjBhbmltYXRpb258ZW58MHx8MHx8fDA%3D",
    link: "https://react-spline-interactive-ui.vercel.app/"
  },
  {
    category: "Platformer Game",
    title: "Engaging 2D Adventure Gameplay",
    src: "https://images.unsplash.com/photo-1634660476928-63015cdbc6d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHBsYXRmb3JtZXIlMjBnYW1lfGVufDB8fDB8fHww",
    link: "https://platformergame9.netlify.app/"
  },
];
