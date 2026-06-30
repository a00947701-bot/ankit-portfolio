import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Let's connect.</h1>
        <p className="text-zinc-500 mb-12">I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                placeholder="hello@example.com"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea 
              rows={5} 
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              placeholder="Tell me about your project..."
            />
          </div>
          <button className="w-full md:w-auto px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all">
            Send Message
          </button>
        </form>

        <div className="mt-20 pt-12 border-t border-zinc-200">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-6">Find me on</h2>
          <div className="flex gap-8">
            <a href="#" className="font-bold hover:text-indigo-600 transition-colors">LinkedIn</a>
            <a href="#" className="font-bold hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="#" className="font-bold hover:text-indigo-600 transition-colors">Twitter</a>
            <a href="#" className="font-bold hover:text-indigo-600 transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;