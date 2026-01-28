"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/getting-started" },
    ],
  },
  {
    title: "ForgeHooks",
    items: [
      { title: "Overview", href: "/docs/forgehooks" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "Overview", href: "/docs/api" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { title: "Overview", href: "/docs/integrations" },
    ],
  },
  {
    title: "Examples",
    items: [
      { title: "Overview", href: "/docs/examples" },
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
