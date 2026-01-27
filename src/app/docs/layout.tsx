"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/getting-started" },
      { title: "Installation", href: "/docs/getting-started/installation" },
      { title: "Configuration", href: "/docs/getting-started/configuration" },
    ],
  },
  {
    title: "ForgeHooks",
    items: [
      { title: "Overview", href: "/docs/forgehooks" },
      { title: "LLM Service", href: "/docs/forgehooks/llm" },
      { title: "Crypto Service", href: "/docs/forgehooks/crypto" },
      { title: "Math Service", href: "/docs/forgehooks/math" },
      { title: "PDF Service", href: "/docs/forgehooks/pdf" },
      { title: "OCR Service", href: "/docs/forgehooks/ocr" },
      { title: "Image Service", href: "/docs/forgehooks/image" },
      { title: "Vector Service", href: "/docs/forgehooks/vector" },
      { title: "Data Transform", href: "/docs/forgehooks/data-transform" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Overview", href: "/docs/api" },
      { title: "Authentication", href: "/docs/api/authentication" },
      { title: "Rate Limiting", href: "/docs/api/rate-limiting" },
      { title: "Error Handling", href: "/docs/api/errors" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "Overview", href: "/docs/integrations" },
      { title: "n8n", href: "/docs/integrations/n8n" },
      { title: "Make", href: "/docs/integrations/make" },
      { title: "Power Automate", href: "/docs/integrations/power-automate" },
      { title: "Zapier", href: "/docs/integrations/zapier" },
      { title: "ServiceNow", href: "/docs/integrations/servicenow" },
    ],
  },
  {
    title: "Examples",
    items: [
      { title: "Overview", href: "/docs/examples" },
      { title: "Chat with PDF", href: "/docs/examples/chat-pdf" },
      { title: "Invoice Processing", href: "/docs/examples/invoice-processing" },
      { title: "Document Translation", href: "/docs/examples/translation" },
    ],
  },
];

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 shrink-0 border-r border-border overflow-y-auto h-[calc(100vh-4rem)] sticky top-16 hidden lg:block">
      <nav className="p-6 space-y-8">
        {navigation.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-sm text-muted uppercase tracking-wide mb-3">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "text-foreground hover:bg-card"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 max-w-4xl px-6 py-12 lg:px-12">
        {children}
      </div>
    </div>
  );
}
