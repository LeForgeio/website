import Link from "next/link";

export const metadata = {
  title: "ForgeHooks - LeForge",
  description: "Explore the full library of AI and compute plugins available in LeForge.",
};

// Docker Microservices - Containerized services deployed via Docker
const dockerServices = [
  {
    id: "llm-service",
    icon: "🤖",
    name: "LLM Service",
    description: "Multi-provider LLM service with chat completions, embeddings, vision/OCR, and text generation. Supports OpenAI, Anthropic, Azure, Google Gemini, AWS Bedrock, and HuggingFace.",
    endpoints: [
      "POST /api/v1/chat",
      "POST /api/v1/embeddings",
      "POST /api/v1/vision/ocr",
      "POST /api/v1/providers/{provider}/chat",
    ],
    tags: ["GPT-4o", "Claude 3.5", "Gemini", "Bedrock", "vLLM"],
  },
  {
    id: "crypto-service",
    icon: "🔐",
    name: "Crypto Service",
    description: "Cryptographic operations including hashing (MD5, SHA-256/512), AES-GCM encryption/decryption, RSA key pairs, and digital signatures.",
    endpoints: [
      "POST /api/v1/crypto/hash",
      "POST /api/v1/crypto/encrypt",
      "POST /api/v1/crypto/decrypt",
      "POST /api/v1/crypto/sign",
    ],
    tags: ["AES-256-GCM", "RSA", "SHA-256", "SHA-512"],
  },
  {
    id: "math-service",
    icon: "🔢",
    name: "Math Service",
    description: "Mathematical expression evaluation, statistics (mean, median, std dev, correlation), matrix operations, and financial calculations.",
    endpoints: [
      "POST /api/v1/math/evaluate",
      "POST /api/v1/math/statistics",
      "POST /api/v1/math/matrix",
    ],
    tags: ["NumPy", "Statistics", "Linear Algebra"],
  },
  {
    id: "pdf-service",
    icon: "📄",
    name: "PDF Service",
    description: "Generate PDFs from HTML/templates, merge multiple PDFs, split pages, extract text, and fill form fields.",
    endpoints: [
      "POST /api/v1/pdf/generate",
      "POST /api/v1/pdf/merge",
      "POST /api/v1/pdf/split",
      "POST /api/v1/pdf/extract-text",
    ],
    tags: ["Puppeteer", "PDF-lib", "HTML to PDF"],
  },
  {
    id: "ocr-service",
    icon: "👁️",
    name: "OCR Service",
    description: "Extract text from images and scanned documents using PaddleOCR and Tesseract with 100+ language support.",
    endpoints: [
      "POST /api/v1/ocr/extract",
      "POST /api/v1/ocr/detect",
    ],
    tags: ["PaddleOCR", "Tesseract", "Multi-language"],
  },
  {
    id: "image-service",
    icon: "🖼️",
    name: "Image Service",
    description: "Resize, crop, rotate, convert formats (JPEG, PNG, WebP, AVIF), optimize compression, and add watermarks.",
    endpoints: [
      "POST /api/v1/image/resize",
      "POST /api/v1/image/convert",
      "POST /api/v1/image/crop",
      "POST /api/v1/image/optimize",
    ],
    tags: ["Sharp", "WebP", "AVIF", "Optimization"],
  },
  {
    id: "vector-service",
    icon: "🔍",
    name: "Vector Service",
    description: "Vector similarity search using Qdrant for semantic search, RAG applications, and recommendation systems.",
    endpoints: [
      "POST /api/v1/vector/upsert",
      "POST /api/v1/vector/search",
      "DELETE /api/v1/vector/delete",
    ],
    tags: ["Qdrant", "Embeddings", "Semantic Search"],
  },
  {
    id: "data-transform-service",
    icon: "🔄",
    name: "Data Transform Service",
    description: "Convert between JSON, XML, CSV, and YAML. JSONPath queries, XML transformations, and schema validation.",
    endpoints: [
      "POST /api/v1/transform/json-to-xml",
      "POST /api/v1/transform/xml-to-json",
      "POST /api/v1/transform/csv-to-json",
      "POST /api/v1/transform/validate",
    ],
    tags: ["JSONPath", "XSLT", "CSV", "YAML"],
  },
  {
    id: "streaming-file-service",
    icon: "📁",
    name: "Streaming File Service",
    description: "Efficient file upload/download with streaming support, chunked transfers, and progress tracking for large files.",
    endpoints: [
      "POST /api/v1/files/upload",
      "GET /api/v1/files/download",
      "POST /api/v1/files/chunk",
    ],
    tags: ["Streaming", "Chunked Upload", "Large Files"],
  },
];

