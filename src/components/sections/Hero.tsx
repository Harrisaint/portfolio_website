'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 via-purple-50 to-pink-50" />

      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
        />
        <motion.div
          animate={{
            x: -mousePosition.x * 0.5,
            y: -mousePosition.y * 0.5,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"
        />
        <motion.div
          animate={{
            x: mousePosition.x * 0.3,
            y: mousePosition.y * 0.3,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 py-2 mb-8 rounded-full glass-light border border-gray-200/50"
          >
            <Sparkles size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">
              Biomedical Engineering & Data Science
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text bg-clip-text">
              Harrison
            </span>
            <br />
            <span className="gradient-text bg-clip-text">
              Martin
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto font-light"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center items-center gap-4 mb-16"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Github size={20} />
                <span>GitHub</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.email}`}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Mail size={20} />
                <span>Email</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resume}
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Download size={20} />
                <span>Resume</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            onClick={() => scrollToSection('#about')}
            className="group flex flex-col items-center space-y-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <span className="text-sm font-medium">Explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
