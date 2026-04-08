"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/shared/SectionWrapper";

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  type: "source" | "service" | "store" | "sink" | "external";
  color: string;
}

interface Edge {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
}

interface Diagram {
  id: string;
  title: string;
  description: string;
  nodes: Node[];
  edges: Edge[];
}

const diagrams: Diagram[] = [
  {
    id: "npci",
    title: "NPCI Callback System",
    description: "Secure event-driven NPCI callback system using Transactional Outbox and Kafka CDC — improved reliability from 98.5% to 99.99%",
    nodes: [
      { id: "npci", label: "NPCI\nGateway", x: 50, y: 160, type: "external", color: "#f472b6" },
      { id: "api", label: "Callback\nAPI", x: 190, y: 160, type: "service", color: "#6366f1" },
      { id: "outbox", label: "Transactional\nOutbox (PG)", x: 340, y: 100, type: "store", color: "#4ade80" },
      { id: "cdc", label: "Kafka CDC\n(Debezium)", x: 500, y: 100, type: "service", color: "#22d3ee" },
      { id: "kafka", label: "Kafka\nTopic", x: 500, y: 220, type: "service", color: "#22d3ee" },
      { id: "consumer", label: "Callback\nConsumer", x: 640, y: 160, type: "service", color: "#a78bfa" },
      { id: "pg", label: "PostgreSQL\n(Ledger)", x: 640, y: 280, type: "store", color: "#4ade80" },
      { id: "dlq", label: "Dead Letter\nQueue", x: 640, y: 50, type: "store", color: "#f87171" },
    ],
    edges: [
      { from: "npci", to: "api" },
      { from: "api", to: "outbox", label: "write" },
      { from: "outbox", to: "cdc", label: "CDC poll" },
      { from: "cdc", to: "kafka" },
      { from: "kafka", to: "consumer" },
      { from: "consumer", to: "pg", label: "commit" },
      { from: "consumer", to: "dlq", dashed: true, label: "retry fail" },
    ],
  },
  {
    id: "alphamind",
    title: "AlphaMind RAG Pipeline",
    description: "Distributed AI system for stock Q&A using 3-microservice architecture with TFT forecasting and vector retrieval",
    nodes: [
      { id: "user", label: "User\nQuery", x: 50, y: 160, type: "source", color: "#6366f1" },
      { id: "router", label: "Query\nRouter", x: 180, y: 160, type: "service", color: "#22d3ee" },
      { id: "scraper", label: "Scraper\nService", x: 310, y: 80, type: "service", color: "#a78bfa" },
      { id: "embed", label: "Sentence\nTransformers", x: 310, y: 220, type: "service", color: "#a78bfa" },
      { id: "tft", label: "TFT Model\n(PyTorch)", x: 450, y: 80, type: "service", color: "#f472b6" },
      { id: "chromadb", label: "ChromaDB\n(Vector DB)", x: 450, y: 220, type: "store", color: "#4ade80" },
      { id: "llm", label: "LLM\n(Ollama/Llama)", x: 590, y: 160, type: "service", color: "#6366f1" },
      { id: "response", label: "Streaming\nResponse", x: 710, y: 160, type: "sink", color: "#fb923c" },
    ],
    edges: [
      { from: "user", to: "router" },
      { from: "router", to: "scraper", label: "live data" },
      { from: "router", to: "embed", label: "query" },
      { from: "scraper", to: "tft" },
      { from: "embed", to: "chromadb", label: "vector" },
      { from: "tft", to: "llm", label: "forecast" },
      { from: "chromadb", to: "llm", label: "context" },
      { from: "llm", to: "response" },
    ],
  },
  {
    id: "payment",
    title: "Payment Microservice",
    description: "Scalable food booking payment microservice built at Moveinsync with multiple gateway support",
    nodes: [
      { id: "client", label: "Client\nApp", x: 50, y: 160, type: "external", color: "#f472b6" },
      { id: "api", label: "Payment\nService", x: 190, y: 160, type: "service", color: "#6366f1" },
      { id: "kafka", label: "Kafka\nStream", x: 330, y: 100, type: "service", color: "#22d3ee" },
      { id: "pg", label: "PostgreSQL\n(Orders)", x: 330, y: 220, type: "store", color: "#4ade80" },
      { id: "es", label: "Elasticsearch\n(Search)", x: 470, y: 160, type: "store", color: "#4ade80" },
      { id: "gw1", label: "Gateway A\n(Razorpay)", x: 610, y: 80, type: "sink", color: "#fb923c" },
      { id: "gw2", label: "Gateway B\n(Paytm)", x: 610, y: 240, type: "sink", color: "#fb923c" },
    ],
    edges: [
      { from: "client", to: "api" },
      { from: "api", to: "kafka", label: "event" },
      { from: "api", to: "pg", label: "write" },
      { from: "pg", to: "es", dashed: true, label: "index" },
      { from: "kafka", to: "gw1" },
      { from: "kafka", to: "gw2" },
    ],
  },
];

