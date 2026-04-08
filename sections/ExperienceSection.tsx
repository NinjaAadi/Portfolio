"use client";

import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, ExternalLink } from "lucide-react";
import { experiences } from "@/data/experience";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-28 px-6 bg-surface-0">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="// experience.ts"
          title="Work History"
          description="Building at scale with ownership and depth"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/40 via-cyan-500/20 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-6 hidden sm:flex items-center justify-center -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className={cn(
                      "w-4 h-4 rounded-full border-2 bg-surface-0",
                      exp.current
                        ? "border-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                        : "border-c-strong"
                    )}
                  />
                  {exp.current && (
                    <div className="absolute w-4 h-4 rounded-full bg-violet-500/30 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className="group p-6 bg-surface-card border border-c-subtle rounded-2xl hover:border-c-strong transition-colors duration-300">
                  {/* Card header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base font-semibold text-c-primary">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-3.5 h-3.5 text-violet-400" />
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span className="text-sm text-violet-400">{exp.company}</span>
                        )}
                        <span className="px-2 py-0.5 text-[10px] font-mono bg-c-subtle text-c-muted border border-c-subtle rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-xs text-c-muted font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-c-semi leading-relaxed mb-5">
                    {exp.description}
                  </p>

                  {/* Impact points */}
                  <div className="space-y-2 mb-5">
                    {exp.impact.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 + i * 0.04 }}
                        className="flex items-start gap-2.5 text-sm text-c-secondary"
                      >
                        <span className="text-violet-400 mt-0.5 shrink-0 font-mono text-xs">
                          →
                        </span>
                        {point}
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono text-c-muted bg-c-subtle border border-c-subtle rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
