import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-memoria',
  templateUrl: './jogo-memoria.page.html',
  styleUrls: ['./jogo-memoria.page.scss'],
})
export class JogoMemoriaPage implements OnInit {
  timeRemaining = 60;
  message = '';
  interval: any;
  pairsFound = 0;
  totalPairs = 10;
  shuffledCards: any[] = [];
  cardsArray = [
    { name: 'image1', img: '../../assets/avestruz.png' },
    { name: 'image1', img: '../../assets/avestruz.png' },
    { name: 'image2', img: '../../assets/blowfish.png' },
    { name: 'image2', img: '../../assets/blowfish.png' },
    { name: 'image3', img: '../../assets/borboleta.png' },
    { name: 'image3', img: '../../assets/borboleta.png' },
    { name: 'image4', img: '../../assets/coelho.png' },
    { name: 'image4', img: '../../assets/coelho.png' },
    { name: 'image5', img: '../../assets/golfinho.png' },
    { name: 'image5', img: '../../assets/golfinho.png' },
    { name: 'image6', img: '../../assets/hammerhead.png' },
    { name: 'image6', img: '../../assets/hammerhead.png' },
    { name: 'image7', img: '../../assets/mouse.png' },
    { name: 'image7', img: '../../assets/mouse.png' },
    { name: 'image8', img: '../../assets/ninfa.png' },
    { name: 'image8', img: '../../assets/ninfa.png' },
    { name: 'image9', img: '../../assets/panda.png' },
    { name: 'image9', img: '../../assets/panda.png' },
    { name: 'image10', img: '../../assets/pinguim.png' },
    { name: 'image10', img: '../../assets/pinguim.png' },
  ];
  firstCard: any;
  secondCard: any;
  lockBoard = false;

  constructor() { }

  ngOnInit() {
    this.resetGame();
  }

  shuffle(array: any[]) {
    return array.sort(() => 0.5 - Math.random());
  }

  createBoard() {
    this.shuffledCards = this.shuffle(this.cardsArray).map((card) => ({
      ...card,
      flipped: false,
    }));
  }

  flipCard(card: any) {
    if (this.lockBoard || card === this.firstCard || card.flipped) return;

    card.flipped = true;

    if (!this.firstCard) {
      this.firstCard = card;
      return;
    }

    this.secondCard = card;

    if (this.firstCard.name === this.secondCard.name) {
      this.pairsFound++;
      this.firstCard = null;
      this.secondCard = null;
      this.checkWinCondition();
    } else {
      this.lockBoard = true;
      setTimeout(() => {
        this.firstCard.flipped = false;
        this.secondCard.flipped = false;
        this.firstCard = null;
        this.secondCard = null;
        this.lockBoard = false;
      }, 1000);
    }
  }

  checkWinCondition() {
    if (this.pairsFound === this.totalPairs) {
      clearInterval(this.interval);
      this.message = 'Parabéns! Você encontrou todos os pares!';
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        clearInterval(this.interval);
        this.message = 'Tempo acabou!';
        this.lockBoard = true;
      }
    }, 1000);
  }

  resetGame() {
    this.timeRemaining = 60;
    this.pairsFound = 0;
    this.message = '';
    this.createBoard();
    clearInterval(this.interval);
    this.startTimer();
  }
}
