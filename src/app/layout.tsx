import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeForge - Self-Hosted AI & Compute Platform",
  description: "Extend n8n, Power Automate, ServiceNow, Nintex, Salesforce, and Mendix with powerful AI, cryptography, math, and data processing capabilities. Self-hosted on your own infrastructure.",
  keywords: "low-code, no-code, automation, n8n, servicenow, nintex, power automate, salesforce, mendix, self-hosted, AI, LLM, microservices, docker",
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:text-foreground">
          <span>⚒️</span>
          <span>Le<span className="text-primary">Forge</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <Link href="/docs" className="text-muted hover:text-foreground transition-colors">
            Docs
          </Link>
          <Link href="/docs/forgehooks" className="text-muted hover:text-foreground transition-colors">
            ForgeHooks
          </Link>
          <Link href="/sandbox" className="text-muted hover:text-foreground transition-colors">
            Sandbox
          </Link>
          <Link 
            href="https://github.com/LeForgeio/leforge" 
            target="_blank"
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            GitHub
          </Link>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 text-xl font-bold mb-4">
              <span>⚒️</span>
              <span>Le<span className="text-primary">Forge</span></span>
            </Link>
            <p className="text-muted text-sm">
              Open source AI & compute platform for low-code apps and automations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs/forgehooks" className="text-foreground hover:text-primary">ForgeHooks</Link></li>
              <li><Link href="/docs/integrations" className="text-foreground hover:text-primary">Integrations</Link></li>
              <li><Link href="/sandbox" className="text-foreground hover:text-primary">Sandbox</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/docs" className="text-foreground hover:text-primary">Documentation</Link></li>
              <li><Link href="/docs/api" className="text-foreground hover:text-primary">API Reference</Link></li>
              <li><Link href="/docs/examples" className="text-foreground hover:text-primary">Examples</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://github.com/LeForgeio/leforge" className="text-foreground hover:text-primary">GitHub</Link></li>
              <li><Link href="https://github.com/LeForgeio/leforge/discussions" className="text-foreground hover:text-primary">Discussions</Link></li>
              <li><Link href="https://github.com/LeForgeio/leforge/issues" className="text-foreground hover:text-primary">Issues</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
          <p>© 2026 LeForge. Open source under the MIT License.</p>
          <div className="flex gap-6">
            <Link href="https://github.com/LeForgeio/leforge/blob/master/LICENSE" className="hover:text-foreground">License</Link>
            <Link href="https://github.com/LeForgeio" className="hover:text-foreground">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
