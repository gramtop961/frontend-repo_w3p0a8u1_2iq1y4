import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-lg font-semibold tracking-tight text-gray-900">ZA.</a>
        <nav className="hidden items-center gap-6 text-sm text-gray-700 md:flex">
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="mx-auto max-w-6xl px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow">
            <a href="#about" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-white text-gray-900">
      <Navbar />
      <main className="pt-14">{/* offset for fixed navbar */}
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
