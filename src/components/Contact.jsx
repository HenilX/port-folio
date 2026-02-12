import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'Hpate485@uwo.ca' },
    { icon: MapPin, label: 'Location', value: 'ON, Canada' },
    { icon: Phone, label: 'Phone', value: '+1 (382) 882-4122' },
  ];

  return (
    <section className="py-32 bg-slate-950" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-400 tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-8">
            {contactInfo.map(({ icon: Icon, label, value }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-slate-500 mb-1">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-8">
              <p className="text-slate-400 leading-relaxed text-center">
                I'm currently available for freelance work and full-time opportunities. If you have a project that you want to get started, think you need my help, or just want to say hello, feel free to reach out!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
