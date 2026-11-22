# Day 12: Player Physics & Realistic Jump Mechanics
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 3 | **Theme:** Velocity, Gravitational Acceleration & Parabolic Arcs  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Model vertical velocity and downward gravity.
- [ ] Apply jump impulses when grounded.
- [ ] Calculate parabolic vertical trajectory using delta time.
- [ ] Clamp player landing at the ground baseline ($y = 0$).
- [ ] Update `#verse-man` CSS `bottom` position dynamically.

---

## 📖 Key Concepts Explained
### 1. Gravity and Velocity Physics
In real-world physics, objects in free fall accelerate downward due to gravity ($g$):
$$v_{\text{new}} = v_{\text{old}} + g \times \Delta t$$
$$y_{\text{new}} = y_{\text{old}} - v \times \Delta t$$

In VERSE-RUN:
- Ground baseline: `bottom: 35px` (resting directly on the 35px track).
- `playerY`: Current vertical height above ground ($0 = \text{grounded}$).
- `gravity = 1600 px/s²`: Downward pull.
- `jumpStrength = 600 px/s`: Initial upward impulse ($v_0 = -600\text{ px/s}$).

### 2. The Parabolic Arc Math
- Time to jump peak: $t_{\text{peak}} = \frac{v_0}{g} = \frac{600}{1600} = 0.375\text{ s}$.
- Total hang time in air: $t_{\text{air}} = 2 \times 0.375 = 0.75\text{ s}$.
- Peak height reached: $y_{\text{peak}} = \frac{v_0^2}{2g} = \frac{360000}{3200} = 112.5\text{ px}$.

### 3. Ground Landing Detection
When falling back down, if `playerY <= 0`:
```javascript
if (playerY <= 0) {
  playerY = 0;
  verticalVelocity = 0;
  isPlayerOnGround = true;
}
```
This cleanly resets vertical velocity and marks the runner as grounded.

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js` lines 650-685:
Notice how `jump()` checks `if (gameState !== 'playing' || !isPlayerOnGround) return;`.
This prevents mid-air jumping and guarantees the player can only jump when resting on the runway.

---

## 💻 Student Practice Exercises
1. Calculate the maximum height Verse Man reaches during a jump using the physics formula $y = v_0^2 / (2g)$.
2. What happens if `gravity` is decreased from 1600 to 800? (Hint: floaty moon jump!).
3. Explain why `playerY` must be clamped to 0 when landing.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If Verse Man sinks through the floor, verify the landing condition `playerY <= 0` resets `playerY = 0` and sets `isPlayerOnGround = true`.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 11](../day-11/README.md)
- [⏭️ Next: Day 13](../day-13/README.md)
