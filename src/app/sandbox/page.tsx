"use client";

import { useState } from "react";

const forgehooks = [
  {
    id: "crypto-hash",
    name: "Crypto - Hash",
    icon: "🔐",
    method: "POST",
    endpoint: "/api/v1/crypto/hash",
    description: "Generate a cryptographic hash of your data",
    defaultBody: JSON.stringify(
      {
        data: "Hello LeForge!",
        algorithm: "sha256",
      },
      null,
      2
    ),
    exampleResponse: JSON.stringify(
      {
        hash: "d4735e3a265e16eee03f59718b9b5d03019c07d8b6c51f90da3a666eec13ab35",
        algorithm: "sha256",
      },
      null,
      2
    ),
  },
  {
    id: "crypto-uuid",
    name: "Crypto - UUID",
    icon: "🔐",
    method: "GET",
    endpoint: "/api/v1/crypto/uuid",
    description: "Generate a new UUID v4",
    defaultBody: "",
    exampleResponse: JSON.stringify(
      {
        uuid: "550e8400-e29b-41d4-a716-446655440000",
      },
      null,
      2
    ),
  },
  {
    id: "math-evaluate",
    name: "Math - Evaluate",
    icon: "🔢",
    method: "POST",
    endpoint: "/api/v1/math/evaluate",
    description: "Evaluate a mathematical expression",
    defaultBody: JSON.stringify(
      {
        expression: "2 * (3 + 4) ^ 2",
      },
      null,
      2
    ),
    exampleResponse: JSON.stringify(
      {
        result: 98,
        expression: "2 * (3 + 4) ^ 2",
      },
      null,
      2
    ),
  },
  {
    id: "math-statistics",
    name: "Math - Statistics",
    icon: "🔢",
    method: "POST",
    endpoint: "/api/v1/math/statistics",
    description: "Calculate statistical measures for a dataset",
    defaultBody: JSON.stringify(
      {
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        operations: ["mean", "median", "stddev", "min", "max"],
      },
      null,
      2
    ),
    exampleResponse: JSON.stringify(
      {
        mean: 55,
        median: 55,
        stddev: 28.72,
        min: 10,
        max: 100,
      },
      null,
      2
    ),
  },
  {
    id: "llm-chat",
    name: "LLM - Chat",
    icon: "🤖",
    method: "POST",
    endpoint: "/api/v1/llm/chat",
    description: "Send a chat completion request",
    defaultBody: JSON.stringify(
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: "What can LeForge help me build?" },
        ],
        max_tokens: 150,
      },
      null,
      2
    ),
    exampleResponse: JSON.stringify(
      {
        id: "chatcmpl-abc123",
        choices: [
          {
            message: {
              role: "assistant",
              content:
                "LeForge helps you add AI, cryptography, and data processing to your low-code apps...",
            },
          },
        ],
        usage: { prompt_tokens: 25, completion_tokens: 50, total_tokens: 75 },
      },
      null,
      2
    ),
  },
  {
    id: "transform-json-xml",
    name: "Transform - JSON to XML",
    icon: "🔄",
    method: "POST",
    endpoint: "/api/v1/transform/json-to-xml",
    description: "Convert JSON data to XML format",
    defaultBody: JSON.stringify(
      {
        data: {
          user: {
            name: "John Doe",
            email: "john@example.com",
            age: 30,
          },
        },
        rootElement: "root",
      },
      null,
      2
    ),
    exampleResponse: `{
  "xml": "<?xml version=\\"1.0\\"?>\\n<root>\\n  <user>\\n    <name>John Doe</name>\\n    <email>john@example.com</email>\\n    <age>30</age>\\n  </user>\\n</root>"
}`,
  },
];

