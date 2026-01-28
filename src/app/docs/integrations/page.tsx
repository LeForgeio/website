import Link from "next/link";

export const metadata = {
  title: "Integrations - LeForge",
  description: "Connect LeForge to n8n, Power Automate, ServiceNow, Nintex, Salesforce, and more.",
};

const integrations = [
  {
    id: "n8n",
    name: "n8n",
    icon: "🔄",
    description: "Self-hosted automation with community nodes for LeForge.",
    status: "Available",
    installMethod: "Community Nodes",
    docLink: "/docs/integrations/n8n",
  },
  {
    id: "power-automate",
    name: "Power Automate",
    icon: "⚡",
    description: "Microsoft's automation platform with custom connectors.",
    status: "Available",
    installMethod: "Custom Connector",
    docLink: "/docs/integrations/power-automate",
  },
  {
    id: "servicenow",
    name: "ServiceNow",
    icon: "🎫",
    description: "Enterprise service management with Flow Designer actions.",
    status: "Available",
    installMethod: "Spoke",
    docLink: "/docs/integrations/servicenow",
  },
  {
    id: "salesforce",
    name: "Salesforce",
    icon: "☁️",
    description: "CRM platform integration with Flow actions and Apex callouts.",
    status: "Available",
    installMethod: "External Services",
    docLink: "/docs/integrations/salesforce",
  },
  {
    id: "nintex-ce",
    name: "Nintex CE",
    icon: "📋",
    description: "Nintex Automation Cloud - works with cloud and on-premise deployments.",
    status: "Available",
    installMethod: "Xtension / Web Request",
    docLink: "/docs/integrations/nintex-ce",
  },
  {
    id: "nintex-k2",
    name: "Nintex K2",
    icon: "🔷",
    description: "Nintex K2 platform - deploy LeForge online or fully offline.",
    status: "Available",
    installMethod: "Service Broker / REST",
    docLink: "/docs/integrations/nintex-k2",
  },
  {
    id: "mendix",
    name: "Mendix",
    icon: "🏢",
    description: "Low-code platform integration via microflows and REST consumption.",
    status: "Available",
    installMethod: "REST Service",
    docLink: "/docs/integrations/mendix",
  },
  {
    id: "outsystems",
    name: "OutSystems",
    icon: "🔶",
    description: "Enterprise low-code platform with REST API consumption.",
    status: "Available",
    installMethod: "REST API",
    docLink: "/docs/integrations/outsystems",
  },
  {
    id: "rest-api",
    name: "REST API",
    icon: "💡",
    description: "Direct HTTP integration works with any platform that supports webhooks.",
    status: "Available",
    installMethod: "HTTP Requests",
    docLink: "/docs/api",
  },
];

export default function IntegrationsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Integrations</h1>
      <p className="text-xl text-muted mb-12">
        Connect LeForge to your favorite low-code and automation platforms with 
        pre-built nodes, modules, and connectors.
      </p>

      <div className="space-y-6">
        {integrations.map((integration) => (
          <Link
            key={integration.id}
            href={integration.docLink}
            className="block bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors group"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                {integration.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {integration.name}
                  </h2>
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-medium">
                    {integration.status}
                  </span>
                </div>
                <p className="text-muted mb-3">{integration.description}</p>
                <div className="text-sm text-muted">
                  <span className="font-medium">Install via:</span> {integration.installMethod}
                </div>
              </div>
              <div className="text-muted group-hover:text-primary transition-colors">
                →
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-6 bg-card border border-border rounded-xl">
        <h2 className="text-xl font-semibold mb-4">Don&apos;t see your platform?</h2>
        <p className="text-muted mb-4">
          LeForge works with any platform that supports HTTP requests. Check out our 
          API documentation to build your own integration, or request a new integration 
          on GitHub.
        </p>
        <div className="flex gap-4">
          <Link
            href="/docs/api"
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            API Documentation
          </Link>
          <Link
            href="https://github.com/LeForgeio/leforge/issues/new"
            className="bg-white/5 hover:bg-white/10 text-foreground px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Request Integration
          </Link>
        </div>
      </div>
    </div>
  );
}
