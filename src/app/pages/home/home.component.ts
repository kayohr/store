import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  numCardsToShow = 4;
  cardsIncrement = 4;
  maxCardsToShow = 8;
  visibleGames: any[] = [];
  // Lista de jogos
  games = [
    {
      cover: 'assets/bt-1.jpg',
      label: 'DIGITAL',
      type: 'DIGITAL | PS4',
      price: 'R$ 129,99'
    },
    {
      cover: 'assets/bt-4.jpg',
      label: 'EXCLUSIVE',
      type: 'DISC | PS5',
      price: 'R$ 269,99'
    },
    {
      cover: 'assets/ac-cover.jpg',
      label: 'BEST OF YEAR',
      type: 'DIGITAL | PS5',
      price: 'R$ 369,99'
    },
    {
      cover: 'assets/bt-hardline.jpg',
      label: 'NEW',
      type: 'DIGITAL | PS3 PS4 PS5',
      price: 'R$ 369,99'
    },
    {
      cover: 'assets/homem-aranha.avif',
      label: 'DIGITAL',
      type: 'DIGITAL | PS5',
      price: 'R$ 399,50'
    },
    {
      cover: 'assets/bt-5.jpg',
      label: 'NEW',
      type: 'DIGITAL | PS3 PS4 PS5',
      price: 'R$ 369,99'
    },
    {
      cover: 'assets/mortal-combat.avif',
      label: 'EXCLUSIVE',
      type: 'EXCLUSIVE | PS3 PS4 PS5',
      price: 'R$ 299,90'
    },
    {
      cover: 'assets/fifa.avif',
      label: 'NEW',
      type: 'DIGITAL | PS4 PS5',
      price: 'R$ 528,90'
    }
    // Você pode adicionar mais jogos aqui, se necessário
  ];
  

  constructor() { }

  ngOnInit(): void {
    this.updateVisibleGames();
  }

  showMoreCards() {
    if (this.numCardsToShow + this.cardsIncrement <= this.maxCardsToShow) {
      this.numCardsToShow += this.cardsIncrement;
      this.updateVisibleGames();
    }
  }

  showLessCards() {
    if (this.numCardsToShow > this.cardsIncrement) {
      this.numCardsToShow -= this.cardsIncrement;
      this.updateVisibleGames();
    }
  }

  private updateVisibleGames() {
    // Atualize visibleGames com os jogos que você deseja mostrar.
    this.visibleGames = this.games.slice(0, this.numCardsToShow);
  }
}