export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "distributed" | "ai" | "infrastructure" | "backend" | "open-source";
  categoryLabel: string;
  accentColor: string;
  metrics?: string[];
}

export const projects: Project[] = [
  {
    id: "alphamind",
    title: "AlphaMind",
    description:
      "Distributed AI system for stock prediction and natural-language Q&A using a 3-microservice architecture with TFT, RAG, and LLMs.",
    longDescription:
      "AlphaMind is a distributed AI system built across three microservices (Scraper, Model, RAG). It implements a Temporal Fusion Transformer (TFT) for multi-horizon time-series forecasting with real-time feature pipelines, and a RAG pipeline backed by ChromaDB and Sentence Transformers for context-aware natural-language Q&A. LLM integration via Ollama/Llama uses dynamic context assembly and semantic search over vector embeddings, with a hybrid retrieval system combining live APIs and vector DB fallback.",
    techStack: ["FastAPI", "PyTorch", "TFT", "ChromaDB", "Sentence Transformers", "Ollama", "LLM", "RAG"],
    githubUrl: "https://github.com/NinjaAadi/AlphaMind",
    featured: true,
    category: "ai",
    categoryLabel: "AI / LLMs",
    accentColor: "#f472b6",
    metrics: ["3-microservice arch", "TFT forecasting", "RAG pipeline", "Semantic search"],
  },
  {
    id: "blogreader",
    title: "Blog Notifier",
    description:
      "Self-hosted engineering blog aggregator pulling from 270+ sources with instant Telegram notifications and a React PWA frontend.",
    longDescription:
      "Blog Notifier is a self-hosted aggregator that pulls the latest posts from 270+ engineering blog sources, stores them in a local SQLite database, and sends instant Telegram notifications for every new article. Features a React PWA with topic filters, full-text search, unread tracking, random-unread picker, and an in-app article reader. The FastAPI backend runs APScheduler jobs for auto-fetch every 5 hours and daily DB cleanup. Supports 18 topics including Big Tech, AI/ML, Cloud, and Fintech. Fully controllable via Telegram bot commands (/random, /fetch, /stats, /digest).",
    techStack: ["FastAPI", "Python", "React", "SQLite", "APScheduler", "Telegram Bot API", "Vite"],
    githubUrl: "https://github.com/NinjaAadi/BlogReader",
    featured: true,
    category: "backend",
    categoryLabel: "Backend",
    accentColor: "#22d3ee",
    metrics: ["270+ sources", "18 topics", "Telegram bot", "PWA"],
  },
  {
    id: "blockemerse",
    title: "BlockEmerse",
    description:
      "Blockchain-based web app for online purchases using NFTs for digital warranties and verification.",
    longDescription:
      "BlockEmerse is a blockchain-based web application for online purchases that uses NFTs for digital warranties and product verification. Abstracts blockchain complexity for end users and provides separate dashboards for customers and product owners with full CRUD functionality.",
    techStack: ["React JS", "Node JS", "MongoDB", "Solidity", "Infura", "Google Cloud"],
    githubUrl: "https://github.com/NinjaAadi/E-Commerce-Warranty-System",
    featured: false,
    category: "backend",
    categoryLabel: "Backend",
    accentColor: "#6366f1",
    metrics: ["NFT warranties", "Blockchain", "Dual dashboards"],
  },
  {
    id: "edse-api",
    title: "EDSE API",
    description:
      "RESTful API for educational institutes with notice upload, attendance, profile, and transport management with Redis caching.",
    longDescription:
      "EDSE API is a RESTful API built for educational institutes featuring notice upload, attendance tracking, profile management, and transport management. Achieved 50% faster data fetching through Redis caching and Node.js clustering.",
    techStack: ["Express JS", "Node JS", "MongoDB", "Redis", "Google Cloud"],
    githubUrl: "https://github.com/NinjaAadi/EDSE-Manager-API",
    featured: false,
    category: "backend",
    categoryLabel: "Backend",
    accentColor: "#4ade80",
    metrics: ["50% faster fetching", "Redis caching", "REST API"],
  },
  {
    id: "company-book",
    title: "Company Book",
    description:
      "Web app for storing and managing company details with filter search, CSV export, and employee management.",
    longDescription:
      "Company Book is a full-stack web application for storing and managing company details with filter search, CSV export, employee management, and data backup/restore. Includes an automated Windows PowerShell script to deploy and install the application across any Windows device.",
    techStack: ["Express JS", "React JS", "MySQL", "Node JS", "DigitalOcean"],
    githubUrl: "https://github.com/NinjaAadi/Company_book",
    featured: false,
    category: "backend",
    categoryLabel: "Backend",
    accentColor: "#fb923c",
    metrics: ["CSV export", "Auto-deploy script", "Data backup/restore"],
  },
];
