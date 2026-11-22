/* ==========================================================================
   VERSE-RUN — Game Script
   Week 3 — Day 11: Timers and Game Loops
   ========================================================================== */

// External script connected successfully.
console.log("VERSE-RUN: Script successfully linked and executing!");

// --------------------------------------------------------------------------
// 1. Game Information (Constants: Unchanging values)
// --------------------------------------------------------------------------

// Game name and hero character name never change during game execution
const gameTitle = "VERSE-RUN";       // String data type: Official title of the game
const characterName = "Verse Man";   // String data type: Playable pixel runner hero

// --------------------------------------------------------------------------
// 2. Numerical Information (Variables: Numbers that will change)
// --------------------------------------------------------------------------

// Score tracking and runner physics
let currentScore = 0;                // Number data type: Current distance/points in active run
let highScore = 0;                   // Number data type: Highest score achieved in session
let gameSpeed = 5;                   // Number data type: Scrolling speed of ground & obstacles

// --------------------------------------------------------------------------
// 3. Game Status (Variables: Booleans and empty states)
// --------------------------------------------------------------------------

// Binary flags and message container
let isGameRunning = false;           // Boolean data type: True only during active run
let hasGameStarted = false;          // Boolean data type: True once the player starts the game
let gameOverMessage = null;          // Null data type: Intentionally empty until a crash occurs

// State flags for game rules evaluation
let isPlayerAlive = true;            // Boolean data type: True while player has not crashed
let isPlayerOnGround = true;         // Boolean data type: True when runner rests on the track

// --------------------------------------------------------------------------
// 4. Console Verification: Initial State
// --------------------------------------------------------------------------

console.log("--- INITIAL GAME STATE ---");
console.log("Game Title:", gameTitle);
console.log("Player Character:", characterName);
console.log("Current Score:", currentScore);
console.log("High Score:", highScore);
console.log("Game Speed:", gameSpeed);
console.log("Is Game Running:", isGameRunning);
console.log("Has Game Started:", hasGameStarted);
console.log("Is Player Alive:", isPlayerAlive);
console.log("Is Player On Ground:", isPlayerOnGround);
console.log("Game Over Message:", gameOverMessage);

// ==========================================================================
// GAME RULES PLAYGROUND (Day 7 Preserved Examples)
// ==========================================================================

console.log("--- DAY 7 RULES PLAYGROUND ---");

// Arithmetic and Assignment
let bonusPoints = 50;
let totalScore = currentScore + bonusPoints;
let penalty = 15;
let reducedScore = totalScore - penalty;
let speedBoost = gameSpeed * 2;
let halfSpeed = speedBoost / 2;
let milestoneRemainder = 250 % 100;

let testScore = 100;
testScore += 25;
testScore -= 10;
testScore *= 2;
testScore /= 4;

// Comparisons & Equality
let isScoreBeatingHigh = currentScore > highScore;
let isSpeedBelowThreshold = gameSpeed < 10;
let isPassingScore = currentScore >= 0;
let isSpeedMaxCap = gameSpeed <= 5;

// Logical Operators
let isActivelySurviving = isGameRunning && isPlayerAlive;
let isReadyOrWaiting = hasGameStarted || !isGameRunning;
let isGameIdle = !isGameRunning;

// ==========================================================================
// FUNCTION PLAYGROUND (Day 8 Preserved Functions)
// ==========================================================================

console.log("--- DAY 8: FUNCTION PLAYGROUND ---");

// Exercise 1: Welcome Message Function
function showWelcomeMessage() {
  const welcomeText = "Welcome to " + gameTitle + "!";
  console.log(welcomeText);
  return welcomeText;
}

// Exercise 2: Bonus Calculator Function
function calculateBonus(points) {
  const bonus = 50;
  const totalWithBonus = points + bonus;
  return totalWithBonus;
}

// Exercise 3: High-Score Checker Function
function checkHighScore(score, recordHighScore) {
  if (score > recordHighScore) {
    return "New record achieved! High score beaten.";
  } else if (score === recordHighScore) {
    return "Tied with the current high score!";
  } else {
    return "Keep running! High score remains unbeaten.";
  }
}

