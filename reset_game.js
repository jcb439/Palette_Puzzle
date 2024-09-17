function resetPlayer1(level) {
  player1Position = 0;  // Reset Player 1 position
  player1Colors = [];
  for (let i = 0; i < 15; i++) {
    player1Colors.push(randomColor(level));  // Generate new colors for the current level
  }
}

function resetPlayer2(level) {
  player2Position = 29;  // Reset Player 2 position
  player2Colors = [];
  for (let i = 0; i < 15; i++) {
    player2Colors.push(randomColor(level));  // Generate new colors for the current level
  }
}
