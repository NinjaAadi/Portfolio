export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string | null;
  location: string;
  type: "Full-time" | "Internship" | "Contract" | "Freelance";
  description: string;
  impact: string[];
  technologies: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: "razorpay",
    company: "Razorpay",
    companyUrl: "https://razorpay.com",
    role: "Software Engineer",
    duration: "March 2025 – Present",
    startDate: "March 2025",
    endDate: null,
    location: "Bengaluru, India",
    type: "Full-time",
    description:
      "Building and scaling payment infrastructure at Razorpay — integrating new payment methods, hardening NPCI flows, and improving checkout reliability for merchants across India.",
    impact: [
      "Integrated Amazon Pay Later and Amazon Link & Pay Wallets using Golang, gRPC, and PostgreSQL, supporting 50K+ daily transactions with 99.9% success rate in production",
      "Worked on Kubernetes (K8s) infrastructure to onboard critical services like Tokens Service, contributing to ~3x traffic handling capacity and reducing service downtime by ~30%",
      "Designed and implemented a secure, event-driven NPCI callback system using Transactional Outbox and Kafka CDC, ensuring zero data loss and improving callback reliability from ~98.5% to 99.99%",
      "Developed NPCI integration layer with XML protocol validation, handling 100K+ requests/day and reducing integration failures by ~30–35% through robust validation and retry mechanisms",
      "Engineered offer systems for Air India including No-Cost EMI, Instant Discounts, and dynamic Haul-Type Offers, contributing to a ~12–15% increase in conversion rate during promotional campaigns",
      "Enhanced Razorpay Standard Checkout by implementing custom merchant address handling, reducing checkout failures by ~20% and improving merchant onboarding efficiency by ~25–30%",
    ],
    technologies: ["Go", "gRPC", "PostgreSQL", "Kafka", "Kubernetes", "AWS"],
    current: true,
  },
  {
    id: "moveinsync",
    company: "Moveinsync",
    companyUrl: "https://moveinsync.com",
    role: "Software Engineer",
    duration: "Nov 2024 – March 2025",
    startDate: "Nov 2024",
    endDate: "March 2025",
    location: "Bengaluru, India",
    type: "Full-time",
    description:
      "Owned payment microservice development for Moveinsync and Workinsync food booking modules, along with data migrations and Java version upgrades.",
    impact: [
      "Designed, implemented, and owned a scalable payment microservice for food booking for Moveinsync and Workinsync modules, enabling seamless integration with multiple payment gateways using Spring Boot, Kafka, Postgres, Elasticsearch, and Multithreading",
      "Refactored and migrated past booking data of Workinsync using Spring Boot, Bash scripts, and Postgres with database partitioning and sharding for 40% faster query performance",
      "Successfully migrated multiple services to the latest Java version, including comprehensive refactoring to enhance performance and maintainability",
    ],
    technologies: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Elasticsearch"],
    current: false,
  },
  {
    id: "nomura",
    company: "Nomura",
    companyUrl: "https://www.nomura.com",
    role: "Associate Software Engineer",
    duration: "August 2023 – Oct 2024",
    startDate: "August 2023",
    endDate: "Oct 2024",
    location: "Bengaluru, India",
    type: "Full-time",
    description:
      "Developed inter-service communication infrastructure, RESTful APIs, and reporting/audit services for Nomura's fintech platform.",
    impact: [
      "Developed a proxy service to implement message routing to multiple queues using Spring Boot, Apache Camel, ActiveMQ, and Postgres, enhancing the reliability and efficiency of inter-service communication",
      "Designed RESTful endpoints with Spring Boot to facilitate communication between microservices, and configured cache using Redis, improving microservices communication efficiency",
      "Created a reporting and audit service using Elasticsearch, ActiveMQ, and Spring Boot with multithreading for enhanced performance and scalability, enabling real-time message processing for audit logs and reports",
    ],
    technologies: ["Java", "Spring Boot", "Apache Camel", "ActiveMQ", "Redis", "Elasticsearch", "PostgreSQL"],
    current: false,
  },
  {
    id: "nomura-intern",
    company: "Nomura Fintech",
    companyUrl: "https://www.nomura.com",
    role: "Software Engineer Intern",
    duration: "Jan 2023 – July 2023",
    startDate: "Jan 2023",
    endDate: "July 2023",
    location: "Bengaluru, India",
    type: "Internship",
    description:
      "Improved service reliability and cross-platform compatibility for Nomura's fintech infrastructure.",
    impact: [
      "Improved client SLA from 80% to 99% during server redeployments using Redis, Docker, Bash, NGINX, and AWS",
      "Enabled cross-platform performance ensuring 100% compatibility for both Windows and Linux OS with automatic CI/CD integration using Jenkins",
    ],
    technologies: ["Java", "Redis", "Docker", "Bash", "NGINX", "AWS", "Jenkins"],
    current: false,
  },
  {
    id: "cognecto-intern",
    company: "Cognecto",
    role: "Software Engineer Intern",
    duration: "April 2022 – July 2022",
    startDate: "April 2022",
    endDate: "July 2022",
    location: "Remote",
    type: "Internship",
    description:
      "Developed cross-platform mobile features for an IoT fleet management dashboard.",
    impact: [
      "Developed fuel and report module of the web dashboard into a cross-platform mobile application using Flutter, Dart, and Rive, with features like QR code scanner, location detection, asset information charts, maps, and module data fetching",
      "Implemented in-app caching using SQLite for faster data rendering up to 35%",
    ],
    technologies: ["Flutter", "Dart", "Rive", "SQLite"],
    current: false,
  },
];
