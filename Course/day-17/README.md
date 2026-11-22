# Day 17: Multiple Obstacles Management & Dynamic DOM
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 4 | **Theme:** Object Arrays, Dynamic Creation & Memory Cleanup  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Manage multiple concurrent obstacles using an array of objects (`activeObstacles`).
- [ ] Dynamically create obstacle DOM elements using `document.createElement()`.
- [ ] Implement proximity guards preventing impossible obstacle clusters.
- [ ] Safely remove off-screen obstacles using reverse iteration (`for (let i = length - 1; i >= 0; i--)`).

---

## 📖 Key Concepts Explained
### 1. Why an Array of Objects?
A single obstacle limits gameplay. To support multiple independent obstacles on screen simultaneously, we store them in an array:
```javascript
let activeObstacles = [];
```
Each obstacle is an object holding its DOM element, X coordinate, and width:
```javascript
{
  element: domElement,
  x: 628,
  width: 90
}
```

### 2. Reverse Iteration for Safe Array Splicing
When removing elements from an array while looping through it, iterating forward causes skipped elements because the array re-indexes immediately!
Iterating **backwards** avoids this index-shifting bug:
```javascript
for (let i = activeObstacles.length - 1; i >= 0; i--) {
  if (activeObstacles[i].x < -activeObstacles[i].width) {
    activeObstacles[i].element.parentNode.removeChild(activeObstacles[i].element);
    activeObstacles.splice(i, 1); // Safe!
  }
}
```

### 3. Proximity Guards
If two obstacles spawn right next to each other, the player cannot clear both with a single jump. Before spawning, we check:
```javascript
const lastObs = activeObstacles[activeObstacles.length - 1];
if (!lastObs || lastObs.x < stageWidth - 150) {
  createObstacle(stageWidth);
}
```

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js` lines 240-370:
Study `createObstacle()`, `updateObstacles()`, `updateObstacleSpawning()`, and `clearAllObstacles()`.
Notice how all active obstacles are checked for collision against the player in `gameLoop()`.

---

## 💻 Student Practice Exercises
1. Draw a diagram showing why forward array looping skips elements when `splice()` is used.
2. Explain how the proximity guard prevents impossible obstacle combinations.
3. Verify in DevTools Elements tab that removed obstacle `<div>`s are actually detached from `#game-stage`.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> Always remove the DOM element with `element.parentNode.removeChild(element)` BEFORE or at the same time as `array.splice(i, 1)`. Forgetting to remove the DOM element causes visual 'ghost' obstacles on the page!

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 16](../day-16/README.md)
- [⏭️ Next: Day 18](../day-18/README.md)
