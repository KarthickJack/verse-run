# Day 02: HTML5 Semantic Structure & Game Layout
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 1 | **Theme:** Document Structure & Layout Architecture  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Learn semantic HTML5 tags: `<header>`, `<main>`, `<section>`, `<footer>`.
- [ ] Construct `#app-container`, `#game-wrapper`, `#game-stage`, and `#hud-container`.
- [ ] Create initial placeholder elements for Verse Man, Obstacles, and Ground.
- [ ] Set up responsive `<meta name="viewport">` and link external stylesheets and scripts.

---

## 📖 Key Concepts Explained
### 1. Semantic Elements vs. Generic `<div>`s
HTML5 provides semantic tags that describe the meaning of content to browsers, search engines, and assistive devices:
- `<header>`: Contains the game title and description.
- `<main>`: Wraps the core game experience.
- `<section>`: Houses distinct standalone sections like the "How to Play" instructions.
- `<footer>`: Contains branding and educational notices.

### 2. The Game Stage Hierarchy
In `index.html`, the game elements are organized into a strict parent-child hierarchy:
- `#app-container`: Centers the entire app on the user's screen.
- `#game-wrapper`: The retro arcade console card.
- `#hud-container`: Heads-Up Display showing High Score and Current Score.
- `#game-stage`: The visual coordinate arena (parent of Verse Man, obstacles, cloud, ground).
- `#controls-container`: Houses the Start Game button and dynamic status feedback.

---

## 🔍 Code Walkthrough & Implementation Details
Inspect `index.html`:
```html
<div id="game-stage">
  <div id="cloud">☁ CLOUD</div>
  <div id="verse-man">Verse Man (Player)</div>
  <div id="obstacle">OBSTACLE</div>
  <div id="ground">Ground Track</div>
</div>
```
Notice how all interactive visual elements live inside `#game-stage`. This allows CSS to position them relative to the stage rather than the whole webpage.

---

## 💻 Student Practice Exercises
1. Identify where the external stylesheet (`css/style.css`) is linked in `index.html`.
2. Explain why `<script src="js/game.js" defer></script>` uses the `defer` attribute.
3. Add an appropriate `aria-label` or verify that the `<button id="start-btn" type="button">` has a valid button type.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If elements appear in the wrong order or outside the box, inspect the opening and closing `<div>` tags. An unclosed `<div>` can break the entire layout hierarchy.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 01](../day-01/README.md)
- [⏭️ Next: Day 03](../day-03/README.md)
