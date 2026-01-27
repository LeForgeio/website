import Link from "next/link";

export const metadata = {
  title: "Examples - LeForge",
  description: "Real-world workflow examples and patterns using LeForge.",
};

const examples = [
  {
    id: "chat-pdf",
    title: "Chat with PDF Documents",
    description: "Build a RAG pipeline that extracts text from PDFs, creates embeddings, and enables semantic Q&A.",
    difficulty: "Intermediate",
    forgehooks: ["PDF Service", "LLM Service", "Vector Service"],
    platform: "n8n",
    href: "/docs/examples/chat-pdf",
  },
  {
    id: "invoice-processing",
    title: "Automated Invoice Processing",
    description: "Extract data from invoice images using OCR, validate with math operations, and generate reports.",
    difficulty: "Beginner",
    forgehooks: ["OCR Service", "Math Service", "Data Transform"],
    platform: "Make",
    href: "/docs/examples/invoice-processing",
  },
  {
    id: "translation",
    title: "Document Translation Pipeline",
    description: "Translate documents between languages using LLM while preserving formatting.",
    difficulty: "Beginner",
    forgehooks: ["LLM Service", "PDF Service"],
    platform: "Power Automate",
    href: "/docs/examples/translation",
  },
  {
    id: "image-pipeline",
    title: "Bulk Image Processing",
    description: "Resize, convert, and optimize images in batch with automatic watermarking.",
    difficulty: "Beginner",
    forgehooks: ["Image Service"],
    platform: "Zapier",
    href: "/docs/examples/image-pipeline",
  },
  {
    id: "secure-data",
    title: "Secure Data Exchange",
    description: "Encrypt sensitive data before storage and decrypt on retrieval with audit logging.",
    difficulty: "Intermediate",
    forgehooks: ["Crypto Service", "Data Transform"],
    platform: "n8n",
    href: "/docs/examples/secure-data",
  },
  {
    id: "semantic-search",
    title: "Build a Semantic Search Engine",
    description: "Index documents with embeddings and enable natural language search across your knowledge base.",
    difficulty: "Advanced",
    forgehooks: ["LLM Service", "Vector Service", "PDF Service"],
    platform: "n8n",
    href: "/docs/examples/semantic-search",
  },
];

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-500/20 text-green-400",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Advanced: "bg-red-500/20 text-red-400",
};

export default function ExamplesPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Examples</h1>
      <p className="text-xl text-muted mb-12">
        Learn by example with real-world workflow patterns that showcase 
        LeForge&apos;s capabilities.
      </p>

      <div className="space-y-6">
        {examples.map((example) => (
          <Link
            key={example.id}
            href={example.href}
            className="block bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {example.title}
              </h2>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${difficultyColors[example.difficulty]}`}>
                  {example.difficulty}
                </span>
                <span className="bg-white/5 px-2 py-1 rounded text-xs text-muted">
                  {example.platform}
                </span>
              </div>
            </div>
            <p className="text-muted mb-4">{example.description}</p>
            <div className="flex flex-wrap gap-2">
              {example.forgehooks.map((hook) => (
                <span
                  key={hook}
                  className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                >
                  {hook}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">🧪 Try it yourself</h2>
        <p className="text-muted mb-4">
          Test ForgeHook APIs in the sandbox before building your workflow.
        </p>
        <Link
          href="/sandbox"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Open Sandbox →
        </Link>
      </div>
    </div>
  );
}
