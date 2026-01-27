import Link from "next/link";

export const metadata = {
  title: "API Reference - LeForge",
  description: "Complete REST API documentation for LeForge ForgeHooks.",
};

export default function ApiPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">API Reference</h1>
      <p className="text-xl text-muted mb-12">
        Every ForgeHook exposes a RESTful API with consistent conventions, 
        authentication, and error handling.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Base URL</h2>
          <p className="text-muted mb-4">
            All API endpoints are relative to your LeForge deployment URL:
          </p>
          <pre className="bg-card border border-border rounded-lg p-4">
            <code>https://your-leforge-instance.com/api/v1</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Authentication</h2>
          <p className="text-muted mb-4">
            Include your API key in the Authorization header:
          </p>
          <pre className="bg-card border border-border rounded-lg p-4">
            <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
          </pre>
          <p className="text-muted mt-4">
            <Link href="/docs/api/authentication" className="text-primary hover:underline">
              Learn more about authentication →
            </Link>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Request Format</h2>
          <p className="text-muted mb-4">
            All POST requests should include JSON body with Content-Type header:
          </p>
          <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
            <code>{`curl -X POST https://api.example.com/api/v1/crypto/hash \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"data": "hello", "algorithm": "sha256"}'`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Response Format</h2>
          <p className="text-muted mb-4">
            All responses return JSON with appropriate HTTP status codes:
          </p>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-mono">200</span>
                <span className="font-medium">Success</span>
              </div>
              <pre className="text-sm">
                <code>{`{
  "hash": "2cf24dba5fb0a30e26e83b2ac5b9e29...",
  "algorithm": "sha256"
}`}</code>
              </pre>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-mono">400</span>
                <span className="font-medium">Bad Request</span>
              </div>
              <pre className="text-sm">
                <code>{`{
  "error": "validation_error",
  "message": "Invalid algorithm specified",
  "details": { "field": "algorithm", "allowed": ["md5", "sha256", "sha512"] }
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Rate Limiting</h2>
          <p className="text-muted mb-4">
            API requests are rate limited. Check response headers for your current limits:
          </p>
          <pre className="bg-card border border-border rounded-lg p-4">
            <code>{`X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640000000`}</code>
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">SDKs</h2>
          <p className="text-muted mb-4">
            Official client libraries are available for popular languages:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="https://github.com/LeForgeio/leforge/tree/master/sdk/javascript" className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold mb-1">JavaScript/TypeScript</h3>
              <code className="text-sm text-muted">npm install @leforge/sdk</code>
            </Link>
            <Link href="https://github.com/LeForgeio/leforge/tree/master/sdk/python" className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold mb-1">Python</h3>
              <code className="text-sm text-muted">pip install leforge</code>
            </Link>
            <Link href="https://github.com/LeForgeio/leforge/tree/master/sdk/dotnet" className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors">
              <h3 className="font-semibold mb-1">.NET</h3>
              <code className="text-sm text-muted">dotnet add package LeForge</code>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
