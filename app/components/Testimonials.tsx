"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The sound quality is absolutely incredible. I've never experienced audio this clear in headphones before.",
      author: "Sarah Chen",
      role: "Music Producer",
      avatar: "/testimonial1.jpg",
    },
    {
      quote: "SCOTT headphones have changed my daily commute. The ANC is phenomenal and the battery lasts forever.",
      author: "Marcus Johnson",
      role: "Software Engineer",
      avatar: "/testimonial2.jpg",
    },
    {
      quote: "I've tried every premium headphone brand, and SCOTT is hands down the best. Worth every penny.",
      author: "Emily Rodriguez",
      role: "Audio Enthusiast",
      avatar: "/testimonial3.jpg",
    },
    {
      quote: "The design is sleek, the performance is outstanding. These are the headphones I recommend to everyone.",
      author: "James Wilson",
      role: "Tech Reviewer",
      avatar: "/testimonial4.jpeg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            Loved by Thousands
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join our community of satisfied SCOTT users!.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-blue-700 transition-all"
            >
              {/* Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 + 0.2 }}
                className="flex gap-1 mb-4"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 + 0.3 + i * 0.05 }}
                    className="text-blue-600 text-lg"
                  >
                    ★
                  </motion.span>
                ))}
              </motion.div>

              {/* Quote */}
              <p className="text-white text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover bg-zinc-900 border border-zinc-800"
                />
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
