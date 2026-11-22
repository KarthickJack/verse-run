# Day 11: The Game Loop & Delta Time Synchronization
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 3 | **Theme:** Animation Frames, Delta Time & Frame Rates  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Understand why `setInterval` is unsuitable for game animation.
- [ ] Implement continuous rendering using `requestAnimationFrame`.
- [ ] Calculate elapsed `deltaTime` between frames.
- [ ] Clamp delta time to prevent physics teleportation during tab pauses.

---

## 📖 Key Concepts Explained
### 1. Why `requestAnimationFrame`?
`setInterval()` runs on a fixed timer regardless of whether the browser is ready to draw. This causes stuttering and screen tearing.
`requestAnimationFrame(callback)` synchronizes code execution with the user's monitor refresh rate (typically 60Hz or 120Hz), saving battery and delivering buttery-smooth 60+ FPS motion.

### 2. What is Delta Time (`deltaTime`)?
Different computers run at different frame rates:
- A 60Hz monitor updates every $\approx 0.0166\text{ s}$ ($16.6\text{ ms}$).
- A 120Hz monitor updates every $\approx 0.0083\text{ s}$ ($8.3\text{ ms}$).
If you moved an obstacle a fixed 5 pixels per frame, it would move twice as fast on a 120Hz screen!
`deltaTime` measures the exact seconds elapsed since the last frame:
$$\text{deltaTime} = \frac{\text{currentTimestamp} - \text{lastTimestamp}}{1000}$$
By multiplying movement by `deltaTime`, objects move at the exact same physical speed on ALL devices:
$$\text{displacement} = \text{speed} \times \text{deltaTime}$$

### 3. Delta Time Clamping
If the user switches browser tabs, `requestAnimationFrame` pauses. When returning 10 seconds later, `deltaTime` would be 10.0s! If unclamped, an obstacle would teleport hundreds of pixels instantly.
Clamping `deltaTime` to a maximum of $0.1\text{ s}$ ($100\text{ ms}$) guarantees smooth recovery.

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js` lines 800-820:
```javascript
function gameLoop(currentTimestamp) {
  if (gameState !== "playing" || !isLoopRunning) return;

  if (lastFrameTimestamp === null) lastFrameTimestamp = currentTimestamp;
  let deltaTime = (currentTimestamp - lastFrameTimestamp) / 1000;
  lastFrameTimestamp = currentTimestamp;

  if (deltaTime > 0.1) deltaTime = 0.1; // Clamp protection

  updatePlayerPhysics(deltaTime);
  updateObstacles(deltaTime);
  ...
  animationFrameId = requestAnimationFrame(gameLoop);
}
```

---

## 💻 Student Practice Exercises
1. Calculate the displacement of an obstacle moving at 200 px/s over a deltaTime of 0.016s.
2. Explain why `cancelAnimationFrame(animationFrameId)` must be called when the game stops.
3. Why is `lastFrameTimestamp` reset to `null` whenever the game loop starts or stops?

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> Always store the ID returned by `requestAnimationFrame`. If you don't cancel it when stopping, multiple concurrent animation loops can accumulate, causing the game to run at runaway speeds.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 10](../day-10/README.md)
- [⏭️ Next: Day 12](../day-12/README.md)
