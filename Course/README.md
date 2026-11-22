# C-VERSE: VERSE-RUN Curriculum Guide 🏃‍♂️📘

> **A 20-Day Step-by-Step Curriculum for Beginner Web Developers**  
> Learn pure HTML5, CSS3, and Vanilla JavaScript by building an original 2D retro arcade endless runner browser game from scratch.

---

## 🧭 Course Overview

This curriculum is engineered for beginners learning web development through hands-on project-based engineering. Every day introduces focused, modular programming concepts that directly contribute to the final published game: **VERSE-RUN**.

Zero external libraries, game engines, or build frameworks are used — pure web standards under the hood!

---

## 📅 20-Day Curriculum Roadmap

| Day | Topic | Key Focus & Concepts | Guide Link |
| :---: | :--- | :--- | :---: |
| **Week 1** | **Web Foundations & Architecture** | | |
| **01** | Project Kickoff & Game Blueprint | Architecture, constraints, hero design, blueprint | [Day 01 Guide](day-01/README.md) |
| **02** | HTML5 Semantic Structure & Layout | `<header>`, `<main>`, `<section>`, DOM stage hierarchy | [Day 02 Guide](day-02/README.md) |
| **03** | CSS Styling & Visual Design | Universal reset, `border-box`, retro color palette | [Day 03 Guide](day-03/README.md) |
| **04** | CSS Positioning & Scenery Animation | `relative` vs `absolute`, `z-index`, `@keyframes` | [Day 04 Guide](day-04/README.md) |
| **05** | JavaScript Foundations & Console Logging | Script linking, `let` vs `const`, primitive types | [Day 05 Guide](day-05/README.md) |
| **Week 2** | **Interactivity & DOM Programming** | | |
| **06** | DOM Selection & Dynamic Text Updates | `getElementById`, caching references, `.textContent` | [Day 06 Guide](day-06/README.md) |
| **07** | Operators, Mathematical Logic & Rules | Arithmetic, strict equality `===`, boolean conditions | [Day 07 Guide](day-07/README.md) |
| **08** | Functions & Modular Architecture | Parameters, return values, variable scope, helpers | [Day 08 Guide](day-08/README.md) |
| **09** | Mouse Click Events & Button Feedback | `addEventListener`, callback references, button hover | [Day 09 Guide](day-09/README.md) |
| **10** | Keyboard Input & Scroll Prevention | `keydown`, `event.code`, `preventDefault()`, repeat | [Day 10 Guide](day-10/README.md) |
| **Week 3** | **Core Game Engine & Mechanics** | | |
| **11** | Game Loop & Delta Time Synchronization | `requestAnimationFrame`, `deltaTime`, frame rates | [Day 11 Guide](day-11/README.md) |
| **12** | Player Physics & Jump Mechanics | Gravity ($1600\text{ px/s}^2$), jump velocity, ground baseline | [Day 12 Guide](day-12/README.md) |
| **13** | Bounding Boxes & AABB Collision | `getBoundingClientRect()`, AABB 4 overlap checks | [Day 13 Guide](day-13/README.md) |
| **14** | Finite State Machine & State Guards | State machine (`ready`, `playing`, `gameover`), guards | [Day 14 Guide](day-14/README.md) |
| **15** | Time-Based Scoring & Progressive Difficulty | Delta accumulator, Easy/Medium/Hard speeds ($200-320\text{ px/s}$) | [Day 15 Guide](day-15/README.md) |
| **Week 4** | **Polish, Testing & Deployment** | | |
| **16** | Continuous Movement & Respawning | Delta displacement, offscreen detection ($x < -90$), gaps | [Day 16 Guide](day-16/README.md) |
| **17** | Multiple Obstacles & Dynamic DOM | `activeObstacles` array, reverse iteration, proximity | [Day 17 Guide](day-17/README.md) |
| **18** | Collectibles & Score Feedback | `Verse Coin`, reachable altitudes, floating `+10` | [Day 18 Guide](day-18/README.md) |
| **19** | Testing, Debugging & Responsive Design | Edge-case testing, restart fixes, `@media (max-width: 600px)` | [Day 19 Guide](day-19/README.md) |
| **20** | Static Hosting, Deployment & Showcase | GitHub Pages, relative paths, project presentation | [Day 20 Guide](day-20/README.md) |

---

## 🎓 How Students Should Use This Course

1. **Follow Chronologically:** Each day builds directly upon the code and concepts established on previous days.
2. **Read the Concepts First:** Understand *why* an architectural choice is made before writing the code.
3. **Inspect the Real Codebase:** Open the corresponding source files in VS Code and locate the implementations.
4. **Complete the Practice Exercises:** Test your knowledge by answering the conceptual questions and modifying values in browser DevTools.
5. **Debug Actively:** Read the *Common Mistakes* section on each day to recognize and fix errors independently.
