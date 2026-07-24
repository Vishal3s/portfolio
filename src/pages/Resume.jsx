import React from "react";

const Resume = () => (
  <section className="py-20 bg-black text-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6 text-accent">Resume</h2>
      <div className="mb-6 flex justify-center">
        <iframe
          src="/resume.pdf"
          title="Resume PDF"
          className="w-full h-[600px] rounded shadow-lg border border-gray-800"
        />
      </div>
      <a
        href="/resume.pdf"
        download
        className="inline-block px-6 py-2 rounded bg-accent text-white font-semibold shadow hover:scale-105 transition-transform duration-200"
      >
        Download Resume
      </a>
    </div>
  </section>
);

export default Resume; 