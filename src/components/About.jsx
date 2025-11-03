import React from 'react';
import { Code2, Sparkles } from 'lucide-react';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'FastAPI',
  'MongoDB',
  'Tailwind CSS',
  'Framer Motion',
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-5">
        <div className="order-2 md:order-1 md:col-span-2">
          <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-3xl bg-gradient-to-tr from-blue-600 to-purple-600 shadow-xl md:h-72 md:w-72">
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-black tracking-tight text-white/20 select-none">
              ZA
            </div>
            <Sparkles className="absolute -right-2 -top-2 h-8 w-8 text-white/70" />
            <Code2 className="absolute -bottom-2 -left-2 h-8 w-8 text-white/70" />
          </div>
        </div>
        <div className="order-1 md:order-2 md:col-span-3">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl">About</h2>
          <p className="mb-4 text-gray-700">
            I’m Md Zaid Ahmed — a builder who loves turning ideas into polished, performant products. I focus on clear architecture, delightful interactions, and solid engineering practices.
          </p>
          <p className="mb-6 text-gray-700">
            Recently I’ve been exploring 3D on the web, design systems, and scalable APIs. Beyond code, I enjoy collaborative problem-solving and mentoring.
          </p>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">Core Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
