# Day 20: Static Hosting, Deployment & Project Showcase
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 4 | **Theme:** GitHub Pages Deployment & Presentation Mastery  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Verify static hosting suitability (root entry point, relative paths, no build steps).
- [ ] Deploy the project to GitHub Pages using branch-based publishing.
- [ ] Author professional documentation in `README.md`.
- [ ] Deliver a 10-point technical presentation explaining VERSE-RUN from scratch.

---

## 📖 Key Concepts Explained
### 1. Static Web Hosting with GitHub Pages
GitHub Pages serves HTML, CSS, and JavaScript directly from a GitHub repository to the public internet. Because VERSE-RUN has no backend server or database, it is 100% static-compatible.

### 2. Relative Paths vs. Root-Relative Paths
On GitHub Pages, project repositories are hosted under a sub-path:
`https://<username>.github.io/<repository-name>/`
- Root-relative path (`href="/css/style.css"`): Looks at `https://<username>.github.io/css/style.css` $\rightarrow$ **404 BROKEN!**
- Relative path (`href="css/style.css"`): Looks at `https://<username>.github.io/<repository-name>/css/style.css` $\rightarrow$ **WORKS PERFECTLY!**

### 3. Technical Showcase Mastery
A professional developer must be able to articulate *how* their code works to non-technical stakeholders and fellow engineers alike:
- What problem inspired the game?
- How the continuous game loop works.
- How velocity and gravity create parabolic jumping.
- How AABB bounding box collision works.
- How the finite state machine protects game integrity.
- How progressive difficulty and score separation work.

---

## 🔍 Code Walkthrough & Implementation Details
In `README.md`:
Review the project overview, controls table, technology badges, and local running instructions.
Review Section 7 of the Day 20 Showcase Outline for the 10-point student presentation script.

---

## 💻 Student Practice Exercises
1. Verify that your GitHub repository settings have GitHub Pages enabled on the `master` branch.
2. Practice delivering the 10-point showcase demonstration aloud in your own words.
3. Share your live GitHub Pages game URL (`https://<username>.github.io/verse-run/`) with friends and test on a mobile phone.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If GitHub Pages shows a blank white page, open browser DevTools Console on the live URL and check for 404 errors. 99% of GitHub Pages deployment errors are caused by accidental root-relative `/` paths.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 19](../day-19/README.md)
