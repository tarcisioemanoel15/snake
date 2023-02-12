let x, y, snakePosition, direction, newSnake;

snakePosition = [
  { x: 20, y: 20 },
  { x: 40, y: 20 }
];

x = 20;
y = 20;
direction = 'right';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

class Snake {
  constructor(snakePosition, x, y, direction) {
    this.snakePosition = snakePosition;
    this.x = x;
    this.y = y;
    this.direction = direction;

  }


  draw() {
    snakePosition.map((pos) => {
      ctx.fillRect(pos.x, pos.y, x, y)
    })
  }

  walk() {

    // snakePosition.shift();

    let newDirection = {
      x: 0,
      y: 0

    }

    if (direction === 'right') {
      newDirection.x = -20;
      newDirection.y = 0;
    } else if (direction === 'left') {
      newDirection.x = -20;
      newDirection.y = 0;
    } else if (direction === 'up') {
      newDirection.x = 0;
      newDirection.y = -20;
    } else if (direction === 'down') {
      newDirection.x = 0;
      newDirection.y = 20;
    }

    let newPos = {
      x: snakePosition[snakePosition.length - 1].x + newDirection.x,
      y: snakePosition[snakePosition.length - 1].y + newDirection.y,

    }

    snakePosition.shift();
    snakePosition.push(newPos);

  }

  init() {
    this.draw();
    this.walk();
  }

}

newSnake = new Snake(snakePosition, x, y, direction);


function init() {
  newSnake.init();
}

setInterval(() => {
  ctx.clearRect(x, y, 400, 400)
  init()
}, 3000)
init()