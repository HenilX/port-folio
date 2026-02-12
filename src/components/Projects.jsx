import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Bookstore E-Commerce Platform',
      description: 'Dynamic e-commerce bookstore with secure payment integration, advanced search filtering by genre/author/price, user authentication, and ML-based personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Machine Learning'],
      githubUrl: 'https://github.com/HenilX/BookStore',
    },
    {
      title: 'Tomato Leaf Disease Detection',
      description: 'CNN-based model using ResNet50 and TensorFlow to classify tomato leaf diseases with 95% accuracy. Features data augmentation, IoT integration for real-time monitoring.',
      image: 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&h=600&fit=crop',
      tags: ['TensorFlow', 'ResNet50', 'Keras', 'PyTorch'],
      githubUrl: 'https://github.com/HenilX/smart_agriculture_system-main',
    },
    {
      title: 'Taxi Fare Prediction',
      description: 'Machine learning model using Linear Regression and XGBoost for accurate fare estimation with R² score of 0.89. Processes large geospatial datasets with feature engineering.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
      tags: ['XGBoost', 'Scikit-learn', 'Pandas', 'NumPy'],
      githubUrl: 'https://github.com/HenilX/ML-Powered-Taxi-Fare-Prediction-using-Docker',
    },
    {
      title: 'ORCAA Research - BPAS Library',
      description: 'Optimized polynomial algebra computations using C++ and parallel computing with OpenCilk. Implemented Real Root Isolation and Toom-Cook multiplication algorithms.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
      tags: ['C++', 'OpenCilk', 'Algorithm Optimization', 'HPC'],
      githubUrl: 'https://github.com/orcca-uwo/BPAS',
    },
  ];

  return (
    <section className="py-32 bg-white" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-blue-600 tracking-widest uppercase mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Projects I've built
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A selection of my recent work. Each project is crafted with attention to detail and best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-[4/3] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <div key={tag} className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-100 text-slate-600 hover:bg-slate-200 font-medium">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
