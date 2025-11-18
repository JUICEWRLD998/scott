"use client";

import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      name: "Active Noise Cancellation",
      description: "Immerse yourself in your music with industry-leading ANC technology.",
    },
    {
      name: "Transparency Mode",
      description: "Stay aware of your surroundings while still enjoying your audio.",
    },
    {
      name: "Touch Controls",
      description: "Intuitive tap and swipe gestures for seamless control.",
    },
    {
      name: "Spatial Audio",
      description: "Experience cinema-like 3D sound with dynamic head tracking.",
    },
    {
      name: "IP54 Water Resistant",
      description: "Built to withstand rain, sweat, and your active lifestyle.",
    },
    {
      name: "Fast Charging",
      description: "5 minutes of charging gives you 1 hour of playback.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Packed with Innovation
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every feature designed to enhance your audio experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="p-6 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-blue-700 transition-all hover:shadow-lg hover:shadow-blue-700/10"
            >
              <h3 className="text-lg font-bold text-white mb-2">{feature.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
