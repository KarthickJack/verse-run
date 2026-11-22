/* ==========================================================================
   VERSE-RUN — Game Script
   Week 2 — Day 6: JavaScript Variables and Data Types
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

// --------------------------------------------------------------------------
// 4. Console Verification: Logging Initial Values
// --------------------------------------------------------------------------

console.log("--- INITIAL GAME STATE ---");
console.log("Game Title:", gameTitle);
console.log("Player Character:", characterName);
console.log("Current Score:", currentScore);
console.log("High Score:", highScore);
console.log("Game Speed:", gameSpeed);
console.log("Is Game Running:", isGameRunning);
console.log("Has Game Started:", hasGameStarted);
console.log("Game Over Message:", gameOverMessage);

// --------------------------------------------------------------------------
// 5. Demonstrating Reassignment (let vs const)
// --------------------------------------------------------------------------

console.log("--- REASSIGNMENT DEMONSTRATION ---");
console.log("Initial currentScore:", currentScore);

// Reassigning a 'let' variable is valid and expected:
currentScore = 10;
console.log("currentScore after reaching milestone:", currentScore);

// Resetting back to initial starting score:
currentScore = 0;
console.log("currentScore reset for new game:", currentScore);

// Explanation for const:
// Attempting to reassign a const variable like:
// gameTitle = "SUPER VERSE-RUN";
// would cause: TypeError: Assignment to constant variable.
// We use const for gameTitle and characterName to prevent accidental changes.

// --------------------------------------------------------------------------
// 6. Identifying Data Types with typeof Operator
// --------------------------------------------------------------------------

console.log("--- DATA TYPES (typeof) ---");
console.log("typeof gameTitle:", typeof gameTitle);             // "string"
console.log("typeof characterName:", typeof characterName);     // "string"
console.log("typeof currentScore:", typeof currentScore);       // "number"
console.log("typeof highScore:", typeof highScore);             // "number"
console.log("typeof gameSpeed:", typeof gameSpeed);             // "number"
console.log("typeof isGameRunning:", typeof isGameRunning);     // "boolean"
console.log("typeof hasGameStarted:", typeof hasGameStarted);   // "boolean"
console.log("typeof gameOverMessage:", typeof gameOverMessage); // "object" (JavaScript standard quirk for null)

// --------------------------------------------------------------------------
// 7. DOM Element Selection & Displaying Game Info
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

// Verify DOM selections in console
console.log("--- DOM ELEMENTS SELECTED ---");
console.log("Title Element:", titleElement);
console.log("Score Element:", scoreElement);
console.log("High Score Element:", highScoreElement);
console.log("Start Button Element:", startButton);
console.log("Status Message Element:", statusMessage);

// --------------------------------------------------------------------------
// 8. Browser Events & User Interaction (Preserving Day 5 Button Click)
// --------------------------------------------------------------------------

// Add a click event listener to the Start Game button
startButton.addEventListener("click", function () {
  console.log("Start Game button clicked!");

  // Update status variables when game begins
  hasGameStarted = true;
  isGameRunning = true;

  // Update DOM status message dynamically
  statusMessage.textContent = "Get ready, runner! Welcome to " + gameTitle + ".";

  console.log("Updated Game Status -> hasGameStarted:", hasGameStarted, "| isGameRunning:", isGameRunning);
});
