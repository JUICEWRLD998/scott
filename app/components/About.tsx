"use client";

import { motion } from "framer-motion";
import { Headphones, Battery, Bluetooth } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Engineered for Perfection
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            With over a decade of audio innovation, SCOTT represents the pinnacle of wireless headphone technology. Every detail matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Premium Sound',
              description: 'Precision-tuned 12mm drivers deliver immersive, crystal-clear audio with deep bass.',
              icon: Headphones,
            },
            {
              title: 'All-Day Battery',
              description: '8 hours of listening on a single charge.',
              icon: Battery,
            },
            {
              title: 'Seamless Connection',
              description: 'Advanced Bluetooth 5.3 technology ensures stable, low-latency connectivity with all devices.',
              icon: Bluetooth,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-700 transition-colors"
            >
              <item.icon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