// Exercise 4: Difficulty Calculator Function
function getDifficulty(score) {
  if (score >= 300) {
    return "Hard";
  } else if (score >= 100) {
    return "Medium";
  } else {
    return "Easy";
  }
}

// ==========================================================================
// KEYBOARD CONTROL PLAYGROUND (Day 9 Preserved Listeners & Handlers)
// ==========================================================================

console.log("--- DAY 9: KEYBOARD CONTROL PLAYGROUND ---");

// Named Functions for Keyboard Input Handling
function handleJumpInput() {
  console.log("Verse Man is ready to jump!");
}

function handleMoveLeft() {
  console.log("Move Left input detected!");
}

function handleMoveRight() {
  console.log("Move Right input detected!");
}

// Keyboard Event Listeners (Registered once at top level)
document.addEventListener("keydown", function (event) {
  console.log("Key pressed -> event.key:", event.key, "| event.code:", event.code);

  if (event.code === "Space") {
    event.preventDefault();
  }

  if (event.code === "Space" || event.key === " ") {
    console.log("Jump key detected!");
    handleJumpInput();
  }

  if (event.key === "ArrowLeft") {
    console.log("ArrowLeft detected!");
    handleMoveLeft();
  } else if (event.key === "ArrowRight") {
    console.log("ArrowRight detected!");
    handleMoveRight();
  }
});

document.addEventListener("keyup", function (event) {
  console.log("Key released -> event.key:", event.key, "| event.code:", event.code);
});

// ==========================================================================
// OBSTACLE SELECTION PLAYGROUND (Day 10 Preserved Data & Functions)
// ==========================================================================

console.log("--- DAY 10: OBSTACLE SELECTION PLAYGROUND ---");

let obstacles = ["Rock", "Small Cactus", "Large Cactus", "Wooden Crate"];
obstacles[3] = "Cyber Block";

function getRandomObstacle() {
  if (!obstacles || obstacles.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * obstacles.length);
  return obstacles[randomIndex];
}

function showRandomObstacle() {
  const selectedObstacle = getRandomObstacle();
  if (selectedObstacle !== null) {
    console.log("Next Obstacle Approaching:", selectedObstacle);
    return selectedObstacle;
  } else {
    console.log("No obstacles currently available in the pool.");
    return "No obstacle available";
  }
}

// ==========================================================================
// CONTINUOUS UPDATE PLAYGROUND (Day 11 Timers & Game Loop)
// ==========================================================================

console.log("--- DAY 11: CONTINUOUS UPDATE PLAYGROUND ---");

// --------------------------------------------------------------------------
// Exercise 1: Delayed Execution with setTimeout()
// --------------------------------------------------------------------------
console.log("Scheduling a 2-second delayed message with setTimeout()...");
const delayedTimerId = setTimeout(function () {
  console.log("setTimeout Callback: 2 seconds elapsed! Asynchronous operation completed.");
}, 2000);
console.log("Notice: Code immediately continues executing after setTimeout without blocking!");

// --------------------------------------------------------------------------
// Exercise 2 & 3: Repeated Execution (setInterval) & Stopping (clearInterval)
// --------------------------------------------------------------------------
let countdownSeconds = 0;
console.log("Starting a 1-second interval counter with setInterval()...");

const countdownIntervalId = setInterval(function () {
  countdownSeconds++;
  console.log("setInterval tick: Elapsed seconds =", countdownSeconds);

  // Stop the interval after 3 ticks to demonstrate clearInterval()
  if (countdownSeconds >= 3) {
    clearInterval(countdownIntervalId);
    console.log("clearInterval() invoked: Stopped repeating interval timer with ID:", countdownIntervalId);
  }
}, 1000);

// --------------------------------------------------------------------------
// Exercise 4: Canceling a Timeout with clearTimeout()
// --------------------------------------------------------------------------
const canceledTimeoutId = setTimeout(function () {
  console.log("This message should NEVER appear because it will be canceled!");
}, 5000);

