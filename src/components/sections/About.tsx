'use client';

import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { personalInfo } from '@/data/personal';
import { GraduationCap, Award, Users, Target } from 'lucide-react';

const stats = [
  { icon: GraduationCap, label: 'GPA', value: '3.62', color: 'from-blue-500 to-cyan-500' },
  { icon: Award, label: 'Majors', value: '2', color: 'from-purple-500 to-pink-500' },
  { icon: Users, label: 'Organizations', value: '2', color: 'from-pink-500 to-rose-500' },
  { icon: Target, label: 'Focus Areas', value: '5+', color: 'from-cyan-500 to-blue-500' },
];

export default function About() {
  return (
    <Section id="about" className="bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-3xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bridging the gap between biomedical engineering and cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative p-6 rounded-2xl glass-light border border-gray-200/50 hover:border-blue-500/50 transition-all cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 md:p-10 rounded-3xl glass-light border border-gray-200/50 shadow-xl">
              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                {personalInfo.about}
              </p>
            </div>

            {/* Interests Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {['Machine Learning', 'Molecular Simulation', 'Computational Biology', 'Full-Stack ML', 'AR Accessibility', 'Engineering Education'].map((interest, index) => (
                <motion.span
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-sm font-medium text-blue-700"
                >
                  {interest}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