// Embeddable Utilities - Lightweight functions for direct platform integration
const embeddableUtilities = [
  {
    id: "string-utils",
    icon: "📝",
    name: "String Utils",
    description: "17 text manipulation functions including case conversion, slugify, HTML sanitization, padding, and whitespace normalization.",
    functions: ["slugify", "camelCase", "pascalCase", "snakeCase", "kebabCase", "truncate", "sanitizeHtml", "escapeHtml", "unescapeHtml", "capitalize", "titleCase", "wordCount", "reverse", "padLeft", "padRight", "removeWhitespace", "normalizeWhitespace"],
    tags: ["Text", "Case Conversion", "HTML"],
  },
  {
    id: "date-utils",
    icon: "📅",
    name: "Date Utils",
    description: "21 date manipulation functions including formatting, parsing, relative time, date math, and comparisons.",
    functions: ["format", "parse", "now", "toISO", "toUnix", "fromUnix", "relativeTime", "addDays", "addHours", "addMinutes", "addMonths", "addYears", "diff", "startOf", "endOf", "isValid", "isBefore", "isAfter", "isBetween", "getWeekday", "getDaysInMonth"],
    tags: ["DateTime", "Formatting", "Date Math"],
  },
  {
    id: "json-utils",
    icon: "📋",
    name: "JSON Utils",
    description: "27 JSON manipulation functions including JSONPath queries, deep merge, diff/patch, validation, and array operations.",
    functions: ["query", "get", "set", "has", "remove", "flatten", "unflatten", "merge", "deepMerge", "diff", "patch", "clone", "equals", "validate", "safeParse", "stringify", "format", "minify", "sortKeys", "pick", "omit", "transform", "filter", "map", "find", "groupBy", "keyBy"],
    tags: ["JSONPath", "Merge", "Validation"],
  },
  {
    id: "uuid-utils",
    icon: "🔑",
    name: "UUID Utils",
    description: "18 unique ID generation functions including UUID v1/v4/v5/v7, ULID, nanoid, snowflake IDs, and validation.",
    functions: ["uuid", "uuidv1", "uuidv4", "uuidv5", "uuidv7", "ulid", "nanoid", "cuid2", "snowflake", "randomString", "randomHex", "randomBase64", "shortId", "isValidUUID", "isValidULID", "parseUUID", "parseULID", "nil"],
    tags: ["UUID", "ULID", "Snowflake"],
  },
  {
    id: "encoding-utils",
    icon: "🔣",
    name: "Encoding Utils",
    description: "21 encoding functions including Base64/URL encoding, hex, HTML entities, Unicode, JWT decoding, and ciphers.",
    functions: ["base64Encode", "base64Decode", "base64UrlEncode", "base64UrlDecode", "hexEncode", "hexDecode", "urlEncode", "urlDecode", "htmlEncode", "htmlDecode", "unicodeEncode", "unicodeDecode", "jwtDecode", "jwtHeader", "jwtPayload", "stringToBytes", "bytesToString", "utf8ToBytes", "bytesToUtf8", "rot13", "caesar"],
    tags: ["Base64", "JWT", "Hex", "URL"],
  },
  {
    id: "validation-utils",
    icon: "✅",
    name: "Validation Utils",
    description: "23 validation functions for emails, phones, URLs, UUIDs, IBANs, VAT numbers, credit cards, IPs, and batch validation.",
    functions: ["isEmail", "isPhone", "isURL", "isUUID", "isIBAN", "isVATNumber", "isCreditCard", "getCreditCardType", "isPostalCode", "isIPv4", "isIPv6", "isMACAddress", "isHexColor", "isJSON", "isBase64", "isAlpha", "isAlphanumeric", "isNumeric", "isSlug", "isEmpty", "isLength", "matches", "validateAll"],
    tags: ["Email", "Credit Card", "IBAN", "VAT"],
  },
  {
    id: "formula-engine",
    icon: "🧮",
    name: "Formula Engine",
    description: "150+ Excel-compatible functions across 6 categories: Math/Statistics, Logical, Text, Date/Time, Financial, and Lookup.",
    functions: ["SUM", "AVERAGE", "COUNT", "MAX", "MIN", "IF", "VLOOKUP", "XLOOKUP", "INDEX", "MATCH", "CONCATENATE", "LEFT", "RIGHT", "DATE", "TODAY", "PMT", "NPV", "IRR"],
    categories: {
      math: "SUM, AVERAGE, COUNT, MAX, MIN, MEDIAN, STDEV, ROUND, POWER, LOG, SIN, COS, and 50+ more",
      logical: "IF, IFS, SWITCH, AND, OR, NOT, XOR, IFERROR, ISBLANK, ISNUMBER, and 8 more",
      text: "LEFT, RIGHT, MID, LEN, FIND, CONCAT, TRIM, UPPER, LOWER, SUBSTITUTE, and 17 more",
      date: "TODAY, NOW, DATE, YEAR, MONTH, DAY, WEEKDAY, DATEDIF, EDATE, WORKDAY, and 13 more",
      financial: "PMT, PV, FV, NPV, IRR, XIRR, RATE, NPER, SLN, DDB, and 10 more",
      lookup: "VLOOKUP, HLOOKUP, XLOOKUP, INDEX, MATCH, CHOOSE, FILTER, SORT, UNIQUE, and 8 more"
    },
    tags: ["Excel", "150+ Functions", "Financial"],
  },
  {
    id: "excel-utils",
    icon: "📊",
    name: "Excel Utils",
    description: "30+ functions for parsing and generating Excel (XLSX) and CSV files locally without external APIs.",
    functions: ["parseCSV", "stringifyCSV", "createWorkbook", "addWorksheet", "getWorksheet", "getWorksheetNames", "worksheetToCSV", "csvToWorksheet", "cellValue", "cellRange", "columnToLetter", "letterToColumn", "findInWorksheet", "filter", "sort", "pivot", "lookup", "merge", "split", "transpose", "columnStats", "sumColumn", "avgColumn", "countColumn", "minMaxColumn", "formatAsTable", "addFormula", "validateData", "removeDuplicates", "fillDown", "autoFitColumns"],
    tags: ["XLSX", "CSV", "Spreadsheets", "Data"],
  },
  {
    id: "qrcode-utils",
    icon: "📱",
    name: "QR Code Utils",
    description: "Generate QR codes and barcodes locally. Supports text, SVG, HTML, and data URL outputs plus WiFi, vCard, and URL formats.",
    functions: ["generateQR", "generateBarcode", "parseQRData", "formatWiFiQR", "formatVCardQR", "formatUrlQR", "formatEmailQR", "formatSmsQR", "formatGeoQR", "formatCalendarQR"],
    tags: ["QR Code", "Barcode", "Code128", "EAN13"],
  },
  {
    id: "content-filter",
    icon: "🛡️",
    name: "Content Filter",
    description: "Profanity filtering and content moderation locally. Detect inappropriate content, spam, and basic sentiment analysis.",
    functions: ["filterText", "containsProfanity", "analyzeSentiment", "detectSpam", "validateContent", "cleanText", "categorize", "getScore", "getSafeVersion", "detectLanguage"],
    tags: ["Profanity", "Moderation", "Sentiment", "Spam"],
  },
  {
    id: "lorem-utils",
    icon: "📜",
    name: "Lorem Utils",
    description: "Generate placeholder text and fake data locally. Lorem ipsum, themed text (bacon, hipster, corporate), names, emails, addresses.",
    functions: ["words", "sentences", "paragraphs", "characters", "classic", "themed", "bacon", "hipster", "corporate", "tech", "pirate", "name", "firstName", "lastName", "email", "phone", "company", "address", "city", "state", "zipCode", "fullAddress", "number", "boolean", "date", "uuid", "color", "pick", "pickMultiple", "generateArray", "setSeed", "resetSeed"],
    tags: ["Lorem Ipsum", "Fake Data", "Placeholder", "Mock"],
  },
];

