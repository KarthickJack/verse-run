/* ==========================================================================
   VERSE-RUN — Game Script
   Week 3 — Day 13: Collision Detection
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
let hasCollided = false;             // Boolean data type: True when player has collided with an obstacle

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
// DOM ELEMENT SELECTION (Player, Obstacle & HUD)
// ==========================================================================

// Selected existing DOM elements
const verseManElement = document.getElementById("verse-man");
const obstacleElement = document.getElementById("obstacle");
const titleElement = document.querySelector("#game-header h1");
const scoreElement = document.getElementById("current-score-display");
const highScoreElement = document.getElementById("high-score-display");
const startButton = document.getElementById("start-btn");
const statusMessage = document.getElementById("game-status-message");

// Display initial game values on the existing web page HUD
scoreElement.textContent = "SCORE: " + currentScore;
highScoreElement.textContent = "HI: " + highScore;

// ==========================================================================
// PLAYER PHYSICS & MOVEMENT (Day 12 Preserved Engine)
// ==========================================================================

console.log("--- DAY 12: PLAYER PHYSICS & MOVEMENT ---");

// CSS baseline: #verse-man { bottom: 35px; } resting on 35px ground track
const groundBaseline = 35;       // Constant: CSS bottom offset (px) for ground level
let playerY = 0;                 // Number: Vertical height above ground (0 = grounded)
let verticalVelocity = 0;        // Number (px/s): negative = upward, positive = downward
let gravity = 1600;              // Number (px/s²): Downward gravitational acceleration
let jumpStrength = 600;          // Number (px/s): Initial upward impulse when jumping

let lastFrameTimestamp = null;   // Tracks previous frame timestamp for delta time calculation

// Updates player vertical position and applies gravity over elapsed time
function updatePlayerPhysics(deltaTime) {
  if (!isPlayerOnGround || playerY > 0 || verticalVelocity !== 0) {
    verticalVelocity += gravity * deltaTime;
    playerY -= verticalVelocity * deltaTime;
  }

  if (playerY <= 0) {
    playerY = 0;
    verticalVelocity = 0;
    isPlayerOnGround = true;
  }

  if (verseManElement) {
    verseManElement.style.bottom = (groundBaseline + playerY) + "px";
  }
}

// Triggers jump impulse when grounded
function jump() {
  if (!isPlayerOnGround || !isLoopRunning) {
    return;
  }

  isPlayerOnGround = false;
  verticalVelocity = -jumpStrength;
  console.log("Verse Man Jumped! Upward velocity applied:", verticalVelocity, "px/s");
}

function handleMoveLeft() {
  console.log("Move Left input detected!");
}

function handleMoveRight() {
  console.log("Move Right input detected!");
}

// Keyboard input listener with key repeat protection
document.addEventListener("keydown", function (event) {
  console.log("Key pressed -> event.key:", event.key, "| event.code:", event.code);

  if (event.code === "Space") {
    event.preventDefault();
  }

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
// COLLISION DETECTION ENGINE (Day 13 Concepts & Implementation)
// ==========================================================================

console.log("--- DAY 13: COLLISION DETECTION ---");

// Step B: Calculate Bounding Box of any element in viewport coordinates
function getBoundingBox(element) {
  if (!element || typeof element.getBoundingClientRect !== "function") {
    return null;
  }
  const rect = element.getBoundingClientRect();
  return {
    left: rect.left,
    right: rect.right,
    top: rect.top,
    bottom: rect.bottom,
    width: rect.width,
    height: rect.height
  };
}

// Step C, D & E: Axis-Aligned Bounding Box (AABB) Collision Detection Function
// Checks both horizontal and vertical overlap in a unified coordinate space
function isColliding(playerRect, obstacleRect) {
  if (!playerRect || !obstacleRect) {
    return false;
  }

  // Step C: Horizontal overlap conditions:
  // 1. player.right > obstacle.left (Player right edge past obstacle left edge)
  // 2. player.left < obstacle.right (Player left edge before obstacle right edge)
  const horizontalOverlap =
    playerRect.right > obstacleRect.left &&
    playerRect.left < obstacleRect.right;

  // Step D: Vertical overlap conditions (in screen coordinates where top is 0 and bottom is positive):
  // 3. player.bottom > obstacle.top (Player bottom edge below obstacle top edge)
  // 4. player.top < obstacle.bottom (Player top edge above obstacle bottom edge)
  const verticalOverlap =
    playerRect.bottom > obstacleRect.top &&
    playerRect.top < obstacleRect.bottom;

  // Collision occurs IF AND ONLY IF both horizontal and vertical overlap occur simultaneously
  return horizontalOverlap && verticalOverlap;
}

// Step G: Basic Collision Response Handler
// Executes once, stops game loop, and updates status area
function handleCollision() {
  if (hasCollided) {
    return; // Prevent duplicate collision handling
  }

  hasCollided = true;
  isPlayerAlive = false;

  console.log("COLLISION DETECTED! Verse Man struck an obstacle.");

  // Safely stop the game loop
  stopGameLoop();

  // Display collision message in status area
  if (statusMessage) {
    statusMessage.textContent = "CRASH! Verse Man collided with an obstacle.";
  }
}

// ==========================================================================
// GAME LOOP ENGINE WITH PHYSICS & COLLISION INTEGRATION
// ==========================================================================

// Game loop control variables
let isLoopRunning = false;        // Boolean flag: True while game loop is active
let animationFrameId = null;      // Holds request ID from requestAnimationFrame for cancellation
let frameCount = 0;               // Tracks total animation frames elapsed during active run

// The core loop callback
function gameLoop(currentTimestamp) {
  if (!isLoopRunning) {
    return;
  }

  if (lastFrameTimestamp === null) {
    lastFrameTimestamp = currentTimestamp;
  }

  let deltaTime = (currentTimestamp - lastFrameTimestamp) / 1000;
  lastFrameTimestamp = currentTimestamp;

  if (deltaTime > 0.1) {
    deltaTime = 0.1;
  }

  // 1. Update player vertical physics
  updatePlayerPhysics(deltaTime);

  // 2. Step F: Collision detection during active game update
  if (verseManElement && obstacleElement && !hasCollided) {
    const playerBox = getBoundingBox(verseManElement);
    const obstacleBox = getBoundingBox(obstacleElement);

    if (isColliding(playerBox, obstacleBox)) {
      handleCollision();
      return; // Stop processing further updates for this frame
    }
  }

  // 3. Increment frame counter and log periodically
  frameCount++;
  if (frameCount % 60 === 0) {
    console.log(
      "Game Loop Active | Frame:", frameCount,
      "| Player Height Above Ground:", Math.round(playerY) + "px",
      "| Grounded:", isPlayerOnGround
    );
  }

  // Schedule next frame
  if (typeof requestAnimationFrame === "function") {
    animationFrameId = requestAnimationFrame(gameLoop);
  }
}

// Function to start the continuous game loop safely
function startGameLoop() {
  if (isLoopRunning) {
    console.log("Game loop is already running; duplicate start ignored.");
    return;
  }

  isLoopRunning = true;
  hasCollided = false;       // Reset collision flag for active session
  isPlayerAlive = true;
  lastFrameTimestamp = null; // Reset timestamp on start
  console.log("Starting VERSE-RUN Game Loop with Collision Detection...");

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
// Start Button Interaction (Day 5, 8, 11 & 13 Integration)
// --------------------------------------------------------------------------

function startGame() {
  console.log("Start Game button clicked! (startGame function invoked)");

  hasGameStarted = true;
  isGameRunning = true;

  statusMessage.textContent = "Get ready, runner! Welcome to " + gameTitle + ".";

  // Start continuous loop
  startGameLoop();

  console.log("Updated Game Status -> hasGameStarted:", hasGameStarted, "| isGameRunning:", isGameRunning);
}

startButton.addEventListener("click", startGame);