clearTimeout(canceledTimeoutId);
console.log("clearTimeout() invoked: Successfully canceled pending timeout with ID:", canceledTimeoutId);

// --------------------------------------------------------------------------
// Exercise 5: Controlled requestAnimationFrame() Demo
// --------------------------------------------------------------------------
let singleFrameStep = 0;
function singleFrameDemo() {
  singleFrameStep++;
  console.log("Single animation frame repaint executed. Step:", singleFrameStep);
  // Intentionally does NOT recurse indefinitely — single demonstration frame
}
if (typeof requestAnimationFrame === "function") {
  requestAnimationFrame(singleFrameDemo);
}

// --------------------------------------------------------------------------
// Exercise 6: VERSE-RUN Core Game Loop Engine
// --------------------------------------------------------------------------

// Game loop control variables
let isLoopRunning = false;        // Boolean flag: True while game loop is active
let animationFrameId = null;      // Holds request ID from requestAnimationFrame for cancellation
let frameCount = 0;               // Tracks total animation frames elapsed during active run

// The core loop callback
function gameLoop() {
  // Guard check: Stop execution if loop was halted
  if (!isLoopRunning) {
    return;
  }

  // Increment total frame counter
  frameCount++;

  // Periodically log progress (every 60 frames = approx once per second at 60fps)
  // Prevents console flooding while confirming continuous updates
  if (frameCount % 60 === 0) {
    console.log("VERSE-RUN Game Loop Active — Frame Count:", frameCount);
  }

  // Request next screen repaint frame
  if (typeof requestAnimationFrame === "function") {
    animationFrameId = requestAnimationFrame(gameLoop);
  }
}

// Function to start the continuous game loop safely
function startGameLoop() {
  // Prevent duplicate concurrent game loops if clicked repeatedly
  if (isLoopRunning) {
    console.log("Game loop is already running; duplicate start ignored.");
    return;
  }

  isLoopRunning = true;
  console.log("Starting VERSE-RUN Game Loop...");

  if (typeof requestAnimationFrame === "function") {
    animationFrameId = requestAnimationFrame(gameLoop);
  }
}

// Function to stop the game loop cleanly
function stopGameLoop() {
  if (!isLoopRunning) {
    console.log("Game loop is not currently active.");
    return;
  }

  isLoopRunning = false;

  if (animationFrameId !== null && typeof cancelAnimationFrame === "function") {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  console.log("VERSE-RUN Game Loop stopped at frame:", frameCount);
}

// --------------------------------------------------------------------------
// 5. DOM Element Selection & Displaying Game Info
// --------------------------------------------------------------------------

// document.querySelector(): Selects an element using CSS selector syntax
const titleElement = document.querySelector("#game-header h1");

// document.getElementById(): Selects elements using their unique HTML id
const scoreElement = document.getElementById("current-score-display");
const highScoreElement = document.getElementById("high-score-display");
const startButton = document.getElementById("start-btn");
const statusMessage = document.getElementById("game-status-message");

// Display initial game values on the existing web page HUD
scoreElement.textContent = "SCORE: " + currentScore;
highScoreElement.textContent = "HI: " + highScore;

// --------------------------------------------------------------------------
// 6. Start Button Interaction (Day 5, 8 & 11 Integration)
// --------------------------------------------------------------------------

// Named function: Contains the clean logic triggered when the player clicks Start
function startGame() {
  console.log("Start Game button clicked! (startGame function invoked)");

  // Update status flags
  hasGameStarted = true;
  isGameRunning = true;

  // Display welcome/ready message in status area
  statusMessage.textContent = "Get ready, runner! Welcome to " + gameTitle + ".";

  // Start the continuous game loop
  startGameLoop();

  console.log("Updated Game Status -> hasGameStarted:", hasGameStarted, "| isGameRunning:", isGameRunning);
}

// Connect the named function to the Start Game button click event
startButton.addEventListener("click", startGame);
