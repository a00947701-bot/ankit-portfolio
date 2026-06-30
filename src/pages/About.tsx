import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-8">I'm Ankit, a student designer and developer based in India.</h1>
          <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
            <p>
              I am currently pursuing my undergraduate degree in Computer Science. My journey into the world of tech started with a curiosity about how things work on the internet, which quickly evolved into a passion for building them.
            </p>
            <p>
              I believe that great design is invisible and that technology should empower people. I spend my time learning new frameworks, experimenting with UI patterns, and contributing to open-source projects.
            </p>
            <p>
              When I'm not coding, you can find me reading about architecture, playing chess, or exploring local coffee shops.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="border-l-2 border-zinc-200 pl-6 space-y-8">
              <div>
                <h3 className="font-bold">B.Tech in Computer Science</h3>
                <p className="text-zinc-500">University Name • 2021 — Present</p>
              </div>
              <div>
                <h3 className="font-bold">High School Diploma</h3>
                <p className="text-zinc-500">School Name • 2019 — 2021</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind', 'Node.js', 'Figma', 'Git', 'Python', 'SQL'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-md text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Interests</h2>
            <ul className="text-zinc-600 space-y-2">
              <li>• Generative AI</li>
              <li>• Minimalist Design</li>
              <li>• Web Accessibility</li>
              <li>• Open Source</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;