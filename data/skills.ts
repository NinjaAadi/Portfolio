export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  category: string;
  color: string;
  glowColor: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139,92,246,0.4)",
    icon: "Code2",
    skills: [
      { name: "Go", level: 90 },
      { name: "Java", level: 88 },
      { name: "C++", level: 82 },
      { name: "Kotlin", level: 72 },
    ],
  },
  {
    id: "frameworks",
    category: "Frameworks",
    color: "from-emerald-500 to-green-600",
    glowColor: "rgba(16,185,129,0.4)",
    icon: "Server",
    skills: [
      { name: "Spring Boot", level: 88 },
      { name: "gRPC / Protobuf", level: 85 },
      { name: "Express JS", level: 75 },
      { name: "React JS", level: 70 },
    ],
  },
  {
    id: "distributed",
    category: "Distributed Systems",
    color: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6,182,212,0.4)",
    icon: "Network",
    skills: [
      { name: "Apache Kafka", level: 90 },
      { name: "Redis", level: 85 },
      { name: "Elasticsearch", level: 82 },
      { name: "ActiveMQ", level: 78 },
      { name: "Microservices", level: 90 },
    ],
  },
  {
    id: "databases",
    category: "Databases",
    color: "from-orange-500 to-red-600",
    glowColor: "rgba(249,115,22,0.4)",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "SQLite", level: 72 },
    ],
  },
  {
    id: "cloud",
    category: "Cloud & DevOps",
    color: "from-yellow-500 to-amber-600",
    glowColor: "rgba(234,179,8,0.4)",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: 82 },
      { name: "GCP", level: 75 },
      { name: "Kubernetes", level: 80 },
      { name: "Docker", level: 88 },
      { name: "Git", level: 92 },
    ],
  },
  {
    id: "ai",
    category: "AI / ML",
    color: "from-pink-500 to-rose-600",
    glowColor: "rgba(236,72,153,0.4)",
    icon: "Brain",
    skills: [
      { name: "RAG Pipelines", level: 85 },
      { name: "LLMs (Ollama/Llama)", level: 82 },
      { name: "PyTorch / TFT", level: 78 },
      { name: "Sentence Transformers", level: 80 },
      { name: "Vector Search", level: 82 },
    ],
  },
];
