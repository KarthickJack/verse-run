# Day 18: Collectibles, Visual Feedback & Score Separation
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 4 | **Theme:** Collectibles, Reachable Altitudes & Visual Polish  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Design and style the original **Verse Coin** token (`.verse-coin`).
- [ ] Manage collectibles via `activeCoins` array with single-award flags (`isCollected`).
- [ ] Spawn coins at reachable altitudes ($15\text{ px}, 60\text{ px}, 75\text{ px}$) avoiding obstacles.
- [ ] Create floating visual score feedback indicators (`+10`) with CSS `@keyframes`.
- [ ] Separate `survivalScore` from `bonusScore` to protect difficulty progression.

---

## 📖 Key Concepts Explained
### 1. Reachable Altitude Calibration
Collectibles must be placed where the player can actually reach them:
- Running altitude ($15\text{ px}$ above track): Collected by running on the ground.
- Jump altitude ($60\text{ px}$ and $75\text{ px}$ above track): Collected at the peak of Verse Man's jump arc ($112.5\text{ px}$).

### 2. Obstacle Proximity Avoidance
A coin placed inside an obstacle is a death trap! Before spawning a coin at the right edge, we verify no obstacle is nearby:
```javascript
for (let i = 0; i < activeObstacles.length; i++) {
  if (Math.abs(activeObstacles[i].x - stageWidth) < 100) {
    isNearObstacle = true; // Defer spawn!
  }
}
```

### 3. Floating Score Feedback Animation
When a coin is collected, we create a floating `.score-feedback` text element:
```css
@keyframes floatUpFade {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-28px); }
}
```
The indicator floats upward by 28px while fading away, giving immediate arcade feedback.

### 4. Separation of Scores (Difficulty Protection)
If bonus points increased the difficulty score, grabbing 10 coins would jump the player into HARD speed immediately!
- `survivalScore`: Time survived (drives difficulty tiers).
- `bonusScore`: $+10$ points per coin collected.
- `currentScore`: Rendered on HUD ($= \text{survivalScore} + \text{bonusScore}$).

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js` lines 380-560:
Review `createCoin()`, `updateCoins()`, `triggerCollectionFeedback()`, and `collectCoin()`.
Notice `coinObj.isCollected = true` guarantees a coin awards points only once.

---

## 💻 Student Practice Exercises
1. Why must coins not spawn at an altitude higher than 110px? (Hint: Check jump peak).
2. Explain why `survivalScore` and `bonusScore` are stored in separate variables.
3. Observe the floating `+10` animation in the browser and trace its CSS animation lifecycle.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If touching a coin gives 20 or 30 points instead of 10, check for duplicate collision checks or missing `isCollected` guards inside the collision loop.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 17](../day-17/README.md)
- [⏭️ Next: Day 19](../day-19/README.md)
