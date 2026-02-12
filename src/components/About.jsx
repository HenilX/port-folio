import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Coffee, Lightbulb, Rocket } from 'lucide-react';
import profileImg from '../assets/img.png';




export default function About() {
  const highlights = [
    { icon: Code2, label: '1+ Years Experience', color: 'from-blue-500 to-cyan-500' },
    { icon: Rocket, label: 'Master\'s Graduate', color: 'from-purple-500 to-pink-500' },
    { icon: Coffee, label: 'Teaching Assistant', color: 'from-amber-500 to-orange-500' },
    { icon: Lightbulb, label: 'Always Learning', color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <section className="py-32 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Passionate about creating
            <br />
            <span className="text-slate-400">impactful solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
         <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="relative inline-block">

    {/* Background Shapes */}
    <div className="absolute -top-6 -left-6 w-32 h-32 
                    bg-gradient-to-br from-amber-400 to-orange-500 
                    rounded-2xl z-0" />

    <div className="absolute -bottom-6 -right-6 w-48 h-48 
                    bg-gradient-to-br from-blue-500 to-purple-600 
                    rounded-3xl z-0" />

    {/* Image Container */}
    <div className="relative z-10 aspect-square rounded-3xl overflow-hidden 
                    bg-gradient-to-br from-slate-100 to-slate-200">
                      
      <img src={profileImg} alt="Profile" className="w-full h-full object-cover" />
     
    </div>

  </div>
</motion.div>


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a full-stack developer and Graduate Teaching Assistant at Western University, based in London, Ontario. 
              Currently pursuing my Master's in Computer Science, I specialize in building scalable web applications 
              using React.js, Node.js, and modern frameworks while exploring machine learning and AI applications.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              With experience at TatvaSoft and Navkar Soft Labs, I've developed enterprise applications, 
              optimized performance, and worked with cross-functional teams. I'm passionate about teaching, 
              contributing to research projects like ORCAA, and building innovative solutions that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map(({ icon: Icon, label, color }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${color}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
