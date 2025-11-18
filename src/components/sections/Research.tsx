'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { researchExperiences } from '@/data/research';
import { FlaskConical, Microscope, Code, TrendingUp } from 'lucide-react';

export default function Research() {
  return (
    <Section
      id="research"
      className="bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Research</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exploring the frontiers of computational biology and molecular dynamics
          </p>
        </motion.div>

        <div className="flex justify-center max-w-4xl mx-auto">
          {researchExperiences.map((research, index) => (
            <motion.div
              key={research.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, rotateY: 5 }}
              style={{ perspective: '1000px' }}
              className="group relative w-full"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
              
              <div className="relative h-full p-8 rounded-3xl glass-light border border-gray-200/50 hover:border-purple-500/50 transition-all shadow-xl hover:shadow-2xl">
                {/* Icon Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                    <FlaskConical className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {research.title}
                    </h3>
                    <p className="text-purple-600 font-semibold">
                      {research.lab}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {research.description}
                </p>

                {/* Details */}
                <ul className="space-y-3 mb-6">
                  {research.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start text-gray-600"
                    >
                      <span className="text-purple-600 mr-3 mt-1">▸</span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-200/50">
                  {research.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-purple-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Microscope, label: 'Research Areas', value: 'Molecular Dynamics' },
            { icon: Code, label: 'Tools', value: 'Python, CPPTRAJ' },
            { icon: TrendingUp, label: 'Focus', value: 'Protein Folding' },
            { icon: FlaskConical, label: 'Lab', value: 'Simmerling Lab' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl glass-light border border-gray-200/50 text-center"
            >
              <stat.icon className="mx-auto mb-3 text-purple-600" size={24} />
              <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
              <div className="text-lg font-bold text-gray-900">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
