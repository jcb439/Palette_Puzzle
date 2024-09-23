let keysPressed = {}; // Track which keys are pressed

function keyPressed() {
  keysPressed[key] = true; // Register key press
  console.log("Player 2 key pressed:", key);  // Debug Player 2 key presses

  let currentColor;

  // Handle Player 1 keypress
  currentColor = player1Colors[player1Position];

  // Primary colors for Player 1
  if (
    (key === 'a' && currentColor === 'red') ||
    (key === 's' && currentColor === 'yellow') ||
    (key === 'd' && currentColor === 'blue')
  ) {
    player1Position++;  // Move Player 1 to the next pixel
    checkLevelAdvance(1);
  }

  // Secondary colors for Player 1
  if (
    (keysPressed['a'] && keysPressed['s'] && currentColor === 'orange') ||  // red + yellow = orange
    (keysPressed['a'] && keysPressed['d'] && currentColor === 'purple') ||  // red + blue = purple
    (keysPressed['d'] && keysPressed['s'] && currentColor === 'green')      // blue + yellow = green
  ) {
    player1Position++;  // Move Player 1 to the next pixel
    checkLevelAdvance(1);
  }

  // Handle Player 2 keypress
  currentColor = player2Colors[player2Position - 15];  // Correct the color access for Player 2

  // Primary colors for Player 2
  if (
    (key === 'j' && currentColor === 'red') ||
    (key === 'k' && currentColor === 'yellow') ||
    (key === 'l' && currentColor === 'blue')
  ) {
    player2Position--;  // Move Player 2 to the next pixel (left direction)
    checkLevelAdvance(2);
  }

  // Secondary colors for Player 2
  if (
    (keysPressed['j'] && keysPressed['k'] && currentColor === 'orange') ||  // red + yellow = orange
    (keysPressed['j'] && keysPressed['l'] && currentColor === 'purple') ||  // red + blue = purple
    (keysPressed['l'] && keysPressed['k'] && currentColor === 'green')      // blue + yellow = green
  ) {
    player2Position--;  // Move Player 2 to the next pixel
    checkLevelAdvance(2);
  }
}

function keyReleased() {
  keysPressed[key] = false; // Unregister key press
}

// Function to check if player advances to the next level
function checkLevelAdvance(player) {
  // Player 1 level advancement
  if (player === 1 && player1Position == 15 && player1Level === 1) {
    player1Level = 2;
    alert("Player 1 starts level 2!");
    resetPlayer1(2);  // Reset Player 1 for level 2
  }

  // Player 2 level advancement
  if (player === 2 && player2Position == 15 && player2Level === 1) {  
    player2Level = 2;
    alert("Player 2 starts level 2!");
    resetPlayer2(2);  // Reset Player 2 for level 2
  }
}

function draw() {
  // For both players in Level 2, detect key presses for primary and secondary colors
  if (player1Level === 2) {
    handleLevel2KeyPress('player1');
  }
  if (player2Level === 2) {
    handleLevel2KeyPress('player2');
  }
}
