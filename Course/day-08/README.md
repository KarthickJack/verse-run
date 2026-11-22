# Day 08: JavaScript Functions & Modular Architecture
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 2 | **Theme:** Functions, Scope, Parameters & Return Values  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Declare reusable named functions using the `function` keyword.
- [ ] Pass information into functions using parameters.
- [ ] Return computed values from functions using `return`.
- [ ] Understand variable scope (global vs. local function scope).

---

## 📖 Key Concepts Explained
### 1. Why Functions are Essential
A game involves repeated actions: updating score, rendering to the DOM, checking collisions, resetting objects. Writing these as functions allows you to execute the code from multiple places without duplicating logic:
```javascript
function renderScore() {
  if (scoreElement) {
    scoreElement.textContent = "SCORE: " + currentScore;
  }
}
```

### 2. Parameters and Return Values
Functions can accept inputs (parameters) and send back outputs (return values):
```javascript
function getGameSpeed(difficulty) {
  if (difficulty === "hard") {
    return 320;
  } else if (difficulty === "medium") {
    return 260;
  } else {
    return 200;
  }
}
```

### 3. Scope
Variables declared outside any function have **global scope** (accessible everywhere). Variables declared inside a function with `let` or `const` have **block/local scope** and cannot be accessed outside that function.

---

## 🔍 Code Walkthrough & Implementation Details
Examine helper functions in `js/game.js`:
- `getStageWidth()` returns the dynamic width of the arena.
- `getRandomSpawnInterval(difficulty)` calculates a random spawn timer based on difficulty.
Notice how each function has a single, well-defined responsibility.

---

## 💻 Student Practice Exercises
1. Write a function named `calculateBonus(coins)` that takes the number of coins and returns the total points (each coin = 10 pts).
2. What is the difference between declaring a function and calling (invoking) a function?
3. Explain what happens if a function finishes without an explicit `return` statement.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If a variable you declared inside a function is reported as `ReferenceError: x is not defined` outside the function, you are encountering variable scope. Return the value instead of trying to access it globally.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 07](../day-07/README.md)
- [⏭️ Next: Day 09](../day-09/README.md)
