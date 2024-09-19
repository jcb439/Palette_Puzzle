// Detect player key presses in Level 1 and Level 2
let keysPressed = {}; // Track which keys are pressed

function keyPressed() {
  keysPressed[key] = true; // Register key press

  let currentColor;
  // Handle Player 1 keypress
  currentColor = player1Colors[player1Position];
  
  // Primary colors
  if (
    (key === 'a' && currentColor === 'red') ||
    (key === 's' && currentColor === 'yellow') ||
    (key === 'd' && currentColor === 'blue')
  ) {
    player1Position++;  // Move to the next pixel
    checkLevelAdvance(1);
  }
  
  // Secondary colors (press two keys together)
  if (
    (keysPressed['a'] && keysPressed['s'] && currentColor === 'orange') ||  // red + yellow = orange
    (keysPressed['a'] && keysPressed['d'] && currentColor === 'purple') ||  // red + blue = purple
    (keysPressed['d'] && keysPressed['s'] && currentColor === 'green')      // blue + yellow = green
  ) {
    player1Position++;  // Move to the next pixel
    checkLevelAdvance(1);
  }
}

function keyReleased() {
  keysPressed[key] = false; // Unregister key press
}

// Function to check if player advances to next level
function checkLevelAdvance(player) {
  if (player === 1 && player1Position == 15) {
    player1Level = 2;
    alert("Player 1 starts level 2!");
    resetPlayer1(2);
  }
}

// Similar logic for Player 2 (you can modify based on your Player 2 logic)


function draw() {
  // For both players in Level 2, detect key presses for primary and secondary colors
  if (player1Level === 2) {
    handleLevel2KeyPress('player1');
  }
  if (player2Level === 2) {
    handleLevel2KeyPress('player2');
  }
}
