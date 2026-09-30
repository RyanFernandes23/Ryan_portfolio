import type { ExperienceEntry, Principle, SkillGroup, WritingEntry } from "@/types/content";

export const experience: ExperienceEntry[] = [
  {
    id: "aatmunn",
    organisation: "Aatmunn Software Development Center",
    role: "Associate Software Engineer",
    start: "July 2025",
    end: "June 2026",
    bullets: [
      "Built an AI-powered assistant capable of navigating and interacting with an application across 55+ screens.",
      "Implemented intelligent routing achieving 98.2% routing accuracy with response times under one second.",
      "Built an MCP server using FastMCP, exposing entity registration and CRUD operations as tools.",
      "Implemented conversation history and user-context management for consistent, context-aware interactions.",
    ],
    links: [
      {
        label: "Technical article",
        href: "https://dev.to/ryan_fernandes_fc52e09ac9/building-an-agentic-navigation-autonomous-execution-system-12fi",
        external: true,
      },
    ],
  },
  {
    id: "cybersafehaven",
    organisation: "CyberSafeHaven Technologies",
    role: "Software Developer Intern",
    start: "March 2025",
    end: "May 2025",
    bullets: [
      "Developed the Add Evidence feature for Cyberisk4Board.",
      "Improved phishing-domain detection by integrating GrayHat Warfare and DNSTwist.",
      "Refactored partner data storage in ThreatProwler from list-based JSON storage to Redis hash-based storage, enabling direct lookup by ID.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    items: ["Python", "C/C++", "MATLAB", "PostgreSQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "aiml",
    label: "AI / ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Transformers",
      "Deep Learning",
      "Computer Vision",
      "Time-Series Modeling",
      "Multimodal Learning",
    ],
  },
  {
    id: "ai-engineering",
    label: "AI Engineering",
    items: [
      "FastMCP",
      "MCP",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Agentic AI",
      "LLM Applications",
      "Tool Calling",
      "Context Management",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      "FastAPI",
      "Redis",
      "Celery",
      "asyncio",
      "WebSockets",
      "Async Programming",
      "API Design",
    ],
  },
  {
    id: "data",
    label: "Data",
    items: ["PySpark", "Pandas", "NumPy", "Data Processing"],
  },
  {
    id: "infrastructure",
    label: "Infrastructure / Tools",
    items: [
      "Docker",
      "Git",
      "GitHub",
      "CI/CD",
      "Grafana",
      "VS Code",
      "Jupyter",
      "Google Colab",
    ],
  },
];

export const writing: WritingEntry[] = [
  {
    id: "vit-from-scratch",
    title: "Creating My Own Vision Transformer (ViT) From Scratch",
    publication: "Medium",
    href: "https://medium.com/@ryanferds23/creating-my-own-vision-transformer-vit-from-scratch-207343f2e71a",
    blurb:
      "A walk through building attention, patch embeddings, and the encoder stack directly in PyTorch. A framework that hands you the block is exactly where understanding stops.",
  },
  {
    id: "agentic-navigation",
    title: "Building an Agentic Navigation & Autonomous Execution System",
    publication: "DEV",
    href: "https://dev.to/ryan_fernandes_fc52e09ac9/building-an-agentic-navigation-autonomous-execution-system-12fi",
    blurb:
      "How intent understanding, routing, and MCP tool calls combine into an agent that operates an application rather than describing what to click.",
  },
];

export const writingNote =
  "I do not only use AI frameworks. I like understanding and building the systems underneath them.";

export const principles: Principle[] = [
  {
    title: "Understand the system",
    body: "I like understanding what happens underneath the abstraction, not just calling the API.",
  },
  {
    title: "Build end-to-end",
    body: "From model and agent logic to APIs, infrastructure, and frontend, I enjoy owning the complete system.",
  },
  {
    title: "Measure what matters",
    body: "Latency, accuracy, reliability, and developer experience matter more than adding unnecessary complexity.",
  },
];
