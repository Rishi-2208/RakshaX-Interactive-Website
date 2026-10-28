# RakshaX Interactive Project Website

A responsive static website for the Seva First Innovation Challenge. Includes the two supplied welcome illustrations, the 22 screenshots from the uploaded RakshaX archive, a searchable/filterable gallery, image lightbox with next/previous navigation, mobile menu, and light/dark theme toggle.

## Folder structure

- `index.html` — page content and sections
- `styles.css` — responsive styling and theme variables
- `script.js` — interactive theme, navigation, gallery, and image viewer
- `assets/banners/` — light and dark welcome illustrations
- `assets/screenshots/light/` — light-mode app screenshots
- `assets/screenshots/dark/` — dark-mode app screenshots
- `assets/screenshots/other/` — screenshots without a theme label
- `assets/screenshots.json` — gallery manifest

## Preview locally

Because the gallery loads `assets/screenshots.json` using `fetch`, run it through a local static server rather than opening `index.html` directly.

Option A: VS Code Live Server
1. Extract the ZIP.
2. Open the extracted folder in VS Code.
3. Install/use the Live Server extension.
4. Right-click `index.html` → Open with Live Server.

Option B: Python
From this folder, run:
`python -m http.server 8000`
Then open `http://localhost:8000`.

## Deploy to Render

1. Upload all files and folders in this project to a GitHub repository.
2. In Render, choose **New + → Static Site** and connect the repository.
3. Build command: leave blank if permitted.
4. Publish directory: `.`
5. Create the static site and use the public URL provided by Render.

## Before sharing with judges

- Confirm every feature claim against the actual app implementation.
- Replace the conceptual architecture with your actual technical stack and data flow.
- Add real demo/repository/APK links only when ready.
- Do not include API keys, passwords, private credentials, or personal contact details that should not be public.
