import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMAGES, PROJECTS } from '@/lib/constants';
import { ArrowRight, CheckCircle2, Filter } from 'lucide-react';

const categories = ['All', 'ICT Infrastructure', 'Renewable Energy', 'Security Systems'];

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Page Hero */}
      <section className="relative bg-[#1a2332] py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.cabling2} alt="Projects" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-[#1a2332]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">Our Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Projects & Case Studies
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects across ICT infrastructure,
            renewable energy, and security systems.
          </p>
        </div>
      </section>

      {/* Filter + Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <Filter size={18} className="text-gray-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-[#9BACD8] text-white shadow-md'
                    : 'bg-[#F4F1EC] text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-[#F4F1EC] rounded-xl overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === idx ? null : idx)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#1a2332] rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[#1a2332] text-lg mb-2 group-hover:text-[#9BACD8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {selectedProject === idx && (
                    <div className="mb-4 space-y-3 animate-in fade-in">
                      <div>
                        <h4 className="font-semibold text-[#1a2332] text-sm mb-2">Project Scope:</h4>
                        <ul className="space-y-1.5">
                          {project.scope.map((item) => (
                            <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle2 size={14} className="text-[#9BACD8] flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                    <CheckCircle2 size={16} />
                    {project.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#9BACD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Project</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Ready to join our growing list of successful projects? Let's discuss your requirements.
          </p>
          <Link
            to="/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F98513] text-white font-semibold rounded-lg hover:bg-[#e0760f] transition-all shadow-lg text-sm"
          >
            Request a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
