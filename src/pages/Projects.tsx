import React from 'react';

const projects = [
  {
    title: "EcoTrack Mobile App",
    category: "UI/UX Design • React Native",
    description: "A sustainability tracker helping users reduce their carbon footprint through gamified challenges.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Minimalist E-commerce",
    category: "Web Development • Next.js",
    description: "A high-performance storefront with a focus on typography and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "DataViz Dashboard",
    category: "Frontend • D3.js",
    description: "Interactive visualization of global climate data for educational institutions.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-16">
        <h1 className="text-4xl font-bold mb-4">Selected Works</h1>
        <p className="text-zinc-500 max-w-xl">A collection of projects I've worked on, ranging from academic assignments to personal experiments.</p>
      </header>

      <div className="grid grid-cols-1 gap-16">
        {projects.map((project, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-video overflow-hidden rounded-2xl bg-zinc-100 mb-6">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{project.category}</span>
                <h2 className="text-3xl font-bold mt-2">{project.title}</h2>
                <p className="text-zinc-600 mt-2 max-w-2xl">{project.description}</p>
              </div>
              <button className="text-sm font-bold px-6 py-2 border border-zinc-200 rounded-full hover:bg-zinc-900 hover:text-white transition-colors">
                View Case Study
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;