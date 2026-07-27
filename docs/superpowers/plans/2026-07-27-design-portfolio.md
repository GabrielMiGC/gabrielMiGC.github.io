# Design Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a static bilingual design portfolio route with project detail pages for Orkestra, Qomanda, and NutriPro.

**Architecture:** Keep GitHub Pages deployment simple by adding static HTML/CSS/JS and local image assets under `design/`. The design landing page uses animated background rails sourced from the three Instagram carousel projects, while project pages reuse a shared stylesheet and small language toggle script.

**Tech Stack:** Static HTML, CSS animations, vanilla JavaScript, local PNG assets, GitHub Pages.

## Global Constraints

- Keep EN/PT language alternation like the existing `index.html`.
- Create `/design/` plus `/design/orkestra/`, `/design/qomanda/`, and `/design/nutripro/`.
- Use the supplied ZIP assets from `C:\Users\gabri\Downloads`.
- Include Orkestra loading states material from `Orkestra (1).zip`.
- Avoid build tooling; the repository deploys the root as a static Pages artifact.
- Commit all finished work on `codex/design-portfolio`.

---

### Task 1: Asset Organization

**Files:**
- Create: `design/assets/nutripro/*.png`
- Create: `design/assets/qomanda/*.png`
- Create: `design/assets/orkestra/cards/*.png`
- Create: `design/assets/orkestra/loading/*`

**Interfaces:**
- Consumes: ZIP files in `C:\Users\gabri\Downloads`.
- Produces: Stable relative asset paths used by all design pages.

- [ ] **Step 1: Create asset directories**

Run: `New-Item -ItemType Directory -Force -Path design\assets\nutripro, design\assets\qomanda, design\assets\orkestra\cards, design\assets\orkestra\loading`

- [ ] **Step 2: Extract source ZIP files**

Run `Expand-Archive` for NutriPro, Qomanda, `orkestra.zip`, and `Orkestra (1).zip` into `C:\tmp\design-assets-*` directories.

- [ ] **Step 3: Copy only web-facing image and loader assets**

Copy NutriPro PNG cards, Qomanda PNG cards, Orkestra PNG cards, and Orkestra loader HTML/assets into the matching `design/assets` folders.

- [ ] **Step 4: Verify counts**

Run: `Get-ChildItem -Recurse design\assets | Select-Object FullName`

Expected: NutriPro has 8 PNGs, Qomanda has 3 PNGs, Orkestra cards have 8 PNGs, Orkestra loading has HTML/image support files.

### Task 2: Shared Design Portfolio System

**Files:**
- Create: `design/styles.css`
- Create: `design/design.js`

**Interfaces:**
- Consumes: Elements with `data-key`, `data-lang-target`, `.rail-track`, and `data-duplicate`.
- Produces: Shared styling, animated rails, bilingual copy behavior, and reusable project-page layouts.

- [ ] **Step 1: Add shared CSS**

Create a dark portfolio visual system matching the existing site variables, responsive nav, animated card rails, project grids, and project detail sections.

- [ ] **Step 2: Add shared JavaScript**

Create `design.js` with a `copy` dictionary for EN/PT text and a language toggle that updates all `[data-key]` elements and stores `designLang` in `localStorage`.

- [ ] **Step 3: Verify static references**

Run: `Select-String -Path design\*.html,design\*\index.html -Pattern "styles.css|design.js"` after pages exist.

Expected: All design pages reference `../styles.css` or `styles.css` correctly based on route depth.

### Task 3: Design Landing Route

**Files:**
- Create: `design/index.html`

**Interfaces:**
- Consumes: Shared CSS/JS and project image assets.
- Produces: Public `/design/` route with animated carousel background, intro paragraph, and links to project pages.

- [ ] **Step 1: Build hero**

Add three moving rails: NutriPro top moving left, Qomanda middle moving right, Orkestra bottom moving left. Overlay hero copy and navigation.

- [ ] **Step 2: Build middle paragraph**

Add bilingual copy explaining Canva, CapCut, and Miranda Labs system design work.

- [ ] **Step 3: Build project links**

Add three project cards linking to `./orkestra/`, `./qomanda/`, and `./nutripro/`.

### Task 4: Project Detail Routes

**Files:**
- Create: `design/orkestra/index.html`
- Create: `design/qomanda/index.html`
- Create: `design/nutripro/index.html`

**Interfaces:**
- Consumes: Shared CSS/JS and each project asset folder.
- Produces: Detail pages ready to send directly to a hiring contact.

- [ ] **Step 1: Build Orkestra page**

Include overview, 8-card gallery, and a loading states section linking to/rendering the supplied loader material.

- [ ] **Step 2: Build Qomanda page**

Include overview and 3-card carousel/gallery.

- [ ] **Step 3: Build NutriPro page**

Include overview and 8-card carousel/gallery.

### Task 5: Main Landing Link

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: Existing nav structure and EN/PT dictionary.
- Produces: Discoverable link from current landing page to `/design/`.

- [ ] **Step 1: Add nav link**

Add a design portfolio nav link near projects.

- [ ] **Step 2: Add CTA link**

Add a secondary CTA to `design/` in the hero or project section.

- [ ] **Step 3: Add translations**

Add `nav_design` and `cta_design` copy to both language dictionaries.

### Task 6: Verification and Commit

**Files:**
- Verify all changed files.

**Interfaces:**
- Consumes: Finished static site.
- Produces: A local commit with all changes.

- [ ] **Step 1: Validate file references**

Run: `Select-String -Path design\*.html,design\*\index.html -Pattern "src=|href="`.

- [ ] **Step 2: Start local static server**

Run: `python -m http.server 8080`.

- [ ] **Step 3: Smoke test pages**

Open `/`, `/design/`, `/design/orkestra/`, `/design/qomanda/`, `/design/nutripro/` and confirm assets load.

- [ ] **Step 4: Stage and commit**

Run: `git add .` and `git commit -m "feat: add design portfolio routes"`.
