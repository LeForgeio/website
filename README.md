# LeForge Website

The official marketing and documentation website for [LeForge](https://github.com/LeForgeio/leforge) - a self-hosted AI and compute platform for workflow automation tools.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Font**: Geist (optimized via next/font)

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── lib/              # Utility functions
└── styles/           # Global styles
public/               # Static assets
```

## Pages

- `/` - Homepage with product overview
- `/docs` - Documentation
- `/pricing` - Pricing plans
- `/blog` - Blog posts

## Deployment

The website can be deployed to:

- **Vercel** (recommended) - zero-config deployment
- **Cloudflare Pages** - edge deployment
- **Self-hosted** - Docker or Node.js

## Related

- [LeForge](../flowforge/) - Main platform
- [ForgeHooks Registry](../forgehooks-registry/) - Plugin registry

## License

MIT License
