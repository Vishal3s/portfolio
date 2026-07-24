import React from 'react';
import { useNavigate } from 'react-router-dom';
import GooeyNav from '../components/GooeyNav'; // Correct import path

// Define navItems here or import from another file
const navItems = [
  { label: 'Home', href: '#' },  // Scrolls to top
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

const GooeyNavPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(item.href);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <GooeyNav
        items={navItems}
        onNavigate={handleNavigate}
        particleCount={15}
        particleDistances={[90, 10]}
        particleR={100}
        initialActiveIndex={0}
        animationTime={600}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
      />
    </div>
  );
};

export default GooeyNavPage;