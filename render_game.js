function draw() {
  clear();  // Clear the background

  let flash = frameCount % 30 < 15;  // Toggle between true and false every 15 frames

  // Draw Player 1's pixels (moving right towards the center)
  for (let i = 0; i < 15; i++) {
    if (i == player1Position && flash) {
      fill(255);  // White flashing
      noStroke();  // No outline
    } else {
      fill(player1Colors[i]);  // Normal color
      noStroke();  // No stroke for other pixels
    }
    rect(i * 20, 50, 20, 20);  // Draw the pixels for Player 1
  }

  // Draw Player 2's pixels (moving left towards the center)
  for (let i = 15; i < 30; i++) {
    if (i == player2Position && flash) {
      fill(255);  // White flashing
      noStroke();  // No outline
    } else {
      fill(player2Colors[i - 15]);  // Corrected color array access
      noStroke();  // No stroke for other pixels
    }
    rect(i * 20, 50, 20, 20);  // Draw the pixels for Player 2
  }

  // Draw the central black pixel (boundary)
  fill(0);  // Black color for the boundary pixel
  noStroke();  // Ensure no stroke around the center pixel
  rect(300, 50, 20, 20);  // Center black pixel
}
