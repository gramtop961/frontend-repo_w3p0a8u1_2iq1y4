import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-gray-900 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Let’s build something great</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            Open to opportunities and collaborations. The quickest way to reach me is via LinkedIn.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://www.linkedin.com/in/md-zaid-ahmed/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition hover:-translate-y-0.5"
          >
            <Linkedin className="h-5 w-5" /> Connect on LinkedIn
          </a>
          <a
            href="mailto:?subject=Inquiry%20from%20your%20portfolio&body=Hi%20Zaid%2C%20"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
          >
            <Mail className="h-5 w-5" /> Send an email
          </a>
        </div>

        <p className="mt-10 text-sm text-white/60">© {new Date().getFullYear()} Md Zaid Ahmed. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
