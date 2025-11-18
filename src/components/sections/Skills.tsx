'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { skills } from '@/data/skills';
import { Code, Database, FlaskConical, Globe } from 'lucide-react';

const categoryIcons = [Code, Database, FlaskConical, Globe];

export default function Skills() {
  return (
    <Section
      id="skills"
      className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to build innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skills.map((category, categoryIndex) => {
            const Icon = categoryIcons[categoryIndex] || Code;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                
                <div className="relative h-full p-8 rounded-3xl glass-light border border-gray-200/50 hover:border-blue-500/50 transition-all shadow-xl hover:shadow-2xl">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ x: 4, scale: 1.02 }}
                        className="group/skill"
                      >
                        <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 hover:border-blue-400 transition-all cursor-default">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-gray-800">
                              {skill}
                            </span>
                            <div className="w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto p-8 rounded-3xl glass-light border border-gray-200/50"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Full-Stack ML Development
            </h3>
            <p className="text-gray-600 leading-relaxed">
              From training deep learning models with TensorFlow to deploying scalable FastAPI backends,
              I bring end-to-end expertise in building production-ready machine learning systems.
              My background in biomedical engineering adds a unique perspective to solving complex
              problems at the intersection of healthcare and technology.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
