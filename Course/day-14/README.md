# Day 14: Finite State Machine & State-Based Transitions
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 3 | **Theme:** State Machines, Architecture & State Guards  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Model game lifecycle using a Finite State Machine (FSM).
- [ ] Define the three core states: `ready`, `playing`, `gameover`.
- [ ] Implement transition guards preventing invalid state changes.
- [ ] Restructure game loops and inputs around active state.

---

## 📖 Key Concepts Explained
### 1. What is a Finite State Machine?
An FSM is an architectural design pattern where a program can exist in exactly one 'state' at any given time. Depending on the current state, certain inputs are allowed or forbidden:
```text
[ READY ]  ---( click Start )--->  [ PLAYING ]
                                       |
                                  ( collision )
                                       v
[ PLAYING ]  <---( click Restart )---  [ GAMEOVER ]
```

### 2. The Three Game States
- `ready`: Standby state. The stage is visible, Verse Man is idle, scores are 0. Jumps are blocked.
- `playing`: Gameplay active. Loop runs, physics apply, obstacles spawn and move, collisions are monitored, score increments.
- `gameover`: Run ended. Loop stops immediately, final score is locked, "Restart Game" is displayed.

### 3. Transition Guards
Guards prevent bugs like double-starting or jumping while dead:
```javascript
// In jump():
if (gameState !== "playing") return;

// In startGame():
if (gameState !== "ready" && gameState !== "gameover") return;
```

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js`:
- Look at `handleCollision()`: It transitions `gameState = 'gameover'`, sets `isGameRunning = false`, and halts the loop with `stopGameLoop()`.
- Look at `startGame()`: It transitions from `ready` or `gameover` into `playing` and resets all variables.

---

## 💻 Student Practice Exercises
1. Why is a state variable `let gameState = 'ready'` better than having 5 separate boolean flags?
2. Trace what happens when a player clicks 'Start Game' while already in the `playing` state.
3. Verify which functions check `if (gameState !== 'playing') return;`.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If a game restarts automatically without the user clicking the button, verify that collision handlers do not inadvertently call `startGame()` or fail to stop the animation loop.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 13](../day-13/README.md)
- [⏭️ Next: Day 15](../day-15/README.md)
