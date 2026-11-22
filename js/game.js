/* ==========================================================================
   VERSE-RUN — Game Script
   Week 2 — Day 8: Functions and Reusable Logic
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
// FUNCTION PLAYGROUND (Day 8 Concepts & Exercises)
// ==========================================================================

console.log("--- DAY 8: FUNCTION PLAYGROUND ---");

// --------------------------------------------------------------------------
// Exercise 1: Welcome Message Function
// --------------------------------------------------------------------------
// A zero-parameter function that outputs and returns a welcome greeting.
function showWelcomeMessage() {
  const welcomeText = "Welcome to " + gameTitle + "!";
  console.log(welcomeText);
  return welcomeText;
}

// --------------------------------------------------------------------------
// Exercise 2: Bonus Calculator Function
// --------------------------------------------------------------------------
// Accepts a numerical points value, adds 50 bonus points, and returns the sum.
function calculateBonus(points) {
  const bonus = 50; // Local variable scoped only inside calculateBonus
  const totalWithBonus = points + bonus;
  return totalWithBonus;
}

// --------------------------------------------------------------------------
// Exercise 3: High-Score Checker Function
// --------------------------------------------------------------------------
// Compares two numerical values and returns an informative string message.
function checkHighScore(score, recordHighScore) {
  if (score > recordHighScore) {
    return "New record achieved! High score beaten.";
  } else if (score === recordHighScore) {
    return "Tied with the current high score!";
  } else {
    return "Keep running! High score remains unbeaten.";
  }
}

// --------------------------------------------------------------------------
// Exercise 4: Difficulty Calculator Function
// --------------------------------------------------------------------------
// Evaluates score against thresholds and returns difficulty tier.
// Rules: Below 100 -> Easy | 100 to 299 -> Medium | 300 and above -> Hard
function getDifficulty(score) {
  if (score >= 300) {
    return "Hard";
  } else if (score >= 100) {
    return "Medium";
  } else {
    return "Easy";
  }
}

// --------------------------------------------------------------------------
// Testing & Demonstrating Function Invocations
// --------------------------------------------------------------------------

console.log("Invoking showWelcomeMessage():");
showWelcomeMessage();

console.log("Invoking calculateBonus(100):", calculateBonus(100)); // Expected: 150
console.log("Invoking calculateBonus(20):", calculateBonus(20));   // Expected: 70

console.log("Invoking checkHighScore(250, 200):", checkHighScore(250, 200)); // New record
console.log("Invoking checkHighScore(150, 200):", checkHighScore(150, 200)); // Unbeaten
console.log("Invoking checkHighScore(200, 200):", checkHighScore(200, 200)); // Tied

console.log("Invoking getDifficulty(50):", getDifficulty(50));   // Easy
console.log("Invoking getDifficulty(150):", getDifficulty(150)); // Medium
console.log("Invoking getDifficulty(450):", getDifficulty(450)); // Hard

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
// Exercise 5: Organise the Start Button Interaction with a Named Function
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
