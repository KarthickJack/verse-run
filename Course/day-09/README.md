# Day 09: User Interactions & Mouse Click Events
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 2 | **Theme:** Event Listeners & Asynchronous Event Handling  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Understand the browser event-driven architecture.
- [ ] Attach click event listeners using `addEventListener('click')`.
- [ ] Trigger game start transitions from the 'Start Game' button.
- [ ] Provide tactile visual feedback using CSS pseudo-classes (`:hover`, `:active`).

---

## 📖 Key Concepts Explained
### 1. Event-Driven Programming
Web browsers are event-driven: JavaScript code sits idle until an event occurs (a button click, a key press, or a screen resize). When the event fires, the browser executes the callback function attached to that event.

### 2. The `addEventListener` Method
The standard way to listen for events:
```javascript
const startButton = document.getElementById("start-btn");

function handleStartClick() {
  console.log("Start button was clicked!");
  startGame();
}

startButton.addEventListener("click", handleStartClick);
```

### 3. Button Tactile Styling
In `css/style.css`, CSS transitions make button clicks feel physical:
- `:hover`: Lifts the button slightly (`transform: translateY(-2px);`).
- `:active`: Depresses the button back down (`transform: translateY(0);`).

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js` line 992:
```javascript
startButton.addEventListener("click", startGame);
```
When clicked, the `startGame` function is called, initiating state transitions and launching the game loop.

---

## 💻 Student Practice Exercises
1. Explain why `startButton.addEventListener('click', startGame)` does NOT put parentheses after `startGame`.
2. What would happen if you wrote `startButton.addEventListener('click', startGame())` with parentheses?
3. Inspect the `:hover` style of `#start-btn` in your browser by hovering your mouse over it.

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> Passing `startGame()` with parentheses invokes the function *immediately* when the file loads, rather than waiting for the user to click the button! Always pass the function reference without parentheses.

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 08](../day-08/README.md)
- [⏭️ Next: Day 10](../day-10/README.md)
