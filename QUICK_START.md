# Quick Start Guide

## ✅ Installation Complete

The following have been installed and configured:

- ✅ Tailwind CSS v4.1.14 with @astrojs/tailwind
- ✅ React v19.2.0 with @astrojs/react
- ✅ TypeScript v5.9.3
- ✅ React type definitions

## 📁 FSD Architecture Structure

```
src/
├── app/                    # Application layer
│   ├── providers/         # Global providers
│   ├── styles/            # Global styles (Tailwind imported here)
│   └── index.ts
├── processes/             # Complex inter-page scenarios (optional)
│   └── index.ts
├── pages/                 # Astro pages
│   └── index.astro
├── widgets/               # Composite UI blocks
│   └── index.ts
├── features/              # User features
│   └── index.ts
├── entities/              # Business entities
│   └── index.ts
└── shared/                # Reusable code
    ├── ui/               # UI components
    ├── lib/              # Utilities
    ├── api/              # API config
    ├── config/           # App config
    ├── types/            # TypeScript types
    └── assets/           # Static assets
```

## 🎯 Path Aliases

Use these aliases in your imports:

- `@app/*` → `src/app/*`
- `@pages/*` → `src/pages/*`
- `@widgets/*` → `src/widgets/*`
- `@features/*` → `src/features/*`
- `@entities/*` → `src/entities/*`
- `@shared/*` → `src/shared/*`

## 🚀 Development

Start the dev server:

```bash
yarn dev
```

## 📖 Learn More

See `FSD_ARCHITECTURE.md` for detailed architecture documentation.
