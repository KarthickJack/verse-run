# Day 01: Project Kickoff & Game Blueprint
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 1 | **Theme:** Game Architecture & Pure Web Standards  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Understand the purpose and architecture of an endless runner game.
- [ ] Learn why pure web standards (HTML5, CSS3, Vanilla JS) are used without frameworks.
- [ ] Study the Game Blueprint document and understand technical constraints.
- [ ] Initialize the Git repository and establish professional commit habits.

---

## 📖 Key Concepts Explained
### 1. What is an Endless Runner?
In an endless runner game (like the classic Chrome Dino or Subway Surfers), the game world continues indefinitely. The illusion of forward motion is created by scrolling obstacles and background elements from right to left while keeping the player character anchored horizontally on the left side of the screen.

### 2. Why Pure Web Standards (Vanilla Stack)?
In C-VERSE, we deliberately avoid frameworks (like React, Angular, Vue) and game engines (like Phaser or Unity) for beginners. Learning pure HTML5, CSS3, and modern Vanilla JavaScript ensures you understand how the browser truly works under the hood:
- **HTML5:** Defines the semantic structure of the game elements.
- **CSS3:** Governs visual presentation, layers, coordinates, and arcade styling.
- **JavaScript (ES6+):** Controls real-time logic, physics, keyboard events, and state updates.

### 3. The Role of a Game Blueprint
Before writing a single line of code, professional game developers create a Game Blueprint (`docs/VERSE_RUN_GAME_BLUEPRINT.md`). It defines:
- The hero character (**Verse Man**).
- Core game states (`ready`, `playing`, `gameover`).
- Player physics and collision boundaries.
- Scoring rules and progressive difficulty tiers.

---

## 🔍 Code Walkthrough & Implementation Details
Review `docs/VERSE_RUN_GAME_BLUEPRINT.md` in the project root:
- Check the screen layout diagram.
- Observe how the game stage coordinate system is planned (left-to-right horizontal runway, fixed height of 220px).
- Note the rule that no external libraries, databases, or proprietary artwork are allowed.

---

## 💻 Student Practice Exercises
1. Read `docs/VERSE_RUN_GAME_BLUEPRINT.md` and list the three distinct screens/states planned for the game.
2. Explain in your own words why the player character does not physically move forward across the room in a runner game.
3. Verify your local Git setup by running `git status` and `git log` in your terminal.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> Always verify that you are on the `master` or feature branch before beginning work. A clean working directory prevents merge conflicts.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏭️ Next: Day 02](../day-02/README.md)
