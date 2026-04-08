"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, MapPin, Code2, Trophy } from "lucide-react";
import { socials } from "@/data/socials";
import { profile } from "@/data/profile";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";

const iconMap: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  Trophy,
};

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="py-28 px-6 bg-surface-1">
      <div className="max-w-4xl mx-auto overflow-hidden">
        <SectionHeader
          badge="// contact.ts"
          title="Let's Connect"
          description="Open to interesting conversations about distributed systems, AI, or great engineering challenges"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Message card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-surface-card border border-c-subtle rounded-2xl relative overflow-hidden"
          >
            {/* Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 blur-3xl pointer-events-none" />

            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg shadow-violet-500/30">
                <Mail className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-c-primary mb-3">
                Say Hello
              </h3>
              <p className="text-c-semi text-sm leading-relaxed mb-6">
                Whether you want to discuss distributed systems architecture,
                AI/LLM engineering, or geek out about Kafka — my inbox is open.
              </p>

              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-c-semi">{profile.location}</span>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors"
              >
                {profile.email}
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="mt-8 pt-6 border-t border-c-subtle">
                <p className="text-xs font-mono text-c-faint mb-1">
                  // availability
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-sm text-c-secondary">
                    Currently at Razorpay · Open to exploring senior roles
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {socials.map((social, i) => {
              const Icon = iconMap[social.icon] || Mail;
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target={social.platform !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.01 }}
                  className="group flex items-center gap-4 p-5 bg-surface-card border border-c-subtle rounded-2xl hover:border-c-strong transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-c-medium bg-c-subtle group-hover:scale-110 transition-transform"
                    style={{ color: social.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-c-primary">{social.platform}</p>
                    <p className="text-xs text-c-muted font-mono truncate">
                      {social.username}
                    </p>
                    <p className="text-xs text-c-faint truncate mt-0.5">
                      {social.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-c-veryfaint group-hover:text-c-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-c-subtle text-center"
        >
          <p className="text-xs text-c-veryfaint font-mono break-words">
            Built with Next.js · React Three Fiber · Framer Motion · TypeScript
          </p>
          <p className="text-xs text-c-ghost font-mono mt-1">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
