# VERSE-RUN 🏃‍♂️💨

> An original 2D endless runner browser game developed as a foundational learning project under the **C-VERSE** web development curriculum.

[![GitHub Pages](https://img.shields.io/badge/Hosted%20with-GitHub%20Pages-blue?logo=github)](https://karthickjack.github.io/verse-run/)
[![Vanilla JS](https://img.shields.io/badge/Vanilla-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5 & CSS3](https://img.shields.io/badge/HTML5%20%26%20CSS3-Pure%20Web%20Standards-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)

---

## 🎮 Game Overview

In **VERSE-RUN**, you guide **Verse Man**, an intrepid digital runner, through an endless retro digital runway. As Verse Man sprints forward, ground obstacles scroll toward him at increasing speeds, and golden Verse Coins appear along the path. 

Time your jumps with precision, gather bonus tokens, survive escalating difficulty, and strive for the highest score!

### 🎯 Objective
- **Survive:** Leap over incoming cyber obstacles.
- **Collect:** Grab glowing **Verse Coins** for $+10$ bonus points each.
- **Progress:** Survive long enough to unlock **Medium** and **Hard** speeds.
- **Beat Your Best:** Set a new **High Score** on the Heads-Up Display (HUD).

---

## 🕹️ Controls

| Control Input | Action |
| :--- | :--- |
| **`Spacebar`** or **`Up Arrow` (↑)** | Jump over obstacles (Grounded only; double-jump disabled) |
| **`Click "Start Game"`** | Start the game from the READY screen |
| **`Click "Restart Game"`** | Cleanly restart after a Game Over |

*Note: Jump key defaults are intercepted (`event.preventDefault()`) so pressing Spacebar or Up Arrow will never cause accidental window scrolling.*

---

## ✨ Features Implemented

### 1. Robust State Machine
- **READY:** Standby screen displaying the game runway, hero runner, and control prompt.
- **PLAYING:** Active game loop with player physics, moving obstacles, collectible spawning, and real-time score tracking.
- **GAMEOVER:** Instant collision response halting gameplay, preserving final score, updating High Score, and offering one-click restart.

### 2. Realistic Jump Physics
- **Gravitational Acceleration:** Realistic gravity ($1600\text{ px/s}^2$) and upward jump velocity ($-600\text{ px/s}$) producing a parabolic trajectory ($y_{\text{peak}} = 112.5\text{ px}$).
- **Delta-Time Integration:** Frame-rate independent physics updating via `requestAnimationFrame` with safety clamping ($0.1\text{ s}$ max) to prevent teleportation when returning from inactive tabs.

### 3. Dynamic Obstacle Management
- **Multiple Obstacles:** Managed dynamically in an active array of objects (`activeObstacles`).
- **Difficulty-Scaled Speed:** Scrolling speed escalates from $200\text{ px/s}$ (Easy) $\to$ $260\text{ px/s}$ (Medium) $\to$ $320\text{ px/s}$ (Hard).
- **Proximity Guards:** Controlled spawn timing preventing impossible obstacle overlaps.
- **Off-Screen Garbage Collection:** Safely detaches and splices out obstacles that exit the left edge of the stage.

### 4. Collectibles & Visual Feedback
- **Verse Coins:** Golden retro digital tokens (`.verse-coin`) spawned at reachable running ($15\text{ px}$) and jump altitudes ($60\text{ px}, 75\text{ px}$).
- **Obstacle Avoidance:** Coin spawner checks proximity to obstacles, guaranteeing coins never spawn on top of hazards.
- **Floating Feedback:** Collecting a coin immediately spawns a floating `+10` visual indicator (`.score-feedback`) that rises and fades out.
- **Protected Difficulty:** Bonus points increment total score without artificially accelerating survival difficulty tiers.

### 5. Responsive Retro Arcade Design
- **Retro Theme:** Styled with deep slate tones, neon cyans, arcade gold highlights, and monospace typography.
- **Mobile Responsive:** Fluid layout with `@media (max-width: 600px)` rules optimizing container padding, title fonts, and character dimensions for mobile viewports (e.g. iPhone SE $375\text{ px}$, iPhone 12/13/14 $390\text{ px}$).

---

## 🛠️ Technology Stack

VERSE-RUN is built purely with native web standards — **zero dependencies, frameworks, build tools, or libraries**:

- **HTML5:** Semantic document structure (`<header>`, `<main>`, `<section>`, `<footer>`, HUD layout).
- **CSS3:** Box model, Flexbox, absolute coordinate anchoring, custom `@keyframes` animations, and responsive media queries.
- **Vanilla JavaScript (ES6+):** Game loops (`requestAnimationFrame`), Axis-Aligned Bounding Box (AABB) collision detection, DOM manipulation, and finite state management.

---

## 🚀 How to Run Locally

You do not need to install Node.js, npm, or any compilers.

### Option 1: Direct File Opening
1. Clone or download the repository:
   ```bash
   git clone https://github.com/KarthickJack/verse-run.git
   cd verse-run
   ```
2. Open `index.html` in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari).

### Option 2: Using a Simple Local Server
To simulate production server behavior:
- **Python 3:**
  ```bash
  python3 -m http.server 8000
  ```
  Then visit `http://localhost:8000` in your browser.
- **VS Code Live Server:**
  Right-click `index.html` and select **"Open with Live Server"**.

---

## 🌐 Live Deployment

The game is hosted statically on **GitHub Pages**:

🔗 **Live Game URL:** [https://karthickjack.github.io/verse-run/](https://karthickjack.github.io/verse-run/)  
📁 **Source Repository:** [https://github.com/KarthickJack/verse-run](https://github.com/KarthickJack/verse-run)

---

## 📚 Credits & Academic Context

- **Developer:** Karthick Jack
- **Program:** C-VERSE Beginner Web Development Curriculum (Weeks 1–4, Days 1–20)
- **Artwork & Styling:** Original retro CSS arcade designs created specifically for educational purposes (zero proprietary or copyrighted game assets).
