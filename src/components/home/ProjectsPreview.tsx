import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '@/lib/constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ProjectsPreview: React.FC = () => {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#F4F1EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#F98513] font-semibold text-sm uppercase tracking-wider mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a2332] mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Explore some of our recent installations and infrastructure projects
            delivered across Zambia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((project, idx) => (
            <Link
              key={idx}
              to="/projects"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
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
                <h3 className="font-bold text-[#1a2332] mb-2 group-hover:text-[#9BACD8] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                  <CheckCircle2 size={16} />
                  {project.result}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a2332] text-white text-sm font-semibold rounded-lg hover:bg-[#2a3a52] transition-all"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
