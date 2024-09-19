// game.js
function setup() {
  createCanvas(600, 120);  // Adjust the size as needed

  // Generate random colors for Player 1
  for (let i = 0; i < 15; i++) {
    player1Colors.push(randomColor(1));  // Use level 1 colors initially
  }

  // Generate random colors for Player 2
  for (let i = 0; i < 15; i++) {
    player2Colors.push(randomColor(1));  // Use level 1 colors initially
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

// Level 2 keypress handling (primary and secondary colors)
function handleLevel2KeyPress(player) {
  let currentPosition, colors, keys;

  // Determine which player's data to use
  if (player === 'player1') {
    currentPosition = player1Position;
    colors = player1Colors;
    keys = ['a', 's', 'd'];  // Keys for Player 1
  } else if (player === 'player2') {
    currentPosition = player2Position - 15;  // Adjust position for Player 2's side
    colors = player2Colors;
    keys = ['j', 'k', 'l'];  // Keys for Player 2
  }

  let currentColor = colors[currentPosition];

  // Debugging: Log the current color and keys being pressed
  console.log("Current color:", currentColor);
  console.log("Keys pressed: Red -", keyIsDown(keys[0].charCodeAt(0)), "Yellow -", keyIsDown(keys[1].charCodeAt(0)), "Blue -", keyIsDown(keys[2].charCodeAt(0)));

  // Primary color detection (single key presses)
  if (currentColor === 'red' && keyIsDown(keys[0].charCodeAt(0))) {
    console.log("Red detected, moving forward.");
    currentPosition++;
  } else if (currentColor === 'yellow' && keyIsDown(keys[1].charCodeAt(0))) {
    console.log("Yellow detected, moving forward.");
    currentPosition++;
  } else if (currentColor === 'blue' && keyIsDown(keys[2].charCodeAt(0))) {
    console.log("Blue detected, moving forward.");
    currentPosition++;
  }

  // Secondary color detection (simultaneous key presses)
  if (currentColor === 'purple' && keyIsDown(keys[0].charCodeAt(0)) && keyIsDown(keys[2].charCodeAt(0))) {
    console.log("Purple detected (Red + Blue), moving forward.");
    currentPosition++;  // Red + Blue for Purple
  } else if (currentColor === 'green' && keyIsDown(keys[1].charCodeAt(0)) && keyIsDown(keys[2].charCodeAt(0))) {
    console.log("Green detected (Yellow + Blue), moving forward.");
    currentPosition++;  // Yellow + Blue for Green
  } else if (currentColor === 'orange' && keyIsDown(keys[0].charCodeAt(0)) && keyIsDown(keys[1].charCodeAt(0))) {
    console.log("Orange detected (Red + Yellow), moving forward.");
    currentPosition++;  // Red + Yellow for Orange
  }

  // Update the actual player position
  if (player === 'player1') {
    player1Position = currentPosition;
  } else if (player === 'player2') {
    player2Position = currentPosition + 15;  // Adjust back for Player 2
  }

  // Check if the player has finished level 2
  if (currentPosition >= 14) {
    alert(player === 'player1' ? "Player 1 wins level 2!" : "Player 2 wins level 2!");
    resetPlayer1(1);  // Reset for the next round
  }
}
