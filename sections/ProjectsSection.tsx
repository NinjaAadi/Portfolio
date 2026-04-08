"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative flex flex-col p-6 bg-surface-card border border-c-subtle rounded-2xl hover:border-c-strong transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={() => onOpen(project)}
    >
      {/* Accent glow top */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(ellipse at top, ${project.accentColor}15 0%, transparent 60%)`,
        }}
      />

      {/* Category badge */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="px-2.5 py-1 text-xs font-mono rounded-full border"
          style={{
            color: project.accentColor,
            borderColor: `${project.accentColor}40`,
            backgroundColor: `${project.accentColor}10`,
          }}
        >
          {project.categoryLabel}
        </span>
        {project.featured && (
          <span className="px-2 py-0.5 text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-c-primary mb-2 group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-c-semi leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      {/* Metrics */}
      {project.metrics && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="px-2 py-0.5 text-[10px] font-mono text-c-muted bg-c-subtle border border-c-subtle rounded-md"
            >
              {m}
            </span>
          ))}
        </div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[11px] font-mono text-c-muted bg-c-subtle border border-c-subtle rounded"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 4 && (
          <span className="px-2 py-0.5 text-[11px] font-mono text-c-faint">
            +{project.techStack.length - 4}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-c-subtle">
        <button className="flex items-center gap-1 text-xs text-c-muted hover:text-c-secondary transition-colors font-mono">
          View details <ChevronRight className="w-3 h-3" />
        </button>
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-c-faint hover:text-c-secondary transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-c-faint hover:text-c-secondary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-surface-card border border-c-strong rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-c-muted hover:text-c-primary transition-colors rounded-lg hover:bg-c-subtle"
        >
          <X className="w-4 h-4" />
        </button>

        <span
          className="inline-block px-2.5 py-1 text-xs font-mono rounded-full border mb-4"
          style={{
            color: project.accentColor,
            borderColor: `${project.accentColor}40`,
            backgroundColor: `${project.accentColor}10`,
          }}
        >
          {project.categoryLabel}
        </span>

        <h2 className="text-2xl font-bold text-c-primary mb-3">{project.title}</h2>
        <p className="text-c-secondary leading-relaxed mb-6">{project.longDescription}</p>

        {project.metrics && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="px-3 py-1 text-xs font-mono border rounded-lg"
                style={{
                  color: project.accentColor,
                  borderColor: `${project.accentColor}30`,
                  backgroundColor: `${project.accentColor}08`,
                }}
              >
                {m}
              </span>
            ))}
          </div>
        )}

        <div className="mb-6">
          <p className="text-xs text-c-faint font-mono mb-3">// tech_stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono text-c-semi bg-c-subtle border border-c-subtle rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-c-subtle text-c-mid border border-c-subtle rounded-xl hover:bg-c-medium transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl hover:opacity-90 transition-opacity text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="py-28 px-6 bg-surface-1">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="// projects.ts"
          title="Things I've Built"
          description="Personal projects, open source tools, and AI-powered experiments"
        />

        {/* Featured */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />
          ))}
        </div>

        {/* Rest */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
