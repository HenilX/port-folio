import React from 'react';
import { motion } from 'framer-motion';

const frontend = ['React.js','HTML5','CSS3','Tailwind CSS','Bootstrap','TypeScript']
const backend = ['Node.js','Express.js','Python','REST APIs','PostgreSQL','MySQL','MongoDB']
const langs = ['JavaScript','TypeScript','Python','Rust','Java','C++']
const tools = ['Git','GitHub','Docker','CI/CD','Agile/Scrum','Linux']

export default function Skills(){
  const skillCategories = [
    {
      title: 'Frontend',
      skills: frontend,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend & Databases',
      skills: backend,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Programming Languages',
      skills: langs,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Tools & Practices',
      skills: tools,
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section className="py-32 bg-slate-950" id="skills">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-4 block">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technologies I work with
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I'm constantly learning and expanding my toolkit to deliver the best solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/[0.07]"
            >
              <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${category.gradient} mb-6`}>
                <span className="text-sm font-semibold text-white">{category.title}</span>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
                    className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
