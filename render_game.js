function draw(){
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
textAlign(CENTER);

//draw a black line in the center to separate boards by player
stroke(0);
strokeWeight(2);
line(width / 2, 0, width / 2, 20);
align(center);

}