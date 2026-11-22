# Day 07: Operators, Mathematical Logic & Game Rules
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 2 | **Theme:** Arithmetic, Comparison & Logical Operators  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Use arithmetic operators (`+`, `-`, `*`, `/`) for gameplay mathematics.
- [ ] Evaluate equality and comparison operators (`===`, `!==`, `<`, `>`).
- [ ] Combine conditions using logical operators (`&&`, `||`, `!`).
- [ ] Build boolean rule evaluations for player status.

---

## 📖 Key Concepts Explained
### 1. Arithmetic Operators in Game Engines
- `+` (Addition): Incrementing score, calculating right bounding edge (`left + width`).
- `-` (Subtraction): Applying velocity (`playerY -= velocity * dt`), moving obstacles leftward.
- `*` (Multiplication): Scaling displacement by elapsed time (`speed * deltaTime`).
- `/` (Division): Converting milliseconds to seconds (`timestamp / 1000`).

### 2. Strict Equality (`===`) vs Loose Equality (`==`)
In JavaScript, always use strict equality `===`:
- `"0" == 0` evaluates to `true` (unintended type coercion!).
- `"0" === 0` evaluates to `false` (compares both type and value).

### 3. Logical Operators
- `&&` (AND): Both conditions must be true (`isPlayerOnGround && gameState === "playing"`).
- `||` (OR): At least one condition must be true (`event.code === "Space" || event.key === "ArrowUp"`).
- `!` (NOT): Inverts a boolean flag (`!isPlayerAlive`).

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js` Day 7 Playground section:
```javascript
let playerCanJump = isPlayerOnGround && !hasCollided && gameState === "playing";
console.log("Can player jump?", playerCanJump);
```
This multi-variable condition guarantees that dead runners or airborne runners cannot trigger jump impulses.

---

## 💻 Student Practice Exercises
1. Evaluate what `(100 > 50) && (20 === 20)` returns in JavaScript.
2. Write an expression that checks if a runner's score is between 100 and 199 (inclusive).
3. Explain why strict inequality `!==` is preferred over `!=`.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> Watch out for single `=` versus triple `===`. Writing `if (gameState = 'playing')` assigns the value instead of comparing it, causing a subtle bug where the condition is always truthy!

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 06](../day-06/README.md)
- [⏭️ Next: Day 08](../day-08/README.md)
