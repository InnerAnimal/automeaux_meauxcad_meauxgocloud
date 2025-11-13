'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Target,
  Users,
  TrendingUp,
  Award,
  GraduationCap,
  Star,
  Trophy,
  Heart,
  Zap,
  Shield,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2020',
      title: 'Founded Leadership Practice',
      description: 'Began coaching journey with focus on executive leadership',
    },
    {
      year: '2021',
      title: 'Expanded Services',
      description: 'Launched group mentorship and corporate programs',
    },
    {
      year: '2022',
      title: 'Community Growth',
      description: 'Built thriving network of 100+ leaders',
    },
    {
      year: '2023',
      title: 'Global Impact',
      description: 'Expanded reach to international clients',
    },
    {
      year: '2024',
      title: 'Innovation & Scale',
      description: 'Launched AI-powered leadership tools and analytics',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Integrity in all interactions',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Commitment to growth',
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'Excellence in service',
    },
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Authentic leadership',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Community empowerment',
    },
  ];

  const expertise = [
    { icon: Target, label: 'Executive Leadership', gradient: 'from-brand-cyan to-brand-cyan-dark' },
    { icon: Users, label: 'Team Development', gradient: 'from-brand-blue-electric to-brand-cyan' },
    { icon: Zap, label: 'Strategic Planning', gradient: 'from-success to-brand-cyan' },
    { icon: Heart, label: 'Personal Growth', gradient: 'from-warning to-brand-blue-electric' },
    { icon: Trophy, label: 'Legacy Building', gradient: 'from-error to-brand-cyan' },
  ];

  const credentials = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Advanced certifications in leadership development and coaching methodologies',
    },
    {
      icon: Star,
      title: 'Experience',
      description: 'Years of hands-on experience coaching leaders across diverse industries',
    },
    {
      icon: Trophy,
      title: 'Results',
      description: 'Proven track record of helping clients achieve breakthrough results',
    },
  ];

  return (
    <div className="min-h-screen bg-neural-dark">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark pt-32 pb-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #00B8E6 1px, transparent 1px),
                              linear-gradient(to bottom, #00B8E6 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="absolute top-20 -left-40 w-80 h-80 bg-brand-cyan opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-blue-electric opacity-20 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm font-medium text-brand-cyan">
                Building Leaders Who Create Lasting Impact
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About Connor Mcneely
            </h1>
            <p className="text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto">
              Dedicated leadership coach and mentor committed to empowering individuals to reach their full potential
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          <div className="lg:col-span-2">
            <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-8 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300">
              <h2 className="text-3xl font-bold text-white mb-4">My Story</h2>
              <p className="text-circuit-silver leading-relaxed mb-4">
                Connor Mcneely is a dedicated leadership coach and mentor committed to empowering individuals to reach their full potential. With a passion for developing leaders who create lasting legacies, Connor brings a unique blend of experience, insight, and practical wisdom to every coaching engagement.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-3">Philosophy</h3>
              <p className="text-circuit-silver leading-relaxed mb-4">
                True leadership isn't about authority—it's about influence, impact, and legacy. I believe that every individual has the capacity to lead in their own unique way, and my mission is to help you discover and develop that leadership potential.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-3">Approach</h3>
              <p className="text-circuit-silver leading-relaxed">
                My coaching approach is personalized, practical, and results-oriented. I combine proven leadership principles with innovative strategies to help you overcome challenges, maximize your strengths, and achieve your goals.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-4">Core Values</h4>
              <ul className="space-y-2">
                {values.map((value, index) => (
                  <motion.li
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-2 text-circuit-silver"
                  >
                    <value.icon className="w-5 h-5 text-brand-cyan" />
                    {value.description}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300">
              <h4 className="text-xl font-bold text-white mb-4">Expertise Areas</h4>
              <div className="space-y-3">
                {expertise.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${item.gradient}`}>
                      <item.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-circuit-silver text-sm">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Journey Timeline</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-brand-cyan via-brand-blue-electric to-brand-cyan opacity-30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-6 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300 inline-block">
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-circuit-silver text-sm">{item.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue-electric flex items-center justify-center shadow-glow-cyan">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Qualifications & Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-neural-slate/60 backdrop-blur-xl border border-circuit-silver/20 rounded-2xl p-8 hover:border-brand-cyan/50 hover:shadow-glow-cyan transition-all duration-300 text-center"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/0 to-brand-cyan/0 group-hover:from-brand-cyan/10 group-hover:to-transparent transition-all duration-300" />

                <div className="relative">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-cyan to-brand-blue-electric flex items-center justify-center shadow-glow-cyan">
                    <credential.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{credential.title}</h3>
                  <p className="text-circuit-silver leading-relaxed">{credential.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative bg-gradient-to-br from-brand-cyan to-brand-blue-electric rounded-2xl p-12 overflow-hidden text-center"
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-white/80 text-xl mb-8">
              Ready to take your leadership to the next level?
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-brand-cyan font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
