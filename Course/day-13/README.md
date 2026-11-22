# Day 13: Bounding Boxes & AABB Collision Detection
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 3 | **Theme:** Geometry, Bounding Rectangles & Collision Math  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Extract live element coordinates using `getBoundingClientRect()`.
- [ ] Understand Axis-Aligned Bounding Box (AABB) intersection math.
- [ ] Check horizontal and vertical overlap conditions.
- [ ] Trigger collision responses when rectangles overlap.

---

## 📖 Key Concepts Explained
### 1. What is an Axis-Aligned Bounding Box (AABB)?
An AABB is a rectangle aligned with the screen's X and Y axes (no rotation). In 2D games, AABB is the most efficient and common way to detect whether two objects are touching.

### 2. Bounding Coordinates with `getBoundingClientRect()`
`element.getBoundingClientRect()` returns the live pixel coordinates of any element on the screen:
- `left` and `right`: Horizontal span
- `top` and `bottom`: Vertical span
- `width` and `height`: Bounding dimensions

### 3. The 4 Overlap Conditions
Two rectangles ($A$ and $B$) collide if and only if they overlap on BOTH the horizontal and vertical axes simultaneously:
1. Horizontal Overlap:
   $$A_{\text{right}} > B_{\text{left}} \quad \text{AND} \quad A_{\text{left}} < B_{\text{right}}$$
2. Vertical Overlap:
   $$A_{\text{bottom}} > B_{\text{top}} \quad \text{AND} \quad A_{\text{top}} < B_{\text{bottom}}$$
If all four inequalities are true, collision has occurred!

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js` lines 750-766:
```javascript
function isColliding(playerRect, obstacleRect) {
  if (!playerRect || !obstacleRect) return false;

  const horizontalOverlap =
    playerRect.right > obstacleRect.left &&
    playerRect.left < obstacleRect.right;

  const verticalOverlap =
    playerRect.bottom > obstacleRect.top &&
    playerRect.top < obstacleRect.bottom;

  return horizontalOverlap && verticalOverlap;
}
```

---

## 💻 Student Practice Exercises
1. Draw two rectangles on graph paper and test the 4 AABB inequalities manually.
2. Why does `isColliding` check both horizontal AND vertical overlap? What happens if you only check horizontal overlap?
3. Explain what `getBoundingBox()` does when an element is null.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> Remember that in browser screen coordinates, `top = 0` is at the TOP of the screen, and `top` increases as you move downward! Be careful not to confuse CSS `bottom` with bounding rect `bottom`.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 12](../day-12/README.md)
- [⏭️ Next: Day 14](../day-14/README.md)
