class Jogador {
  constructor(ctx, teclado) {
    this.ctx = ctx;
    this.teclado = teclado;
    this.x;
    this.y;
    this.vel = 3;
    this.nave = new Image();
    this.nave.src = './setas.png';
    this.nave.addEventListener('load', () => {
      this.desenhar();
    })
  }
  gerenciar() {
    if (this.teclado.esquerda) {
      this.x -= this.vel
    }
    if (this.teclado.direita) {
      this.x += this.vel
    }
    if (this.teclado.cima) {
      this.y -= this.vel
    }
    if (this.teclado.baixo) {
      this.y += this.vel
    }
  }
  desenhar() {
    this.gerenciar();
    this.ctx.drawImage(this.nave, this.x, this.y)
  }
}
console.log('OK')