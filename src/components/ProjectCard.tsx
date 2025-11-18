'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-2xl" />
      
      <div className="relative z-10">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mb-4">
          {project.category}
        </span>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-2 mb-4">
          {project.highlights.slice(0, 3).map((highlight, idx) => (
            <li key={idx} className="flex items-start text-sm text-gray-600">
              <span className="text-blue-600 mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github size={18} />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

