/* ==========================================================================
   VERSE-RUN — Game Script
   Week 4 — Day 18: Collectibles and Game Feedback
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
// 2. Numerical Information & Data Structures (Variables: Numbers & Collections)
// --------------------------------------------------------------------------

// Score tracking: survival distance and collectible bonuses (Day 15 & 18)
let survivalScore = 0;               // Number data type: Time-based distance score (1 pt/s, drives difficulty)
let bonusScore = 0;                  // Number data type: Bonus points from collected Verse Coins (10 pts each)
let currentScore = 0;                // Number data type: Total combined score rendered on the HUD
let highScore = 0;                   // Number data type: Highest score achieved in session
let elapsedScoreTime = 0;            // Number data type: Accumulated delta time in seconds for scoring
let currentDifficulty = "easy";      // String data type: Current difficulty tier ("easy" | "medium" | "hard")
let gameSpeed = 200;                 // Number data type: World scrolling speed in px/s (Day 15 values: 200, 260, 320)

// Multiple obstacle management & dimensional constants (Day 17)
const obstacleWidth = 90;            // Number data type: Standard width (px) matching CSS .obstacle width
let activeObstacles = [];            // Array data type: Stores active obstacle objects [{ element, x, width }]
let obstacleSpawnTimer = 0;          // Number data type: Elapsed delta time (seconds) since last spawn
let nextSpawnInterval = 2.0;         // Number data type: Target interval (seconds) before next obstacle spawns
const maxActiveObstacles = 4;        // Number data type: Maximum simultaneous obstacles on stage

// Verse Coin Collectible management & dimensional constants (Day 18)
const coinWidth = 24;                // Number data type: Width (px) matching CSS .verse-coin
const coinHeight = 24;               // Number data type: Height (px) matching CSS .verse-coin
let activeCoins = [];                // Array data type: Stores active coin objects [{ element, x, y, width, height, isCollected, pointValue }]
let coinSpawnTimer = 0;              // Number data type: Elapsed delta time (seconds) since last coin spawn
let nextCoinSpawnInterval = 2.5;     // Number data type: Target interval (seconds) before next coin spawns
const maxActiveCoins = 3;            // Number data type: Maximum simultaneous coins on stage

// --------------------------------------------------------------------------
// 3. Game Status & Finite State Management (Day 14 Architecture)
// --------------------------------------------------------------------------

// Central game state variable: "ready" | "playing" | "gameover"
let gameState = "ready";             // Initial state: Game waits on standby for player to start

// Binary flags and message container (preserved)
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
console.log("Game State:", gameState);
console.log("Game Title:", gameTitle);
console.log("Player Character:", characterName);
console.log("Current Score:", currentScore);
console.log("Survival Score:", survivalScore);
console.log("Bonus Score:", bonusScore);
console.log("High Score:", highScore);
console.log("Current Difficulty:", currentDifficulty);
console.log("Game Speed:", gameSpeed);
console.log("Active Obstacles Count:", activeObstacles.length);
console.log("Active Coins Count:", activeCoins.length);
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
  // Day 15 Step D: Highest threshold checked first to avoid shadowing
  if (score >= 200) {
    return "hard";
  } else if (score >= 100) {
    return "medium";
  } else {
    return "easy";
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
const gameStageElement = document.getElementById("game-stage");
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

// Step B & H: Initial READY state message
if (statusMessage) {
  statusMessage.textContent = "Press Start Game to begin!";
}

// ==========================================================================
// MULTIPLE OBSTACLE & SPAWN ENGINE (Day 17 Architecture)
// ==========================================================================

console.log("--- DAY 17: MULTIPLE OBSTACLES & DIFFICULTY INTEGRATION ---");

// Helper: Calculate stage reference width for responsive boundary tracking
function getStageWidth() {
  return gameStageElement && gameStageElement.clientWidth > 0
    ? gameStageElement.clientWidth
    : 628;
}

// Step 3: Dynamically create and register an obstacle entity
function createObstacle(initialX) {
  if (
    !gameStageElement ||
    typeof document.createElement !== "function" ||
    typeof gameStageElement.appendChild !== "function"
  ) {
    return null;
  }

  const stageWidth = getStageWidth();
  const spawnX = typeof initialX === "number" ? initialX : stageWidth;

  // Create DOM element using existing .obstacle style
  const element = document.createElement("div");
  element.className = "obstacle";
  element.textContent = "OBSTACLE";
  element.style.right = "auto";
  element.style.left = spawnX + "px";

  gameStageElement.appendChild(element);

  // Register in active obstacles array
  const obstacleObj = {
    element: element,
    x: spawnX,
    width: obstacleWidth
  };

  activeObstacles.push(obstacleObj);
  return obstacleObj;
}

// Step 4 & 7: Update all active obstacles and remove off-screen ones
function updateObstacles(deltaTime) {
  if (gameState !== "playing") {
    return;
  }

  // Iterate backwards so removing via splice does not disrupt loop indexing
  for (let i = activeObstacles.length - 1; i >= 0; i--) {
    const obstacle = activeObstacles[i];

    // Independent horizontal movement: newX = oldX - speed * deltaTime
    obstacle.x -= gameSpeed * deltaTime;

    // Step 7: Off-screen detection (completely exited left boundary: x < -width)
    if (obstacle.x < -obstacle.width) {
      if (
        obstacle.element &&
        obstacle.element.parentNode &&
        typeof obstacle.element.parentNode.removeChild === "function"
      ) {
        obstacle.element.parentNode.removeChild(obstacle.element);
      }
      activeObstacles.splice(i, 1);
    } else {
      // Update DOM position
      if (obstacle.element) {
        obstacle.element.style.left = obstacle.x + "px";
      }
    }
  }
}

// Step 8: Calculate difficulty-aware spawn interval
function getRandomSpawnInterval(difficulty) {
  const level = String(difficulty).toLowerCase();
  let min = 2.0;
  let max = 2.8;

  if (level === "hard") {
    min = 1.3;
    max = 1.8;
  } else if (level === "medium") {
    min = 1.6;
    max = 2.2;
  }

  return Math.random() * (max - min) + min;
}

// Step 5: Controlled spawn accumulator using deltaTime
function updateObstacleSpawning(deltaTime) {
  if (gameState !== "playing") {
    return;
  }

  obstacleSpawnTimer += deltaTime;

  if (obstacleSpawnTimer >= nextSpawnInterval) {
    if (activeObstacles.length < maxActiveObstacles) {
      const stageWidth = getStageWidth();
      const lastObstacle = activeObstacles[activeObstacles.length - 1];

      // Proximity guard: prevent overlapping spawns at right boundary
      if (!lastObstacle || lastObstacle.x < stageWidth - 150) {
        createObstacle(stageWidth);
        obstacleSpawnTimer = 0;
        nextSpawnInterval = getRandomSpawnInterval(currentDifficulty);
      }
    }
  }
}

// Step 9: Clear all active obstacle elements and reset array
function clearAllObstacles() {
  for (let i = 0; i < activeObstacles.length; i++) {
    const obs = activeObstacles[i];
    if (
      obs.element &&
      obs.element.parentNode &&
      typeof obs.element.parentNode.removeChild === "function"
    ) {
      obs.element.parentNode.removeChild(obs.element);
    }
  }
  activeObstacles = [];

  // Also remove placeholder obstacle from index.html if still present
  const placeholderObstacle = document.getElementById("obstacle");
  if (
    placeholderObstacle &&
    placeholderObstacle.parentNode &&
    typeof placeholderObstacle.parentNode.removeChild === "function"
  ) {
    placeholderObstacle.parentNode.removeChild(placeholderObstacle);
  }
}

// ==========================================================================
// COLLECTIBLE & FEEDBACK ENGINE (Day 18 Architecture)
// ==========================================================================

console.log("--- DAY 18: COLLECTIBLES & GAME FEEDBACK ---");

// Step A: Dynamically create and register a Verse Coin entity
function createCoin(spawnX, spawnY) {
  if (
    !gameStageElement ||
    typeof document.createElement !== "function" ||
    typeof gameStageElement.appendChild !== "function"
  ) {
    return null;
  }

  const stageWidth = getStageWidth();
  const posX = typeof spawnX === "number" ? spawnX : stageWidth;
  const posY = typeof spawnY === "number" ? spawnY : 60; // Default altitude (px) above ground

  // Create DOM element using .verse-coin styling
  const element = document.createElement("div");
  element.className = "verse-coin";
  element.textContent = "C"; // C-VERSE Coin emblem
  element.style.right = "auto";
  element.style.left = posX + "px";
  element.style.bottom = (groundBaseline + posY) + "px";

  gameStageElement.appendChild(element);

  // Register in active coins array
  const coinObj = {
    element: element,
    x: posX,
    y: posY,
    width: coinWidth,
    height: coinHeight,
    isCollected: false,
    pointValue: 10
  };

  activeCoins.push(coinObj);
  return coinObj;
}

// Step D & E: Update active coins movement and remove off-screen ones
function updateCoins(deltaTime) {
  if (gameState !== "playing") {
    return;
  }

  // Reverse loop for safe in-place array splice
  for (let i = activeCoins.length - 1; i >= 0; i--) {
    const coin = activeCoins[i];

    // Synchronized horizontal movement matching gameSpeed
    coin.x -= gameSpeed * deltaTime;

    // Off-screen check: fully exited left boundary (x < -width)
    if (coin.x < -coin.width) {
      if (
        coin.element &&
        coin.element.parentNode &&
        typeof coin.element.parentNode.removeChild === "function"
      ) {
        coin.element.parentNode.removeChild(coin.element);
      }
      activeCoins.splice(i, 1);
    } else {
      // Update DOM horizontal position
      if (coin.element) {
        coin.element.style.left = coin.x + "px";
      }
    }
  }
}

// Step G: Trigger visible +10 floating feedback indicator
function triggerCollectionFeedback(x, y) {
  if (
    !gameStageElement ||
    typeof document.createElement !== "function" ||
    typeof gameStageElement.appendChild !== "function"
  ) {
    return;
  }

  const feedbackEl = document.createElement("div");
  feedbackEl.className = "score-feedback";
  feedbackEl.textContent = "+10";
  feedbackEl.style.left = x + "px";
  feedbackEl.style.bottom = (groundBaseline + y + 15) + "px";

  gameStageElement.appendChild(feedbackEl);

  // Clean up floating feedback element after CSS animation (0.6s) completes
  setTimeout(function () {
    if (
      feedbackEl.parentNode &&
      typeof feedbackEl.parentNode.removeChild === "function"
    ) {
      feedbackEl.parentNode.removeChild(feedbackEl);
    }
  }, 650);
}

// Step E: Handle coin collection, single award, and feedback
function collectCoin(coin, index) {
  if (coin.isCollected) {
    return; // Guard against duplicate collection
  }

  coin.isCollected = true;

  // Award exactly 10 bonus points
  awardBonusPoints(coin.pointValue);

  // Show floating visual feedback at collection point
  triggerCollectionFeedback(coin.x, coin.y);

  console.log("VERSE COIN COLLECTED! +10 Bonus | Total Score:", currentScore);

  // Detach DOM element immediately
  if (
    coin.element &&
    coin.element.parentNode &&
    typeof coin.element.parentNode.removeChild === "function"
  ) {
    coin.element.parentNode.removeChild(coin.element);
  }

  // Remove from active array
  activeCoins.splice(index, 1);
}

// Step C: Controlled coin spawning with reachable heights and obstacle avoidance
function updateCoinSpawning(deltaTime) {
  if (gameState !== "playing") {
    return;
  }

  coinSpawnTimer += deltaTime;

  if (coinSpawnTimer >= nextCoinSpawnInterval) {
    if (activeCoins.length < maxActiveCoins) {
      const stageWidth = getStageWidth();

      // Obstacle avoidance: do not spawn coin directly on top of an obstacle
      let isNearObstacle = false;
      for (let i = 0; i < activeObstacles.length; i++) {
        if (Math.abs(activeObstacles[i].x - stageWidth) < 100) {
          isNearObstacle = true;
          break;
        }
      }

      // Proximity guard against existing coins
      const lastCoin = activeCoins[activeCoins.length - 1];
      const isNearCoin = lastCoin && Math.abs(lastCoin.x - stageWidth) < 120;

      if (!isNearObstacle && !isNearCoin) {
        // Safe, reachable vertical altitudes: 15px (running ground reach) or 60px/75px (jump arc reach)
        const reachableAltitudes = [15, 60, 75];
        const randomAltitude = reachableAltitudes[Math.floor(Math.random() * reachableAltitudes.length)];

        createCoin(stageWidth, randomAltitude);
        coinSpawnTimer = 0;
        // Randomize next coin spawn interval between 2.0s and 3.5s
        nextCoinSpawnInterval = Math.random() * 1.5 + 2.0;
      }
    }
  }
}

// Step H: Clear all active coin elements and reset collection array
function clearAllCoins() {
  for (let i = 0; i < activeCoins.length; i++) {
    const coin = activeCoins[i];
    if (
      coin.element &&
      coin.element.parentNode &&
      typeof coin.element.parentNode.removeChild === "function"
    ) {
      coin.element.parentNode.removeChild(coin.element);
    }
  }
  activeCoins = [];
}

// ==========================================================================
// SCORE & DIFFICULTY PROGRESSION ENGINE (Day 15 Architecture)
// ==========================================================================

console.log("--- DAY 15: SCORE & DIFFICULTY PROGRESSION ---");

// Step E: Game speed values mapped to difficulty tiers
function getGameSpeed(difficulty) {
  const level = String(difficulty).toLowerCase();
  if (level === "hard") {
    return 320;
  } else if (level === "medium") {
    return 260;
  } else {
    return 200;
  }
}

// Step F: Award bonus points from collected Verse Coins (Day 18)
function awardBonusPoints(points) {
  bonusScore += points;
  currentScore = survivalScore + bonusScore;
  renderScore();
}

// Step C: Update the score display in the DOM
function renderScore() {
  if (scoreElement) {
    scoreElement.textContent = "SCORE: " + currentScore;
  }
}

// Step F: Evaluate difficulty progression based on survival distance (prevents coin bonus spikes)
function updateDifficulty() {
  const newDifficulty = getDifficulty(survivalScore);
  const newSpeed = getGameSpeed(newDifficulty);

  const difficultyChanged = newDifficulty !== currentDifficulty;
  currentDifficulty = newDifficulty;
  gameSpeed = newSpeed;

  if (difficultyChanged) {
    console.log(
      "DIFFICULTY LEVEL UP! Difficulty is now:", currentDifficulty.toUpperCase(),
      "| Game Speed:", gameSpeed + " px/s"
    );
  }

  // Step F: Display current difficulty in the status message while playing
  if (statusMessage && gameState === "playing") {
    statusMessage.textContent = "Run, Verse Man! [Difficulty: " + currentDifficulty.toUpperCase() + "]";
  }
}

// Step B: Time-based survival score accumulation using delta time
function updateScore(deltaTime) {
  // Step B & I: Score must update only while the game is PLAYING
  if (gameState !== "playing") {
    return;
  }

  elapsedScoreTime += deltaTime;

  let scoreChanged = false;

  // Use a while loop to safely account for large delta-time intervals
  while (elapsedScoreTime >= 1) {
    survivalScore += 1;
    elapsedScoreTime -= 1;
    scoreChanged = true;
  }

  // Avoid unnecessary DOM thrashing: Update display only when score changes
  if (scoreChanged) {
    currentScore = survivalScore + bonusScore;
    renderScore();
    updateDifficulty();
  }
}

// ==========================================================================
// PLAYER PHYSICS & MOVEMENT (Day 12 & Day 14 State Integration)
// ==========================================================================

console.log("--- DAY 12 & 14: PLAYER PHYSICS & STATE RESTRICTIONS ---");

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

// Step E: Restrict jumping strictly to "playing" state
function jump() {
  // Restriction 1: Must be in "playing" state
  // Restriction 2: Must be grounded
  if (gameState !== "playing" || !isPlayerOnGround) {
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

  // Prevent default window scrolling for jump keys (Space and ArrowUp)
  if (event.code === "Space" || event.key === " " || event.key === "ArrowUp" || event.code === "ArrowUp") {
    event.preventDefault();
  }

  // Trigger jump on Spacebar or ArrowUp, guarded by key repeat and state inside jump()
  const isJumpKey =
    event.code === "Space" ||
    event.key === " " ||
    event.key === "ArrowUp" ||
    event.code === "ArrowUp";

  if (isJumpKey) {
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
// COLLISION DETECTION ENGINE (Day 13 Preserved Logic)
// ==========================================================================

console.log("--- DAY 13 & 14: COLLISION DETECTION & GAME OVER TRANSITION ---");

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

function isColliding(playerRect, obstacleRect) {
  if (!playerRect || !obstacleRect) {
    return false;
  }

  const horizontalOverlap =
    playerRect.right > obstacleRect.left &&
    playerRect.left < obstacleRect.right;

  const verticalOverlap =
    playerRect.bottom > obstacleRect.top &&
    playerRect.top < obstacleRect.bottom;

  return horizontalOverlap && verticalOverlap;
}

// Step F: GAME OVER transition handler
function handleCollision() {
  // Transition guard: Only trigger if currently in "playing" state
  if (gameState !== "playing") {
    return;
  }

  // State Transition: PLAYING -> GAMEOVER
  gameState = "gameover";
  isGameRunning = false;
  hasCollided = true;
  isPlayerAlive = false;

  console.log("STATE TRANSITION: gameState is now 'gameover'");
  console.log("COLLISION DETECTED! Verse Man struck an obstacle.");

  // Safely stop the game loop
  stopGameLoop();

  // Step I: Display Game Over message with final score preserved
  if (statusMessage) {
    statusMessage.textContent = "Game Over! You hit an obstacle. Final Score: " + currentScore;
  }
}

// ==========================================================================
// GAME LOOP ENGINE WITH STATE-BASED EXECUTION (Day 14 Step G)
// ==========================================================================

let isLoopRunning = false;        // Boolean flag: True while game loop is active
let animationFrameId = null;      // Holds request ID from requestAnimationFrame for cancellation
let frameCount = 0;               // Tracks total animation frames elapsed during active run

// The core loop callback
function gameLoop(currentTimestamp) {
  // Step G: Ensure loop updates run ONLY while in "playing" state
  if (gameState !== "playing" || !isLoopRunning) {
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

  // 2. Update active obstacles horizontal movement & cleanup off-screen (Day 17 Step 4 & 7)
  if (gameState === "playing") {
    updateObstacles(deltaTime);
  }

  // 3. Update controlled obstacle spawning (Day 17 Step 5)
  if (gameState === "playing") {
    updateObstacleSpawning(deltaTime);
  }

  // 4. Perform collision detection against all active obstacles (Day 17 Step 6)
  if (verseManElement && gameState === "playing") {
    const playerBox = getBoundingBox(verseManElement);

    for (let i = 0; i < activeObstacles.length; i++) {
      const obstacle = activeObstacles[i];
      if (obstacle.element) {
        const obstacleBox = getBoundingBox(obstacle.element);

        if (isColliding(playerBox, obstacleBox)) {
          handleCollision();
          return; // Stop processing further updates for this frame
        }
      }
    }
  }

  // 5. Update active coins movement & off-screen cleanup (Day 18 Step D)
  if (gameState === "playing") {
    updateCoins(deltaTime);
  }

  // 6. Update controlled coin spawning (Day 18 Step C)
  if (gameState === "playing") {
    updateCoinSpawning(deltaTime);
  }

  // 7. Check collectible coin collection (Day 18 Step E)
  if (verseManElement && gameState === "playing") {
    const playerBox = getBoundingBox(verseManElement);

    for (let i = activeCoins.length - 1; i >= 0; i--) {
      const coin = activeCoins[i];
      if (!coin.isCollected && coin.element) {
        const coinBox = getBoundingBox(coin.element);

        if (isColliding(playerBox, coinBox)) {
          collectCoin(coin, i);
        }
      }
    }
  }

  // 8. Update time-based survival score and difficulty progression (Day 15 Step G)
  if (gameState === "playing") {
    updateScore(deltaTime);
  }

  // 9. Increment frame counter and log periodically
  frameCount++;
  if (frameCount % 60 === 0) {
    console.log(
      "Game Loop Active (" + gameState + ") | Frame:", frameCount,
      "| Score:", currentScore,
      "| Survival Score:", survivalScore,
      "| Bonus Score:", bonusScore,
      "| Difficulty:", currentDifficulty.toUpperCase(),
      "| Speed:", gameSpeed + " px/s",
      "| Active Obstacles:", activeObstacles.length,
      "| Active Coins:", activeCoins.length,
      "| Player Height Above Ground:", Math.round(playerY) + "px",
      "| Grounded:", isPlayerOnGround
    );
  }

  // 10. Schedule next frame only if still actively playing
  if (typeof requestAnimationFrame === "function" && gameState === "playing") {
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
  lastFrameTimestamp = null; // Reset timestamp on start
  console.log("Starting VERSE-RUN Game Loop in PLAYING state...");

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
// Start Button Interaction (Day 14 Step C: READY -> PLAYING Transition)
// --------------------------------------------------------------------------

function startGame() {
  console.log("Start Game button clicked! (startGame function invoked)");

  // Step C Guard: Only permit transition from "ready" to "playing"
  // Prevents invalid transitions: "playing" -> "playing" (duplicate) or "gameover" -> "playing" (restart)
  if (gameState !== "ready") {
    console.log("Start Game ignored: Current gameState is '" + gameState + "' (must be 'ready').");
    return;
  }

  // State Transition: READY -> PLAYING
  gameState = "playing";
  hasGameStarted = true;
  isGameRunning = true;
  hasCollided = false;
  isPlayerAlive = true;

  // Day 15 & 18: Reset score components, accumulator, difficulty and speed on start
  survivalScore = 0;
  bonusScore = 0;
  currentScore = 0;
  elapsedScoreTime = 0;
  currentDifficulty = getDifficulty(survivalScore);
  gameSpeed = getGameSpeed(currentDifficulty);
  renderScore();

  // Day 17 Step 9: Reset obstacle collection, spawn timer, and spawn first obstacle
  clearAllObstacles();
  obstacleSpawnTimer = 0;
  nextSpawnInterval = getRandomSpawnInterval(currentDifficulty);
  createObstacle(getStageWidth());

  // Day 18 Step H: Reset collectibles, coin spawn timer and target interval
  clearAllCoins();
  coinSpawnTimer = 0;
  nextCoinSpawnInterval = 2.0;

  // Step F & H: Display playing message with current difficulty
  if (statusMessage) {
    statusMessage.textContent = "Run, Verse Man! [Difficulty: " + currentDifficulty.toUpperCase() + "]";
  }

  // Start continuous loop
  startGameLoop();

  console.log("STATE TRANSITION: gameState is now 'playing'");
  console.log("Updated Game Status -> Score:", currentScore, "| Difficulty:", currentDifficulty, "| Speed:", gameSpeed);
  console.log("Updated Game Status -> Active Obstacles:", activeObstacles.length, "| Active Coins:", activeCoins.length);
  console.log("Updated Game Status -> hasGameStarted:", hasGameStarted, "| isGameRunning:", isGameRunning);
}

startButton.addEventListener("click", startGame);
