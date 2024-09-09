function draw(){
    background (220); //Light gray background

    //Draw Player 1's pixels
    for (let i=0; i<15; i++) {
        fill(player1Colors[i]);
        if (i == player1Position) {
            stroke(0);
            strokeWeight(2);
        } else{
            noStroke();
        }
    rect(i * 20, 50, 20, 20);
}

// Draw Player 2's pixels
for (let i=15; i < 30; i++) {
    fill(player2Colors[i - 15]);
    if (i == player2Position) {
        stroke(0);
        strokeWeight(2);
    } else {
        noStroke();
    }
    rect(i * 20, 50, 20, 20);
}

//Display Instructions
fill (0);
noStroke();
textSize(14);
textAlign(CENTER);
text("Player 1: A (Red), S (Yellow), D(Blue)", width / 2, height -40);
text("Player 2: J (Red), L (Yellow) L (Blue)", width / 2, height -20);