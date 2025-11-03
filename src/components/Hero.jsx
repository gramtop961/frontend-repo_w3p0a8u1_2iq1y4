import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to add contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-sm font-medium tracking-widest text-blue-600">PORTFOLIO • TECH • MODERN</p>
        <h1 className="mb-4 bg-gradient-to-r from-gray-900 via-blue-700 to-gray-900 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-6xl">
          Md Zaid Ahmed
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base text-gray-700 sm:text-lg">
          Software Engineer crafting thoughtful, interactive web experiences. I blend clean engineering with playful 3D to build fast, accessible products.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-gray-900 px-6 py-3 text-white shadow-lg shadow-gray-900/10 transition hover:-translate-y-0.5 hover:bg-gray-800"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-zaid-ahmed/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-gray-900 backdrop-blur transition hover:-translate-y-0.5 hover:border-gray-400"
          >
            <Linkedin className="h-4 w-4" /> Connect
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3 text-gray-900 backdrop-blur transition hover:-translate-y-0.5 hover:border-gray-400"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
