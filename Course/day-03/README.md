# Day 03: CSS Styling & Retro Arcade Visual Design
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 1 | **Theme:** Styling, Colors & CSS Box Model  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Apply a universal reset (`* { box-sizing: border-box; }`).
- [ ] Establish the 'Retro Digital Arcade' theme with slate darks, cyan accents, and gold.
- [ ] Use monospace typography stacks (`Courier New`, monospace) for retro charm.
- [ ] Master the CSS Box Model: padding, margins, borders, and width/height.

---

## 📖 Key Concepts Explained
### 1. Universal Reset & `box-sizing: border-box`
By default in CSS, adding padding or borders to an element increases its total width on the page (`content-box`). Setting:
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```
forces padding and borders to stay *inside* the specified width, preventing accidental horizontal scrollbars and broken layouts.

### 2. The Retro Digital Arcade Palette
Color choices establish the visual identity of VERSE-RUN:
- Stage Sky: Deep midnight slate (`#0a0f1d`)
- Console Panel: Lighter slate (`#1e293b`)
- Verse Man: Electric cyan (`#38bdf8`) with light highlight border (`#bae6fd`)
- Obstacle: Arcade hazard red (`#ef4444`)
- Ground Track: Retro grass green (`#22c55e`)
- Scores: Neon cyan (`#38bdf8`) and arcade gold (`#f59e0b`)

---

## 🔍 Code Walkthrough & Implementation Details
In `css/style.css`, observe how `#game-wrapper` is styled as an arcade console:
```css
#game-wrapper {
  background-color: #1e293b;
  border: 2px solid #334155;
  border-radius: 12px;
  padding: 24px;
}
```
The `#hud-container` uses `display: flex; justify-content: space-between;` to push the High Score to the far left and Current Score to the far right.

---

## 💻 Student Practice Exercises
1. Change the border radius of `#game-wrapper` in DevTools to see how corner curvature changes.
2. Explain the difference between `margin` (space outside an element) and `padding` (space inside an element).
3. Identify the font stack used for retro styling across headings and HUD counters.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If text overlaps or extends outside containers, check if fixed pixel widths were applied to text elements without allowing auto wrapping.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 02](../day-02/README.md)
- [⏭️ Next: Day 04](../day-04/README.md)
