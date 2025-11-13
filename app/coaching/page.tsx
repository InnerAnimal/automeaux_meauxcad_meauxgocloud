'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { User, Users as UsersIcon, Building2, Check, Sparkles, ArrowRight, Star } from 'lucide-react';

export default function Coaching() {
  const services = [
    {
      icon: User,
      title: '1-on-1 Coaching',
      description: 'Personalized coaching sessions focused on your unique goals, challenges, and growth areas.',
      features: [
        'Weekly or bi-weekly sessions',
        'Customized action plans',
        'Ongoing support and accountability',
        'Progress tracking and assessment',
      ],
      gradient: 'from-brand-cyan to-brand-cyan-dark',
      featured: false,
    },
    {
      icon: UsersIcon,
      title: 'Group Mentorship',
      description: 'Join a cohort of leaders for collaborative learning, shared experiences, and peer support.',
      features: [
        'Monthly group sessions',
        'Peer-to-peer learning',
        'Structured curriculum',
        'Community access',
      ],
      gradient: 'from-brand-blue-electric to-brand-cyan',
      featured: true,
    },
    {
      icon: Building2,
      title: 'Corporate Programs',
      description: 'Comprehensive leadership development programs designed for organizations.',
      features: [
        'Team workshops and training',
        'Leadership assessments',
        'Custom program design',
        'Executive coaching',
      ],
      gradient: 'from-success to-brand-cyan',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-neural-dark">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-neural-dark via-neural-slate to-neural-dark pt-32 pb-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #00B8E6 1px, transparent 1px), linear-gradient(to bottom, #00B8E6 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        <div className="absolute top-20 -left-40 w-80 h-80 bg-brand-cyan opacity-20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 -right-40 w-80 h-80 bg-brand-blue-electric opacity-20 rounded-full blur-3xl animate-pulse" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 mb-6">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              <span className="text-sm font-medium text-brand-cyan">Personalized Guidance</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">Coaching & Mentorship</h1>
            <p className="text-xl md:text-2xl text-circuit-silver max-w-3xl mx-auto">Unlock your leadership potential with expert guidance</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative group bg-neural-slate/60 backdrop-blur-xl border ${service.featured ? 'border-brand-cyan' : 'border-circuit-silver/20'} rounded-2xl p-8 hover:shadow-glow-cyan transition-all duration-300`}
            >
              {service.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-brand-cyan to-brand-blue-electric rounded-full">
                  <span className="text-white text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan/0 to-brand-cyan/0 group-hover:from-brand-cyan/10 group-hover:to-transparent transition-all duration-300" />

              <div className="relative">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-glow-cyan`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-circuit-silver mb-6">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                      <span className="text-circuit-silver text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-xl font-semibold ${
                      service.featured
                        ? 'bg-gradient-to-r from-brand-cyan to-brand-blue-electric text-white shadow-glow-cyan'
                        : 'border-2 border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/10'
                    } transition-all`}
                  >
                    {service.featured ? 'Get Started' : 'Learn More'}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative bg-gradient-to-br from-brand-cyan to-brand-blue-electric rounded-2xl p-12 overflow-hidden text-center"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
            }} />
          </div>
          <div className="relative">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Leadership?</h2>
            <p className="text-white/80 text-xl mb-8">Schedule a free consultation to discuss your goals</p>
            <Link href="/contact">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 rounded-xl bg-white text-brand-cyan font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