export default function SandboxPage() {
  const [selectedHook, setSelectedHook] = useState(forgehooks[0]);
  const [baseUrl, setBaseUrl] = useState("http://localhost:3000");
  const [apiKey, setApiKey] = useState("");
  const [requestBody, setRequestBody] = useState(forgehooks[0].defaultBody);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseTime, setResponseTime] = useState<number | null>(null);

  const handleHookChange = (hookId: string) => {
    const hook = forgehooks.find((h) => h.id === hookId);
    if (hook) {
      setSelectedHook(hook);
      setRequestBody(hook.defaultBody);
      setResponse("");
      setResponseTime(null);
    }
  };

  const handleSendRequest = async () => {
    setIsLoading(true);
    setResponse("");
    setResponseTime(null);

    const startTime = performance.now();

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (apiKey) {
        headers["Authorization"] = `Bearer ${apiKey}`;
      }

      const options: RequestInit = {
        method: selectedHook.method,
        headers,
      };

      if (selectedHook.method !== "GET" && requestBody) {
        options.body = requestBody;
      }

      const res = await fetch(`${baseUrl}${selectedHook.endpoint}`, options);
      const endTime = performance.now();
      setResponseTime(Math.round(endTime - startTime));

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      const endTime = performance.now();
      setResponseTime(Math.round(endTime - startTime));
      setResponse(
        JSON.stringify(
          {
            error: "Request failed",
            message: error instanceof Error ? error.message : "Unknown error",
            hint: "Make sure LeForge is running at the specified URL",
          },
          null,
          2
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const showExample = () => {
    setResponse(selectedHook.exampleResponse);
    setResponseTime(null);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Core Sandbox</h1>
          <p className="text-xl text-muted">
            Test ForgeHook APIs directly in your browser. Connect to your local
            or remote LeForge instance.
          </p>
        </div>

        {/* Configuration */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Configuration</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                LeForge URL
              </label>
              <input
                type="text"
                value={baseUrl}
                onChange={(e) => setBaseUrl(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="http://localhost:3000"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                API Key (optional)
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full bg-background border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter API key"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Endpoint Selector */}
          <div className="lg:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Select Endpoint</h2>
            <div className="space-y-2">
              {forgehooks.map((hook) => (
                <button
                  key={hook.id}
                  onClick={() => handleHookChange(hook.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-colors ${
                    selectedHook.id === hook.id
                      ? "bg-primary/10 border-primary"
                      : "bg-card border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{hook.icon}</span>
                    <div>
                      <div className="font-medium">{hook.name}</div>
                      <div className="text-xs text-muted">
                        {hook.method} {hook.endpoint}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Request/Response */}
          <div className="lg:col-span-2 space-y-6">
            {/* Request */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-background-secondary px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                      selectedHook.method === "GET"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {selectedHook.method}
                  </span>
                  <code className="text-sm">{selectedHook.endpoint}</code>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted text-sm mb-4">
                  {selectedHook.description}
                </p>
                {selectedHook.method !== "GET" && (
                  <div>
                    <label htmlFor="request-body" className="block text-sm font-medium mb-2">
                      Request Body
                    </label>
                    <textarea
                      id="request-body"
                      value={requestBody}
                      onChange={(e) => setRequestBody(e.target.value)}
                      className="w-full h-48 bg-background border border-border rounded-lg px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder='{"key": "value"}'
                      spellCheck={false}
                    />
                  </div>
                )}
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={handleSendRequest}
                    disabled={isLoading}
                    className="bg-primary hover:bg-primary-dark disabled:opacity-50 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>Send Request</>
                    )}
                  </button>
                  <button
                    onClick={showExample}
                    className="bg-white/5 hover:bg-white/10 text-foreground px-6 py-2 rounded-lg font-medium transition-colors"
                  >
                    Show Example
                  </button>
                </div>
              </div>
            </div>

            {/* Response */}
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <div className="bg-background-secondary px-4 py-3 border-b border-border flex items-center justify-between">
                <span className="font-medium">Response</span>
                {responseTime !== null && (
                  <span className="text-xs text-muted">
                    {responseTime}ms
                  </span>
                )}
              </div>
              <div className="p-4">
                <pre className="bg-background rounded-lg p-4 overflow-x-auto min-h-50">
                  <code className="text-sm">
                    {response || "// Response will appear here"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Help */}
        <div className="mt-12 p-6 bg-primary/10 border border-primary/20 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">💡 Tip</h2>
          <p className="text-muted">
            Don&apos;t have LeForge running? Click &quot;Show Example&quot; to see sample
            responses for each endpoint. When you&apos;re ready, follow the{" "}
            <a href="/docs/getting-started" className="text-primary hover:underline">
              Getting Started guide
            </a>{" "}
            to deploy LeForge locally.
          </p>
        </div>
      </div>
    </div>
  );
}
