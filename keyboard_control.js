function keyPressed() {
    // Player 1 Controls
    if (key === 'a' || key === 's' || key === 'd') {
      let currentColor = player1Colors[player1Position];
      if (
        (key === 'a' && currentColor === 'red') ||
        (key === 's' && currentColor === 'yellow') ||
        (key === 'd' && currentColor === 'blue')
      ) {
        player1Position++;
        if (player1Position >= 15) {
          alert("Player 1 Wins!");
          resetPlayer1();
        }
      } else {
        // Incorrect guess and player cannot move forward
      }
    }
  
    // Player 2 Controls
    if (key === 'j' || key === 'k' || key === 'l') {
      let currentColor = player2Colors[player2Position - 15];
      if (
        (key === 'j' && currentColor === 'red') ||
        (key === 'k' && currentColor === 'yellow') ||
        (key === 'l' && currentColor === 'blue')
      ) {
        player2Position--;
        if (player2Position < 15) {
          alert("Player 2 Wins!");
          resetPlayer2();
        }
      } else {
        // Incorrect guess and player cannot move forward
      }
    }
  }
  