export const metadata = {
  title: "Getting Started - LeForge",
  description: "Deploy LeForge and start building powerful apps in minutes.",
};

export default function GettingStartedPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>Quick Start</h1>
      <p className="lead text-xl text-muted">
        Get LeForge running on your local machine in under 2 minutes.
      </p>

      <div className="not-prose bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-8">
        <p className="text-green-400 font-semibold flex items-center gap-2 mb-2">
          <span>📦</span> Single Container Architecture
        </p>
        <p className="text-sm text-muted m-0">
          LeForge runs as a single Docker container with PostgreSQL, Redis, and the app server built-in.
          No complex multi-service orchestration needed.
        </p>
      </div>

      <h2>Prerequisites</h2>
      <ul>
        <li><strong>Docker</strong> installed (Docker Compose optional)</li>
        <li>At least 2GB of available RAM</li>
        <li>Port 4000 available (or configure custom port)</li>
      </ul>

      <h2>Option 1: One-Line Deploy</h2>
      <p>The fastest way to get started:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`docker run -d -p 4000:4000 --name leforge leforge/leforge:latest

# LeForge is now running at http://localhost:4000`}</code>
      </pre>

      <h2>Option 2: Docker Compose</h2>
      <p>For persistent storage and custom configuration:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`# Create docker-compose.yml
curl -sL https://raw.githubusercontent.com/LeForgeio/leforge/main/docker-compose.yml > docker-compose.yml

# Start LeForge
docker-compose up -d`}</code>
      </pre>

      <h2>Option 3: Clone Repository</h2>
      <p>For development or customization:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`git clone https://github.com/LeForgeio/leforge.git
cd leforge

# Copy and configure environment
cp .env.example .env

# Start with compose
docker-compose up -d`}</code>
      </pre>

      <h2>Verify Installation</h2>
      <p>Test that LeForge is running:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`curl http://localhost:4000/api/v1/health

# Expected response:
# {"status":"healthy","version":"1.0.0"}`}</code>
      </pre>

      <h2>Try Your First ForgeHook</h2>
      <p>Hash some data using the Crypto Service:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`curl -X POST http://localhost:4000/api/v1/crypto/hash \\
  -H "Content-Type: application/json" \\
  -d '{"data": "Hello LeForge!", "algorithm": "sha256"}'

# Response:
# {"hash":"a1b2c3d4...","algorithm":"sha256"}`}</code>
      </pre>

      <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
        <h3 className="text-primary mt-0">🎉 Congratulations!</h3>
        <p className="mb-0">
          LeForge is now running. Next, explore the{" "}
          <a href="/docs/forgehooks" className="text-primary hover:underline">ForgeHook plugins</a>{" "}
          or connect your{" "}
          <a href="/docs/integrations" className="text-primary hover:underline">low-code platform</a>.
        </p>
      </div>

      <h2>Connect AI Agents (MCP)</h2>
      <p>
        LeForge supports the <strong>Model Context Protocol (MCP)</strong>, allowing AI agents like
        Claude, GPT, and Cursor to automatically discover and use your ForgeHooks.
      </p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`# MCP endpoint for AI agents
GET http://localhost:4000/mcp

# List available tools
GET http://localhost:4000/api/v1/mcp/tools

# AI agents can now call any ForgeHook endpoint as MCP tools`}</code>
      </pre>

      <h2>Optional: Add Vector Search</h2>
      <p>For RAG applications and semantic search, add Qdrant:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`# Download the Qdrant add-on compose file
curl -sL https://raw.githubusercontent.com/LeForgeio/leforge/main/docker-compose.qdrant.yml > docker-compose.qdrant.yml

# Start Qdrant alongside LeForge
docker-compose -f docker-compose.yml -f docker-compose.qdrant.yml up -d`}</code>
      </pre>

      <h2>What&apos;s Next?</h2>
      <ul>
        <li><a href="/docs/forgehooks">Browse 23 ForgeHook plugins</a></li>
        <li><a href="/docs/integrations/n8n">Connect to n8n</a></li>
        <li><a href="/docs/api">API Reference</a></li>
        <li><a href="/sandbox">Try the API Sandbox</a></li>
      </ul>
    </div>
  );
}
