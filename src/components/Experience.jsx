import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Graduate Teaching Assistant',
      company: 'Western University',
      period: 'Jan 2025 - Aug 2025',
      description: 'Supporting teaching of Applied Logics in CS for 130+ students. Conducting tutorials, assisting with assignments on data structures, and collaborating on course materials and exams.',
      technologies: ['Teaching', 'Algorithm Design', 'Technical Documentation'],
    },
    {
      role: 'Software Developer Intern',
      company: 'TatvaSoft',
      period: 'May 2023 - Oct 2023',
      description: 'Developed responsive front-end components for enterprise applications. Integrated RESTful APIs and improved performance by 30% through code splitting, lazy loading, and caching.',
      technologies: ['React.js', 'JavaScript', 'REST APIs', 'Agile/Scrum'],
    },
    {
      role: 'Software Developer',
      company: 'Navkar Soft Labs',
      period: 'Mar 2022 - Dec 2022',
      description: 'Built full-stack web applications with REST API integration. Designed and optimized relational databases, implemented authentication/authorization, and worked in Agile/Scrum teams.',
      technologies: ['React.js', 'Node.js', 'Python', 'MySQL', 'PostgreSQL'],
    },
  ];

  return (
    <section className="py-32 bg-slate-50" id="experience">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 block">
            Career Path
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-md hidden md:block" />

                <div className="p-8 rounded-3xl bg-white shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-medium mb-4">
                    <Building2 className="w-4 h-4" />
                    {exp.company}
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
