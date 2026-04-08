"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Mountain, Music, BookOpen, Code2 } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";

const hobbyIconMap: Record<string, React.ElementType> = {
  Mountain,
  Music,
  BookOpen,
  Code2,
};

const bookCoverUrl: Record<string, string> = {
  "Designing Data-Intensive Applications": "https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg",
  "The Psychology of Money":               "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg",
  "Rich Dad Poor Dad":                     "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg",
  "The Intelligent Investor":              "https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg",
  "Atomic Habits":                         "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
  "Clean Code":                            "https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",
  "The Millionaire Next Door":             "https://covers.openlibrary.org/b/isbn/9780671015206-L.jpg",
  "Think and Grow Rich":                   "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
};

function BookCard({ book, index }: { book: typeof profile.books[0]; index: number }) {
  const cover = bookCoverUrl[book.title] ?? "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
      className="group flex-shrink-0 w-[128px]"
    >
      {/* Cover */}
      <div
        className="relative overflow-hidden rounded-lg border border-c-subtle group-hover:border-violet-500/40 transition-all duration-300"
        style={{ height: 190, boxShadow: "0 6px 20px rgba(0,0,0,0.4)" }}
      >
        <div className="absolute inset-0 bg-surface-card">
          {cover ? (
            <Image src={cover} alt={book.title} fill className="object-cover" sizes="128px" unoptimized />
          ) : (
            <div className="absolute inset-0 bg-c-medium flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-c-faint" />
            </div>
          )}
        </div>
        {/* Subtle bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/60 to-transparent z-10" />
      </div>

      {/* Info below — always visible */}
      <div className="mt-2.5 space-y-1">
        <p className="text-c-primary text-[11px] font-semibold leading-tight line-clamp-2">{book.title}</p>
        <p className="text-c-faint text-[9px] font-mono">{book.author}</p>
        <p className="text-c-secondary text-[10px] leading-relaxed line-clamp-3 pt-0.5 italic">
          "{book.gist}"
        </p>
      </div>
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-28 px-6 bg-surface-0">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="// about.ts"
          title="Who I Am"
          description="Engineer by day, reader and trekker by choice"
        />

        {/* ── Row 1: Terminal card + personal bio ──────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-surface-card border border-c-subtle rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-c-subtle border-b border-c-subtle">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-c-faint font-mono">profile.go</span>
              </div>
              <div className="p-5 font-mono text-sm space-y-1 overflow-x-auto">
                <p className="text-c-faint">// About me</p>
                <p>
                  <span className="text-cyan-400">type</span>
                  <span className="text-violet-400"> Engineer </span>
                  <span className="text-c-secondary">struct {"{"}</span>
                </p>
                <div className="pl-4 space-y-1">
                  {[
                    ["Name",     `"${profile.name}"`],
                    ["Role",     `"${profile.role}"`],
                    ["Company",  `"Razorpay"`],
                    ["Location", `"${profile.location}"`],
                    ["Focus",    `{"Distributed Systems", "AI/LLMs"}`],
                    ["Reads",    `{"Finance", "Tech", "Psychology"}`],
                    ["Outside",  `{"Trekking", "Music", "CP"}`],
                  ].map(([key, val]) => (
                    <p key={key}>
                      <span className="text-emerald-400">{key}</span>
                      <span className="text-c-muted"> string </span>
                      <span className="text-c-veryfaint">= </span>
                      <span className="text-amber-300">{val}</span>
                    </p>
                  ))}
                </div>
                <p className="text-c-secondary">{"}"}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-c-muted mt-5">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-violet-400" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {profile.email}
              </span>
            </div>
          </motion.div>

          {/* Bio + hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {profile.bio.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="text-c-secondary leading-relaxed text-base"
              >
                {para}
              </motion.p>
            ))}

            {/* Hobbies */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              {profile.hobbies.map((h, i) => {
                const Icon = hobbyIconMap[h.icon] || BookOpen;
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="group p-4 bg-surface-card border border-c-subtle rounded-2xl hover:border-violet-500/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-violet-400" />
                      </div>
                      <span className="text-sm font-semibold text-c-primary">{h.label}</span>
                    </div>
                    <p className="text-[11px] text-c-faint leading-relaxed">{h.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* ── Bookshelf ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-violet-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-c-primary">My Bookshelf</p>
                <p className="text-xs text-c-faint font-mono">// books that shaped how I think</p>
              </div>
            </div>
            <p className="text-xs text-c-faint font-mono">{profile.books.length} books</p>
          </div>

          {/* Shelf */}
          <div className="relative">
            {/* Ambient glow behind shelf */}
            <div className="absolute inset-x-0 bottom-16 h-24 bg-gradient-to-t from-violet-500/5 to-transparent rounded-3xl pointer-events-none" />

            {/* Books row */}
            <div
              className="flex gap-4 overflow-x-auto pb-8 px-1"
              style={{ scrollbarWidth: "thin" }}
            >
              {profile.books.map((book, i) => (
                <BookCard key={book.title} book={book} index={i} />
              ))}
            </div>

            {/* Shelf plank */}
            <div className="relative h-3.5 mx-0 rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-cyan-500/40 to-emerald-500/30" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/20" />
            </div>
            {/* Shelf shadow */}
            <div className="h-2 mx-4 bg-black/30 blur-md rounded-full" />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
