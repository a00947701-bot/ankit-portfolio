import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24">
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          Student. Developer. <br />
          <span className="text-zinc-400">Building for the web.</span>
        </h1>
        <p className="text-xl text-zinc-600 max-w-2xl mb-10 leading-relaxed">
          Hi, I'm Ankit. I'm a student passionate about creating clean, functional, and user-centric digital experiences. Currently exploring the intersection of design and code.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-800 transition-all"
          >
            View My Work <ArrowRight size={18} />
          </Link>
          <div className="flex items-center gap-4 px-4">
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Github size={20} /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="p-8 rounded-3xl bg-white border border-zinc-200 hover:shadow-xl transition-shadow">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4 block">Latest Project</span>
          <h3 className="text-2xl font-bold mb-2">AI Task Orchestrator</h3>
          <p className="text-zinc-600 mb-6">A smart productivity tool built with React and OpenAI API to automate daily scheduling.</p>
          <Link to="/projects" className="text-sm font-bold border-b-2 border-zinc-900 pb-1">Explore Projects</Link>
        </div>
        <div className="p-8 rounded-3xl bg-zinc-900 text-white hover:shadow-xl transition-shadow">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4 block">My Journey</span>
          <h3 className="text-2xl font-bold mb-2">Learning & Growing</h3>
          <p className="text-zinc-400 mb-6">Currently pursuing my degree while working on open-source projects and freelance UI design.</p>
          <Link to="/about" className="text-sm font-bold border-b-2 border-white pb-1">Read My Story</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;