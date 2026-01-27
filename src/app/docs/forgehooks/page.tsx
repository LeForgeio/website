import Link from "next/link";

export const metadata = {
  title: "ForgeHooks - LeForge",
  description: "Explore the full library of AI and compute plugins available in LeForge.",
};

const forgehooks = [
  {
    id: "llm",
    icon: "🤖",
    name: "LLM Service",
    description: "Chat completions, embeddings, and text generation via OpenAI-compatible API or local models like Ollama and LM Studio.",
    endpoints: [
      "POST /api/v1/llm/chat",
      "POST /api/v1/llm/completions",
      "POST /api/v1/llm/embeddings",
    ],
    tags: ["GPT-4", "Claude", "Ollama", "LM Studio"],
  },
  {
    id: "crypto",
    icon: "🔐",
    name: "Crypto Service",
    description: "Hashing (MD5, SHA-256/512), AES-GCM encryption/decryption, RSA key pairs, digital signatures, and UUID generation.",
    endpoints: [
      "POST /api/v1/crypto/hash",
      "POST /api/v1/crypto/encrypt",
      "POST /api/v1/crypto/decrypt",
      "POST /api/v1/crypto/sign",
      "GET /api/v1/crypto/uuid",
    ],
    tags: ["AES-256-GCM", "RSA", "SHA-256", "SHA-512"],
  },
  {
    id: "math",
    icon: "🔢",
    name: "Math Service",
    description: "Expression evaluation, statistics (mean, median, std dev, correlation), matrix operations, and financial calculations.",
    endpoints: [
      "POST /api/v1/math/evaluate",
      "POST /api/v1/math/statistics",
      "POST /api/v1/math/matrix",
    ],
    tags: ["NumPy", "Statistics", "Linear Algebra"],
  },
  {
    id: "pdf",
    icon: "📄",
    name: "PDF Service",
    description: "Generate PDFs from HTML/templates, merge multiple PDFs, split pages, extract text, and fill form fields.",
    endpoints: [
      "POST /api/v1/pdf/generate",
      "POST /api/v1/pdf/merge",
      "POST /api/v1/pdf/split",
      "POST /api/v1/pdf/extract-text",
    ],
    tags: ["Puppeteer", "PDF-lib", "HTML to PDF"],
  },
  {
    id: "ocr",
    icon: "👁️",
    name: "OCR Service",
    description: "Extract text from images and scanned documents using PaddleOCR and Tesseract with 100+ language support.",
    endpoints: [
      "POST /api/v1/ocr/extract",
      "POST /api/v1/ocr/detect",
    ],
    tags: ["PaddleOCR", "Tesseract", "Multi-language"],
  },
  {
    id: "image",
    icon: "🖼️",
    name: "Image Service",
    description: "Resize, crop, rotate, convert formats (JPEG, PNG, WebP, AVIF), optimize compression, and add watermarks.",
    endpoints: [
      "POST /api/v1/image/resize",
      "POST /api/v1/image/convert",
      "POST /api/v1/image/crop",
      "POST /api/v1/image/optimize",
    ],
    tags: ["Sharp", "WebP", "AVIF", "Optimization"],
  },
  {
    id: "vector",
    icon: "🔍",
    name: "Vector Service",
    description: "Vector similarity search using Qdrant for semantic search, RAG applications, and recommendation systems.",
    endpoints: [
      "POST /api/v1/vector/upsert",
      "POST /api/v1/vector/search",
      "DELETE /api/v1/vector/delete",
    ],
    tags: ["Qdrant", "Embeddings", "Semantic Search"],
  },
  {
    id: "data-transform",
    icon: "🔄",
    name: "Data Transform",
    description: "Convert between JSON, XML, CSV, and YAML. JSONPath queries, XML transformations, and schema validation.",
    endpoints: [
      "POST /api/v1/transform/json-to-xml",
      "POST /api/v1/transform/xml-to-json",
      "POST /api/v1/transform/csv-to-json",
      "POST /api/v1/transform/validate",
    ],
    tags: ["JSONPath", "XSLT", "CSV", "YAML"],
  },
];

export default function ForgeHooksPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">ForgeHooks</h1>
      <p className="text-xl text-muted mb-12">
        Pre-built microservices that add AI and compute capabilities to your workflows.
        Each ForgeHook is independently deployable, scalable, and fully documented.
      </p>

      <div className="space-y-8">
        {forgehooks.map((hook) => (
          <div
            key={hook.id}
            className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                {hook.icon}
              </div>
              <div className="flex-1">
                <Link
                  href={`/docs/forgehooks/${hook.id}`}
                  className="text-xl font-semibold hover:text-primary transition-colors"
                >
                  {hook.name}
                </Link>
                <p className="text-muted mt-1 mb-4">{hook.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {hook.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/5 px-2 py-1 rounded text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="bg-background-secondary rounded-lg p-3">
                  <p className="text-xs text-muted uppercase tracking-wide mb-2">Endpoints</p>
                  <div className="space-y-1">
                    {hook.endpoints.map((endpoint) => (
                      <code key={endpoint} className="block text-sm text-foreground">
                        {endpoint}
                      </code>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">🧪 Try in Sandbox</h2>
        <p className="text-muted mb-4">
          Test any ForgeHook API directly in your browser before integrating.
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
