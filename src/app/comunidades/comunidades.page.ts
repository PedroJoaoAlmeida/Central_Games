import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comunidades',
  templateUrl: './comunidades.page.html',
  styleUrls: ['./comunidades.page.scss'],
})
export class ComunidadesPage implements OnInit {

  // Declarando a propriedade comunidades
  comunidades: any[] = [];

  constructor() {}

  ngOnInit() {
    this.carregarComunidades(); // Carregar as comunidades ao iniciar a página
  }

  carregarComunidades() {
    const comunidades = JSON.parse(localStorage.getItem('comunidades')) || [];
    this.comunidades = comunidades; // Atualizar o array com os dados do localStorage
  }

  criarNovaComunidade(nome: string, descricao: string) {
    if (nome && descricao) {
      const comunidades = JSON.parse(localStorage.getItem('comunidades')) || [];
      comunidades.push({ nome, descricao });
      localStorage.setItem('comunidades', JSON.stringify(comunidades));
      this.carregarComunidades(); // Recarregar a lista de comunidades
      alert('Comunidade criada com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  }
}
