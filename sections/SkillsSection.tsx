"use client";

import { motion } from "framer-motion";
import {
  Code2, Network, Server, Cloud, Brain, Activity, Database,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";

const iconMap: Record<string, React.ElementType> = {
  Code2, Network, Server, Cloud, Brain, Activity, Database,
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="py-28 px-6 bg-surface-1">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="// skills.ts"
          title="Technical Arsenal"
          description="From Kafka event pipelines to RAG systems — tools I use to build at scale"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, catIndex) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-6 bg-surface-card border border-c-subtle rounded-2xl hover:border-c-strong transition-colors duration-300 overflow-hidden"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${cat.glowColor} 0%, transparent 60%)`,
                  }}
                />

                {/* Header */}
                <div className="relative flex items-center gap-3 mb-5">
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-4.5 h-4.5 text-white" size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-c-primary">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-c-faint">
                      {cat.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skills list */}
                <div className="relative space-y-3">
                  {cat.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.05 + i * 0.04 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-xs text-c-mid font-mono">
                          {skill.name}
                        </span>
                        <span className="text-xs text-c-faint font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 bg-c-medium rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIndex * 0.05 + i * 0.05,
                            ease: "easeOut",
                          }}
                          className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
