# Day 15: Time-Based Scoring & Progressive Difficulty
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 3 | **Theme:** Accumulators, Difficulty Curves & Speed Scaling  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Implement frame-rate independent scoring using a time accumulator.
- [ ] Define difficulty tiers: Easy ($<100$), Medium ($100-199$), Hard ($\ge 200$).
- [ ] Dynamically map difficulty tiers to game speed ($200 \to 260 \to 320\text{ px/s}$).
- [ ] Update the HUD and status messages on difficulty level-ups.

---

## 📖 Key Concepts Explained
### 1. The Time Accumulator Pattern
To award exactly 1 score point per second survived without using `setInterval`, we accumulate `deltaTime` on every frame:
```javascript
elapsedScoreTime += deltaTime;
while (elapsedScoreTime >= 1.0) {
  survivalScore += 1;
  elapsedScoreTime -= 1.0;
  scoreChanged = true;
}
```
Using a `while` loop guarantees that if a lag spike occurs (e.g. 2.5s), exactly 2 points are awarded and the remaining 0.5s is retained in the accumulator!

### 2. Progressive Difficulty Tiers
Games become boring if they don't get harder. VERSE-RUN scales speed over time:
- **EASY (Score 0–99):** `gameSpeed = 200 px/s` (Relaxed learning pace).
- **MEDIUM (Score 100–199):** `gameSpeed = 260 px/s` (Brisk running pace).
- **HARD (Score 200+):** `gameSpeed = 320 px/s` (Intense arcade reflex pace).

### 3. Evaluating Difficulty from Highest Tier First
When writing if-else threshold logic, always evaluate the highest number first:
```javascript
function getDifficulty(score) {
  if (score >= 200) return "hard";
  if (score >= 100) return "medium";
  return "easy";
}
```

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js` lines 565-615:
Notice how `updateDifficulty()` checks if `newDifficulty !== currentDifficulty`. Only when the tier changes does it log 'DIFFICULTY LEVEL UP!' and update the status message, avoiding DOM thrashing.

---

## 💻 Student Practice Exercises
1. Explain why checking `if (score >= 100)` before `if (score >= 200)` would cause a bug.
2. If a runner survives for 12.4 seconds, what will `survivalScore` and `elapsedScoreTime` be?
3. What game speed is applied when a player reaches a score of 150?

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> Avoid re-rendering DOM elements on every single animation frame. Only call `renderScore()` when `scoreChanged` is true to maintain optimal 60+ FPS performance.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 14](../day-14/README.md)
- [⏭️ Next: Day 16](../day-16/README.md)
