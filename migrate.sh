#!/bin/bash

# Custom migration script for dipendrabhandari's UI Library
# Run this from your project root directory

echo "🚀 Starting monorepo migration for React UI Library..."
echo ""

# Create packages directory structure
echo "📁 Creating monorepo structure..."
mkdir -p packages/ui-library/src
mkdir -p packages/showcase/src

# Copy components to library
echo "📦 Setting up UI Library package..."
if [ -d "src/components" ]; then
  cp -r src/components packages/ui-library/src/
  echo "  ✓ Copied components (accordion, button, dropdown, imageslider, slider, tabs)"
fi

# Copy hooks to library
if [ -d "src/hooks" ]; then
  cp -r src/hooks packages/ui-library/src/
  echo "  ✓ Copied hooks (useClickOutside, useCopyToClipboard, useFormValidation, etc.)"
fi

# Copy data if needed
if [ -d "src/data" ]; then
  cp -r src/data packages/ui-library/src/
  echo "  ✓ Copied data folder"
fi

# Copy assets folder (keep original in src for now)
if [ -d "src/assets" ]; then
  cp -r src/assets packages/ui-library/src/
  echo "  ✓ Copied assets to library"
fi

# Move showcase files
echo "🌐 Setting up Showcase package..."
if [ -d "src/pages" ]; then
  cp -r src/pages packages/showcase/src/
  echo "  ✓ Copied pages"
fi

if [ -d "src/layouts" ]; then
  cp -r src/layouts packages/showcase/src/
  echo "  ✓ Copied layouts"
fi

if [ -d "src/router" ]; then
  cp -r src/router packages/showcase/src/
  echo "  ✓ Copied router"
fi

if [ -d "src/assets" ]; then
  cp -r src/assets packages/showcase/src/
  echo "  ✓ Copied assets to showcase"
fi

# Copy main app files
if [ -f "src/App.jsx" ]; then
  cp src/App.jsx packages/showcase/src/
  echo "  ✓ Copied App.jsx"
fi

if [ -f "src/App.css" ]; then
  cp src/App.css packages/showcase/src/
  echo "  ✓ Copied App.css"
fi

if [ -f "src/main.jsx" ]; then
  cp src/main.jsx packages/showcase/src/
  echo "  ✓ Copied main.jsx"
fi

if [ -f "src/index.css" ]; then
  cp src/index.css packages/showcase/src/
  echo "  ✓ Copied index.css"
fi

# Copy public and index.html
if [ -d "public" ]; then
  cp -r public packages/showcase/
  echo "  ✓ Copied public folder"
fi

if [ -f "index.html" ]; then
  cp index.html packages/showcase/
  echo "  ✓ Copied index.html"
fi

# Copy vite config
if [ -f "vite.config.js" ]; then
  cp vite.config.js packages/showcase/
  echo "  ✓ Copied vite.config.js"
fi

# Copy other config files that showcase needs
if [ -f "eslint.config.js" ]; then
  cp eslint.config.js packages/showcase/
  echo "  ✓ Copied eslint.config.js"
fi

# Backup original package.json
if [ -f "package.json" ]; then
  cp package.json package.json.backup
  echo "  ✓ Backed up original package.json"
fi

echo ""
echo "✅ File structure created successfully!"
echo ""
echo "📝 Next steps:"
echo ""
echo "1. Create the following files (I'll provide the content):"
echo "   - package.json (root)"
echo "   - packages/ui-library/package.json"
echo "   - packages/ui-library/rollup.config.js"
echo "   - packages/ui-library/src/index.js"
echo "   - packages/showcase/package.json"
echo ""
echo "2. Install dependencies:"
echo "   npm install"
echo ""
echo "3. Build the library:"
echo "   npm run build:lib"
echo ""
echo "4. Test showcase:"
echo "   npm run dev:showcase"
echo ""
echo "5. Publish to npm:"
echo "   npm run publish:lib"
echo ""
echo "🎉 Your original files are still intact in src/"
echo "📦 Library files are in packages/ui-library/"
echo "🌐 Showcase files are in packages/showcase/"