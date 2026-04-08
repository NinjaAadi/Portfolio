export interface Book {
  title: string;
  author: string;
  category: "finance" | "tech" | "psychology" | "business";
  gist: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  about: string;
  bio: string[];
  location: string;
  email: string;
  available: boolean;
  resumeUrl: string;
  highlights: string[];
  books: Book[];
  hobbies: { label: string; icon: string; description: string }[];
}

export const profile: Profile = {
  name: "Aaditya Pal",
  role: "Software Engineer",
  tagline: "Distributed Systems · Backend Engineering · AI/LLMs",
  about:
    "Software Engineer with 3+ years of experience building scalable distributed systems and AI-driven pipelines. Skilled in C++, Java, Golang, and Spring Boot, with hands-on experience designing high-availability, low-latency systems using Kafka, Redis, and SQL. Passionate about LLM applications, RAG pipelines, and vector search.",
  bio: [
    "I'm a software engineer based in Bengaluru who genuinely enjoys the craft of building things that scale. From integrating payment flows at Razorpay to shipping AI systems that reason over financial data — I care about the internals, the edge cases, and the reliability story.",
    "Outside of work I'm an avid reader across finance, technology, and human behaviour. I enjoy trekking into the hills when time allows, and music is almost always playing in the background when I code.",
    "I believe great engineering is equal parts curiosity and discipline — and I try to bring both to whatever I'm building.",
  ],
  location: "Bengaluru, India",
  email: "aadityapal.info@gmail.com",
  available: false,
  resumeUrl: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/resume.pdf`,
  highlights: [
    "Integrated Amazon Pay Later into Razorpay supporting 50K+ daily transactions at 99.9% success rate",
    "Designed event-driven NPCI callback system improving reliability from 98.5% to 99.99%",
    "Built AlphaMind — distributed AI system for stock prediction using TFT, RAG, and LLMs",
    "CodeChef 5-star (Rating 2077) — Global rank 52 among 15,000 participants",
    "LeetCode Knight (Rating 2048) — Global rank 207 among 10,000 participants in Weekly-255",
    "Codeforces Specialist (Rating 1420) — Top 3,200 in India",
    "Flipkart semi-finalist — qualified among 60,000 teams",
  ],
  books: [
    {
      title: "Designing Data-Intensive Applications",
      author: "Martin Kleppmann",
      category: "tech",
      gist: "The best system design education I've had. Changed how I think about consistency, replication, and the real cost of distributed state.",
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "finance",
      gist: "Wealth isn't about intelligence — it's about behaviour over time. This book rewired how I think about risk and patience.",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "finance",
      gist: "The book that first made me think about assets vs liabilities seriously. A mindset shift more than a financial plan.",
    },
    {
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      category: "finance",
      gist: "Margin of safety is everything. Graham taught me to separate investing from speculation — a lesson that applies to engineering too.",
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "psychology",
      gist: "Systems beat goals. Small compounding changes — whether in code quality or daily routines — create disproportionate results.",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      category: "tech",
      gist: "Code is read far more than it's written. This shaped my obsession with naming, small functions, and leaving code better than I found it.",
    },
    {
      title: "The Millionaire Next Door",
      author: "Thomas J. Stanley",
      category: "finance",
      gist: "Real wealth is quiet. Most millionaires live below their means — a counterintuitive but grounding lesson about building long-term wealth.",
    },
    {
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      category: "business",
      gist: "The mind is the starting point of all success. Hill distills lessons from hundreds of successful people into a repeatable framework for achievement.",
    },
  ],
  hobbies: [
    {
      label: "Trekking",
      icon: "Mountain",
      description: "Love disappearing into the hills — have trekked in the Western Ghats and Himalayas.",
    },
    {
      label: "Music",
      icon: "Music",
      description: "Almost always playing in the background — mostly lo-fi, indie, and classic rock.",
    },
    {
      label: "Reading",
      icon: "BookOpen",
      description: "Books across finance, distributed systems, psychology, and everything in between.",
    },
    {
      label: "Competitive Programming",
      icon: "Code2",
      description: "CodeChef 5-star, LeetCode Knight — problem solving keeps the mind sharp.",
    },
  ],
};
