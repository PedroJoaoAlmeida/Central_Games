import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.page.html',
  styleUrls: ['./pagina-inicial.page.scss'],
})
export class PaginaInicialPage {
  isSidebarOpen = false;
  userName: string;
  userEmail: string;
  profileImage: string | null;
  
  // Controle do índice da descrição visível
  visibleDescriptionIndex: number | null = null;

  popularGames = [
    { name: 'Jogo da Velha', image: '../assets/jogo-da-velha.png', link: '/jogo-velha' },
    { name: 'Jogo Memória', image: '../assets/jogo_da_memoria_logo.jpg', link: '/jogo-memoria' },
    { name: 'Simon Says', image: '../assets/simon_says._logo.jpg', link: '/simon-says' },
    { name: 'Snake', image: '../assets/jogo_da_cobrinha_logo.jpg', link: '/snake' },
  ];

  otherGames = [
    { name: 'Jogo da Velha', link: '/jogo-velha', description: 'O Jogo da Velha é um quebra-cabeça para dois jogadores que se revezam marcando espaços em uma grade.' },
    { name: 'Jogo da Memória', link: '/jogo-memoria', description: 'O objetivo do jogo é fazer com que todas as peças fiquem com a face virada para cima (isto é, encontrar todos os pares) no menor número de tentativas.' },
    { name: 'Simon Says', link: '/simon-says', description: 'Simon Says é um tipo de jogo de memória onde o jogador deve repetir uma sequência de cores que cresce a cada rodada.' },
    { name: 'Snake', link: '/snake', description: 'O objetivo do jogo é mover a cobra em direção à sua comida, começando com uma cobra pequena e aumentando de tamanho conforme come.' },
  ];

  constructor(private router: Router) {
    this.userName = localStorage.getItem('userName') || 'Nome do Usuário';
    this.userEmail = localStorage.getItem('userEmail') || 'email@exemplo.com';
    this.profileImage = localStorage.getItem('profileImage'); // Obtém a imagem de perfil do localStorage
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Função para alternar a visibilidade da descrição
  toggleDescription(index: number) {
    if (this.visibleDescriptionIndex === index) {
      this.visibleDescriptionIndex = null; // Se já estiver visível, esconde
    } else {
      this.visibleDescriptionIndex = index; // Caso contrário, mostra a descrição do jogo correspondente
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const target = e.target as FileReader;
        if (target && target.result) {
          const profileImage = document.getElementById('profileImage') as HTMLImageElement;
          profileImage.src = target.result as string;
          localStorage.setItem('profileImage', target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  }
  
  logout() {
    // Limpar o localStorage ao fazer logout
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('profileImage');
    
    this.router.navigate(['/login']);
  }
  

  triggerFileInput() {
    const fileInput = document.getElementById('perfil') as HTMLInputElement;
    if (fileInput) {
      fileInput.click(); // Dispara o clique no input de arquivo
    }
  }
}
