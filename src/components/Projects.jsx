import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Portfolio',
    description:
      'A playful, modern portfolio powered by a real-time 3D scene and smooth interactions.',
    tech: ['React', 'Spline 3D', 'Tailwind'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Real-time Chat App',
    description:
      'WebSocket-based chat with rooms, typing indicators, and persistent history.',
    tech: ['React', 'FastAPI', 'MongoDB'],
    live: '#',
    repo: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'A data-rich dashboard with charts, filters, and role-based access.',
    tech: ['Vite', 'TypeScript', 'Chart.js'],
    live: '#',
    repo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900 sm:text-3xl">Featured Projects</h2>
        <p className="mb-10 max-w-2xl text-gray-700">
          Selected work that blends usability with engineering depth. Each project focuses on performance, accessibility, and maintainability.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mb-4 text-sm text-gray-600">{p.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex items-center gap-3">
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                >
                  Live <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={p.repo}
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Code <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
