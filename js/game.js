/* ==========================================================================
   VERSE-RUN — Game Script
   Week 1 — Day 5: JavaScript Introduction, Variables and Browser Events
   ========================================================================== */

// External script connected successfully.
console.log("VERSE-RUN: Script successfully linked and executing!");

// --------------------------------------------------------------------------
// 1. Game Variables & Constants (Part A)
// --------------------------------------------------------------------------

// Constants: Values that will never be reassigned during the game session
const gameTitle = "VERSE-RUN";       // String data type: Name of our game
const characterName = "Verse Man";   // String data type: Main player hero

// Variables: Values that will change as gameplay progresses
let currentScore = 0;                // Number data type: Tracks accumulated distance points
let isGameReady = true;              // Boolean data type: Indicates if game is ready to begin

// Display initial game values in the developer console
console.log("--- INITIAL GAME STATE ---");
console.log("Game Title:", gameTitle);
console.log("Player Character:", characterName);
console.log("Initial Score:", currentScore);
console.log("Is Game Ready:", isGameReady);

// --------------------------------------------------------------------------
// 2. DOM Element Selection (Part B)
// --------------------------------------------------------------------------

// document.querySelector(): Selects an element using standard CSS selector syntax
const titleElement = document.querySelector("#game-header h1");

// document.getElementById(): Selects an element using its unique HTML id attribute
const scoreElement = document.getElementById("current-score-display");
const startButton = document.getElementById("start-btn");
const statusMessage = document.getElementById("game-status-message");

// Verify that all DOM elements were successfully located and selected
console.log("--- DOM ELEMENTS SELECTED ---");
console.log("Title Element:", titleElement);
console.log("Score Element:", scoreElement);
console.log("Start Button Element:", startButton);
console.log("Status Message Element:", statusMessage);

// --------------------------------------------------------------------------
// 3. Browser Events & User Interaction (Part C)
// --------------------------------------------------------------------------

// Add a click event listener to the Start Game button.
// Triggers an anonymous callback function whenever the user clicks the button.
startButton.addEventListener("click", function () {
  console.log("Start Game button clicked!");

  // Update the text content dynamically without refreshing the page
  statusMessage.textContent = "Get ready, runner! Welcome to VERSE-RUN.";
});
