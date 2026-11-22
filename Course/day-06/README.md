# Day 06: DOM Selection & Dynamic Text Updates
**Curriculum:** C-VERSE Beginner Web Development  
**Week:** 2 | **Theme:** Document Object Model & Dynamic UI  
**Project:** VERSE-RUN 2D Endless Runner  

---

## 🎯 Learning Objectives
By the end of today's lesson, students will be able to:
- [ ] Understand the Document Object Model (DOM) as the bridge between JS and HTML.
- [ ] Select DOM elements using `document.getElementById()`.
- [ ] Update UI text dynamically using `element.textContent`.
- [ ] Verify HUD placeholders display initial game values upon script load.

---

## 📖 Key Concepts Explained
### 1. What is the DOM?
The DOM is a tree-like object representation of the HTML document created by the browser. Through JavaScript, developers can read, modify, add, or remove HTML elements in real time without reloading the page.

### 2. Selecting Elements by ID
`document.getElementById(id)` searches the DOM and returns a reference to the matching element:
```javascript
const scoreElement = document.getElementById("current-score-display");
const highScoreElement = document.getElementById("high-score-display");
const statusMessage = document.getElementById("game-status-message");
```

### 3. Updating Text with `.textContent`
`element.textContent` sets or returns the text content of a node:
```javascript
scoreElement.textContent = "SCORE: " + currentScore;
highScoreElement.textContent = "HI: " + highScore;
```
Using `.textContent` is faster and more secure than `.innerHTML` because it does not parse HTML tags, preventing Cross-Site Scripting (XSS) security flaws.

---

## 🔍 Code Walkthrough & Implementation Details
In `js/game.js`, inspect lines 190-215:
Notice how references to `#current-score-display` and `#high-score-display` are cached in constant variables. Immediately after selecting them, the initial scores are rendered to the DOM.

---

## 💻 Student Practice Exercises
1. Use browser DevTools Console to manually change `statusMessage.textContent = 'Welcome, Runner!'`.
2. Explain the difference between `document.getElementById('start-btn')` and `document.querySelector('#start-btn')`.
3. Why is caching DOM element references in variables at the top of the file better than calling `document.getElementById()` inside the game loop 60 times a second?

---

## 🛠️ Common Student Mistakes & Debugging Tips
> [!TIP]
> If you get `TypeError: Cannot set properties of null (setting 'textContent')`, it means the element ID was misspelled or the JavaScript executed before the HTML elements were created in the DOM (fix by adding `defer` to the `<script>` tag).

---

## 🔗 Navigation
- [⬅️ Course Overview](../README.md)
- [⏮️ Previous: Day 05](../day-05/README.md)
- [⏭️ Next: Day 07](../day-07/README.md)
