import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo-velha',
  templateUrl: './jogo-velha.page.html',
  styleUrls: ['./jogo-velha.page.scss'],
})
export class JogoVelhaPage implements OnInit {
  board: string[] = Array(9).fill('');
  currentPlayer: string = 'X';
  winner: string | null = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.resetGame();
  }

  makeMove(index: number) {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return true;
      }
    }
    return false;
  }

  resetGame() {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
  }

  VoltarMenu() {
    this.router.navigate(['/pagina-inicial']); // Redireciona para a página de login
  }
}

