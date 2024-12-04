import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simon-says',
  templateUrl: './simon-says.page.html',
  styleUrls: ['./simon-says.page.scss'],
})
export class SimonSaysPage {
  colors = ['green', 'red', 'yellow', 'blue'];
  sequence: string[] = [];
  userSequence: string[] = [];
  level = 0;
  score = 0;
  highScore = 0;
  statusMessage = 'Clique em "Iniciar Jogo" para começar!';

  constructor(private router: Router) {}

  startGame() {
    this.level = 0;
    this.score = 0;
    this.sequence = [];
    this.statusMessage = 'Jogo iniciado! Preste atenção na sequência.';
    this.nextLevel();
  }

  nextLevel() {
    this.userSequence = [];
    this.level++;
    this.statusMessage = `Nível ${this.level}`;
    this.score++;
    this.updateHighScore();

    const nextColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.sequence.push(nextColor);
    this.playSequence();
  }

  playSequence() {
    let index = 0;
    const interval = setInterval(() => {
      if (index >= this.sequence.length) {
        clearInterval(interval);
        return;
      }
      const color = this.sequence[index];
      this.highlightColor(color);
      index++;
    }, 1000);
  }

  highlightColor(color: string) {
    const colorDiv = document.getElementById(color);
    if (colorDiv) {
      colorDiv.classList.add('active');
      setTimeout(() => {
        colorDiv.classList.remove('active');
      }, 500);
    }
  }

  onColorClick(color: string) {
    this.userSequence.push(color);
    this.highlightColor(color); // Realça a cor clicada
    this.checkUserSequence();
  }

  checkUserSequence() {
    const index = this.userSequence.length - 1;
    if (this.userSequence[index] !== this.sequence[index]) {
      this.statusMessage = 'Você perdeu! Tente novamente.';
      return;
    }

    if (this.userSequence.length === this.sequence.length) {
      setTimeout(() => this.nextLevel(), 1000);
    }
  }

  updateHighScore() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
  }

  goToMenu() {
    this.router.navigate(['/pagina-inicial']); // Substitua com a rota correta para o menu
  }
}
