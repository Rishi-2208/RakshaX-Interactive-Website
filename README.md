# RakshaX — Personal Emergency Safety Assistant
### Official Showcase Website | Seva First Innovation Challenge

![RakshaX Shield Logo](/images/logo/rakshax-logo.svg)

> **"Always Ready, Always Protected"**  
> *"A safer tomorrow starts with you."*  
> Developed by **Rishi Upadhyay** (Android Developer) for the **Seva First Innovation Challenge**.

---

## 🌟 Overview

**RakshaX** is an Android mobile emergency safety assistant designed to minimize panic, eliminate friction, and dispatch rapid help during critical moments. 

This repository contains the complete **Next.js App Router static showcase website** for the Seva First Innovation Challenge. It highlights the problem statement, proposed solution, verified Android technical architecture, privacy-first permission model, 6-step interactive walkthrough, and an interactive 22-screen screenshot lightbox gallery.

---

## 🚀 Key Features of the Showcase Website

1. **Direct Asset Reuse & Integrity**:
   - Built around the actual 22 mobile screenshots (11 dark mode, 11 light mode) from the RakshaX project.
   - Strictly respects asset guidelines (no unauthorized generic artwork).
   - Crisp SVG RakshaX brand shield vector emblem and wordmark.

2. **Interactive Screenshot Gallery & Lightbox**:
   - Filter by **All Themes**, **Dark Mode**, or **Light Mode**.
   - Filter by functional category (**Emergency SOS**, **Contacts**, **Onboarding**, **Security**, **Help & Support**, **Privacy**).
   - Real-time search by screen title, capability, or tag.
   - Fullscreen lightbox modal with **Next / Previous** buttons and keyboard shortcuts (`ArrowLeft`, `ArrowRight`, `Escape`).
   - Mobile screenshots use `object-fit: contain` within realistic device aspect ratios to prevent clipping.

3. **6-Step Interactive Walkthrough**:
   - Step 1: Welcome & Safety Gateway
   - Step 2: Authentication & Email OTP Verification
   - Step 3: Emergency SOS Dashboard & Jarvis Voice Assistant
   - Step 4: Emergency Contacts & Dual-Channel Dispatch
   - Step 5: In-App User Guidance & Emergency Protocols
   - Step 6: Privacy, Data Protection & Background Alerts
   - Features toggleable dark/light preview inside a responsive phone device mockup.

4. **Interactive Technical Architecture Diagram**:
   - Visualizes verified Android subsystems: Native UI, `ACCESS_FINE_LOCATION`, `SEND_SMS`, `READ_CONTACTS`, Jarvis Voice Listener, and recurring 15-20 min background updates.

5. **True Dual Theme Engine**:
   - Seamless Light Mode and Dark Mode support.
   - Zero-flicker on load with inline script persistence in `localStorage`.
   - Adheres to system `prefers-color-scheme` on first visit.

6. **Static Export for Render Deployment**:
   - Configured with `output: "export"` and `images: { unoptimized: true }`.
   - Generates pure static HTML/CSS/JS in `out/`.
   - Ready for zero-cost static hosting on Render, Vercel, GitHub Pages, or Netlify.

---

## 📁 Project Structure

