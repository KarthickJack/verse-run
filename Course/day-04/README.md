# Day 04: CSS Positioning, Layering & Ambient Animation
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 1 | **Theme:** Coordinate Systems, z-index & CSS Keyframes  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Understand `position: relative` as the coordinate reference frame.
- [ ] Use `position: absolute` with `left`, `bottom`, and `right` for game objects.
- [ ] Manage visual stacking depth with `z-index` layers.
- [ ] Create ambient background animation using CSS `@keyframes`.

---

## 📖 Key Concepts Explained
### 1. The Stage Coordinate Anchor
To place objects at specific pixel coordinates inside `#game-stage`:
1. The parent `#game-stage` must have `position: relative;`.
2. The child objects (`#verse-man`, `#obstacle`, `#ground`) use `position: absolute;`.
This ensures that `bottom: 35px; left: 40px;` means 40px from the left edge of the stage, NOT the webpage.

### 2. Visual Stacking with `z-index`
`z-index` dictates which elements appear in front of or behind others:
- `z-index: 1`: Background scenery (`#cloud`)
- `z-index: 2`: Ground runway (`#ground`)
- `z-index: 3`: Gameplay obstacles and coins (`#obstacle`, `.verse-coin`)
- `z-index: 4`: Hero runner (`#verse-man`)
- `z-index: 5`: Foreground UI & feedback (`.score-feedback`)

### 3. CSS Keyframe Animations
CSS can animate elements continuously on the GPU without using JavaScript. The floating cloud demonstrates this:
```css
@keyframes floatCloud {
  0% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-6px) translateX(12px); }
  100% { transform: translateY(0px) translateX(0px); }
}
#cloud {
  animation: floatCloud 4s ease-in-out infinite;
}
```

---

## 🔍 Code Walkthrough & Implementation Details
Look at `css/style.css` lines 185-205:
Notice `#verse-man` has `bottom: 35px; left: 40px;`.
Since `#ground` has `height: 35px;`, setting `bottom: 35px` places Verse Man perfectly on top of the ground runway.

---

## 💻 Student Practice Exercises
1. What happens if `#game-stage` does not have `position: relative;`? Test it in your browser.
2. Explain why the ground track has a higher `z-index` than the background cloud.
3. Modify the cloud animation duration from `4s` to `2s` and observe the speed change.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If an element disappears completely, check `overflow: hidden;` on `#game-stage`. If an object's coordinates are outside the stage dimensions, it will be clipped and invisible.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 03](../day-03/README.md)
- [⏭️ Next: Day 05](../day-05/README.md)
