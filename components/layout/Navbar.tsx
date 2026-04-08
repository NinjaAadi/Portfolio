"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "About",         href: "#about" },
  { label: "Skills",        href: "#skills" },
  { label: "Experience",    href: "#experience" },
  { label: "Projects",      href: "#projects" },
  { label: "System Design", href: "#system-design" },
  { label: "Contact",       href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setSection] = useState("");
  const [mounted, setMounted]       = useState(false);
  const { theme, setTheme }         = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => { if (window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setSection(e.target.id); }),
      { threshold: 0.4 }
    );
    navLinks.forEach(({ href }) => { const el = document.querySelector(href); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo    = (href: string) => { document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); setMobileOpen(false); };
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const isLight     = mounted && theme === "light";

  // Adapt text colors based on theme and scroll state
  const onLight = isLight && (isScrolled || !isScrolled); // light mode always needs dark text
  const textPrimary    = isLight ? "text-gray-900"       : "text-white";
  const textSecondary  = isLight ? "text-gray-600"       : "text-white/55";
  const textHover      = isLight ? "hover:text-gray-900" : "hover:text-white/85";
  const activeText     = isLight ? "text-violet-700"     : "text-white";
  const activePill     = isLight ? "bg-violet-100"       : "bg-white/10";
  const hamburgerColor = isLight ? "text-gray-700 hover:text-gray-900" : "text-white/60 hover:text-white/90";
  void onLight;

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-3 left-0 right-0 mx-auto z-50 transition-all duration-300 rounded-2xl px-4 py-2.5 flex items-center max-w-5xl w-[calc(100%-2rem)] sm:w-[95%] backdrop-blur-xl border ${
          isScrolled
            ? "bg-surface-nav border-violet-500/20 shadow-lg shadow-black/30"
            : isLight
              ? "bg-white/60 border-black/10 shadow-md shadow-black/5"
              : "bg-white/5 border-white/12 shadow-md shadow-black/30"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 font-semibold text-sm shrink-0 group"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-violet-500/30">
            <Terminal className="w-3.5 h-3.5 text-white" />
          </div>
          <span className={`hidden sm:block font-mono tracking-wide transition-colors ${textPrimary}`}>
            {profile.name.split(" ")[0].toLowerCase()}.dev
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => scrollTo(href)}
              className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                activeSection === href.slice(1)
                  ? activeText
                  : `${textSecondary} ${textHover}`
              }`}
            >
              {activeSection === href.slice(1) && (
                <motion.div
                  layoutId="active-pill"
                  className={`absolute inset-0 ${activePill} rounded-lg`}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{label}</span>
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Theme toggle */}
          <button
            onClick={mounted ? toggleTheme : undefined}
            title={isLight ? "Switch to dark mode" : "Switch to light mode"}
            className="relative flex items-center justify-center w-9 h-9 rounded-xl border-2 border-violet-500/50 bg-violet-500/15 hover:bg-violet-500/25 hover:border-violet-400/70 transition-all duration-200 shadow-md shadow-violet-500/20"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mounted ? (isLight ? "sun" : "moon") : "moon"}
                initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                exit={{    rotate:  90, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.18 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {mounted && isLight
                  ? <Sun  className="w-4 h-4 text-amber-500" />
                  : <Moon className="w-4 h-4 text-violet-300" />
                }
              </motion.span>
            </AnimatePresence>
          </button>

          {/* Resume CTA */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block px-3.5 py-1.5 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-lg hover:opacity-90 transition-opacity shadow-md shadow-violet-500/20"
          >
            Resume
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${hamburgerColor}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{    rotate:  90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-surface-card border-l border-c-subtle flex flex-col md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-5 border-b border-c-subtle">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
                    <Terminal className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="font-mono text-sm font-semibold text-c-primary tracking-wide">
                    {profile.name.split(" ")[0].toLowerCase()}.dev
                  </span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-lg text-c-muted hover:text-c-secondary hover:bg-c-medium transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navLinks.map(({ label, href }, i) => (
                  <motion.button
                    key={href}
                    onClick={() => scrollTo(href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 flex items-center gap-3 ${
                      activeSection === href.slice(1)
                        ? "bg-violet-500/15 text-violet-500 border border-violet-500/25"
                        : "text-c-secondary hover:text-c-primary hover:bg-c-subtle border border-transparent"
                    }`}
                  >
                    <span className="font-mono text-xs text-violet-400/60">{String(i + 1).padStart(2, "0")}</span>
                    {label}
                  </motion.button>
                ))}
              </nav>

              <div className="p-4 border-t border-c-subtle space-y-3">
                <button
                  onClick={mounted ? toggleTheme : undefined}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-sm rounded-xl border border-c-subtle bg-c-subtle hover:bg-c-medium text-c-secondary transition-all"
                >
                  {mounted && isLight
                    ? <Sun  className="w-4 h-4 text-amber-500" />
                    : <Moon className="w-4 h-4 text-violet-400" />
                  }
                  {mounted && isLight ? "Switch to Dark" : "Switch to Light"}
                </button>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-xl hover:opacity-90 transition-opacity"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
