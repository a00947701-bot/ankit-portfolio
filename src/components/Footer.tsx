import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-zinc-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Ankit. Built with React & Tailwind.
        </p>
        <div className="flex gap-6 text-sm font-medium text-zinc-500">
          <a href="#" className="hover:text-zinc-900">Resume</a>
          <a href="#" className="hover:text-zinc-900">Source</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;