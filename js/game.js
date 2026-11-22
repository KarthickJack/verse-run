/* ==========================================================================
   VERSE-RUN — Game Script
   Week 2 — Day 10: Random Numbers and Arrays
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
// OBSTACLE SELECTION PLAYGROUND (Day 10 Concepts & Exercises)
// ==========================================================================

console.log("--- DAY 10: OBSTACLE SELECTION PLAYGROUND ---");

// --------------------------------------------------------------------------
// Exercise 1: Create an Obstacle Array
// --------------------------------------------------------------------------
// An ordered list of obstacle names stored in a single array container
let obstacles = ["Rock", "Small Cactus", "Large Cactus", "Wooden Crate"];
console.log("Initial Obstacles Array:", obstacles);

// --------------------------------------------------------------------------
// Exercise 2: Access Elements Using Zero-Based Indexing
// --------------------------------------------------------------------------
console.log("First obstacle (index 0):", obstacles[0]);
console.log("Second obstacle (index 1):", obstacles[1]);
console.log("Third obstacle (index 2):", obstacles[2]);
console.log("Fourth obstacle (index 3):", obstacles[3]);

// --------------------------------------------------------------------------
// Exercise 3: Find Array Length
// --------------------------------------------------------------------------
console.log("Total count of obstacles (.length):", obstacles.length); // 4
console.log("Last valid index formula (length - 1):", obstacles.length - 1); // 3
console.log("Last obstacle element:", obstacles[obstacles.length - 1]);

// --------------------------------------------------------------------------
// Exercise 4: Update an Element
// --------------------------------------------------------------------------
// Change "Wooden Crate" at index 3 to a modern retro obstacle: "Cyber Block"
obstacles[3] = "Cyber Block";
console.log("Obstacles array after updating index 3:", obstacles);

// --------------------------------------------------------------------------
// Exercise 5: Add and Remove Elements (push and pop)
// --------------------------------------------------------------------------
// push(): Appends an element to the end of the array
obstacles.push("Energy Drone");
console.log("After push('Energy Drone'):", obstacles);
console.log("New length after push:", obstacles.length);

// pop(): Removes the last element from the end of the array
let removedObstacle = obstacles.pop();
console.log("Removed obstacle with pop():", removedObstacle);
console.log("After pop():", obstacles);

// --------------------------------------------------------------------------
// Exercise 6 & 7: Generating Random Numbers & Whole Integers
// --------------------------------------------------------------------------
// Math.random() generates a pseudo-random decimal number in the range [0, 1)
let sampleRandomDecimal = Math.random();
console.log("Sample Math.random() [0 to 0.999...]:", sampleRandomDecimal);

// Math.floor() rounds a decimal down to the nearest integer
// Combining them produces a whole integer index within [0, obstacles.length - 1]
let sampleRandomIndex = Math.floor(Math.random() * obstacles.length);
console.log("Sample whole integer index [0 to", obstacles.length - 1, "]:", sampleRandomIndex);

// --------------------------------------------------------------------------
// Exercise 8: Random Obstacle Selection Function
// --------------------------------------------------------------------------
// Returns a random obstacle string safely, checking for empty array bounds
function getRandomObstacle() {
  // Safety check: Handle empty array safely
  if (!obstacles || obstacles.length === 0) {
    return null;
  }

  // Generate valid whole integer index: 0, 1, ..., (obstacles.length - 1)
  const randomIndex = Math.floor(Math.random() * obstacles.length);
  return obstacles[randomIndex];
}

// --------------------------------------------------------------------------
// Exercise 9: Display the Selected Obstacle
// --------------------------------------------------------------------------
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

// Test random selection manually several times
console.log("--- TESTING RANDOM OBSTACLE SELECTION ---");
console.log("Random Selection 1:", showRandomObstacle());
console.log("Random Selection 2:", showRandomObstacle());
console.log("Random Selection 3:", showRandomObstacle());

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
// 6. Start Button Interaction (Day 5 & Day 8 Preserved Named Function)
// --------------------------------------------------------------------------

// Named function: Contains the clean logic triggered when the player clicks Start
function startGame() {
  console.log("Start Game button clicked! (startGame function invoked)");

  // Update status flags
  hasGameStarted = true;
  isGameRunning = true;

  // Display welcome/ready message in status area (does NOT start actual gameplay loop)
  statusMessage.textContent = "Get ready, runner! Welcome to " + gameTitle + ".";

  console.log("Updated Game Status -> hasGameStarted:", hasGameStarted, "| isGameRunning:", isGameRunning);
}

// Connect the named function to the Start Game button click event
startButton.addEventListener("click", startGame);
