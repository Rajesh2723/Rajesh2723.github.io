# Rajesh G — Portfolio

A single-page portfolio site, styled like an API response — fitting for a backend engineer.

## Files

```
index.html    — page structure & content
style.css     — design system (colors, type, layout)
script.js     — scroll-reveal animations
```

No build step, no dependencies. It's plain HTML/CSS/JS, so it runs anywhere.

## Before you publish — 3 things to update

1. **GitHub link** — in `index.html`, find:
   ```html
   <a href="#" target="_blank" rel="noopener" class="contact-item" id="github-link">
   ```
   Replace `href="#"` with your actual GitHub profile URL, and update the visible text
   `github.com/your-username` right below it.

2. **Résumé download** — find:
   ```html
   <a href="#" class="btn btn-ghost" id="resume-link">Download résumé</a>
   ```
   Add your résumé PDF to the project folder (e.g. `Rajesh_G_Resume.pdf`) and change
   `href="#"` to `href="Rajesh_G_Resume.pdf"`.

3. **Project links** (optional) — if your URL Shortener or Quiz Platform projects are on
   GitHub, you may want to wrap the project card titles in `<a>` tags pointing to those repos.

## Deploy to GitHub Pages

### Option A: New repository named `your-username.github.io`
This makes the site live at `https://your-username.github.io`.

```bash
# 1. Create a new repo on GitHub named exactly: your-username.github.io
# 2. Clone it locally, then copy these 3 files (+ resume PDF) into it
git clone https://github.com/your-username/your-username.github.io.git
cd your-username.github.io
cp /path/to/index.html /path/to/style.css /path/to/script.js .
git add .
git commit -m "Add portfolio site"
git push origin main
```
Wait 1–2 minutes, then visit `https://your-username.github.io`.

### Option B: Any other repository (project site)
Site will be live at `https://your-username.github.io/repo-name`.

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/your-username/repo-name.git
git push -u origin main
```
Then on GitHub: go to **Settings → Pages → Source**, select branch `main` and folder `/ (root)`, and save.

## Customizing

- **Colors** — all defined as CSS variables at the top of `style.css` under `:root`. Change `--accent` to recolor every highlight at once.
- **Fonts** — loaded from Google Fonts in `index.html`'s `<head>`. Swap the `<link>` and the `--font-*` variables in `style.css` together.
- **Content** — everything is plain text/markup in `index.html`, organized by section comments (`<!-- HERO -->`, `<!-- EXPERIENCE LOG -->`, etc).
