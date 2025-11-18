'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import { Github, Linkedin, Mail, Download, Send, ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you would typically send the form data to an API
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section
      id="contact"
      className="bg-white relative overflow-hidden"
    >
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
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's connect and discuss opportunities in ML, research, or full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                I'm always open to discussing new projects, research opportunities, or just having
                a chat about technology and innovation. Whether you're interested in collaboration,
                have questions about my work, or want to explore potential opportunities, feel free
                to reach out.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, value: personalInfo.email },
                { icon: Github, label: 'GitHub', href: personalInfo.github, value: 'harrisaint' },
                { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, value: 'harrison-martin' },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center space-x-4 p-4 rounded-2xl glass-light border border-gray-200/50 hover:border-blue-500/50 transition-all"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform">
                    <social.icon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 mb-1">{social.label}</div>
                    <div className="text-base font-semibold text-gray-900">{social.value}</div>
                  </div>
                  <ArrowRight className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" size={20} />
                </motion.a>
              ))}
            </div>

            {/* Resume Download */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resume}
              download
              className="group flex items-center justify-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="p-8 rounded-3xl glass-light border border-gray-200/50 shadow-xl"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white/50 backdrop-blur-sm text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </Section>
  );
}
