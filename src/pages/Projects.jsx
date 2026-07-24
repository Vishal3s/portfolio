import React from "react";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";

const projects = [
  {
    quote: "A React-based portfolio with a 3D animated hero section using @react-three/fiber.",
    name: "3D Portfolio Hero",
    title: "React, Three.js, Tailwind CSS",
    link: "https://github.com/yourusername/3d-portfolio-hero",
  },
  {
    quote: "A clean, minimal blog platform with markdown support and dark mode.",
    name: "Minimal Blog",
    title: "React, Tailwind CSS",
    link: "https://github.com/yourusername/minimal-blog",
  },
  {
    quote: "A web-based interactive resume with PDF preview and download.",
    name: "Interactive Resume",
    title: "React, PDF.js, Tailwind CSS",
    link: "https://github.com/yourusername/interactive-resume",
  },
];

const Projects = () => (
  <section className="py-20 bg-black text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-accent">Projects</h2>
      <InfiniteMovingCards
        items={projects}
        direction="left"
        speed="normal"
        pauseOnHover={true}
        className="dark"
      />
    </div>
  </section>
);

export default Projects; 