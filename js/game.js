/* ==========================================================================
   VERSE-RUN — Game Script
   Week 2 — Day 7: JavaScript Operators and Conditional Statements
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
// GAME RULES PLAYGROUND (Day 7 Concepts)
// ==========================================================================

// --------------------------------------------------------------------------
// Part A: Arithmetic and Assignment Operators
// --------------------------------------------------------------------------

console.log("--- PART A: ARITHMETIC & ASSIGNMENT ---");

// Arithmetic operators (+, -, *, /, %)
let bonusPoints = 50;
let totalScore = currentScore + bonusPoints; // Addition
console.log("Addition (currentScore + bonusPoints):", totalScore);

let penalty = 15;
let reducedScore = totalScore - penalty;     // Subtraction
console.log("Subtraction (totalScore - penalty):", reducedScore);

let speedBoost = gameSpeed * 2;              // Multiplication
console.log("Multiplication (gameSpeed * 2):", speedBoost);

let halfSpeed = speedBoost / 2;              // Division
console.log("Division (speedBoost / 2):", halfSpeed);

let milestoneRemainder = 250 % 100;          // Modulus (remainder after division)
console.log("Modulus (250 % 100):", milestoneRemainder);

// Assignment operators (=, +=, -=, *=, /=)
let testScore = 100;
console.log("Starting testScore:", testScore);

testScore += 25; // Equivalent to: testScore = testScore + 25
console.log("After testScore += 25:", testScore);

testScore -= 10; // Equivalent to: testScore = testScore - 10
console.log("After testScore -= 10:", testScore);

testScore *= 2;  // Equivalent to: testScore = testScore * 2
console.log("After testScore *= 2:", testScore);

testScore /= 4;  // Equivalent to: testScore = testScore / 4
console.log("After testScore /= 4:", testScore);

// --------------------------------------------------------------------------
// Part B: Comparison Operators (Relational and Equality)
// --------------------------------------------------------------------------

console.log("--- PART B: COMPARISONS ---");

// Greater than (>) and Less than (<)
let isScoreBeatingHigh = currentScore > highScore;
console.log("Is currentScore > highScore?:", isScoreBeatingHigh);

let isSpeedBelowThreshold = gameSpeed < 10;
console.log("Is gameSpeed < 10 (safe speed)?:", isSpeedBelowThreshold);

// Greater than or equal (>=) and Less than or equal (<=)
let isPassingScore = currentScore >= 0;
console.log("Is currentScore >= 0?:", isPassingScore);

let isSpeedMaxCap = gameSpeed <= 5;
console.log("Is gameSpeed <= 5?:", isSpeedMaxCap);

// Equality: Loose (==) vs Strict (===)
// Loose equality (==) coerces types before comparing:
console.log("Loose equality ('5' == 5):", "5" == 5);       // true (string converted to number)

// Strict equality (===) checks value AND data type without coercion:
console.log("Strict equality ('5' === 5):", "5" === 5);     // false (string !== number)

// Inequality: Loose (!=) vs Strict (!==)
console.log("Loose inequality ('5' != 5):", "5" != 5);     // false (coerced, treated as equal)
console.log("Strict inequality ('5' !== 5):", "5" !== 5);   // true (different data types)

// --------------------------------------------------------------------------
// Part C: Logical Operators (&&, ||, !)
// --------------------------------------------------------------------------

console.log("--- PART C: LOGICAL OPERATORS ---");

// 1. Logical AND (&&): True ONLY if BOTH operands are true
let isActivelySurviving = isGameRunning && isPlayerAlive;
console.log("Running AND Alive (isGameRunning && isPlayerAlive):", isActivelySurviving);

// 2. Logical OR (||): True if AT LEAST ONE operand is true
let isReadyOrWaiting = hasGameStarted || !isGameRunning;
console.log("Started OR Waiting (hasGameStarted || !isGameRunning):", isReadyOrWaiting);

// 3. Logical NOT (!): Inverts the boolean truth value
let isGameIdle = !isGameRunning;
console.log("Game is NOT running (!isGameRunning):", isGameIdle);

// --------------------------------------------------------------------------
// Part D: Conditional Statements (if, else, else if, nested conditions)
// --------------------------------------------------------------------------

console.log("--- PART D: CONDITIONAL STATEMENTS ---");

// Example 1: High-score checking
let sampleScore = 150;
let sampleHighScore = 100;
console.log("Evaluating High Score (Score:", sampleScore, "| Record:", sampleHighScore, "):");
if (sampleScore > sampleHighScore) {
  console.log("High Score Result: NEW RECORD! Verse Man reached a new peak.");
} else {
  console.log("High Score Result: Keep running! Previous record remains unbroken.");
}

// Example 2: Game readiness
console.log("Evaluating Game Readiness (hasGameStarted =", hasGameStarted, "):");
if (hasGameStarted) {
  console.log("Readiness Result: Game is active! Obstacles are advancing.");
} else {
  console.log("Readiness Result: Game is on standby. Press Start Game to begin.");
}

// Example 3: Difficulty classification based on score (else if ladder)
let evaluationScore = 320;
console.log("Evaluating Difficulty Classification for score:", evaluationScore);
if (evaluationScore >= 500) {
  console.log("Difficulty Result: HARD — Digital horizon accelerating at maximum!");
} else if (evaluationScore >= 200) {
  console.log("Difficulty Result: MEDIUM — Speed increasing, watch for cyber blocks.");
} else {
  console.log("Difficulty Result: EASY — Standard cruising speed.");
}

// Example 4: Player jump permission as a hypothetical rule
// Note: We only calculate and display permission. No actual controls or movement are attached.
let hypotheticalGameRunning = true;
let hypotheticalPlayerOnGround = true;
let hypotheticalJumpAllowed = false;

console.log("Evaluating Jump Permission (Running:", hypotheticalGameRunning, "| On Ground:", hypotheticalPlayerOnGround, "):");
if (hypotheticalGameRunning) {
  // Nested condition: Player must also be on the ground to jump
  if (hypotheticalPlayerOnGround) {
    hypotheticalJumpAllowed = true;
    console.log("Jump Permission Result: ALLOWED — Verse Man is grounded and running.");
  } else {
    hypotheticalJumpAllowed = false;
    console.log("Jump Permission Result: DENIED — Verse Man is already airborne.");
  }
} else {
  hypotheticalJumpAllowed = false;
  console.log("Jump Permission Result: DENIED — Game is paused or has not started.");
}
console.log("Hypothetical Jump Allowed Flag:", hypotheticalJumpAllowed);

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
// 6. Browser Events & User Interaction (Preserving Day 5 Button Click)
// --------------------------------------------------------------------------

// Add a click event listener to the Start Game button
startButton.addEventListener("click", function () {
  console.log("Start Game button clicked!");

  // Update status variables when game begins
  hasGameStarted = true;
  isGameRunning = true;

  // Use a conditional to format status message
  if (hasGameStarted) {
    statusMessage.textContent = "Get ready, runner! Welcome to " + gameTitle + ".";
  } else {
    statusMessage.textContent = "Press Start Game to begin!";
  }

  console.log("Updated Game Status -> hasGameStarted:", hasGameStarted, "| isGameRunning:", isGameRunning);
});
