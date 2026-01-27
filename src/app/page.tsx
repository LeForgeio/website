import Link from "next/link";
import ConstructionGate from "@/components/ConstructionGate";

const forgeHooks = [
  { icon: "🤖", name: "LLM Service", desc: "Chat completions, embeddings via OpenAI API or local models like Ollama", tags: ["GPT-4", "Ollama", "Claude"] },
  { icon: "🔐", name: "Crypto Service", desc: "Hashing, AES encryption, RSA keys, digital signatures, UUID generation", tags: ["AES-256", "RSA", "SHA"] },
  { icon: "🔢", name: "Math Service", desc: "Expression evaluation, statistics, matrix operations, financial calculations", tags: ["NumPy", "Statistics"] },
  { icon: "📄", name: "PDF Service", desc: "Generate from HTML, merge, split, extract text, fill forms", tags: ["Puppeteer", "PDF-lib"] },
  { icon: "👁️", name: "OCR Service", desc: "Extract text from images using PaddleOCR and Tesseract", tags: ["PaddleOCR", "Tesseract"] },
  { icon: "🖼️", name: "Image Service", desc: "Resize, crop, convert formats, optimize compression", tags: ["Sharp", "WebP"] },
  { icon: "🔍", name: "Vector Service", desc: "Vector similarity search using Qdrant for RAG apps", tags: ["Qdrant", "Embeddings"] },
  { icon: "🔄", name: "Data Transform", desc: "Convert JSON, XML, CSV, YAML with queries and validation", tags: ["JSONPath", "XSLT"] },
];

const platforms = [
  { icon: "🔄", name: "n8n", desc: "Community nodes" },
  { icon: "⚙️", name: "Make", desc: "Custom modules" },
  { icon: "⚡", name: "Power Automate", desc: "Custom connectors" },
  { icon: "🔗", name: "Zapier", desc: "Private app" },
  { icon: "🎫", name: "ServiceNow", desc: "Flow Designer" },
  { icon: "💡", name: "Any HTTP", desc: "REST API" },
];

const features = [
  { icon: "🏠", title: "100% Self-Hosted", desc: "Your data never leaves your infrastructure. Deploy on-premise or your own cloud." },
  { icon: "🔒", title: "Secure by Default", desc: "API key auth, CORS protection, rate limiting, input validation on all endpoints." },
  { icon: "📈", title: "Horizontally Scalable", desc: "Each ForgeHook scales independently. Run one instance or hundreds with K8s." },
  { icon: "📊", title: "Observable", desc: "Prometheus metrics, structured JSON logging, request tracing across all services." },
  { icon: "🔌", title: "API Gateway", desc: "Kong Gateway handles routing, authentication, rate limiting, and caching." },
  { icon: "📚", title: "Well Documented", desc: "OpenAPI specs, SDK documentation, and examples for every ForgeHook." },
];

export default function Home() {
  return (
    <ConstructionGate>
    <div>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.15)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 mb-6">
            🏠 100% Self-Hosted • Open Source
          </span>
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Supercharge Your Workflows<br />
            with <span className="text-primary">AI & Compute</span>
          </h1>
          
          <p className="text-xl text-muted max-w-2xl mx-auto mb-10">
            LeForge extends n8n, Make, Power Automate, and Zapier with powerful AI, cryptography, math, and data processing capabilities. Deploy on your own infrastructure.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="/docs/getting-started" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5 flex items-center gap-2">
              Get Started Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/docs" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Documentation
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-4 text-muted">
            <span>Works with:</span>
            <div className="flex gap-4 text-2xl">
              <span title="n8n">🔄</span>
              <span title="Make">⚙️</span>
              <span title="Power Automate">⚡</span>
              <span title="Zapier">🔗</span>
              <span title="ServiceNow">🎫</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-border bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24">
          {[
            { value: "15+", label: "ForgeHook Plugins" },
            { value: "6+", label: "Platform Integrations" },
            { value: "100%", label: "Self-Hosted" },
            { value: "MIT", label: "Open Source License" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-bold text-primary">{item.value}</div>
              <div className="text-sm text-muted">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ForgeHooks Section */}
      <section className="py-24" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ForgeHook Plugin Library</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Ready-to-use microservices that plug into your workflows. Each ForgeHook is independently deployable and scalable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forgeHooks.map((hook) => (
              <div key={hook.name} className="bg-card border border-border rounded-2xl p-6 hover:border-primary hover:-translate-y-1 transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl mb-4">
                  {hook.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{hook.name}</h3>
                <p className="text-muted text-sm mb-4">{hook.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {hook.tags.map((tag) => (
                    <span key={tag} className="bg-white/5 px-2 py-1 rounded text-xs text-muted">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="https://github.com/LeForgeio/registry" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2">
              Browse All ForgeHooks →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Up and Running in Minutes</h2>
            <p className="text-muted text-lg">Deploy once, use everywhere.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { num: "1", title: "Deploy with Docker", desc: "Single command deployment. docker-compose up and you're running all services with Kong API Gateway." },
              { num: "2", title: "Install Platform Nodes", desc: "Add LeForge nodes to n8n, Make modules, or configure webhooks in Power Automate and Zapier." },
              { num: "3", title: "Build Powerful Workflows", desc: "Combine AI, data processing, and automation. Your workflows now have compute superpowers." },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24" id="platforms">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Native Platform Integrations</h2>
            <p className="text-muted text-lg">Pre-built nodes and modules for popular workflow automation platforms.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary transition-colors">
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="font-semibold mb-1">{platform.name}</h3>
                <p className="text-muted text-sm">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-background-secondary" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Built for Production</h2>
            <p className="text-muted text-lg">Enterprise-ready features out of the box.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-muted text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(124,58,237,0.1)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Supercharge Your Workflows?</h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-10">
            Join developers building smarter automations with LeForge. Free and open source forever.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/docs/getting-started" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5 flex items-center gap-2">
              Get Started Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="https://github.com/LeForgeio/leforge" className="bg-white/5 hover:bg-white/10 text-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
              Star on GitHub ⭐
            </Link>
          </div>
        </div>
      </section>
    </div>
    </ConstructionGate>
  );
}