const typeColors: Record<string, string> = {
  source: "border-violet-500/50 bg-violet-500/10",
  service: "border-cyan-500/50 bg-cyan-500/10",
  store: "border-emerald-500/50 bg-emerald-500/10",
  sink: "border-orange-500/50 bg-orange-500/10",
  external: "border-pink-500/50 bg-pink-500/10",
};

function DiagramView({ diagram }: { diagram: Diagram }) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const nodeSize = { w: 90, h: 52 };

  const getNodeCenter = (id: string) => {
    const n = diagram.nodes.find((x) => x.id === id);
    if (!n) return { x: 0, y: 0 };
    return { x: n.x + nodeSize.w / 2, y: n.y + nodeSize.h / 2 };
  };

  return (
    <div className="relative overflow-x-auto">
      <svg
        width="780"
        height="380"
        className="w-full min-w-[480px]"
        style={{ maxHeight: "380px" }}
      >
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="rgba(99,102,241,0.6)" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {diagram.edges.map((edge, i) => {
          const from = getNodeCenter(edge.from);
          const to = getNodeCenter(edge.to);
          const mx = (from.x + to.x) / 2;
          const my = (from.y + to.y) / 2;
          const isActive = hoveredNode === edge.from || hoveredNode === edge.to;

          return (
            <g key={i}>
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={isActive ? "rgba(99,102,241,0.8)" : "rgba(150,150,180,0.25)"}
                strokeWidth={isActive ? "2" : "1"}
                strokeDasharray={edge.dashed ? "5,4" : undefined}
                markerEnd="url(#arrow)"
                style={{ transition: "all 0.2s" }}
              />
              {edge.label && (
                <text
                  x={mx}
                  y={my - 5}
                  fill="rgba(150,150,200,0.5)"
                  fontSize="9"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  {edge.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {diagram.nodes.map((node) => {
          const isHovered = hoveredNode === node.id;
          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: "pointer" }}
              filter={isHovered ? "url(#glow)" : undefined}
            >
              <rect
                width={nodeSize.w}
                height={nodeSize.h}
                rx="8"
                fill={isHovered ? `${node.color}25` : "var(--surface-card)"}
                stroke={node.color}
                strokeOpacity={isHovered ? 0.9 : 0.4}
                strokeWidth={isHovered ? 1.5 : 1}
                style={{ transition: "all 0.2s" }}
              />
              {node.label.split("\n").map((line, i) => (
                <text
                  key={i}
                  x={nodeSize.w / 2}
                  y={nodeSize.h / 2 + (i - (node.label.split("\n").length - 1) / 2) * 13}
                  fill={isHovered ? node.color : "rgba(var(--color-text) / 0.65)"}
                  fontSize="10"
                  fontFamily="monospace"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  style={{ transition: "all 0.2s", fill: isHovered ? node.color : undefined }}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function SystemDesignSection() {
  const [active, setActive] = useState(diagrams[0].id);
  const currentDiagram = diagrams.find((d) => d.id === active)!;

  return (
    <SectionWrapper id="system-design" className="py-28 px-6 bg-surface-0">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          badge="// system_design.go"
          title="System Design"
          description="Visual architecture of systems I've designed and built"
        />

        {/* Tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-8">
          {diagrams.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                active === d.id
                  ? "text-white bg-violet-500/20 border border-violet-500/40"
                  : "text-c-muted hover:text-c-secondary border border-c-subtle hover:border-c-medium"
              }`}
            >
              {d.title.split(" ").slice(0, 2).join(" ")}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-surface-card border border-c-subtle rounded-2xl overflow-hidden"
          >
            <div className="mb-5">
              <h3 className="text-base font-semibold text-c-primary mb-1">
                {currentDiagram.title}
              </h3>
              <p className="text-sm text-c-muted">{currentDiagram.description}</p>
            </div>

            <DiagramView diagram={currentDiagram} />

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-c-subtle">
              {Object.entries({
                source: "Source",
                service: "Service",
                store: "Storage",
                sink: "Output",
                external: "External",
              }).map(([type, label]) => (
                <div key={type} className="flex items-center gap-1.5">
                  <div className={`w-3 h-3 rounded border ${typeColors[type]}`} />
                  <span className="text-xs text-c-faint font-mono">{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-1.5">
                <div className="w-6 h-px border-t border-dashed border-c-medium" />
                <span className="text-xs text-c-faint font-mono">async</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
