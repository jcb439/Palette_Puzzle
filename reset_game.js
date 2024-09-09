function resetPlayer1() {
    player1Position = 0;
    player1Colors = [];
    for (let i = 0; i < 15; i++) {
      player1Colors.push(randomColor());
    }
  }
  
  function resetPlayer2() {
    player2Position = 29;
    player2Colors = [];
    for (let i = 0; i < 15; i++) {
      player2Colors.push(randomColor());
    }
  }