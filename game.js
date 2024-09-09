function setup() {
    createCanvas (600,200); // Adjust the size as needed
//Generate random colors for Player 1
for (let i=0; i < 15; i++){
    player1Colors.push(randomColor());
}
// Generate random colors for Player 2
for (let i = 0; i < 15; i++) {
    player2Colors.push(randomColor());
}
}

function randomColor() {
    let colors = ['red', 'yellow', 'blue'];
    return random(colors);
}