// Local AI Connectors - Connect to locally-running AI tools
const localAIConnectors = [
  {
    id: "ollama-local",
    icon: "🦙",
    name: "Ollama Connector",
    description: "Connect to locally-running Ollama for private, offline LLM inference with models like Llama 3, Mistral, and Code Llama.",
    endpoints: [
      "POST /api/v1/ollama/generate",
      "POST /api/v1/ollama/chat",
      "GET /api/v1/ollama/models",
    ],
    tags: ["Ollama", "Llama 3", "Mistral", "Offline"],
  },
  {
    id: "lm-studio",
    icon: "🎬",
    name: "LM Studio Connector",
    description: "Integrate with LM Studio for local model hosting via OpenAI-compatible API. Run any GGUF model locally.",
    endpoints: [
      "POST /api/v1/lm-studio/chat",
      "POST /api/v1/lm-studio/completions",
      "GET /api/v1/lm-studio/models",
    ],
    tags: ["LM Studio", "GGUF", "Local LLM", "OpenAI API"],
  },
  {
    id: "foundry-local",
    icon: "🏭",
    name: "Foundry Local Connector",
    description: "Connect to Microsoft Foundry Local for running Phi, ONNX, and other Microsoft AI models on-premises.",
    endpoints: [
      "POST /api/v1/foundry/chat",
      "POST /api/v1/foundry/generate",
      "GET /api/v1/foundry/models",
    ],
    tags: ["Microsoft", "Phi", "ONNX", "On-Premises"],
  },
];

