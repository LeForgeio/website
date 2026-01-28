import Link from "next/link";

export const metadata = {
  title: "Documentation - LeForge",
  description: "Learn how to deploy and use LeForge to supercharge your low-code apps and automations.",
};

const sections = [
  {
    icon: "🚀",
    title: "Getting Started",
    description: "Deploy LeForge and start building powerful apps in minutes.",
    href: "/docs/getting-started",
  },
  {
    icon: "🔌",
    title: "ForgeHooks",
    description: "Explore the full library of AI and compute plugins available.",
    href: "/docs/forgehooks",
  },
  {
    icon: "📖",
    title: "API Reference",
    description: "Complete REST API documentation with examples and schemas.",
    href: "/docs/api",
  },
  {
    icon: "🔗",
    title: "Integrations",
    description: "Connect LeForge to n8n, Make, Power Automate, Zapier, and more.",
    href: "/docs/integrations",
  },
  {
    icon: "💡",
    title: "Examples",
    description: "Real-world examples and patterns to get you inspired.",
    href: "/docs/examples",
  },
  {
    icon: "🧪",
    title: "Sandbox",
    description: "Test ForgeHook APIs directly in your browser before deploying.",
    href: "/sandbox",
  },
];

export default function DocsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Documentation</h1>
      <p className="text-xl text-muted mb-12">
        Everything you need to deploy, configure, and build with LeForge.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="block bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group"
          >
            <div className="text-3xl mb-4">{section.icon}</div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {section.title}
            </h2>
            <p className="text-muted">{section.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-16 p-8 bg-card border border-border rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <p className="text-muted mb-6">
          Get LeForge running on your machine in under 5 minutes:
        </p>
        <pre className="bg-background-secondary p-4 rounded-lg overflow-x-auto">
          <code className="text-sm">{`# Clone the repository
git clone https://github.com/LeForgeio/leforge.git
cd leforge

# Copy environment file
cp .env.example .env

# Start all services
docker-compose up -d

# Test the API
curl http://localhost:8000/api/v1/health`}</code>
        </pre>
      </div>
    </div>
  );
}
