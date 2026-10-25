import type { Project } from "@/types/content";

/**
 * Ordered to tell a deliberate engineering story:
 * agentic systems in production -> serious ML research -> AI product ->
 * fundamentals -> systems -> full stack.
 *
 * Every metric, technology, and link below is taken from the project brief
 * or from a public source. Where something is not publicly confirmed it is
 * omitted rather than guessed — note MuffinVoice, which carries no stack.
 */
export const projects: Project[] = [
  {
    id: "bfrb-gesture-detection",
    name: "BFRB Gesture Detection",
    title: "via Wrist Sensor Fusion",
    category: "Multimodal ML · Research",
    summary:
      "Multimodal deep learning that detects Body-Focused Repetitive Behaviors from wrist-worn sensors — 71% macro F1 across 18 gesture classes.",
    body: [
      "Detects nail biting, hair pulling, and other BFRBs from wrist sensors. Two encoders — temporal (inertial) and convolutional (spatial) — feed a gated fusion layer that learns which modality to trust at each timestep.",
      "Handles variable-length sequences up to 700 timesteps. Trained with mixed precision, cosine LR, and label smoothing for ambiguous gesture boundaries.",
    ],
    tags: ["ML", "COMPUTER VISION", "RESEARCH"],
    metrics: [
      { value: "8K+", label: "Sequences" },
      { value: "18", label: "Gesture classes" },
      { value: "71%", label: "Macro F1" },
      { value: "700", label: "Max timesteps" },
    ],
    capabilities: [
      "Dual-encoder multimodal architecture",
      "Gated cross-modal fusion between inertial and spatial streams",
      "Variable-length sequence handling up to 700 timesteps",
      "Mixed precision training with cosine LR scheduling",
      "Label smoothing for ambiguous gesture boundaries",
    ],
    tech: ["PyTorch", "Conv1D", "BiLSTM", "Transformer", "ResNet50"],
    links: [
      {
        label: "View the notebook",
        href: "https://www.kaggle.com/code/ryanferds/cmi-king-s-notebook/edit",
        external: true,
      },
    ],
    size: "wide",
  },

  {
    id: "ratemyresume",
    name: "RateMyResume",
    category: "AI Product · Full Stack",
    summary:
      "AI resume reviewer that parses any document and returns actionable feedback on clarity, structure, and impact.",
    body: [
      "Document processing first, prompting second. The pipeline survives whatever applicants upload, extracts structure faithfully, then hands clean text to the model.",
      "Python backend owns ingestion and analysis. Next.js frontend owns the review. Keeps latency interactive while model work runs server-side.",
    ],
    tags: ["FULL STACK", "BACKEND", "ML"],
    capabilities: [
      "AI-powered resume analysis with actionable feedback",
      "Document ingestion and text extraction",
      "Python backend APIs for the analysis pipeline",
      "Next.js frontend for the review experience",
    ],
    tech: ["Python", "Next.js", "LangChain", "LangGraph", "LangSmith"],
    links: [
      {
        label: "Visit RateMyResume",
        href: "https://www.ratemyresume.cc/",
        external: true,
      },
    ],
    size: "card",
  },

  {
    id: "vision-transformer",
    name: "Vision Transformer",
    title: "Built From Scratch",
    category: "Deep Learning · Fundamentals",
    summary:
      "Vision Transformer built from scratch in PyTorch — every layer hand-written, no external ViT library.",
    body: [
      "Every layer written directly: linear projection, layer norm, multi-head attention, patch embedding, positional encoding, encoder stack, head. Nothing hidden behind an import.",
      "If a shape is wrong, you find out — because you wrote the forward pass, not configured someone else's.",
    ],
    tags: ["ML", "RESEARCH"],
    capabilities: [
      "Custom linear layer and custom layer normalisation",
      "Multi-head self-attention implemented from scratch",
      "Patch embedding and positional encoding",
      "Transformer encoder blocks and a full forward pass",
    ],
    tech: ["PyTorch"],
    links: [
      {
        label: "Read the write-up",
        href: "https://medium.com/@ryanferds23/creating-my-own-vision-transformer-vit-from-scratch-207343f2e71a",
        external: true,
      },
    ],
    size: "card",
  },

  {
    id: "muffinvoice",
    name: "MuffinVoice",
    title: "Ebooks to audiobooks",
    category: "Systems Engineering · Pipeline",
    summary:
      "Complete text-to-speech pipeline that converts ebooks into audiobooks.",
    body: [
      "A file on disk becomes hours of audio. Every stage can quietly ruin the result: text extraction must preserve order, processing must fit long input to model limits, segmentation must land on natural boundaries — a mid-sentence split is immediately audible.",
      "The core challenge is orchestration: sequencing stages, carrying state, making a long job resumable.",
    ],
    tags: ["SYSTEM DESIGN", "BACKEND"],
    capabilities: [
      "Document ingestion and text extraction",
      "Text processing for long-form input",
      "TTS generation and audio processing",
      "Pipeline orchestration across stages",
    ],
    tech: [],
    links: [
      {
        label: "View the source",
        href: "https://github.com/RyanFernandes23/MuffinVoice",
        external: true,
      },
    ],
    size: "card",
  },

  {
    id: "crayna.com",
    name: "crayna.com AI receptionist for ServiceTrade",
    category: "Full Stack · Voice Agent",
    summary:
      "AI voice receptionist — full-stack app that answers and handles incoming calls for contractors using ServiceTrade FSM software.",
    tags: ["AI AGENT", "Twilio", "BACKEND"],
    body: [
      "Answers and handles incoming calls. The agent runs on Twilio for telephony and LiveKit for real-time media — reachable by voice and through the interface.",
      "Next.js frontend over a Python backend. Defined API layer owns the data and domain logic.",
    ],
    capabilities: [
      "Telephony and real-time voice agent built on Twilio and LiveKit",
      "Python backend APIs owning the domain logic",
      "Next.js frontend over a defined API layer",
      "Workflows designed around real-world operations",
    ],
    tech: ["Python", "Next.js", "Twilio", "LiveKit"],
    links: [
      {
        label: "Live Demo",
        href: "https://www.crayna.com/",
        external: true,
      },
      {
        label: "Backend",
        href: "https://github.com/RyanFernandes23/Pesto-for-fieldmotion-backend",
        external: true,
      },
    ],
    size: "card",
  },
];

/** Everything that is not the wide ML treatment. */
export const secondaryProjects = projects.filter((p) => p.size === "card");

export const wideProject = projects.find((p) => p.size === "wide")!;
