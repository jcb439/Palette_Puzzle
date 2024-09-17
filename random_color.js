function randomColor(level) {
    if (level === 1) {
      let colors = ['red', 'yellow', 'blue'];  // Level 1 colors
      return random(colors);
    } else if (level === 2) {
      let colors = ['red', 'yellow', 'blue', 'green', 'purple', 'orange'];  // Level 2 colors
      return random(colors);
    }
  }
  