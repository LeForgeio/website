"use client";

import { useState, useEffect, startTransition } from "react";

const SITE_PASSWORD = "leforge2026"; // Change this to your preferred password

export default function ConstructionGate({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Check localStorage on mount only
    const unlocked = localStorage.getItem("leforge_unlocked") === "true";
    startTransition(() => {
      setIsUnlocked(unlocked);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      localStorage.setItem("leforge_unlocked", "true");
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // Don't flash content while checking localStorage
  if (isUnlocked === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary text-4xl">⚒️</div>
      </div>
    );
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        {/* Animated construction icon */}
        <div className="mb-8">
          <div className="text-8xl mb-4 animate-bounce">🚧</div>
          <div className="text-6xl">⚒️</div>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          <span className="text-primary">LeForge</span> is Coming Soon
        </h1>
        
        <p className="text-muted text-lg mb-8">
          We&apos;re building something powerful. Supercharge your workflows with AI & compute capabilities.
        </p>

        {/* Email signup teaser */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <p className="text-sm text-muted mb-4">
            Self-hosted workflow automation plugins for n8n, Make, Power Automate, and more.
          </p>
          <div className="flex gap-2 text-3xl justify-center">
            <span>🤖</span>
            <span>🔐</span>
            <span>📄</span>
            <span>🔍</span>
            <span>🖼️</span>
          </div>
        </div>

        {/* Password gate for preview */}
        <div className="bg-background-secondary border border-border rounded-xl p-6">
          <p className="text-sm text-muted mb-4">Have a preview password?</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className={`w-full bg-background border ${error ? 'border-red-500' : 'border-border'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary text-center`}
            />
            {error && (
              <p className="text-red-500 text-sm">Incorrect password</p>
            )}
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-medium transition-colors"
            >
              Preview Site →
            </button>
          </form>
        </div>

        {/* Social links */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/LeForgeio"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-muted hover:text-foreground transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
