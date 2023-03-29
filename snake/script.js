let x, y, w, h, snakePosition, direction, newSnake, newComida, foodX, foodY;

snakePosition = [
  { x: 20, y: 20 },
  { x: 40, y: 20 }
];

foodX = Math.floor(Math.random() * 20) * 20;
foodY = Math.floor(Math.random() * 20) * 20;
w = 400;
h = 400;
x = 20;
y = 20;
direction = 'RIGHT';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

class Snake {
  constructor(snakePosition, x, y, direction, w, h, foodX, foodY) {
    this.snakePosition = snakePosition;
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.w = w;
    this.h = h;
    this.foodX = foodX;
    this.foodY = foodY;
  }

  draw() {
    snakePosition.map((pos) => {
      ctx.fillStyle = "black";
      ctx.fillRect(pos.x, pos.y, x, y);
    })
  }

  walk() {
    let newDirection = {
      x: 0,
      y: 0
    }

    if (direction === 'RIGHT') {
      newDirection.x = 20;
      newDirection.y = 0;
    } else if (direction === 'LEFT') {
      newDirection.x = -20;
      newDirection.y = 0;
    } else if (direction === 'UP') {
      newDirection.x = 0;
      newDirection.y = -20;
    } else if (direction === 'DOWN') {
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

  checkHit() {
    snakePosition.map((pos) => {
      if (pos.x > w || pos.x < 0 || pos.y > h || pos.y < 0) {
        console.log('hit')
      }
    })
  }

  init() {
    this.draw();
    this.walk();
    this.checkHit();
  }
}

class Comida {
  constructor(foodX, foodY) {
    this.foodX = foodX;
    this.foodY = foodY;
  }
  draw() {
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(foodX, foodY, 20, 20);
  }
}

document.addEventListener('keydown', (e) => {
  const keyName = e.key;
  if (keyName === 'ArrowDown' && direction !== 'UP') {
    direction = 'DOWN';
  }
  if (keyName === 'ArrowUp' && direction !== 'DOWN') {
    direction = 'UP';
  }
  if (keyName === 'ArrowLeft' && direction !== 'RIGHT') {
    direction = 'LEFT';
  }
  if (keyName === 'ArrowRight' && direction !== 'LEFT') {
    direction = 'RIGHT';
  }
})
newSnake = new Snake(snakePosition, x, y, direction, w, h, foodX, foodY);
newComida = new Comida();
function init() {
  newSnake.init();
  newSnake.checkHit();
  newComida.draw();
}
setInterval(() => {
  ctx.clearRect(0, 0, 400, 400)
  init()
}, 300)
init();