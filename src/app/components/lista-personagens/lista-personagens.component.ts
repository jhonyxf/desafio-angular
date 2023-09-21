import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/shared/services/personagens.service';
import { Personagem } from 'src/app/shared/models/personagem';

@Component({
  selector: 'app-lista-personagens',
  templateUrl: './lista-personagens.component.html',
  styleUrls: ['./lista-personagens.component.scss'],
})
export class ListaPersonagensComponent implements OnInit {
  personagens: Personagem[] = [];

  constructor(private personagensService: PersonagensService) {}

  ngOnInit(): void {
    this.carregarPersonagens();
  }

  carregarPersonagens(): void {
    this.personagensService.getPersonagens().subscribe({
      next: (data: any) => {
        if (data && data.results) {
          this.personagens = data.results;
        } else {
          console.error('Dados vazio');
        }
      },
      error: () => {
        console.error('Erro ao trazer os dados');
      },
    });
  }

  atualizarLista(resultadosPesquisa: Personagem[]): void {
    this.personagens = resultadosPesquisa;
  }
}
