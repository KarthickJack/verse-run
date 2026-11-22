# Day 05: JavaScript Foundations & Console Verification
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 1 | **Theme:** Variables, Data Types & Console Logging  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Link external `js/game.js` to `index.html` with proper script execution timing.
- [ ] Declare game state variables using `let` and `const`.
- [ ] Understand primitive JavaScript data types (String, Number, Boolean, Null).
- [ ] Output formatted diagnostic messages to browser Developer Tools (`console.log`).

---

## 📖 Key Concepts Explained
### 1. The Role of JavaScript in VERSE-RUN
HTML creates the game elements, and CSS styles them. JavaScript gives the game a 'brain'. It tracks scores, simulates gravity, detects collisions, and decides when the game is over.

### 2. `const` vs. `let`
- `const`: Used for variables that should never be reassigned (e.g. `gameTitle = "VERSE-RUN"`, `characterName = "Verse Man"`, `gravity = 1600`).
- `let`: Used for variables that change continuously during gameplay (e.g. `currentScore = 0`, `playerY = 0`, `gameState = "ready"`).

### 3. JavaScript Data Types in VERSE-RUN
- **String:** Text data enclosed in quotes (`"ready"`, `"easy"`).
- **Number:** Integers and floating-point values (`200`, `35.5`, `0`).
- **Boolean:** Truth values (`true`, `false`) representing binary conditions (`isPlayerOnGround`, `isGameRunning`).
- **Null:** Intentional absence of any object value (`gameOverMessage = null`).

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js`:
```javascript
const gameTitle = "VERSE-RUN";
const characterName = "Verse Man";
let currentScore = 0;
let isGameRunning = false;
let isPlayerOnGround = true;

console.log("--- INITIAL GAME STATE ---");
console.log("Game Title:", gameTitle);
console.log("Current Score:", currentScore);
```
Open your browser Developer Tools (Press F12 -> Console tab) to inspect the output when `index.html` loads.

---

## 💻 Student Practice Exercises
1. Open browser DevTools Console and verify that the initial game state outputs are visible.
2. Why is `characterName` declared with `const` while `currentScore` is declared with `let`?
3. Write a `console.log` statement displaying the boolean value of `isPlayerOnGround`.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If your script doesn't execute at all, check the browser console for file loading errors (e.g. 404 Not Found on `js/game.js`). Make sure the script tag path matches the folder structure.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 04](../day-04/README.md)
- [⏭️ Next: Day 06](../day-06/README.md)
