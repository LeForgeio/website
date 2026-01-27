export const metadata = {
  title: "Getting Started - LeForge",
  description: "Deploy LeForge and start building powerful workflows in minutes.",
};

export default function GettingStartedPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <h1>Quick Start</h1>
      <p className="lead text-xl text-muted">
        Get LeForge running on your local machine in under 5 minutes.
      </p>

      <h2>Prerequisites</h2>
      <ul>
        <li><strong>Docker</strong> and <strong>Docker Compose</strong> installed</li>
        <li>At least 4GB of available RAM</li>
        <li>Ports 8000, 5432, 6379 available</li>
      </ul>

      <h2>Step 1: Clone the Repository</h2>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`git clone https://github.com/LeForgeio/leforge.git
cd leforge`}</code>
      </pre>

      <h2>Step 2: Configure Environment</h2>
      <p>Copy the example environment file and customize as needed:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`cp .env.example .env

# Edit .env to configure:
# - API keys for external services
# - Database credentials
# - Service ports`}</code>
      </pre>

      <h2>Step 3: Start Services</h2>
      <p>Launch all services with Docker Compose:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`docker-compose up -d

# View logs
docker-compose logs -f

# Check service status
docker-compose ps`}</code>
      </pre>

      <h2>Step 4: Verify Installation</h2>
      <p>Test that the API is responding:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`curl http://localhost:8000/api/v1/health

# Expected response:
# {"status":"healthy","services":{...}}`}</code>
      </pre>

      <h2>Step 5: Try Your First ForgeHook</h2>
      <p>Hash some data using the Crypto Service:</p>
      <pre className="bg-background-secondary p-4 rounded-lg">
        <code>{`curl -X POST http://localhost:8000/api/v1/crypto/hash \\
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
          <a href="/docs/integrations" className="text-primary hover:underline">workflow platform</a>.
        </p>
      </div>

      <h2>What&apos;s Next?</h2>
      <ul>
        <li><a href="/docs/forgehooks">Browse ForgeHook plugins</a></li>
        <li><a href="/docs/integrations/n8n">Connect to n8n</a></li>
        <li><a href="/docs/api">API Reference</a></li>
        <li><a href="/sandbox">Try the API Sandbox</a></li>
      </ul>
    </div>
  );
}
