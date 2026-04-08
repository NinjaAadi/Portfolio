"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink, MapPin, Code2 } from "lucide-react";
import { profile } from "@/data/profile";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene").then((m) => m.HeroScene),
  { ssr: false, loading: () => <div className="w-full h-full bg-transparent" /> }
);

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const TECH_STACK = ["Go", "Java", "Spring Boot", "Kafka", "Kubernetes", "AI / RAG"];

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const delay = deleting
      ? Math.max(30, speed / 2)
      : charIdx === word.length
      ? pause
      : speed;

    const timer = setTimeout(() => {
      if (!deleting && charIdx < word.length) {
        setDisplayed(word.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      } else if (!deleting && charIdx === word.length) {
        setDeleting(true);
      } else if (deleting && charIdx > 0) {
        setDisplayed(word.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      } else {
        setDeleting(false);
        setWordIdx((w) => (w + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return displayed;
}

const TICKER_ITEMS = [
  "Razorpay · Payments Infrastructure",
  "Kafka · Event-Driven Systems",
  "Golang · gRPC · PostgreSQL",
  "Spring Boot · Microservices",
  "RAG Pipelines · LLMs",
  "CodeChef 5★ · LeetCode Knight",
  "Trekking · Western Ghats",
  "DDIA · Psychology of Money",
  "Kubernetes · Docker",
  "AlphaMind · TFT Forecasting",
];

const ROLES = [
  "Backend Engineer",
  "Distributed Systems",
  "Payment Infrastructure",
  "AI / LLM Systems",
];


export function HeroSection() {
  const currentRole = useTypewriter(ROLES, 70, 2200);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-surface-0">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <HeroScene className="w-full h-full" />
      </div>

      {/* Radial gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 60%, transparent 0%, var(--surface-0) 80%)",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-20 grid-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex flex-wrap justify-center items-center gap-x-2.5 gap-y-1.5 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs sm:text-sm font-mono mb-8 max-w-full"
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-violet-400" />
            Razorpay · Bengaluru
          </span>
          <span className="w-px h-3.5 bg-violet-500/30" />
          <span className="flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            3+ yrs experience
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-c-primary">{profile.name.split(" ")[0]} </span>
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient-x">
            {profile.name.split(" ")[1]}
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-c-muted font-mono mb-4 h-8"
        >
          &lt;
          <span className="text-violet-400">{currentRole}</span>
          <span className="typewriter-cursor" />
          &gt;
        </motion.div>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-c-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* Tech pills */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {TECH_STACK.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono text-c-muted bg-c-subtle border border-c-subtle rounded-full hover:border-violet-500/30 hover:text-violet-400 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium rounded-xl hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-violet-500/25"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group flex items-center gap-2.5 px-6 py-3 bg-c-subtle text-c-secondary font-medium rounded-xl border border-c-subtle hover:bg-c-medium hover:text-c-primary hover:scale-105 transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            View Projects
          </button>
        </motion.div>
      </div>

      {/* Highlight ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-24 left-0 right-0 z-10 overflow-hidden pointer-events-none"
      >
        <div className="flex gap-8 animate-[ticker_30s_linear_infinite] whitespace-nowrap w-max">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-xs font-mono text-c-faint px-3">
              <span className="text-violet-400/60">◆</span>
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-c-faint hover:text-c-secondary transition-colors"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </section>
  );
}
