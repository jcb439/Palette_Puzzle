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
  