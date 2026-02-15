# Neobrutalist Portfolio

Single-page React portfolio with a dark Neobrutalist design: thick borders, hard shadows, and high contrast.

## Run locally

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Customize

- Replace `[YOUR NAME]` in the Hero, Footer, and page title with your name.
- Update experience, projects, and blogs in the data arrays at the top of `src/App.jsx`.
- Swap placeholder avatars and thumbnails for real images.

## Hero 3D Lanyard

The hero section uses a physics-based 3D lanyard (React Three Fiber + Rapier). To enable it, add these assets to the **`public/`** folder:

- **`public/card.glb`** – 3D card/clip model (GLB format)
- **`public/lanyard.png`** – Lanyard strap texture

If either file is missing, the hero falls back to the static profile image.

## Stack

- React 18 + Hooks
- Tailwind CSS
- React Three Fiber, drei, Rapier, meshline (hero 3D)
- Lucide React icons
- Vite