export default function ForgeHooksPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">ForgeHooks</h1>
      <p className="text-xl text-muted mb-8">
        Pre-built plugins that add AI and compute capabilities to your workflows.
        Choose from Docker microservices, embeddable utilities, or local AI connectors.
      </p>

      {/* Docker Microservices Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <span className="text-xl">🐳</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Docker Microservices</h2>
            <p className="text-muted text-sm">Containerized services deployed via Docker Compose</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {dockerServices.map((hook) => (
            <div
              key={hook.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {hook.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{hook.name}</h3>
                  <p className="text-muted mt-1 mb-4">{hook.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hook.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-blue-500/10 px-2 py-1 rounded text-xs text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-background-secondary rounded-lg p-3">
                    <p className="text-xs text-muted uppercase tracking-wide mb-2">REST Endpoints</p>
                    <div className="space-y-1">
                      {hook.endpoints.map((endpoint) => (
                        <code key={endpoint} className="block text-sm text-foreground">
                          {endpoint}
                        </code>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embeddable Utilities Section */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
            <span className="text-xl">⚡</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Embeddable Utilities</h2>
            <p className="text-muted text-sm">Lightweight functions for direct platform integration — no Docker required</p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {embeddableUtilities.map((util) => (
            <div
              key={util.id}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-xl shrink-0">
                  {util.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold">{util.name}</h3>
                  <p className="text-muted text-sm mt-1 mb-3">{util.description}</p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {util.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-green-500/10 px-2 py-0.5 rounded text-xs text-green-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-background-secondary rounded-lg p-2">
                    <p className="text-xs text-muted uppercase tracking-wide mb-1">
                      Functions ({util.functions.length}{util.id === "formula-engine" ? "+" : ""})
                    </p>
                    <code className="text-xs text-foreground wrap-break-word">
                      {util.functions.slice(0, 8).join(", ")}
                      {util.functions.length > 8 && `, +${util.functions.length - 8} more`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Local AI Connectors Section */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
            <span className="text-xl">🏠</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Local AI Connectors</h2>
            <p className="text-muted text-sm">Connect to locally-running AI tools for private, offline inference</p>
          </div>
        </div>
        
        <div className="space-y-6">
          {localAIConnectors.map((connector) => (
            <div
              key={connector.id}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-2xl shrink-0">
                  {connector.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{connector.name}</h3>
                  <p className="text-muted mt-1 mb-4">{connector.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {connector.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-purple-500/10 px-2 py-1 rounded text-xs text-purple-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="bg-background-secondary rounded-lg p-3">
                    <p className="text-xs text-muted uppercase tracking-wide mb-2">API Endpoints</p>
                    <div className="space-y-1">
                      {connector.endpoints.map((endpoint) => (
                        <code key={endpoint} className="block text-sm text-foreground">
                          {endpoint}
                        </code>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Summary Card */}
      <div className="p-6 bg-card border border-border rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">Deployment Options</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
            <div className="text-2xl mb-2">🐳</div>
            <h3 className="font-semibold text-blue-400">Docker Services</h3>
            <p className="text-sm text-muted mt-1">Full microservices with REST APIs, health checks, and scaling</p>
          </div>
          <div className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
            <div className="text-2xl mb-2">⚡</div>
            <h3 className="font-semibold text-green-400">Embedded Utils</h3>
            <p className="text-sm text-muted mt-1">Zero-dependency functions embedded directly in your workflows</p>
          </div>
          <div className="p-4 bg-purple-500/5 rounded-lg border border-purple-500/20">
            <div className="text-2xl mb-2">🏠</div>
            <h3 className="font-semibold text-purple-400">Local AI</h3>
            <p className="text-sm text-muted mt-1">Private inference with Ollama, LM Studio, or Microsoft Foundry</p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">🧪 Try in Sandbox</h2>
        <p className="text-muted mb-4">
          Test any ForgeHook API directly in your browser before integrating.
        </p>
        <Link
          href="/sandbox"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          Open Sandbox →
        </Link>
      </div>
    </div>
  );
}
