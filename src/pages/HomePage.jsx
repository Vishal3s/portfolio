import React, { useEffect, useState, useRef } from "react";
import Hero from "./LandingPage";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import TimeLine from "./TimeLine";
import Contact from "./Contact";
import SocialNetworks from "./SocialNetworks";
import GooeyNav from "../components/GooeyNav";

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isManualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  const handleNavClick = (item, index) => {
    isManualScrollRef.current = true;
    setActiveIndex(index);

    const targetId = item.href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.history.pushState(null, '', item.href);
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 800);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "about", "projects", "resume", "contact"];
    const sectionToNavIndex = {
      hero: 0,
      about: 1,
      timeline: 1, // Map timeline section to "About" tab
      projects: 2,
      resume: 3,
      socials: 4,  // Map socials section to "Contact" tab
      contact: 4,
    };

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Trigger when section occupies main viewport space
      threshold: 0,
    };

    const observerCallback = (entries) => {
      if (isManualScrollRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const navIndex = sectionToNavIndex[id];
          if (navIndex !== undefined) {
            setActiveIndex(navIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const allSections = [...sectionIds, "timeline", "socials"];
    allSections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="home-sections relative">
      {/* Sticky/Fixed GooeyNav */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 pointer-events-none">
        <div className="pointer-events-auto">
          <GooeyNav
            items={navItems}
            activeIndex={activeIndex}
            onNavigate={handleNavClick}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>
      </div>

      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="timeline"><TimeLine /></section>
      <section id="projects"><Projects /></section>
      <section id="resume"><Resume /></section>
      <section id="socials"><SocialNetworks /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default HomePage;