```text
RakshaX_Interactive_Website/
├── app/
│   ├── globals.css              # Design tokens, variables & responsive styling
│   ├── layout.tsx               # Root layout, SEO metadata & theme script
│   └── page.tsx                 # Assembled showcase page
├── components/
│   ├── Navbar.tsx               # Sticky blurred navigation & mobile drawer
│   ├── Hero.tsx                 # Device mockup, telemetry badges & branding
│   ├── ProblemStatement.tsx     # Friction points & core principles
│   ├── ProposedSolution.tsx     # 4 Solution pillars & verification badges
│   ├── Features.tsx             # Bento grid of verified app capabilities
│   ├── Walkthrough.tsx          # 6-step interactive workflow simulator
│   ├── Gallery.tsx              # Searchable, filterable screenshot gallery & lightbox
│   ├── TechnicalArchitecture.tsx# Interactive Android pipeline & module inspector
│   ├── PrivacySection.tsx       # Transparent Android permissions & SOS-only policy
│   ├── SocialImpact.tsx         # Community impact & future scope roadmap
│   ├── ProjectInfo.tsx          # Seva First Challenge dossier & Rishi Upadhyay attribution
│   ├── Footer.tsx               # Final CTA banner & navigation directory
│   └── ThemeProvider.tsx        # React Context for theme toggling & persistence
├── data/
│   ├── screenshots.ts           # Typed screenshot dataset with features & tags
│   └── walkthrough.ts           # 6-step walkthrough descriptions & metrics
├── public/
│   ├── data/
│   │   └── screenshots.json     # Manifest for external consumers
│   └── images/
│       ├── logo/                # RakshaX shield SVG & full logo lockup
│       └── screenshots/
│           ├── dark/            # 11 authentic dark mode mobile screenshots
│           └── light/           # 11 authentic light mode mobile screenshots
├── next.config.mjs              # Static export configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project dependencies & build scripts
└── README.md                    # Project documentation
```

---

## 🛠️ Step-by-Step Instructions

### 1. Installing Dependencies

Make sure you have Node.js (v18 or higher) installed. Run:

```bash
npm install
```

### 2. Running the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the interactive site with hot reloading.

### 3. Building the Production Site

To test and compile the production bundle:

```bash
npm run build
```

Next.js will automatically export static files into the **`out/`** directory.

### 4. Testing the Static Export Locally

You can test the static export locally using any static web server:

```bash
npx serve out
```

Or using Python:

```bash
cd out
python -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080) to verify all static assets, filters, and modal interactions.

---

## 🌐 Deploying to Render (Static Site)

This project is tailored specifically for **Render Static Sites**.

### Step 5: Uploading to GitHub

1. Initialize a git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: complete RakshaX static showcase Next.js project"
   ```
2. Create a new repository on your GitHub account (e.g. `rakshax-showcase`).
3. Link and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/rakshax-showcase.git
   git branch -M main
   git push -u origin main
   ```

### Step 6: Deploying on Render

1. Log in to [Render](https://dashboard.render.com).
2. Click **New +** and select **Static Site**.
3. Connect your GitHub repository (`rakshax-showcase`).
4. Configure the build parameters:
   - **Name**: `rakshax` (or your preferred name)
   - **Branch**: `main`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `out`
5. Click **Create Static Site**.
6. Render will automatically install dependencies, build Next.js, and serve the `out/` folder globally on high-speed CDN.
7. Once deployed, Render will provide a public URL (e.g., `https://rakshax.onrender.com`).

---

## 🖼️ Updating Screenshots and Image Assets

To add new screenshots or replace existing ones:

1. Place the new screenshot images in:
   - Light mode: `public/images/screenshots/light/`
   - Dark mode: `public/images/screenshots/dark/`
2. Open `data/screenshots.ts` and add or edit the screenshot entry:
   ```typescript
   {
     id: "new-screen-id",
     filename: "New_Screen.jpg",
     src: "/images/screenshots/dark/New_Screen.jpg",
     title: "Feature Name",
     theme: "dark",
     category: "Emergency SOS",
     badge: "New",
     summary: "Brief explanation of screen capability",
     description: "In-depth description for lightbox modal",
     features: ["Feature 1", "Feature 2"],
     tags: ["tag1", "tag2"]
   }
   ```
3. Update `public/data/screenshots.json` if maintaining the public JSON manifest.
4. Run `npm run build` to re-export the static site.

---

## 🛡️ License & Acknowledgments

- **Project**: RakshaX
- **Challenge**: Seva First Innovation Challenge
- **Developer**: Rishi Upadhyay (Android Developer)
- **Tagline**: *"Always Ready, Always Protected"*
