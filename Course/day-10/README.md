# Day 10: Keyboard Input & Event Interception
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 2 | **Theme:** Keyboard Events & Scroll Prevention  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Listen for global keyboard events (`keydown`, `keyup`).
- [ ] Differentiate between `event.key` and `event.code`.
- [ ] Prevent accidental browser scrolling using `event.preventDefault()`.
- [ ] Protect against holding down keys with `event.repeat`.

---

## 📖 Key Concepts Explained
### 1. `event.key` vs `event.code`
- `event.key`: Represents the character generated (e.g. `" "`, `"ArrowUp"`, `"a"`). It changes depending on keyboard layout or Shift state.
- `event.code`: Represents the physical key pressed on the keyboard (e.g. `"Space"`, `"ArrowUp"`, `"KeyA"`). It is layout-independent and ideal for games.

### 2. Preventing Browser Scroll with `event.preventDefault()`
In browsers, pressing the Spacebar or Up Arrow normally scrolls the webpage downward. In a game, this ruins the player's view!
Calling:
```javascript
if (event.code === "Space" || event.key === "ArrowUp") {
  event.preventDefault();
}
```
stops the default browser scrolling behavior, keeping the game container steady.

### 3. Key Repeat Protection (`event.repeat`)
When a user holds a key down, the browser repeatedly sends `keydown` events. If not guarded, a player could hold Spacebar and glitch the jump velocity:
```javascript
if (isJumpKey) {
  if (!event.repeat) {
    jump();
  }
}
```

---

## 🔍 Code Walkthrough & Implementation Details
Inspect lines 700-725 in `js/game.js`:
Notice how `event.preventDefault()` is executed first for jump keys, followed by `!event.repeat` verification before invoking `jump()`.

---

## 💻 Student Practice Exercises
1. Press Spacebar while looking at the console log to inspect the `event.code` output.
2. Explain why `event.preventDefault()` is necessary when Spacebar is used in browser games.
3. Test holding down the Spacebar to verify that the jump impulse fires only once per physical press.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If pressing Spacebar causes the page to jump down, verify that `event.preventDefault()` is executed unconditionally inside the keydown listener whenever a jump key is detected.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 09](../day-09/README.md)
- [⏭️ Next: Day 11](../day-11/README.md)
