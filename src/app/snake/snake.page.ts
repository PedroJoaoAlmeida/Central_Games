import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.page.html',
  styleUrls: ['./snake.page.scss'],
})
export class SnakePage implements OnInit {
  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  private box: number = 16;
  private snake: { x: number; y: number }[] = [];
  private direction: string = '';
  private food!: { x: number; y: number };
  private gameInterval: any;
  public gameMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.initializeGame();
  }

  initializeGame() {
    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    this.context = this.canvas.getContext('2d')!;
    this.canvas.width = 320;
    this.canvas.height = 320;

    this.snake = [{ x: 10 * this.box, y: 10 * this.box }];
    this.direction = '';
    this.food = this.generateFood();

    document.addEventListener('keydown', (event) => this.changeDirection(event));
    this.startGame();
  }

  generateFood() {
    return {
      x: Math.floor(Math.random() * (this.canvas.width / this.box)) * this.box,
      y: Math.floor(Math.random() * (this.canvas.height / this.box)) * this.box,
    };
  }

  changeDirection(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft' && this.direction !== 'RIGHT') this.direction = 'LEFT';
    if (event.key === 'ArrowUp' && this.direction !== 'DOWN') this.direction = 'UP';
    if (event.key === 'ArrowRight' && this.direction !== 'LEFT') this.direction = 'RIGHT';
    if (event.key === 'ArrowDown' && this.direction !== 'UP') this.direction = 'DOWN';
  }

  drawGame() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Desenha a cobra
    for (let i = 0; i < this.snake.length; i++) {
      this.context.fillStyle = i === 0 ? 'lime' : 'white';
      this.context.fillRect(this.snake[i].x, this.snake[i].y, this.box, this.box);
    }

    // Desenha a comida
    this.context.fillStyle = 'red';
    this.context.fillRect(this.food.x, this.food.y, this.box, this.box);

    // Movimenta a cobra
    let snakeX = this.snake[0].x;
    let snakeY = this.snake[0].y;

    if (this.direction === 'LEFT') snakeX -= this.box;
    if (this.direction === 'UP') snakeY -= this.box;
    if (this.direction === 'RIGHT') snakeX += this.box;
    if (this.direction === 'DOWN') snakeY += this.box;

    // Verifica se a cobra comeu a comida
    if (snakeX === this.food.x && snakeY === this.food.y) {
      this.food = this.generateFood();
    } else {
      this.snake.pop();
    }

    const newHead = { x: snakeX, y: snakeY };

    // Verifica colisões
    if (
      snakeX < 0 ||
      snakeY < 0 ||
      snakeX >= this.canvas.width ||
      snakeY >= this.canvas.height ||
      this.collision(newHead, this.snake)
    ) {
      clearInterval(this.gameInterval);
      this.gameMessage = 'Game Over!';
      return;
    }

    this.snake.unshift(newHead);
  }

  collision(head: { x: number; y: number }, snake: { x: number; y: number }[]) {
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) return true;
    }
    return false;
  }

  startGame() {
    this.gameMessage = '';
    this.gameInterval = setInterval(() => this.drawGame(), 100);
  }

  resetGame() {
    clearInterval(this.gameInterval);
    this.initializeGame();
  }

  goToHome() {
    this.router.navigate(['/pagina-inicial']); // Navega para a página inicial
  }
}
