/* ==========================================================================
   VERSE-RUN — Game Script
   Week 3 — Day 12: Player Movement and Position
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

let isScoreBeatingHigh = currentScore > highScore;
let isSpeedBelowThreshold = gameSpeed < 10;
let isPassingScore = currentScore >= 0;
let isSpeedMaxCap = gameSpeed <= 5;

let isActivelySurviving = isGameRunning && isPlayerAlive;
let isReadyOrWaiting = hasGameStarted || !isGameRunning;
let isGameIdle = !isGameRunning;

// ==========================================================================
// FUNCTION PLAYGROUND (Day 8 Preserved Functions)
// ==========================================================================

console.log("--- DAY 8: FUNCTION PLAYGROUND ---");

function showWelcomeMessage() {
  const welcomeText = "Welcome to " + gameTitle + "!";
  console.log(welcomeText);
  return welcomeText;
}

function calculateBonus(points) {
  const bonus = 50;
  const totalWithBonus = points + bonus;
  return totalWithBonus;
}

function checkHighScore(score, recordHighScore) {
  if (score > recordHighScore) {
    return "New record achieved! High score beaten.";
  } else if (score === recordHighScore) {
    return "Tied with the current high score!";
  } else {
    return "Keep running! High score remains unbeaten.";
  }
}

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
// CONTINUOUS UPDATE PLAYGROUND (Day 11 Timers)
// ==========================================================================

console.log("--- DAY 11: CONTINUOUS UPDATE PLAYGROUND ---");

const delayedTimerId = setTimeout(function () {
  console.log("setTimeout Callback: 2 seconds elapsed! Asynchronous operation completed.");
}, 2000);

let countdownSeconds = 0;
const countdownIntervalId = setInterval(function () {
  countdownSeconds++;
  console.log("setInterval tick: Elapsed seconds =", countdownSeconds);

  if (countdownSeconds >= 3) {
    clearInterval(countdownIntervalId);
    console.log("clearInterval() invoked: Stopped repeating interval timer with ID:", countdownIntervalId);
  }
}, 1000);

const canceledTimeoutId = setTimeout(function () {
  console.log("This message should NEVER appear because it will be canceled!");
}, 5000);

clearTimeout(canceledTimeoutId);

// ==========================================================================
// PLAYER PHYSICS & MOVEMENT (Day 12 Concepts & Engine)
// ==========================================================================

console.log("--- DAY 12: PLAYER PHYSICS & MOVEMENT ---");

// Exercise 1: Identify existing DOM player element
const verseManElement = document.getElementById("verse-man");

// Exercise 2 & 4: Establish player position, physics and ground baseline
// CSS baseline: #verse-man { bottom: 35px; } resting on 35px ground track
const groundBaseline = 35;       // Constant: CSS bottom offset (px) for ground level
let playerY = 0;                 // Number: Vertical height above ground (0 = grounded)
let verticalVelocity = 0;        // Number (px/s): negative = upward, positive = downward
let gravity = 1600;              // Number (px/s²): Downward gravitational acceleration
let jumpStrength = 600;          // Number (px/s): Initial upward impulse when jumping

let lastFrameTimestamp = null;   // Tracks previous frame timestamp for delta time calculation

// Exercise 5: Implement player physics update function
// Receives elapsed time in seconds (deltaTime) to ensure framerate-independent physics
function updatePlayerPhysics(deltaTime) {
  // 1. If airborne or moving, apply gravity to vertical velocity
  if (!isPlayerOnGround || playerY > 0 || verticalVelocity !== 0) {
    // Gravity pulls downward (increases positive vertical velocity)
    verticalVelocity += gravity * deltaTime;

    // Update vertical position: negative velocity moves player up
    playerY -= verticalVelocity * deltaTime;
  }

  // 2. Ground detection and landing
  if (playerY <= 0) {
    playerY = 0;                 // Clamp to ground level
    verticalVelocity = 0;        // Reset falling velocity
    isPlayerOnGround = true;     // Restored grounded state
  }

  // 3. Update player visual position in DOM
  if (verseManElement) {
    verseManElement.style.bottom = (groundBaseline + playerY) + "px";
  }
}

// Exercise 6: Implement jumping function
function jump() {
  // Restriction 1: Player must be grounded
  // Restriction 2: Game loop must be actively running
  if (!isPlayerOnGround || !isLoopRunning) {
    return;
  }

  // Apply upward velocity impulse
  isPlayerOnGround = false;
  verticalVelocity = -jumpStrength; // Negative velocity = upward movement
  console.log("Verse Man Jumped! Upward velocity applied:", verticalVelocity, "px/s");
}

// Directional input handlers (preserved from Day 9)
function handleMoveLeft() {
  console.log("Move Left input detected!");
}

function handleMoveRight() {
  console.log("Move Right input detected!");
}

// Exercise 7: Connect keyboard input with key repeat protection
document.addEventListener("keydown", function (event) {
  console.log("Key pressed -> event.key:", event.key, "| event.code:", event.code);

  if (event.code === "Space") {
    event.preventDefault(); // Stop default browser page scrolling
  }

  // Trigger jump on Spacebar, guarding against key repeat
  if (event.code === "Space" || event.key === " ") {
    if (!event.repeat) {
      jump();
    }
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
// GAME LOOP ENGINE WITH PHYSICS INTEGRATION (Day 11 & Day 12 Integration)
// ==========================================================================

// Exercise 8: Integrate physics into the existing game loop
let isLoopRunning = false;        // Boolean flag: True while game loop is active
let animationFrameId = null;      // Holds request ID from requestAnimationFrame for cancellation
let frameCount = 0;               // Tracks total animation frames elapsed during active run

// The core loop callback
function gameLoop(currentTimestamp) {
  // Guard check: Stop execution if loop was halted
  if (!isLoopRunning) {
    return;
  }

  // Initialize timestamp on first active frame
  if (lastFrameTimestamp === null) {
    lastFrameTimestamp = currentTimestamp;
  }

  // Calculate elapsed time in seconds (deltaTime)
  let deltaTime = (currentTimestamp - lastFrameTimestamp) / 1000;
  lastFrameTimestamp = currentTimestamp;

  // Safety clamp: Prevent large physics steps if tab was frozen or stuttered
  if (deltaTime > 0.1) {
    deltaTime = 0.1;
  }

  // Update player physics based on delta time
  updatePlayerPhysics(deltaTime);

  // Increment total frame counter
  frameCount++;

  // Periodically log progress every 60 frames (approx once per second at 60fps)
  if (frameCount % 60 === 0) {
    console.log(
      "Game Loop Active | Frame:", frameCount,
      "| Player Height Above Ground:", Math.round(playerY) + "px",
      "| Grounded:", isPlayerOnGround
    );
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
  lastFrameTimestamp = null; // Reset timestamp on start
  console.log("Starting VERSE-RUN Game Loop with Player Physics...");

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
  lastFrameTimestamp = null; // Reset timestamp on stop

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

  // Start the continuous game loop with player physics
  startGameLoop();

  console.log("Updated Game Status -> hasGameStarted:", hasGameStarted, "| isGameRunning:", isGameRunning);
}

// Connect the named function to the Start Game button click event
startButton.addEventListener("click", startGame);
